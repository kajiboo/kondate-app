const sidePool = {
  japanese: [["きゅうりの浅漬け", "豆腐とわかめの味噌汁"], ["ひじき煮", "小松菜のおひたし"], ["大根サラダ", "きのこの味噌汁"]],
  western: [["グリーンサラダ", "コンソメスープ"], ["温野菜", "ロールパン"], ["コールスロー", "ポテトスープ"]],
  chinese: [["もやしナムル", "中華スープ"], ["春雨サラダ", "卵スープ"], ["きゅうりの中華和え", "わかめスープ"]],
  other: [["冷ややっこ", "わかめスープ"], ["キャベツサラダ", "ヨーグルト"], ["ナムル", "スープ"]],
};

const genreLabels = { japanese: "和風", western: "洋風", chinese: "中華", other: "アレンジ" };

const dishKeywordProfiles = [
  { words: ["鶏", "チキン", "ささみ", "唐揚げ"], type: "meat", ingredient: "鶏肉", calories: 650, cost: 420, bento: true },
  { words: ["豚", "ポーク", "とんかつ", "しょうが焼き"], type: "meat", ingredient: "豚肉", calories: 720, cost: 470, bento: true },
  { words: ["牛", "ビーフ", "ステーキ", "牛丼"], type: "meat", ingredient: "牛肉", calories: 760, cost: 620, bento: true },
  { words: ["ひき肉", "ミンチ", "ハンバーグ", "つくね", "餃子"], type: "meat", ingredient: "ひき肉", calories: 700, cost: 460, bento: true },
  { words: ["鮭", "サーモン"], type: "fish", ingredient: "鮭", calories: 610, cost: 560, bento: true },
  { words: ["さば", "鯖"], type: "fish", ingredient: "さば", calories: 650, cost: 480, bento: true },
  { words: ["ぶり", "鰤"], type: "fish", ingredient: "ぶり", calories: 680, cost: 620, bento: true },
  { words: ["たら", "白身魚", "魚"], type: "fish", ingredient: "魚", calories: 560, cost: 520, bento: false },
  { words: ["豆腐", "厚揚げ", "油揚げ"], type: "other", ingredient: "豆腐", calories: 520, cost: 330, bento: false },
  { words: ["卵", "オムレツ", "オムライス", "親子丼"], type: "other", ingredient: "卵", calories: 620, cost: 330, bento: true },
  { words: ["カレー"], type: "other", ingredient: "カレールウ", calories: 760, cost: 440, bento: false },
  { words: ["パスタ", "スパゲッティ"], type: "other", ingredient: "パスタ", calories: 720, cost: 390, bento: false },
  { words: ["うどん", "そば", "ラーメン", "麺"], type: "other", ingredient: "麺", calories: 650, cost: 360, bento: false },
];

