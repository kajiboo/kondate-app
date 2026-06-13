const mealLibrary = [
  {
    title: "鶏むねの照り焼き",
    genre: "japanese",
    effort: "quick",
    bento: true,
    calories: 560,
    cost: 340,
    sides: ["小松菜のおひたし", "豆腐とわかめの味噌汁"],
    ingredients: {
      meat: { "鶏むね肉": 180 },
      vegetable: { 小松菜: 70, ねぎ: 20 },
      other: { 豆腐: 80, わかめ: 3, 米: 75 },
      seasoning: { 醤油: 18, みりん: 18, 砂糖: 5, 味噌: 12 },
    },
    steps: ["鶏むね肉をそぎ切りにして片栗粉を薄くまぶす。", "両面を焼き、醤油・みりん・砂糖を絡める。", "副菜と汁物を用意して盛り付ける。"],
  },
  {
    title: "豚こまと野菜の味噌炒め",
    genre: "japanese",
    effort: "quick",
    bento: true,
    calories: 650,
    cost: 410,
    sides: ["きゅうりの浅漬け", "卵スープ"],
    ingredients: {
      meat: { 豚こま肉: 170 },
      vegetable: { キャベツ: 120, にんじん: 40, きゅうり: 50 },
      other: { 卵: 0.5, 米: 75 },
      seasoning: { 味噌: 18, 醤油: 8, 砂糖: 5, ごま油: 5 },
    },
    steps: ["野菜を食べやすく切る。", "豚肉を炒め、火が通ったら野菜を加える。", "味噌だれを入れて水分を飛ばす。"],
  },
  {
    title: "鮭の塩焼き定食",
    genre: "japanese",
    effort: "normal",
    bento: true,
    calories: 590,
    cost: 520,
    sides: ["ひじき煮", "じゃがいもの味噌汁"],
    ingredients: {
      fish: { 鮭: 110 },
      vegetable: { じゃがいも: 90, にんじん: 35 },
      other: { ひじき: 8, 油揚げ: 20, 米: 75 },
      seasoning: { 塩: 1, 醤油: 10, だし: 2, 味噌: 12 },
    },
    steps: ["鮭に塩を振って焼く。", "ひじきと野菜を煮る。", "味噌汁とご飯を合わせる。"],
  },
  {
    title: "和風ハンバーグ",
    genre: "western",
    effort: "careful",
    bento: true,
    calories: 760,
    cost: 560,
    sides: ["ブロッコリー", "コーンスープ"],
    ingredients: {
      meat: { 合いびき肉: 180 },
      vegetable: { 玉ねぎ: 80, ブロッコリー: 70 },
      other: { パン粉: 14, 卵: 0.4, 牛乳: 20, 米: 75 },
      seasoning: { 塩: 1, 醤油: 12, 大根おろし: 50 },
    },
    steps: ["玉ねぎを炒めて冷ます。", "肉だねをこねて成形し、両面を焼く。", "大根おろしと醤油ベースのソースをかける。"],
  },
  {
    title: "チキントマト煮",
    genre: "western",
    effort: "normal",
    bento: true,
    calories: 680,
    cost: 470,
    sides: ["グリーンサラダ", "バターライス"],
    ingredients: {
      meat: { 鶏もも肉: 170 },
      vegetable: { 玉ねぎ: 80, レタス: 60, トマト缶: 120 },
      other: { 米: 75 },
      seasoning: { コンソメ: 3, 塩: 1, オリーブオイル: 6 },
    },
    steps: ["鶏もも肉に焼き色をつける。", "玉ねぎとトマト缶を加えて煮込む。", "味を整えてサラダと盛る。"],
  },
  {
    title: "クリームシチュー",
    genre: "western",
    effort: "normal",
    bento: false,
    calories: 720,
    cost: 430,
    sides: ["ロールパン", "温野菜"],
    ingredients: {
      meat: { 鶏もも肉: 120 },
      vegetable: { じゃがいも: 120, にんじん: 60, 玉ねぎ: 70, ブロッコリー: 50 },
      other: { 牛乳: 150, パン: 1 },
      seasoning: { シチュールウ: 25 },
    },
    steps: ["具材を切って炒める。", "水を加えて柔らかくなるまで煮る。", "ルウと牛乳を加えて仕上げる。"],
  },
  {
    title: "麻婆豆腐",
    genre: "chinese",
    effort: "quick",
    bento: true,
    calories: 630,
    cost: 360,
    sides: ["もやしナムル", "中華スープ"],
    ingredients: {
      meat: { 豚ひき肉: 90 },
      vegetable: { ねぎ: 35, もやし: 90 },
      other: { 豆腐: 220, 米: 75 },
      seasoning: { 味噌: 10, 醤油: 10, 豆板醤: 4, ごま油: 5 },
    },
    steps: ["ひき肉とねぎを炒める。", "調味料と豆腐を加えて煮る。", "とろみをつけ、ナムルと合わせる。"],
  },
  {
    title: "酢豚風ミートボール",
    genre: "chinese",
    effort: "normal",
    bento: true,
    calories: 700,
    cost: 460,
    sides: ["春雨サラダ", "わかめスープ"],
    ingredients: {
      meat: { 豚ひき肉: 150 },
      vegetable: { 玉ねぎ: 70, ピーマン: 40, にんじん: 50 },
      other: { 春雨: 25, 米: 75 },
      seasoning: { 酢: 12, 醤油: 12, ケチャップ: 15, 砂糖: 8 },
    },
    steps: ["肉だねを丸めて焼く。", "野菜を加えて炒める。", "甘酢だれを絡める。"],
  },
  {
    title: "ビビンバ丼",
    genre: "other",
    effort: "quick",
    bento: true,
    calories: 690,
    cost: 420,
    sides: ["わかめスープ", "冷ややっこ"],
    ingredients: {
      meat: { 牛こま肉: 120 },
      vegetable: { ほうれん草: 70, にんじん: 45, もやし: 80 },
      other: { 卵: 0.5, 豆腐: 80, 米: 85 },
      seasoning: { 醤油: 12, ごま油: 6, コチュジャン: 10 },
    },
    steps: ["野菜をゆでてナムルにする。", "牛肉を甘辛く炒める。", "ご飯に具材をのせる。"],
  },
  {
    title: "さば缶カレー",
    genre: "other",
    effort: "quick",
    bento: false,
    calories: 740,
    cost: 380,
    sides: ["キャベツサラダ", "ヨーグルト"],
    ingredients: {
      fish: { さば缶: 100 },
      vegetable: { 玉ねぎ: 90, キャベツ: 90, トマト缶: 90 },
      other: { ヨーグルト: 60, 米: 85 },
      seasoning: { カレールウ: 22 },
    },
    steps: ["玉ねぎを炒める。", "さば缶とトマト缶を加える。", "カレールウで味を整える。"],
  },
];

