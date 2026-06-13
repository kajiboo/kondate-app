from urllib.request import Request, urlopen
from urllib.parse import unquote
from concurrent.futures import ThreadPoolExecutor, as_completed
import csv
import gzip
import html
import json
import os
import re
import sys
import time
import unicodedata

sys.stdout.reconfigure(encoding="utf-8")

BASE = os.getcwd()
OUT_CSV = os.path.join(BASE, "recipe_dish_names_2000.csv")
OUT_JSONL = os.path.join(BASE, "recipe_dish_names_2000.jsonl")
OUT_SUMMARY = os.path.join(BASE, "recipe_dish_names_summary.md")
UA = "Mozilla/5.0 recipe-name-research/1.0 (+collecting recipe names only)"

COMMON_VARIANTS = {
    "唐揚げ": "からあげ",
    "唐揚": "からあげ",
    "から揚げ": "からあげ",
    "から揚": "からあげ",
    "竜田揚げ": "たつたあげ",
    "龍田揚げ": "たつたあげ",
    "餃子": "ぎょうざ",
    "ギョーザ": "ぎょうざ",
    "ギョウザ": "ぎょうざ",
    "炒飯": "チャーハン",
    "焼飯": "チャーハン",
    "焼き飯": "チャーハン",
    "冷奴": "冷や奴",
    "冷ややっこ": "冷や奴",
    "味噌汁": "みそ汁",
    "お味噌汁": "みそ汁",
    "肉ジャガ": "肉じゃが",
}

BOILERPLATE_PREFIX = re.compile(
    r"^(簡単|絶品|人気|定番|基本|本格|プロ直伝|時短|節約|作り置き|お弁当に|"
    r"子どもも大好き|ご飯がすすむ|レンジで|フライパンで|炊飯器で|材料\d+つで|\d+分で)"
    r"[!！☆★♪\s・:：-]*"
)


def fetch(url, timeout=30):
    req = Request(url, headers={"User-Agent": UA, "Accept-Language": "ja,en;q=0.8"})
    with urlopen(req, timeout=timeout) as response:
        data = response.read()
    if url.endswith(".gz"):
        data = gzip.decompress(data)
    return data.decode("utf-8", "ignore")


def clean_text(value):
    value = html.unescape(value or "")
    value = re.sub(r"<[^>]+>", " ", value)
    value = unicodedata.normalize("NFKC", value)
    return re.sub(r"\s+", " ", value).strip()


def dish_from_title(title):
    value = clean_text(title)
    value = re.sub(
        r"\s*(のレシピ動画・作り方|作り方・レシピ|のレシピ・作り方.*|"
        r"レシピ .*さん.*|レシピ$|\|.*$| - .*|｜.*)$",
        "",
        value,
    ).strip()
    value = re.sub(r"^[\d０-９]+\s*位\s*", "", value)
    parts = re.split(r"[!！♪♫]+\s*", value)
    if len(parts) > 1 and 2 <= len(parts[-1]) <= 32:
        value = parts[-1]
    value = BOILERPLATE_PREFIX.sub("", value).strip()
    if len(value) > 18:
        value = re.sub(r"^(?:\S+に|\S+で)\s*", "", value)
    value = re.sub(r"[「」\"“”]", "", value).strip(" ・:-_")
    return value[:80]


def norm_key(name):
    value = unicodedata.normalize("NFKC", name).lower()
    value = re.sub(r"[\s　・,、。.!！?？☆★♪♫\-~〜～:：/／()（）\[\]【】「」\"“”]", "", value)
    value = re.sub(
        r"^(簡単|絶品|人気|定番|基本|本格|時短|節約|作り置き|お弁当|おつまみ|ヘルシー|低糖質|ダイエット)",
        "",
        value,
    )
    for before, after in COMMON_VARIANTS.items():
        value = value.replace(before.lower(), after.lower())
    return value


def parse_sitemap_locs(url):
    return re.findall(r"<loc>(.*?)</loc>", fetch(url))


def jsonld_recipe_name(page):
    for match in re.finditer(
        r"<script[^>]+type=[\"']application/ld\+json[\"'][^>]*>(.*?)</script>",
        page,
        re.S | re.I,
    ):
        raw = clean_text(match.group(1))
        try:
            data = json.loads(raw)
        except Exception:
            continue
        stack = data if isinstance(data, list) else [data]
        while stack:
            item = stack.pop(0)
            if isinstance(item, list):
                stack.extend(item)
                continue
            if not isinstance(item, dict):
                continue
            item_type = item.get("@type")
            item_types = item_type if isinstance(item_type, list) else [item_type]
            if "Recipe" in item_types and item.get("name"):
                return clean_text(item.get("name"))
            for child in item.values():
                if isinstance(child, (list, dict)):
                    stack.append(child)
    title = re.search(r"<title[^>]*>(.*?)</title>", page, re.S | re.I)
    return clean_text(title.group(1)) if title else ""


