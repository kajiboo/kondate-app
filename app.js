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

const state = {
  days: [],
  plan: [],
  logs: [],
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
  const preferredMeal = mealLibrary.find((meal) => meal.title === day.preferredTitle);
  if (preferredMeal && !mealContainsBlockedIngredient(preferredMeal, blockedWords)) {
    return preferredMeal;
  }

  const strictCandidates = mealLibrary.filter((meal) => {
    const matchesGenre = day.genre === "any" || meal.genre === day.genre;
    const matchesEffort = meal.effort === day.effort || elements.proteinRule.value === "moreQuick";
    const matchesBento = !day.bento || meal.bento;
    return matchesGenre && matchesEffort && matchesBento && !mealContainsBlockedIngredient(meal, blockedWords);
  });

  const looseCandidates = mealLibrary.filter((meal) => {
    const matchesGenre = day.genre === "any" || meal.genre === day.genre;
    return matchesGenre && !mealContainsBlockedIngredient(meal, blockedWords);
  });

  let candidates = strictCandidates.length ? strictCandidates : looseCandidates.length ? looseCandidates : mealLibrary;
  candidates = rankCandidatesByRule(candidates);
  const recentTitles = plannedMeals.slice(Math.max(0, index - 2), index).map((entry) => entry.meal.title);
  const freshCandidates = candidates.filter((meal) => !recentTitles.includes(meal.title));
  const pool = freshCandidates.length ? freshCandidates : candidates;
  return pool[index % pool.length];
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
  mealLibrary.forEach((meal) => {
    const selected = meal.title === selectedTitle ? " selected" : "";
    options.push(`<option value="${meal.title}"${selected}>${meal.title}</option>`);
  });
  return options.join("");
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
  const meal = mealLibrary.find((item) => item.title === title);
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
  const candidates = rankCandidatesByRule(mealLibrary).filter((meal) => meal.title !== currentTitle && !mealContainsBlockedIngredient(meal, allBlockedIngredients()));
  const fallback = candidates.length ? candidates : mealLibrary.filter((meal) => meal.title !== currentTitle);
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
      const meal = mealLibrary.find((item) => item.title === title);
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
  state.plan = Array.isArray(saved.planTitles)
    ? saved.planTitles
        .map((title, index) => {
          const meal = mealLibrary.find((item) => item.title === title);
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

initializeAuth();
loadState();
registerServiceWorker();