const ingredientProfiles = [
  { name: "鶏むね肉", type: "meat", genre: ["japanese", "western", "chinese", "other"], calories: 260, cost: 170, bento: true, baseAmount: 180 },
  { name: "鶏もも肉", type: "meat", genre: ["japanese", "western", "chinese", "other"], calories: 360, cost: 220, bento: true, baseAmount: 170 },
  { name: "豚こま肉", type: "meat", genre: ["japanese", "chinese", "other"], calories: 390, cost: 230, bento: true, baseAmount: 170 },
  { name: "豚ひき肉", type: "meat", genre: ["japanese", "western", "chinese", "other"], calories: 420, cost: 210, bento: true, baseAmount: 150 },
  { name: "牛こま肉", type: "meat", genre: ["japanese", "western", "other"], calories: 430, cost: 290, bento: true, baseAmount: 150 },
  { name: "鮭", type: "fish", genre: ["japanese", "western"], calories: 250, cost: 330, bento: true, baseAmount: 120 },
  { name: "さば", type: "fish", genre: ["japanese", "other"], calories: 310, cost: 260, bento: true, baseAmount: 120 },
  { name: "たら", type: "fish", genre: ["japanese", "western", "chinese"], calories: 170, cost: 280, bento: false, baseAmount: 130 },
  { name: "ぶり", type: "fish", genre: ["japanese"], calories: 320, cost: 340, bento: true, baseAmount: 120 },
  { name: "豆腐", type: "other", genre: ["japanese", "chinese", "other"], calories: 150, cost: 95, bento: false, baseAmount: 220 },
  { name: "厚揚げ", type: "other", genre: ["japanese", "chinese", "other"], calories: 230, cost: 120, bento: true, baseAmount: 150 },
  { name: "卵", type: "other", genre: ["japanese", "western", "chinese", "other"], calories: 180, cost: 80, bento: true, baseAmount: 1.5 },
];