const dishVegetableKeywords = [
  ["キャベツ", "キャベツ"],
  ["白菜", "白菜"],
  ["なす", "なす"],
  ["茄子", "なす"],
  ["ピーマン", "ピーマン"],
  ["トマト", "トマト"],
  ["ほうれん草", "ほうれん草"],
  ["小松菜", "小松菜"],
  ["じゃがいも", "じゃがいも"],
  ["じゃが芋", "じゃがいも"],
  ["大根", "大根"],
  ["きのこ", "きのこ"],
  ["しめじ", "しめじ"],
  ["もやし", "もやし"],
  ["玉ねぎ", "玉ねぎ"],
  ["玉葱", "玉ねぎ"],
  ["にんじん", "にんじん"],
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function csvRowsToObjects(text) {
  const rows = parseCsv(text);
  const headers = rows.shift() || [];
  return rows.map((row) =>
    Object.fromEntries(headers.map((header, index) => [header.trim(), (row[index] || "").trim()]))
  );
}

function inferGenreFromTitle(title) {
  if (/中華|麻婆|餃子|チャーハン|炒飯|チンジャオ|回鍋|春巻|焼売|担々|酢豚/.test(title)) return "chinese";
  if (/パスタ|グラタン|シチュー|ピザ|オム|ハンバーグ|ステーキ|サラダ|ポトフ|ムニエル|ドリア/.test(title)) return "western";
  if (/カレー|ビビンバ|ナムル|タコス|ガパオ|キムチ|韓国|エスニック/.test(title)) return "other";
  return "japanese";
}

function inferEffortFromTitle(title) {
  if (/煮込み|ロースト|オーブン|手作り|コロッケ|春巻|揚げ|フライ|カツ/.test(title)) return "careful";
  if (/煮|蒸し|焼き|グラタン|シチュー|鍋/.test(title)) return "normal";
  return "quick";
}

function dishRoleFromTitle(title) {
  if (/ケーキ|プリン|ゼリー|アイス|クッキー|マフィン|パンケーキ|スイーツ|デザート|ヨーグルト|フルーツ|ジャム|タルト|ドーナツ|チョコ|ムース|シャーベット/.test(title)) {
    return "dessert";
  }
  if (/スープカレー/.test(title)) {
    return "main";
  }
  if (/サラダ|和え|ナムル|漬け|漬物|おひたし|きんぴら|酢の物|冷奴|冷ややっこ|煮浸し|マリネ|ピクルス|副菜|付け合わせ|スープ|味噌汁|みそ汁|汁|お吸い物/.test(title)) {
    return "side";
  }
  return "main";
}

function isBentoFriendlyTitle(title) {
  return !/汁|スープ|味噌汁|みそ汁|鍋|麺|ラーメン|うどん|そば|シチュー|カレー|パスタ|アイス|ゼリー|プリン|ヨーグルト|サラダ/.test(title);
}

function inferProfileFromTitle(title) {
  return dishKeywordProfiles.find((profile) => profile.words.some((word) => title.includes(word))) || {
    type: "other",
    ingredient: "主食材",
    calories: 600,
    cost: 380,
    bento: !/汁|スープ|鍋|麺|ラーメン|うどん|そば/.test(title),
  };
}

function ingredientsFromDishTitle(title, profile) {
  const ingredients = {
    meat: {},
    fish: {},
    vegetable: {},
    other: { 米: /丼|定食|焼肉|照り焼き|生姜焼き|麻婆|カレー/.test(title) ? 85 : 45 },
    seasoning: {},
  };
  ingredients[profile.type][profile.ingredient] = profile.type === "other" ? 1 : 150;
  dishVegetableKeywords.forEach(([keyword, ingredient]) => {
    if (title.includes(keyword)) ingredients.vegetable[ingredient] = 90;
  });
  if (!Object.keys(ingredients.vegetable).length) {
    ingredients.vegetable = { 玉ねぎ: 50, にんじん: 35, キャベツ: 60 };
  }
  if (/照り焼き|生姜焼き|和風|煮物|煮付け/.test(title)) ingredients.seasoning = { 醤油: 12, みりん: 10 };
  else if (/カレー/.test(title)) ingredients.seasoning = { カレールウ: 22 };
  else if (/中華|麻婆|餃子|チャーハン/.test(title)) ingredients.seasoning = { 醤油: 10, ごま油: 5 };
  else if (/トマト|パスタ|洋風/.test(title)) ingredients.seasoning = { コンソメ: 3, オリーブオイル: 5 };
  else ingredients.seasoning = { 塩: 1, 醤油: 6 };
  Object.keys(ingredients).forEach((key) => {
    if (!Object.keys(ingredients[key]).length) delete ingredients[key];
  });
  return ingredients;
}

function sidesForGenre(genre, index) {
  const sides = sidePool[genre] || sidePool.japanese;
  return sides[index % sides.length];
}

function buildCsvMeal(row, index) {
  const title = row.dish_name || row.normalized_name;
  const normalized = row.normalized_name || title;
  const profile = inferProfileFromTitle(title);
  const genre = inferGenreFromTitle(title);
  const effort = inferEffortFromTitle(title);
  const role = dishRoleFromTitle(title);
  const bento = role !== "dessert" && profile.bento && isBentoFriendlyTitle(title);
  return {
    title,
    normalizedName: normalized,
    genre,
    effort,
    bento,
    role,
    calories: profile.calories + (effort === "careful" ? 80 : 0),
    cost: profile.cost + (row.recipe_count ? Math.min(Number(row.recipe_count) || 0, 120) : 0),
    sides: sidesForGenre(genre, index),
    ingredients: ingredientsFromDishTitle(title, profile),
    sourceSite: row.source_site,
    sourceUrl: row.source_url,
    sourceType: row.source_type,
    generated: false,
    fromCsv: true,
    steps: [
      `${title}で検索できる定番レシピを確認する。`,
      "主食材と野菜を食べやすく切り、料理名に合う調理法で火を通す。",
      "味見して調味料を調整し、副菜と一緒に盛り付ける。",
    ],
  };
}

async function loadCsvMeals() {
  try {
    let rows = Array.isArray(window.RECIPE_DISH_ROWS) ? window.RECIPE_DISH_ROWS : [];
    if (!rows.length) {
      const response = await fetch("./recipe_dish_names_2000.csv", { cache: "no-store" });
      if (!response.ok) throw new Error("CSVを読み込めませんでした");
      const text = await response.text();
      rows = csvRowsToObjects(text);
    }
    csvMeals = rows
      .map(buildCsvMeal)
      .filter((meal) => meal.title);
    allMeals = csvMeals;
  } catch (error) {
    csvMeals = [];
    allMeals = [];
  }
}


let csvMeals = [];
let allMeals = [];

const state = {
  days: [],
  plan: [],
  logs: [],
  generationSeed: 0,
};

const categoryNames = {
  meat: "肉",
  fish: "魚",
  vegetable: "野菜",
  other: "その他",
  seasoning: "調味料",
};

const weekdayFormatter = new Intl.DateTimeFormat("ja-JP", { weekday: "short" });
const dateFormatter = new Intl.DateTimeFormat("ja-JP", { month: "numeric", day: "numeric" });

const elements = {
  startDate: document.querySelector("#startDate"),
  endDate: document.querySelector("#endDate"),
  adults: document.querySelector("#adults"),
  children: document.querySelector("#children"),
  avoidIngredients: document.querySelector("#avoidIngredients"),
  allergyIngredients: document.querySelector("#allergyIngredients"),
  childNgIngredients: document.querySelector("#childNgIngredients"),
  pantryItems: document.querySelector("#pantryItems"),
  preferBento: document.querySelector("#preferBento"),
  proteinRule: document.querySelector("#proteinRule"),
  buildDaysButton: document.querySelector("#buildDaysButton"),
  generateButton: document.querySelector("#generateButton"),
  logCurrentButton: document.querySelector("#logCurrentButton"),
  lockButton: document.querySelector("#lockButton"),
  daySettings: document.querySelector("#daySettings"),
  mealPlan: document.querySelector("#mealPlan"),
  recipeList: document.querySelector("#recipeList"),
  logList: document.querySelector("#logList"),
  totalDays: document.querySelector("#totalDays"),
  totalCalories: document.querySelector("#totalCalories"),
  totalCost: document.querySelector("#totalCost"),
  authGate: document.querySelector("#authGate"),
  authForm: document.querySelector("#authForm"),
  authTitle: document.querySelector("#authTitle"),
  authMessage: document.querySelector("#authMessage"),
  passcodeInput: document.querySelector("#passcodeInput"),
  authButton: document.querySelector("#authButton"),
};

function toDateInputValue(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function parseList(value) {
  return value
    .split(/[,、\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function allBlockedIngredients() {
  return [
    ...parseList(elements.avoidIngredients.value),
    ...parseList(elements.allergyIngredients.value),
    ...parseList(elements.childNgIngredients.value),
  ];
}

function mealContainsBlockedIngredient(meal, blockedWords) {
  const ingredientNames = Object.keys(flattenIngredients(meal.ingredients));
  const sideNames = meal.sides.join(" ");
  return blockedWords.some((word) => {
    if (!word) return false;
    return ingredientNames.some((item) => item.includes(word)) || meal.title.includes(word) || sideNames.includes(word);
  });
}

function mealProteinType(meal) {
  if (meal.ingredients.fish) return "fish";
  if (meal.ingredients.meat) return "meat";
  return "other";
}

function stringHash(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function portionFactor() {
  return Number(elements.adults.value || 0) + Number(elements.children.value || 0) * 0.62;
}

function defaultEffort() {
  return document.querySelector("input[name='defaultEffort']:checked")?.value || "quick";
}

function buildDays() {
  const start = new Date(elements.startDate.value);
  const end = new Date(elements.endDate.value);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || start > end) {
    state.days = [];
    render();
    return;
  }

  const days = [];
  for (let date = start; date <= end; date = addDays(date, 1)) {
    const key = toDateInputValue(date);
    const existing = state.days.find((day) => day.key === key);
    days.push({
      key,
      genre: existing?.genre || "any",
      effort: existing?.effort || defaultEffort(),
      bento: existing?.bento ?? elements.preferBento.checked,
      preferredTitle: existing?.preferredTitle || "",
    });
  }
  state.days = days;
  renderDaySettings();
  updateSummary();
}

function chooseMeal(day, index, plannedMeals = []) {
  if (!allMeals.length) return null;
  const blockedWords = allBlockedIngredients();
  const preferredMeal = allMeals.find((meal) => meal.title === day.preferredTitle);
  if (preferredMeal && preferredMeal.role === "main" && (!day.bento || preferredMeal.bento) && !mealContainsBlockedIngredient(preferredMeal, blockedWords)) {
    return preferredMeal;
  }

  const strictCandidates = allMeals.filter((meal) => {
    const matchesRole = meal.role === "main";
    const matchesGenre = day.genre === "any" || meal.genre === day.genre;
    const matchesEffort = meal.effort === day.effort || elements.proteinRule.value === "moreQuick";
    const matchesBento = !day.bento || meal.bento;
    return matchesRole && matchesGenre && matchesEffort && matchesBento && !mealContainsBlockedIngredient(meal, blockedWords);
  });

  const looseCandidates = allMeals.filter((meal) => {
    const matchesRole = meal.role === "main";
    const matchesGenre = day.genre === "any" || meal.genre === day.genre;
    const matchesBento = !day.bento || meal.bento;
    return matchesRole && matchesGenre && matchesBento && !mealContainsBlockedIngredient(meal, blockedWords);
  });

  let candidates = strictCandidates.length ? strictCandidates : looseCandidates.length ? looseCandidates : allMeals;
  candidates = rankCandidatesByRule(candidates);
  const recentTitles = plannedMeals.slice(Math.max(0, index - 2), index).map((entry) => entry.meal.title);
  const freshCandidates = candidates.filter((meal) => !recentTitles.includes(meal.title));
  const pool = freshCandidates.length ? freshCandidates : candidates;
  const seed = stringHash(`${day.key}-${day.genre}-${day.effort}-${elements.proteinRule.value}-${state.generationSeed}-${index}`);
  return pool[seed % pool.length] || null;
}

function chooseSupportMeals(day, mainMeal, index, plannedMeals = []) {
  const blockedWords = allBlockedIngredients();
  const usedTitles = new Set([
    mainMeal.title,
    ...plannedMeals.flatMap((entry) => entryItems(entry).map((meal) => meal.title)),
  ]);
  const sideCandidates = allMeals.filter((meal) => {
    const matchesRole = meal.role === "side";
    const matchesBento = !day.bento || meal.bento;
    return matchesRole && matchesBento && !usedTitles.has(meal.title) && !mealContainsBlockedIngredient(meal, blockedWords);
  });
  const dessertCandidates = allMeals.filter((meal) => {
    return meal.role === "dessert" && !day.bento && !usedTitles.has(meal.title) && !mealContainsBlockedIngredient(meal, blockedWords);
  });
  const sideSeed = stringHash(`${day.key}-side-${mainMeal.title}-${state.generationSeed}-${index}`);
  const dessertSeed = stringHash(`${day.key}-dessert-${mainMeal.title}-${state.generationSeed}-${index}`);
  const side = sideCandidates.length ? sideCandidates[sideSeed % sideCandidates.length] : null;
  const dessert = dessertCandidates.length && dessertSeed % 3 === 0 ? dessertCandidates[dessertSeed % dessertCandidates.length] : null;
  return {
    sides: side ? [side] : [],
    dessert,
  };
}

function rankCandidatesByRule(candidates) {
  const rule = elements.proteinRule.value;
  return [...candidates].sort((a, b) => {
    const score = (meal) => {
      if (rule === "moreFish") return mealProteinType(meal) === "fish" ? 0 : 1;
      if (rule === "lessMeat") return mealProteinType(meal) === "meat" ? 1 : 0;
      if (rule === "moreQuick") return meal.effort === "quick" ? 0 : 1;
      return 0;
    };
    return score(a) - score(b);
  });
}

function generatePlan() {
  if (!state.days.length) {
    buildDays();
  }
  if (!allMeals.length) {
    state.plan = [];
    render();
    saveState();
    return;
  }
  state.generationSeed += 1;
  const nextPlan = [];
  state.days.forEach((day, index) => {
    const meal = chooseMeal(day, index, nextPlan);
    if (meal) {
      const support = chooseSupportMeals(day, meal, index, nextPlan);
      nextPlan.push({ day, meal, sides: support.sides, dessert: support.dessert });
    }
  });
  state.plan = nextPlan;
  render();
  addLog("献立生成");
  saveState();
}

function flattenIngredients(groups) {
  return Object.values(groups).reduce((acc, group) => ({ ...acc, ...group }), {});
}

function scaledAmount(amount) {
  const value = amount * portionFactor();
  if (value < 1) return Math.ceil(value * 10) / 10;
  return Math.round(value);
}

function formatMoney(value) {
  return `${Math.round(value).toLocaleString("ja-JP")} 円`;
}

function formatCalories(value) {
  return `${Math.round(value).toLocaleString("ja-JP")} kcal`;
}

function renderDaySettings() {
  elements.daySettings.innerHTML = "";
  if (!state.days.length) {
    elements.daySettings.innerHTML = `<div class="empty-state">期間を指定してください</div>`;
    return;
  }

  const template = document.querySelector("#daySettingTemplate");
  state.days.forEach((day) => {
    const date = new Date(day.key);
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".date-label").textContent = dateFormatter.format(date);
    fragment.querySelector(".weekday-label").textContent = `${weekdayFormatter.format(date)}曜日`;
    fragment.querySelector(".day-genre").value = day.genre;
    fragment.querySelector(".day-effort").value = day.effort;
    fragment.querySelector(".day-bento").checked = day.bento;
    const preferredSelect = fragment.querySelector(".day-preferred-meal");
    preferredSelect.innerHTML = mealOptionsHtml(day.preferredTitle, "おまかせ");

    fragment.querySelector(".day-genre").addEventListener("change", (event) => {
      day.genre = event.target.value;
      saveState();
    });
    fragment.querySelector(".day-effort").addEventListener("change", (event) => {
      day.effort = event.target.value;
      saveState();
    });
    fragment.querySelector(".day-bento").addEventListener("change", (event) => {
      day.bento = event.target.checked;
      refreshPlanForDay(day.key);
      saveState();
    });
    preferredSelect.addEventListener("change", (event) => {
      day.preferredTitle = event.target.value;
      saveState();
    });
    elements.daySettings.appendChild(fragment);
  });
}

function mealOptionsHtml(selectedTitle = "", emptyLabel = "選択なし") {
  if (!allMeals.length) {
    return `<option value="">料理名データを読み込めません</option>`;
  }
  const options = [`<option value="">${emptyLabel}</option>`];
  allMeals.filter((meal) => meal.role === "main").forEach((meal) => {
    const selected = meal.title === selectedTitle ? " selected" : "";
    options.push(`<option value="${meal.title}"${selected}>${meal.title}</option>`);
  });
  return options.join("");
}

function recipeSearchUrl(meal) {
  const keywords = `${meal.title} レシピ`;
  return `https://www.google.com/search?q=${encodeURIComponent(keywords)}`;
}

function entryItems(entry) {
  return [entry.meal, ...(entry.sides || []), entry.dessert].filter(Boolean);
}

function supportText(entry) {
  const sideText = entry.sides?.length ? entry.sides.map((meal) => meal.title).join(" / ") : "副菜なし";
  const dessertText = entry.dessert ? ` / デザート: ${entry.dessert.title}` : "";
  return `副菜: ${sideText}${dessertText}`;
}

function renderMealPlan() {
  elements.mealPlan.innerHTML = "";
  if (!state.plan.length) {
    elements.mealPlan.innerHTML = `<div class="empty-state">${allMeals.length ? "条件を作って献立を生成してください" : "料理名データを読み込めません。recipe-data.js と recipe_dish_names_2000.csv を確認してください"}</div>`;
    return;
  }

  const factor = portionFactor();
  state.plan.forEach((entry) => {
    const { day, meal } = entry;
    const date = new Date(day.key);
    const bentoLabel = day.bento ? "弁当考慮" : "通常";
    const article = document.createElement("article");
    article.className = "meal-card";
    article.innerHTML = `
      <div class="meal-art" aria-hidden="true"></div>
      <div class="meal-main">
        <p class="meal-meta">${dateFormatter.format(date)} ${weekdayFormatter.format(date)}曜日</p>
        <div class="meal-title-row">
          <h3>${meal.title}</h3>
          <span class="badge">${bentoLabel}</span>
        </div>
        <div class="meal-stats">
          <span>${formatCalories(entryItems(entry).reduce((sum, item) => sum + item.calories, 0) * factor)}</span>
          <span>${formatMoney(entryItems(entry).reduce((sum, item) => sum + item.cost, 0) * factor)}</span>
          <span>${effortLabel(meal.effort)}</span>
        </div>
        <p class="sides">${supportText(entry)}</p>
        <p class="bento-note">${day.bento ? "汁物・麺・デザート寄りを避けて、弁当に入れやすい候補を優先しています。" : "晩ごはん向けに副菜やデザートも組み合わせます。"}</p>
        <div class="meal-actions">
          <select class="meal-select" aria-label="${dateFormatter.format(date)}の献立を変更">
            ${mealOptionsHtml(meal.title)}
          </select>
          <button class="small-button swap-meal-button" type="button">別案</button>
          <a class="small-button search-link" href="${recipeSearchUrl(meal)}" target="_blank" rel="noopener">レシピ検索</a>
        </div>
      </div>
    `;
    article.querySelector(".meal-select").addEventListener("change", (event) => {
      changeMealForDay(day.key, event.target.value);
    });
    article.querySelector(".swap-meal-button").addEventListener("click", () => {
      swapMealForDay(day.key);
    });
    elements.mealPlan.appendChild(article);
  });
}

function changeMealForDay(dayKey, title) {
  const meal = allMeals.find((item) => item.title === title);
  const entry = state.plan.find((item) => item.day.key === dayKey);
  const day = state.days.find((item) => item.key === dayKey);
  if (!meal || !entry || !day) return;
  entry.meal = meal;
  const index = state.plan.findIndex((item) => item.day.key === dayKey);
  const support = chooseSupportMeals(day, meal, index, state.plan.slice(0, index));
  entry.sides = support.sides;
  entry.dessert = support.dessert;
  day.preferredTitle = meal.title;
  render();
  saveState();
}

function refreshPlanForDay(dayKey) {
  const index = state.plan.findIndex((item) => item.day.key === dayKey);
  if (index < 0) return;
  const day = state.days.find((item) => item.key === dayKey);
  if (!day) return;
  const plannedBefore = state.plan.slice(0, index);
  const meal = chooseMeal({ ...day, preferredTitle: "" }, index, plannedBefore);
  if (!meal) return;
  const support = chooseSupportMeals(day, meal, index, plannedBefore);
  state.plan[index] = { day, meal, sides: support.sides, dessert: support.dessert };
  render();
}

function swapMealForDay(dayKey) {
  const index = state.plan.findIndex((item) => item.day.key === dayKey);
  if (index < 0) return;
  const currentTitle = state.plan[index].meal.title;
  const plannedWithoutCurrent = state.plan.slice(0, index);
  const candidates = rankCandidatesByRule(allMeals).filter((meal) => meal.title !== currentTitle && !mealContainsBlockedIngredient(meal, allBlockedIngredients()));
  const fallback = candidates.length ? candidates : allMeals.filter((meal) => meal.title !== currentTitle);
  const meal = fallback[index % fallback.length] || state.plan[index].meal;
  state.plan[index].meal = meal;
  state.days[index].preferredTitle = meal.title;
  state.plan[index].meal = chooseMeal({ ...state.days[index], preferredTitle: meal.title }, index, plannedWithoutCurrent);
  const support = chooseSupportMeals(state.days[index], state.plan[index].meal, index, plannedWithoutCurrent);
  state.plan[index].sides = support.sides;
  state.plan[index].dessert = support.dessert;
  render();
  saveState();
}

function effortLabel(value) {
  return { quick: "時短", normal: "普通", careful: "しっかり" }[value] || value;
}

function renderRecipes() {
  elements.recipeList.innerHTML = "";
  if (!state.plan.length) {
    elements.recipeList.innerHTML = `<div class="empty-state">${allMeals.length ? "献立を生成すると表示されます" : "料理名データを読み込めません"}</div>`;
    return;
  }

  state.plan.forEach((entry) => {
    const date = new Date(entry.day.key);
    const card = document.createElement("article");
    card.className = "recipe-card";
    const rows = [
      { label: "主菜", meal: entry.meal },
      ...(entry.sides || []).map((meal) => ({ label: "副菜", meal })),
      ...(entry.dessert ? [{ label: "デザート", meal: entry.dessert }] : []),
    ];
    card.innerHTML = `
      <h3>${dateFormatter.format(date)} ${weekdayFormatter.format(date)}曜日</h3>
      <div class="recipe-search-list">
        ${rows
          .map(
            (row) => `
              <div class="recipe-search-row">
                <div>
                  <p class="meal-meta">${row.label}</p>
                  <strong>${row.meal.title}</strong>
                </div>
                <div class="meal-actions">
                  <a class="small-button search-link" href="${recipeSearchUrl(row.meal)}" target="_blank" rel="noopener">検索</a>
                  ${row.meal.sourceUrl ? `<a class="small-button search-link" href="${row.meal.sourceUrl}" target="_blank" rel="noopener">掲載元</a>` : ""}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
    elements.recipeList.appendChild(card);
  });
}

function addLog(reason) {
  if (!state.plan.length) return;
  const snapshot = {
    id: `${Date.now()}`,
    reason,
    savedAt: new Date().toISOString(),
    startDate: elements.startDate.value,
    endDate: elements.endDate.value,
    adults: elements.adults.value,
    children: elements.children.value,
    days: state.days.map((day) => ({ ...day })),
    planTitles: state.plan.map((entry) => entry.meal.title),
    sideTitles: state.plan.map((entry) => (entry.sides || []).map((meal) => meal.title)),
    dessertTitles: state.plan.map((entry) => entry.dessert?.title || ""),
  };
  state.logs = [snapshot, ...state.logs.filter((log) => log.startDate !== snapshot.startDate || log.endDate !== snapshot.endDate)].slice(0, 30);
  renderLogs();
}

function renderLogs() {
  elements.logList.innerHTML = "";
  if (!state.logs.length) {
    elements.logList.innerHTML = `<div class="empty-state">献立を生成すると過去ログに残ります</div>`;
    return;
  }

  state.logs.forEach((log) => {
    const card = document.createElement("article");
    card.className = "log-card";
    const savedAt = new Date(log.savedAt);
    const mealItems = log.planTitles.map((title, index) => {
      const day = log.days[index];
      const label = day ? `${dateFormatter.format(new Date(day.key))}: ` : "";
      const sides = log.sideTitles?.[index]?.length ? ` / 副菜: ${log.sideTitles[index].join("・")}` : "";
      const dessert = log.dessertTitles?.[index] ? ` / デザート: ${log.dessertTitles[index]}` : "";
      return `<li>${label}${title}${sides}${dessert}</li>`;
    });
    card.innerHTML = `
      <h3>${log.startDate} から ${log.endDate}</h3>
      <p>${savedAt.toLocaleString("ja-JP")} 保存 / 大人${log.adults}・子供${log.children}</p>
      <ul class="log-meals">${mealItems.join("")}</ul>
      <div class="log-actions">
        <button class="small-button restore-log-button" type="button">この献立に戻す</button>
        <button class="small-button delete-log-button" type="button">削除</button>
      </div>
    `;
    card.querySelector(".restore-log-button").addEventListener("click", () => restoreLog(log.id));
    card.querySelector(".delete-log-button").addEventListener("click", () => deleteLog(log.id));
    elements.logList.appendChild(card);
  });
}

function restoreLog(id) {
  const log = state.logs.find((item) => item.id === id);
  if (!log) return;
  elements.startDate.value = log.startDate;
  elements.endDate.value = log.endDate;
  elements.adults.value = log.adults;
  elements.children.value = log.children;
  state.days = log.days.map((day) => ({ ...day }));
  state.plan = log.planTitles
    .map((title, index) => {
      const meal = allMeals.find((item) => item.title === title);
      const day = state.days[index];
      const sides = (log.sideTitles?.[index] || []).map((sideTitle) => allMeals.find((item) => item.title === sideTitle)).filter(Boolean);
      const dessert = log.dessertTitles?.[index] ? allMeals.find((item) => item.title === log.dessertTitles[index]) : null;
      return meal && day ? { meal, day, sides, dessert } : null;
    })
    .filter(Boolean);
  render();
  saveState();
}

function deleteLog(id) {
  state.logs = state.logs.filter((log) => log.id !== id);
  renderLogs();
  saveState();
}

function updateSummary() {
  const factor = portionFactor();
  const calories = state.plan.reduce((sum, entry) => sum + entryItems(entry).reduce((itemSum, item) => itemSum + item.calories, 0) * factor, 0);
  const cost = state.plan.reduce((sum, entry) => sum + entryItems(entry).reduce((itemSum, item) => itemSum + item.cost, 0) * factor, 0);
  elements.totalDays.textContent = state.days.length;
  elements.totalCalories.textContent = formatCalories(calories);
  elements.totalCost.textContent = formatMoney(cost);
}

function render() {
  renderDaySettings();
  renderMealPlan();
  renderRecipes();
  renderLogs();
  updateSummary();
}

function saveState() {
  const payload = {
    startDate: elements.startDate.value,
    endDate: elements.endDate.value,
    adults: elements.adults.value,
    children: elements.children.value,
    avoidIngredients: elements.avoidIngredients.value,
    allergyIngredients: elements.allergyIngredients.value,
    childNgIngredients: elements.childNgIngredients.value,
    pantryItems: elements.pantryItems.value,
    preferBento: elements.preferBento.checked,
    proteinRule: elements.proteinRule.value,
    defaultEffort: defaultEffort(),
    days: state.days,
    planTitles: state.plan.map((entry) => entry.meal.title),
    sideTitles: state.plan.map((entry) => (entry.sides || []).map((meal) => meal.title)),
    dessertTitles: state.plan.map((entry) => entry.dessert?.title || ""),
    logs: state.logs,
    generationSeed: state.generationSeed,
  };
  localStorage.setItem("dinner-planner", JSON.stringify(payload));
}

function loadState() {
  const today = new Date();
  elements.startDate.value = toDateInputValue(today);
  elements.endDate.value = toDateInputValue(addDays(today, 6));

  const saved = JSON.parse(localStorage.getItem("dinner-planner") || "null");
  if (!saved) {
    buildDays();
    return;
  }

  elements.startDate.value = saved.startDate || elements.startDate.value;
  elements.endDate.value = saved.endDate || elements.endDate.value;
  elements.adults.value = saved.adults || 2;
  elements.children.value = saved.children || 2;
  elements.avoidIngredients.value = saved.avoidIngredients || "";
  elements.allergyIngredients.value = saved.allergyIngredients || "";
  elements.childNgIngredients.value = saved.childNgIngredients || "";
  elements.pantryItems.value = saved.pantryItems || "";
  elements.preferBento.checked = saved.preferBento ?? true;
  elements.proteinRule.value = saved.proteinRule || "balanced";
  const effortInput = document.querySelector(`input[name='defaultEffort'][value='${saved.defaultEffort || "quick"}']`);
  if (effortInput) effortInput.checked = true;
  state.days = Array.isArray(saved.days) ? saved.days : [];
  state.logs = Array.isArray(saved.logs) ? saved.logs : [];
  state.generationSeed = Number(saved.generationSeed || 0);
  state.plan = Array.isArray(saved.planTitles)
    ? saved.planTitles
        .map((title, index) => {
          const meal = allMeals.find((item) => item.title === title);
          const day = state.days[index];
          if (!meal || !day) return null;
          let sides = (saved.sideTitles?.[index] || []).map((sideTitle) => allMeals.find((item) => item.title === sideTitle)).filter(Boolean);
          let dessert = saved.dessertTitles?.[index] ? allMeals.find((item) => item.title === saved.dessertTitles[index]) : null;
          if (!sides.length && !dessert) {
            const support = chooseSupportMeals(day, meal, index, []);
            sides = support.sides;
            dessert = support.dessert;
          }
          return { meal, day, sides, dessert };
        })
        .filter(Boolean)
    : [];

  if (!state.days.length) buildDays();
  render();
}

function passcodeHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return `family-${hash >>> 0}`;
}

function lockApp() {
  sessionStorage.removeItem("dinner-planner-unlocked");
  document.body.classList.add("is-locked");
  elements.authTitle.textContent = localStorage.getItem("dinner-planner-passcode") ? "合言葉を入力" : "合言葉を設定";
  elements.authMessage.textContent = localStorage.getItem("dinner-planner-passcode")
    ? "家族だけで使うための簡易ロックです。"
    : "最初に家族用の合言葉を決めてください。";
  elements.authButton.textContent = localStorage.getItem("dinner-planner-passcode") ? "開く" : "設定する";
  elements.passcodeInput.value = "";
  setTimeout(() => elements.passcodeInput.focus(), 50);
}

function unlockApp() {
  sessionStorage.setItem("dinner-planner-unlocked", "yes");
  document.body.classList.remove("is-locked");
}

function initializeAuth() {
  const hasPasscode = Boolean(localStorage.getItem("dinner-planner-passcode"));
  const unlocked = sessionStorage.getItem("dinner-planner-unlocked") === "yes";
  if (!hasPasscode || !unlocked) lockApp();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const value = elements.passcodeInput.value.trim();
  if (!value) {
    elements.authMessage.textContent = "合言葉を入力してください。";
    return;
  }

  const storedHash = localStorage.getItem("dinner-planner-passcode");
  if (!storedHash) {
    localStorage.setItem("dinner-planner-passcode", passcodeHash(value));
    unlockApp();
    return;
  }

  if (storedHash === passcodeHash(value)) {
    unlockApp();
  } else {
    elements.authMessage.textContent = "合言葉が違います。もう一度入力してください。";
    elements.passcodeInput.select();
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item === tab));
    document.querySelectorAll(".tab-view").forEach((view) => view.classList.remove("is-active"));
    document.querySelector(`#${tab.dataset.tab}View`).classList.add("is-active");
  });
});

elements.buildDaysButton.addEventListener("click", () => {
  buildDays();
  saveState();
});
elements.generateButton.addEventListener("click", generatePlan);
elements.logCurrentButton.addEventListener("click", () => {
  addLog("手動保存");
  saveState();
});
elements.lockButton.addEventListener("click", lockApp);
elements.authForm.addEventListener("submit", handleAuthSubmit);
[elements.adults, elements.children, elements.avoidIngredients, elements.allergyIngredients, elements.childNgIngredients, elements.pantryItems, elements.preferBento, elements.proteinRule].forEach((input) => {
  input.addEventListener("change", () => {
    updateSummary();
    saveState();
  });
});

async function boot() {
  initializeAuth();
  await loadCsvMeals();
  loadState();
  registerServiceWorker();
}

boot();