def add_record(
    records,
    seen,
    name,
    source_site,
    source_url,
    source_type,
    rating="",
    review_count="",
    recipe_count="",
    quality_filter="",
    note="",
):
    name = dish_from_title(name)
    if not name or len(name) < 2:
        return False
    if re.search(r"(レシピ|カテゴリ|一覧|TOP|トップ|料理講師|人気メニュー)$", name) and len(name) < 8:
        return False
    key = norm_key(name)
    if not key or key in seen:
        return False
    seen.add(key)
    records.append(
        {
            "dish_name": name,
            "normalized_name": key,
            "source_site": source_site,
            "source_url": source_url,
            "source_type": source_type,
            "rating": rating,
            "review_count": review_count,
            "recipe_count": recipe_count,
            "quality_filter": quality_filter,
            "note": note,
        }
    )
    return True


def collect_rakuten_categories(records, seen):
    page = fetch("https://recipe.rakuten.co.jp/category/")
    links = re.findall(r'href="(/category/[^"]+)"[^>]*>(.*?)</a>', page, re.S)
    count = 0
    for href, label in links:
        label = clean_text(label)
        match = re.match(r"(.+?)\((\d+)品\)$", label)
        recipe_count = match.group(2) if match else ""
        name = match.group(1) if match else label
        if name in {"人気メニュー"}:
            continue
        if recipe_count and int(recipe_count) < 5:
            continue
        if add_record(
            records,
            seen,
            name,
            "楽天レシピ",
            "https://recipe.rakuten.co.jp" + href,
            "category_with_recipe_count",
            "",
            "",
            recipe_count,
            "カテゴリ掲載数5品以上",
            "カテゴリ掲載数5品以上",
        ):
            count += 1
    return count


def collect_rakuten_ranked(records, seen, max_categories=45):
    page = fetch("https://recipe.rakuten.co.jp/category/")
    category_links = []
    for href, label in re.findall(r'href="(/category/[0-9\-]+/)"[^>]*>(.*?)</a>', page, re.S):
        text = clean_text(label)
        match = re.search(r"\((\d+)品\)", text)
        if match and int(match.group(1)) >= 300:
            category_links.append("https://recipe.rakuten.co.jp" + href)
    count = 0
    for url in list(dict.fromkeys(category_links))[:max_categories]:
        try:
            page = fetch(url)
        except Exception:
            continue
        for block in re.findall(r'<li class="recipe_ranking__item">(.*?)</li>', page, re.S):
            title = re.search(r'class="recipe_ranking__recipe_title[^>]*>(.*?)</span>', block, re.S)
            href = re.search(r'href="(/recipe/\d+/)"', block)
            made = re.search(r'class="recipe_ranking__made_count">\s*(\d+)\s*</span>', block)
            if not title or not href:
                continue
            made_count = int(made.group(1)) if made else 0
            if made_count < 10:
                continue
            if add_record(
                records,
                seen,
                title.group(1),
                "楽天レシピ",
                "https://recipe.rakuten.co.jp" + href.group(1),
                "ranked_recipe",
                "",
                str(made_count),
                "",
                "つくったよ10件以上",
                "つくったよ10件以上",
            ):
                count += 1
        time.sleep(0.15)
    return count


def collect_from_pages(records, seen, site, sitemap_urls, url_filter, limit, note):
    locs = []
    for sitemap in sitemap_urls:
        try:
            locs.extend([url for url in parse_sitemap_locs(sitemap) if url_filter(url)])
        except Exception as exc:
            print("sitemap error", site, sitemap, exc)
    locs = list(dict.fromkeys(locs))
    step = max(1, len(locs) // max(1, limit * 3))
    candidates = locs[::step][: limit * 3]
    count = 0

    def one(url):
        try:
            return url, jsonld_recipe_name(fetch(url, timeout=20))
        except Exception:
            return url, ""

    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(one, url) for url in candidates]
        for future in as_completed(futures):
            url, name = future.result()
            if name and add_record(records, seen, name, site, url, "recipe_page", "", "", "", "", note):
                count += 1
                if count >= limit:
                    break
    return count, len(locs)