const vegetableSets = [
  { names: ["キャベツ", "にんじん", "玉ねぎ"], cost: 110, calories: 85 },
  { names: ["小松菜", "しめじ", "ねぎ"], cost: 130, calories: 70 },
  { names: ["なす", "ピーマン", "玉ねぎ"], cost: 140, calories: 90 },
  { names: ["ブロッコリー", "じゃがいも", "にんじん"], cost: 160, calories: 150 },
  { names: ["もやし", "にら", "ねぎ"], cost: 85, calories: 65 },
  { names: ["ほうれん草", "玉ねぎ", "コーン"], cost: 145, calories: 110 },
  { names: ["白菜", "きのこ", "にんじん"], cost: 120, calories: 75 },
  { names: ["トマト缶", "玉ねぎ", "ズッキーニ"], cost: 170, calories: 120 },
];

const sauceProfiles = [
  { name: "照り焼き", genre: "japanese", seasoning: { 醤油: 16, みりん: 16, 砂糖: 5 }, calories: 45, cost: 20 },
  { name: "生姜焼き", genre: "japanese", seasoning: { 醤油: 14, みりん: 12, 生姜: 8 }, calories: 40, cost: 24 },
  { name: "味噌バター", genre: "japanese", seasoning: { 味噌: 16, バター: 8, 醤油: 6 }, calories: 85, cost: 35 },
  { name: "塩だれ", genre: "japanese", seasoning: { 塩: 1, ごま油: 6, レモン汁: 8 }, calories: 60, cost: 28 },
  { name: "トマト煮", genre: "western", seasoning: { トマト缶: 100, コンソメ: 3, オリーブオイル: 6 }, calories: 90, cost: 58 },
  { name: "クリーム煮", genre: "western", seasoning: { 牛乳: 120, コンソメ: 3, バター: 8 }, calories: 130, cost: 70 },
  { name: "ガーリック醤油", genre: "western", seasoning: { 醤油: 12, にんにく: 5, オリーブオイル: 6 }, calories: 65, cost: 26 },
  { name: "中華あん", genre: "chinese", seasoning: { 醤油: 12, 鶏ガラ: 3, ごま油: 6, 片栗粉: 6 }, calories: 70, cost: 30 },
  { name: "オイスター炒め", genre: "chinese", seasoning: { オイスターソース: 12, 醤油: 8, ごま油: 5 }, calories: 65, cost: 36 },
  { name: "甘酢", genre: "chinese", seasoning: { 酢: 12, 醤油: 10, ケチャップ: 14, 砂糖: 7 }, calories: 75, cost: 32 },
  { name: "カレー風味", genre: "other", seasoning: { カレー粉: 5, コンソメ: 3, ケチャップ: 10 }, calories: 55, cost: 32 },
  { name: "韓国風甘辛", genre: "other", seasoning: { コチュジャン: 10, 醤油: 10, ごま油: 6 }, calories: 75, cost: 40 },
];

const cookingStyles = [
  { name: "炒め", effort: "quick", bento: true, suffix: "炒め", steps: ["食材を食べやすく切る。", "主食材を先に加熱し、野菜を加えて炒める。", "味付けを絡めて水分を飛ばす。"] },
  { name: "焼き", effort: "quick", bento: true, suffix: "焼き", steps: ["主食材に軽く塩をして下味をつける。", "両面を焼き、野菜を添える。", "仕上げにたれを絡める。"] },
  { name: "煮", effort: "normal", bento: false, suffix: "煮", steps: ["食材を切って軽く炒める。", "調味料と水を加えて煮る。", "味を見て少し煮詰める。"] },
  { name: "丼", effort: "quick", bento: true, suffix: "丼", steps: ["主食材と野菜を加熱する。", "濃いめに味付けする。", "ご飯にのせて仕上げる。"] },
  { name: "蒸し", effort: "normal", bento: false, suffix: "蒸し", steps: ["食材を重ねてフライパンに入れる。", "少量の水を加えて蒸す。", "仕上げのたれをかける。"] },
  { name: "オーブン", effort: "careful", bento: true, suffix: "オーブン焼き", steps: ["食材に下味をつける。", "耐熱皿に並べて焼く。", "焼き色がついたら副菜と盛り付ける。"] },
];

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
  const bento = profile.bento && !/汁|スープ|鍋|麺|ラーメン|うどん|そば|シチュー/.test(title);
  return {
    title,
    normalizedName: normalized,
    genre,
    effort,
    bento,
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
    const response = await fetch("./recipe_dish_names_2000.csv", { cache: "no-store" });
    if (!response.ok) throw new Error("CSVを読み込めませんでした");
    const text = await response.text();
    const rows = csvRowsToObjects(text);
    const seen = new Set();
    csvMeals = rows
      .map(buildCsvMeal)
      .filter((meal) => meal.title && !/^その他/.test(meal.title))
      .filter((meal) => {
        if (seen.has(meal.normalizedName)) return false;
        seen.add(meal.normalizedName);
        return true;
      });
    if (csvMeals.length) {
      allMeals = csvMeals;
    }
  } catch (error) {
    allMeals = [...mealLibrary, ...generatedMeals];
  }
}

function buildGeneratedMeals() {
  const meals = [];
  ingredientProfiles.forEach((protein, proteinIndex) => {
    sauceProfiles
      .filter((sauce) => protein.genre.includes(sauce.genre))
      .forEach((sauce, sauceIndex) => {
        cookingStyles.forEach((style, styleIndex) => {
          const vegetableSet = vegetableSets[(proteinIndex + sauceIndex + styleIndex) % vegetableSets.length];
          const sideSet = sidePool[sauce.genre][(proteinIndex + styleIndex) % sidePool[sauce.genre].length];
          const title = `${protein.name}と${vegetableSet.names[0]}の${sauce.name}${style.suffix}`;
          const ingredients = {
            meat: {},
            fish: {},
            vegetable: Object.fromEntries(vegetableSet.names.map((name, index) => [name, index === 0 ? 85 : 45])),
            other: style.name === "丼" ? { 米: 85 } : { 米: 75 },
            seasoning: sauce.seasoning,
          };
          ingredients[protein.type][protein.name] = protein.baseAmount;
          Object.keys(ingredients).forEach((key) => {
            if (!Object.keys(ingredients[key]).length) delete ingredients[key];
          });
          meals.push({
            title,
            genre: sauce.genre,
            effort: style.effort,
            bento: protein.bento && style.bento,
            calories: protein.calories + vegetableSet.calories + sauce.calories + (style.name === "丼" ? 280 : 230),
            cost: protein.cost + vegetableSet.cost + sauce.cost + 45,
            sides: sideSet,
            ingredients,
            generated: true,
            steps: [
              ...style.steps,
              `${genreLabels[sauce.genre]}の${sauce.name}味なので、味見して濃ければ水か野菜を足す。`,
            ],
          });
        });
      });
  });
  return meals;
}