def collect_kyounoryouri_from_sitemap(records, seen, limit=500):
    locs = [
        url
        for url in parse_sitemap_locs("https://www.kyounoryouri.jp/sitemaps/recipe.xml")
        if "/recipe/" in url and url.endswith(".html")
    ]
    count = 0
    for url in locs:
        slug = unquote(url.rsplit("/", 1)[-1])
        name = re.sub(r"^\d+_", "", slug).removesuffix(".html")
        if add_record(records, seen, name, "みんなのきょうの料理", url, "recipe_sitemap_slug", "", "", "", "", "サイトマップURLの料理名"):
            count += 1
            if count >= limit:
                break
    return count, len(locs)


def main():
    records = []
    seen = set()
    source_counts = {}
    source_counts["楽天レシピカテゴリ"] = collect_rakuten_categories(records, seen)
    source_counts["楽天レシピ人気順"] = collect_rakuten_ranked(records, seen)
    source_counts["みんなのきょうの料理"] = collect_kyounoryouri_from_sitemap(records, seen, 390)[0]
    source_counts["DELISH KITCHEN"] = collect_from_pages(
        records,
        seen,
        "DELISH KITCHEN",
        [
            "https://misc.delishkitchen.tv/sitemaps/sitemap1.xml.gz",
            "https://misc.delishkitchen.tv/sitemaps/sitemap2.xml.gz",
        ],
        lambda url: "/recipes/" in url,
        320,
        "構造化データRecipe.name",
    )[0]
    source_counts["クラシル"] = collect_from_pages(
        records,
        seen,
        "クラシル",
        [f"https://www.kurashiru.com/sitemap{i}.xml" for i in range(1, 7)],
        lambda url: "/recipes/" in url,
        320,
        "構造化データRecipe.name",
    )[0]
    source_counts["レタスクラブ"] = collect_from_pages(
        records,
        seen,
        "レタスクラブ",
        ["https://www.lettuceclub.net/sitemap_recipe.xml"],
        lambda url: "/recipe/dish/" in url,
        320,
        "構造化データRecipe.name",
    )[0]

    quotas = {
        "楽天レシピ": 650,
        "みんなのきょうの料理": 390,
        "DELISH KITCHEN": 320,
        "クラシル": 320,
        "レタスクラブ": 320,
    }
    selected = []
    selected_ids = set()
    for site, quota in quotas.items():
        for index, record in enumerate(records):
            if record["source_site"] == site and index not in selected_ids:
                selected.append(record)
                selected_ids.add(index)
                if sum(1 for item in selected if item["source_site"] == site) >= quota:
                    break
    if len(selected) < 2000:
        for index, record in enumerate(records):
            if index not in selected_ids:
                selected.append(record)
                if len(selected) >= 2000:
                    break
    records = selected[:2000]
    fields = [
        "dish_name",
        "normalized_name",
        "source_site",
        "source_url",
        "source_type",
        "rating",
        "review_count",
        "recipe_count",
        "quality_filter",
        "note",
    ]
    with open(OUT_CSV, "w", encoding="utf-8-sig", newline="") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fields)
        writer.writeheader()
        writer.writerows(records)
    with open(OUT_JSONL, "w", encoding="utf-8", newline="") as jsonl_file:
        for record in records:
            jsonl_file.write(json.dumps(record, ensure_ascii=False) + "\n")

    by_site = {}
    for record in records:
        by_site[record["source_site"]] = by_site.get(record["source_site"], 0) + 1
    summary = [
        "# レシピが存在する料理名リスト 収集メモ",
        "",
        "- 作成日: 2026-06-13",
        f"- 件数: {len(records)}件",
        "- 主ファイル: recipe_dish_names_2000.csv",
        "- 補助ファイル: recipe_dish_names_2000.jsonl",
        "- 収集対象: レシピ本文ではなく料理名、出典URL、評価/実績相当の件数が取れる場合の件数",
        "- 品質条件: 楽天レシピの人気順レシピは「つくったよ」10件以上、カテゴリは掲載レシピ5品以上。評価情報が前面にないサイトは公式サイトマップ/構造化データに存在するレシピページのみ採用。",
        "- 重複処理: NFKC正規化、記号/空白除去、明らかな表記ゆれ（唐揚げ/からあげ等）を同一キーとして除外。",
        "",
        "## サイト別件数",
    ]
    for site, count in sorted(by_site.items()):
        summary.append(f"- {site}: {count}件")
    summary += ["", "## 収集時の候補取得数", json.dumps(source_counts, ensure_ascii=False, indent=2)]
    with open(OUT_SUMMARY, "w", encoding="utf-8-sig", newline="") as summary_file:
        summary_file.write("\n".join(summary) + "\n")

    print("records", len(records))
    print("by_site", by_site)
    print("files")
    print(OUT_CSV)
    print(OUT_JSONL)
    print(OUT_SUMMARY)
    print("first5")
    for record in records[:5]:
        print(record)


if __name__ == "__main__":
    main()