const generatedMeals = buildGeneratedMeals();
let csvMeals = [];
let allMeals = [...mealLibrary, ...generatedMeals];

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
  shoppingList: document.querySelector("#shoppingList"),
  recipeList: document.querySelector("#recipeList"),
  logList: document.querySelector("#logList"),
  totalDays: document.querySelector("#totalDays"),
  totalCalories: document.querySelector("#totalCalories"),
  totalCost: document.querySelector("#totalCost"),
  copyShoppingButton: document.querySelector("#copyShoppingButton"),
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
  const blockedWords = allBlockedIngredients();
  const preferredMeal = allMeals.find((meal) => meal.title === day.preferredTitle);
  if (preferredMeal && !mealContainsBlockedIngredient(preferredMeal, blockedWords)) {
    return preferredMeal;
  }

  const strictCandidates = allMeals.filter((meal) => {
    const matchesGenre = day.genre === "any" || meal.genre === day.genre;
    const matchesEffort = meal.effort === day.effort || elements.proteinRule.value === "moreQuick";
    const matchesBento = !day.bento || meal.bento;
    return matchesGenre && matchesEffort && matchesBento && !mealContainsBlockedIngredient(meal, blockedWords);
  });

  const looseCandidates = allMeals.filter((meal) => {
    const matchesGenre = day.genre === "any" || meal.genre === day.genre;
    return matchesGenre && !mealContainsBlockedIngredient(meal, blockedWords);
  });

  let candidates = strictCandidates.length ? strictCandidates : looseCandidates.length ? looseCandidates : allMeals;
  candidates = rankCandidatesByRule(candidates);
  const recentTitles = plannedMeals.slice(Math.max(0, index - 2), index).map((entry) => entry.meal.title);
  const freshCandidates = candidates.filter((meal) => !recentTitles.includes(meal.title));
  const pool = freshCandidates.length ? freshCandidates : candidates;
  const seed = stringHash(`${day.key}-${day.genre}-${day.effort}-${elements.proteinRule.value}-${state.generationSeed}-${index}`);
  return pool[seed % pool.length];
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
  state.generationSeed += 1;
  const nextPlan = [];
  state.days.forEach((day, index) => {
    nextPlan.push({
      day,
      meal: chooseMeal(day, index, nextPlan),
    });
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
  const options = [`<option value="">${emptyLabel}</option>`];
  allMeals.forEach((meal) => {
    const selected = meal.title === selectedTitle ? " selected" : "";
    options.push(`<option value="${meal.title}"${selected}>${meal.title}</option>`);
  });
  return options.join("");
}

function recipeSearchUrl(meal) {
  const keywords = `${meal.title} レシピ`;
  return `https://www.google.com/search?q=${encodeURIComponent(keywords)}`;
}

function renderMealPlan() {
  elements.mealPlan.innerHTML = "";
  if (!state.plan.length) {
    elements.mealPlan.innerHTML = `<div class="empty-state">条件を作って献立を生成してください</div>`;
    return;
  }

  const factor = portionFactor();
  state.plan.forEach(({ day, meal }) => {
    const date = new Date(day.key);
    const article = document.createElement("article");
    article.className = "meal-card";
    article.innerHTML = `
      <div class="meal-art" aria-hidden="true"></div>
      <div class="meal-main">
        <p class="meal-meta">${dateFormatter.format(date)} ${weekdayFormatter.format(date)}曜日</p>
        <div class="meal-title-row">
          <h3>${meal.title}</h3>
          <span class="badge">${meal.bento ? "弁当向き" : "当日向き"}</span>
        </div>
        <div class="meal-stats">
          <span>${formatCalories(meal.calories * factor)}</span>
          <span>${formatMoney(meal.cost * factor)}</span>
          <span>${effortLabel(meal.effort)}</span>
        </div>
        <p class="sides">副菜: ${meal.sides.join(" / ")}</p>
        <p class="bento-note">${meal.bento ? "翌日は主菜を取り分けて弁当に回せます。" : "汁気が多いため弁当は別おかず推奨です。"}</p>
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
  day.preferredTitle = meal.title;
  render();
  saveState();
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
  render();
  saveState();
}

function effortLabel(value) {
  return { quick: "時短", normal: "普通", careful: "しっかり" }[value] || value;
}

function renderShoppingList() {
  const pantry = parseList(elements.pantryItems.value);
  const totals = {};
  state.plan.forEach(({ meal }) => {
    Object.entries(meal.ingredients).forEach(([category, ingredients]) => {
      totals[category] ||= {};
      Object.entries(ingredients).forEach(([name, amount]) => {
        if (pantry.some((item) => name.includes(item))) return;
        totals[category][name] = (totals[category][name] || 0) + scaledAmount(amount);
      });
    });
  });

  elements.shoppingList.innerHTML = "";
  if (!state.plan.length) {
    elements.shoppingList.innerHTML = `<div class="empty-state">献立を生成すると表示されます</div>`;
    return;
  }

  Object.entries(totals).forEach(([category, ingredients]) => {
    if (!Object.keys(ingredients).length) return;
    const group = document.createElement("section");
    group.className = "shopping-group";
    group.innerHTML = `<h3>${categoryNames[category] || category}</h3>`;
    const list = document.createElement("ul");
    Object.entries(ingredients).forEach(([name, amount]) => {
      const unit = ["卵", "パン"].includes(name) ? "" : "g";
      const item = document.createElement("li");
      item.textContent = `${name}: ${amount}${unit}`;
      list.appendChild(item);
    });
    group.appendChild(list);
    elements.shoppingList.appendChild(group);
  });
}

function renderRecipes() {
  elements.recipeList.innerHTML = "";
  if (!state.plan.length) {
    elements.recipeList.innerHTML = `<div class="empty-state">献立を生成すると表示されます</div>`;
    return;
  }

  const seen = new Set();
  state.plan.forEach(({ meal }) => {
    if (seen.has(meal.title)) return;
    seen.add(meal.title);
    const card = document.createElement("article");
    card.className = "recipe-card";
    const ingredients = Object.keys(flattenIngredients(meal.ingredients)).join("、");
    card.innerHTML = `
      <h3>${meal.title}</h3>
      <p class="meal-meta">材料: ${ingredients}</p>
      <ol>${meal.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      <div class="meal-actions">
        <a class="small-button search-link" href="${recipeSearchUrl(meal)}" target="_blank" rel="noopener">詳しいレシピを検索</a>
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
      return `<li>${label}${title}</li>`;
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
      return meal && day ? { meal, day } : null;
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
  const calories = state.plan.reduce((sum, entry) => sum + entry.meal.calories * factor, 0);
  const cost = state.plan.reduce((sum, entry) => sum + entry.meal.cost * factor, 0);
  elements.totalDays.textContent = state.days.length;
  elements.totalCalories.textContent = formatCalories(calories);
  elements.totalCost.textContent = formatMoney(cost);
}

function render() {
  renderDaySettings();
  renderMealPlan();
  renderShoppingList();
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
          return meal && day ? { meal, day } : null;
        })
        .filter(Boolean)
    : [];

  if (!state.days.length) buildDays();
  render();
}

function copyShoppingList() {
  const lines = [...elements.shoppingList.querySelectorAll(".shopping-group")].flatMap((group) => {
    const title = group.querySelector("h3").textContent;
    const items = [...group.querySelectorAll("li")].map((item) => `- ${item.textContent}`);
    return [title, ...items, ""];
  });
  navigator.clipboard?.writeText(lines.join("\n").trim());
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
elements.copyShoppingButton.addEventListener("click", copyShoppingList);
elements.authForm.addEventListener("submit", handleAuthSubmit);
[elements.adults, elements.children, elements.avoidIngredients, elements.allergyIngredients, elements.childNgIngredients, elements.pantryItems, elements.preferBento, elements.proteinRule].forEach((input) => {
  input.addEventListener("change", () => {
    renderShoppingList();
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
