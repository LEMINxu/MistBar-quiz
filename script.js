const cardIndexEl = document.getElementById("cardIndex");
const questionTextEl = document.getElementById("questionText");
const optionListEl = document.getElementById("optionList");
const progressTextEl = document.getElementById("progressText");
const starProgressContainerEl = document.getElementById("starProgressContainer");
const resultBoxEl = document.getElementById("resultBox");
const backButtonEl = document.getElementById("backButton");

// Quiz header elements
const quizSubtitleEl = document.getElementById("quizSubtitle");
const quizTitle1El = document.getElementById("quizTitle1");
const quizTitle2El = document.getElementById("quizTitle2");
const quizDescriptionEl = document.getElementById("quizDescription");
const entryPageEl = document.getElementById("entryPage");
const searchAppEl = document.getElementById("searchApp");
const mixResultAppEl = document.getElementById("mixResultApp");
const ingredientsBaseAppEl = document.getElementById("ingredientsBaseApp");
const ingredientsAppEl = document.getElementById("ingredientsApp");
const quizAppEl = document.getElementById("quizApp");
const brandHomeBtnEl = document.getElementById("brandHomeBtn");
const tarotEntryBtn = document.querySelector('.entry-btn[data-action="tarot"]');
const startNowTabEl = document.getElementById("startNowTab");
const languageToggleEl = document.getElementById("languageToggle");
const languageMenuEl = document.getElementById("languageMenu");
const currentLanguageEl = document.getElementById("currentLanguage");
const languageOptions = document.querySelectorAll(".lang-option");
const navCollectionsEl = document.getElementById("navCollections");
const navAboutEl = document.getElementById("navAbout");
const entryTarotBtn = document.querySelector('.entry-btn[data-action="tarot"]');
const entrySearchBtn = document.querySelector('.entry-btn[data-action="search"]');
const entryRandomBtn = document.querySelector('.entry-btn[data-action="random"]');

// Sidebar elements
const sidebarEl = document.getElementById('sidebar');
const sidebarOverlayEl = document.getElementById('sidebarOverlay');
const hamburgerBtnEl = document.getElementById('hamburgerBtn');
const closeSidebarBtnEl = document.getElementById('closeSidebar');
const sidebarCollectionsEl = document.getElementById('sidebarCollections');
const sidebarAboutEl = document.getElementById('sidebarAbout');
const sidebarMenuTitleEl = document.getElementById('sidebarMenuTitle');

// Other elements
const ingredientChecklistEl = document.getElementById("ingredientChecklist");
// Entry page elements
const entrySubtitleEl = document.getElementById("entrySubtitle");
const entryTitleLineEls = document.querySelectorAll(".entry-title .title-line");
const entryDescriptionEl = document.getElementById("entryDescription");
const actionSearchTitleEl = document.getElementById("actionSearchTitle");
const actionSearchDescEl = document.getElementById("actionSearchDesc");
const actionTarotTitleEl = document.getElementById("actionTarotTitle");
const actionTarotDescEl = document.getElementById("actionTarotDesc");
const actionRandomTitleEl = document.getElementById("actionRandomTitle");
const actionRandomDescEl = document.getElementById("actionRandomDesc");
const baseSpiritChecklistEl = document.getElementById("baseSpiritChecklist");
const baseSpiritStepEl = document.getElementById("baseSpiritStep");
const baseSpiritSearchInputEl = document.getElementById("baseSpiritSearchInput");
const ingredientSearchInputEl = document.getElementById("ingredientSearchInput");
const openIngredientsBtnEl = document.getElementById("openIngredientsBtn");
const baseSpiritPageTitleEl = document.getElementById("baseSpiritPageTitle");
const ingredientsPageTitleEl = document.getElementById("ingredientsPageTitle");
const baseBackBtnEl = document.getElementById("baseBackBtn");
const baseNextBtnEl = document.getElementById("baseNextBtn");
const searchBackBtnEl = document.getElementById("searchBackBtn");
const ingredientsBackBtnEl = document.getElementById("ingredientsBackBtn");
const ingredientsDoneBtnEl = document.getElementById("ingredientsDoneBtn");
const selectedCountEl = document.getElementById("selectedCount");
const baseSelectedCountEl = document.getElementById("baseSelectedCount");
const selectedCountPageEl = document.getElementById("selectedCountPage");
const baseIngredientsStatusEl = document.getElementById("baseIngredientsStatus");
const ingredientsStatusEl = document.getElementById("ingredientsStatus");
const categorySelectEl = document.getElementById("categorySelect");
const glassSelectEl = document.getElementById("glassSelect");
const alcoholicSelectEl = document.getElementById("alcoholicSelect");
const apiStatusEl = document.getElementById("apiStatus");
const searchTitleEl = document.getElementById("searchTitle");
const ingredientLabelEl = document.getElementById("ingredientLabel");
const categoryLabelEl = document.getElementById("categoryLabel");
const glassLabelEl = document.getElementById("glassLabel");
const alcoholicLabelEl = document.getElementById("alcoholicLabel");
const mixButtonEl = document.getElementById("mixButton");
const mixResultTitleEl = document.getElementById("mixResultTitle");
const cocktailFlipCardEl = document.getElementById("cocktailFlipCard");
const cocktailImageEl = document.getElementById("cocktailImage");
const cocktailNameEl = document.getElementById("cocktailName");
const cocktailBackTitleEl = document.getElementById("cocktailBackTitle");
const cocktailIngredientsEl = document.getElementById("cocktailIngredients");
const cocktailInstructionsEl = document.getElementById("cocktailInstructions");
const cocktailSwipeHintEl = document.getElementById("cocktailSwipeHint");
const mixBackButtonEl = document.getElementById("mixBackButton");
const noticeModalEl = document.getElementById("noticeModal");
const noticeMessageEl = document.getElementById("noticeMessage");
const noticeConfirmBtnEl = document.getElementById("noticeConfirmBtn");

// Tarot result elements
const tarotLoadingOverlayEl = document.getElementById("tarotLoadingOverlay");
const tarotResultAppEl = document.getElementById("tarotResultApp");
const tarotBackBtnEl = document.getElementById("tarotBackBtn");
const quizBackBtnEl = document.getElementById("quizBackBtn");
const tarotFlipCardEl = document.getElementById("tarotFlipCard");
const tarotCardNameEl = document.getElementById("tarotCardName");
const tarotCardImageEl = document.getElementById("tarotCardImage");
const tarotCocktailImageEl = document.getElementById("tarotCocktailImage");
const tarotCocktailNameEl = document.getElementById("tarotCocktailName");
const tarotCocktailIngredientsEl = document.getElementById("tarotCocktailIngredients");
const tarotCocktailStepsEl = document.getElementById("tarotCocktailSteps");
const collectionsAppEl = document.getElementById("collectionsApp");
const collectionsBackBtnEl = document.getElementById("collectionsBackBtn");
const collectionCardGridEl = document.getElementById("collectionCardGrid");
const collectionsTitleEl = document.getElementById("collectionsTitle");
const aboutAppEl = document.getElementById("aboutApp");
const aboutBackBtnEl = document.getElementById("aboutBackBtn");

const COCKTAIL_DB_V2_BASE_URL = "https://www.thecocktaildb.com/api/json/v2/961249867";
const COCKTAIL_DB_INGREDIENT_IMAGE_BASE_URL = "https://www.thecocktaildb.com/images/ingredients";

// Tarot card → Rider-Waite image (sacred-texts.com public domain)
const TAROT_IMAGES = {
  "Fool":             "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
  "Magician":         "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
  "High Priestess":   "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
  "Empress":          "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
  "Emperor":          "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
  "Hierophant":       "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
  "Lovers":           "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
  "Chariot":          "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
  "Strength":         "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
  "Hermit":           "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
  "Wheel of Fortune": "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
  "Justice":          "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
  "Hanged Man":       "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
  "Death":            "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
  "Temperance":       "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
  "Devil":            "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
  "Tower":            "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
  "Star":             "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
  "Moon":             "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
  "Sun":              "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
  "Judgement":        "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
  "World":            "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg"
};

// Tarot card → cocktail search keyword
const TAROT_COCKTAIL_KEYWORDS = {
  "Fool":             "mojito",
  "Magician":         "cosmopolitan",
  "High Priestess":   "blue moon",
  "Empress":          "rose",
  "Emperor":          "old fashioned",
  "Hierophant":       "sangria",
  "Lovers":           "sex on the beach",
  "Chariot":          "tequila sunrise",
  "Strength":         "whiskey sour",
  "Hermit":           "dark and stormy",
  "Wheel of Fortune": "margarita",
  "Justice":          "gimlet",
  "Hanged Man":       "negroni",
  "Death":            "black russian",
  "Temperance":       "americano",
  "Devil":            "devil",
  "Tower":            "hurricane",
  "Star":             "stardust",
  "Moon":             "moonshine",
  "Sun":              "tequila sunrise",
  "Judgement":        "daiquiri",
  "World":            "singapore sling"
};

const TAROT_COLLECTION_CARDS = Object.keys(TAROT_IMAGES);
const INGREDIENT_CACHE_KEY = "arkti-ingredient-options";
const REQUEST_TIMEOUT_MS = 8000;

let filtersLoaded = false;
let ingredientsLoaded = false;
let searchFiltersLoaded = false;
const filterOptions = {
  category: [],
  glass: [],
  ingredient: [],
  alcoholic: []
};
const alcoholicCategoryCache = new Map();
let alcoholicFilterRequestId = 0;
const selectedIngredients = new Set();
const mixedDrinkDetailsCache = new Map();
let mixedDrinkCards = [];
let currentMixedDrinkIndex = 0;
let mixRenderRequestId = 0;
let mixSourceMode = "search"; // "search" or "random"
let suppressFlipAfterSwipe = false;
let touchStartX = 0;
let touchStartY = 0;
let baseSpiritSearchQuery = "";
let ingredientSearchQuery = "";
let selectedAlcoholic = null;

// Quiz Questions - Immersive Story: Finding Yourself in the Mist
const questions = [
  { text: "Mist surrounds you. You step through an ancient door. Behind it:", options: [
    { text: "A. Mirror reflecting your true self", tags: ["High Priestess", "Justice"] },
    { text: "B. Endless winding path", tags: ["Fool", "Magician"] },
    { text: "C. Blooming garden", tags: ["Empress", "Lovers"] },
    { text: "D. Golden palace with order", tags: ["Emperor", "Hierophant"] }
  ]},
  { text: "A figure emerges from the mist. It is:", options: [
    { text: "A. Ancient voice chanting", tags: ["Hierophant", "High Priestess"] },
    { text: "B. Hand inviting you to dance", tags: ["Lovers", "Chariot"] },
    { text: "C. Rider on a fierce horse", tags: ["Chariot", "Emperor"] },
    { text: "D. Gentle, sheltering embrace", tags: ["Strength", "Hermit"] }
  ]},
  { text: "You remember the last time you were alone. You were:", options: [
    { text: "A. Lighting a lamp in darkness", tags: ["Hermit", "Justice"] },
    { text: "B. Facing fortune's wheel, powerless", tags: ["Wheel of Fortune", "Death"] },
    { text: "C. Between opposing forces, seeking balance", tags: ["Justice", "Temperance"] },
    { text: "D. Suspended upside down, waiting", tags: ["Hanged Man", "Moon"] }
  ]},
  { text: "An unavoidable truth: life must end. You feel:", options: [
    { text: "A. Natural transformation; I will rise", tags: ["Death", "Temperance"] },
    { text: "B. I've learned to let go, found peace", tags: ["Temperance", "Hermit"] },
    { text: "C. My deepest desires awaken", tags: ["Devil", "Tower"] },
    { text: "D. Old self must shatter to rebuild", tags: ["Tower", "Fool"] }
  ]},
  { text: "The sky tears open. Light pierces the mist. It is:", options: [
    { text: "A. An eternal guiding star", tags: ["Star", "Judgement"] },
    { text: "B. Moonlight woven with shadows", tags: ["Moon", "Devil"] },
    { text: "C. A dazzling golden sun", tags: ["Sun"] },
    { text: "D. The awakening of cosmic consciousness", tags: ["Judgement", "World"] }
  ]},
  { text: "Two paths diverge. One leads to:", options: [
    { text: "A. Complete self, perfect harmony", tags: ["World", "Temperance"] },
    { text: "B. Infinite possibilities, creative power", tags: ["Magician", "Fool"] },
    { text: "C. A temple holding all answers", tags: ["High Priestess", "Hierophant"] },
    { text: "D. Life's source, where all awakens", tags: ["Empress", "Wheel of Fortune"] }
  ]},
  { text: "A storm arrives suddenly. Your choice:", options: [
    { text: "A. Hold my truth, whatever the cost", tags: ["Emperor", "Justice"] },
    { text: "B. Keep faith, resist with strength", tags: ["Hierophant", "Strength"] },
    { text: "C. Reflect, follow my heart", tags: ["Lovers", "Hanged Man"] },
    { text: "D. Ride the waves with courage", tags: ["Chariot", "Magician"] }
  ]},
  { text: "The storm passes. Night falls. You feel:", options: [
    { text: "A. Long-dormant courage awakening", tags: ["Strength", "Fool"] },
    { text: "B. Ancient wisdom from deep within", tags: ["Hermit", "High Priestess"] },
    { text: "C. Fortune's wheel turning silently", tags: ["Wheel of Fortune", "Judgement"] },
    { text: "D. Hidden truths shining brightly", tags: ["Justice", "Devil"] }
  ]},
  { text: "Through darkness and light, the secret emerges:", options: [
    { text: "A. Let go gracefully; freedom comes", tags: ["Hanged Man", "Death"] },
    { text: "B. Find harmony in contradictions", tags: ["Temperance", "Lovers"] },
    { text: "C. Embrace desire and shadow", tags: ["Devil", "Empress"] },
    { text: "D. Break boundaries, be reborn", tags: ["Tower", "World"] }
  ]},
  { text: "The mist clears. The ancient door reappears. You will:", options: [
    { text: "A. Open it, welcome the unknown", tags: ["Star", "Strength"] },
    { text: "B. Ignore it, it's just a dream", tags: ["Moon", "Hermit"] },
    { text: "C. Turn away, retrace your steps", tags: ["Sun"] },
    { text: "D. Smash the door", tags: ["Judgement", "Chariot"] }
  ]}
];

const answers = Array(questions.length).fill(null);
let currentQuestionIndex = 0;
let currentLanguage = "en";

const i18n = {
  en: {
    languageLabel: "English",
    collections: "Collections",
    collectionsTitle: "Tarot Collections",
    about: "About",
    startNow: "Start Now",
    menu: "Menu",
    sidebarCollections: "Collections",
    sidebarAbout: "About", 
    aboutMessage: "About page - Coming soon!",
    // About page
    aboutSectionLabel: "Project Introduction",
    aboutMainTitle: "MistBar",
    aboutIntro1: "This is a scenario-based personality test tool, inspired by Tarot divination and cocktail mixing, aiming to provide users with a relaxed and fun self-exploration experience.",
    aboutIntro2: "The current version is 0.1.0, still in the early stages. It may not be updated in the future, but if someone helps me write code, I will be very happy ~ง•‿•ว*.",
    aboutIntro3: "Online experience:",
    aboutIntro4: "GitHub repository:",
    aboutBtnGithub: "Star on GitHub ⭐",
    aboutDesc1: "I don't really know what to write here. But leaving it blank doesn't seem good either.",
    aboutDesc2: "So I'm going to write something random, since no one will read it carefully anyway.",
    aboutDesc3: "If you do read it carefully, hehe, then I've wasted 30 seconds of your life that probably wasn't that important anyway.",
    aboutDesc4: "What is this project? Well, yes, it's not what you think. It's my final assignment.",
    aboutDesc5: "Why isn't it finished yet? But I really have nothing more to say, so I can only write more nonsense.",
    aboutDesc6: "OK, finally, this picture is me. Yes, this project was actually written by a little cat, so you can't pressure a little cat if it's bad! ᯠ_ ̫ _ᯄ ง",
    aboutDesc7: "Acknowledgments: The frontend page was adapted from ACGTI, original author @tianxingleo, website acgti.tianxingleo.top.",
    // Entry page
    entrySubtitle: "TAROT COCKTAIL EXPERIENCE",
    entryTitle1: "Draw a card.",
    entryTitle2: "Mix a drink. Meet <em>yourself</em>.",
    entryDescription: "Let tarot guide your next cocktail.<br>Fate, flavor, and a little magic.",
    // Quiz page
    quizSubtitle: "TAROT READING",
    quizTitle1: "Reveal your card.",
    quizTitle2: "Find <em>your</em> drink.",
    quizDescription: "Answer intuitively. Your first instinct knows.",
    actionSearchTitle: "By Ingredients",
    actionSearchDesc: "Tell us what you have.<br>We'll mix the perfect drink.",
    actionTarotTitle: "Tarot Reading", 
    actionTarotDesc: "Answer 10 questions and<br>reveal your card & cocktail.",
    actionRandomTitle: "Random Draw",
    actionRandomDesc: "Let fate choose for you.<br>Pull a surprise cocktail.",
    tarot: "tarot",
    search: "search",
    random: "random",
    searchTitle: "Alcohol Preference",
    alcoholicChoiceTitle: "Do you want alcohol?",
    alcoholicChoiceYes: "Yes",
    alcoholicChoiceNo: "No",
    alcoholicNextStep: "Next Step",
    ingredientLabel: "Ingredients",
    ingredientOpen: "Choose Ingredients",
    ingredientBack: "Back",
    ingredientDone: "Next Step",
    baseSpiritPageTitle: "STEP1: Choose Base Spirit",
    baseSpiritSearchPlaceholder: "Search base spirit",
    ingredientsPageTitle: "Choose Other Ingredients",
    ingredientsSearchPlaceholder: "Search ingredients",
    categoryLabel: "Categories",
    glassLabel: "Glasses",
    alcoholicLabel: "Alcoholic",
    ingredientGroups: {
      base: "Base Spirit",
      fruit: "Fruits",
      liqueur: "Liqueur",
      juice: "Juice",
      soda: "Bubble drinks / Soda",
      dairy: "Dairy",
      syrup: "Syrup / Sauce",
      nut: "Nuts / Seeds",
      other: "Other"
    },
    selectedCount: (count) => `${count} selected`,
    missingLabel: "Missing ingredients allowed",
    tasteLabel: "Taste preference",
    strengthLabel: "Alcohol strength",
    mixButton: "🍸 Mix One ✨",
    statusLoading: "Loading filter options...",
    statusReady: "",
    baseSpiritStep: "Step 1",
    statusMixing: "Mixing...",
    statusError: "Failed to load filters. Please try again.",
    statusNoResult: "No matching drink found. Try relaxing filters.",
    statusResult: (name, category, alcoholic, glass) => `Try: ${name} · ${category} · ${alcoholic} · ${glass}`,
    mixResultTitle: "Your Cocktail",
    mixResultTitleWithIndex: (current, total) => `Matched Cocktails (${current}/${total})`,
    mixBackSearch: "Back to Search",
    mixBackTitle: "Ingredients & Steps",
    mixSwipeHint: "Swipe left/right to change cocktail card · Tap card to flip",
    mixNoInstructions: "No instructions available.",
    mixLoadingDetail: "Loading details...",
    mixNeedAtLeastTwo: "Select at least 1 ingredient.",
    mixNeedBaseSpirit: "Select at least 1 base spirit.",
    noticeConfirm: "OK",
    mixUntitled: "Unknown Cocktail",
    optionAny: "Any",
    back: "Back",
    answered: "Answered",
    questionLabel: "Question",
    options: [
      { label: "Strongly Agree", value: 2 },
      { label: "Agree", value: 1 },
      { label: "Disagree", value: -1 },
      { label: "Strongly Disagree", value: -2 }
    ],
    resultText: (mbti) => `Your type: ${mbti}. Result stored locally.`
  },
  zh: {
    languageLabel: "简体中文",
    collections: "合集",
    collectionsTitle: "塔罗合集",
    about: "关于",
    startNow: "开始测试",
    menu: "菜单",
    sidebarCollections: "合集", 
    sidebarAbout: "关于",
    aboutMessage: "关于页面 - 敬请期待！",
    // About page
    aboutSectionLabel: "项目主体介绍",
    aboutMainTitle: "MistBar",
    aboutIntro1: "这是一个情景式人格测试工具，灵感来源于塔罗占卜和鸡尾酒调制，旨在为用户提供一种轻松有趣的自我探索体验。",
    aboutIntro2: "当前版本为0.1.0版本，仍处于早期阶段，之后也不一定会更新，但是如果有人帮我写代码我会很开心~ง•‿•ว*。",
    aboutIntro3: "在线体验：",
    aboutIntro4: "GitHub 仓库地址：",
    aboutBtnGithub: "去 GitHub 点赞 Star",
    aboutDesc1: "这段要写什么东西啊，我其实不知道。但是空着好像也不太好。",
    aboutDesc2: "我随便写点什么，反正应该也没人会仔细看。",
    aboutDesc3: "如果你仔细看的话，诶嘿，那你被我浪费了人生中好像也没有那么重要的30秒。",
    aboutDesc4: "这个项目是什么呢？诶，对的，就不是你想的那样。他是我的期末作业。",
    aboutDesc5: "怎么还没写完，但我真的已经没有话讲了，那只能让我再写点废话。",
    aboutDesc6: "ok，最后，这张图片是我。对的，这个项目其实是一直小猫写的，所以写的烂你也不能压力一只小猫！ᯠ_ ̫ _ᯄ ง",
    aboutDesc7: "致谢：项目前端页面二创自 ACGTI，原作者 @天马行空，网站链接 acgti.tianxingleo.top。",
    // Entry page
    entrySubtitle: "塔罗鸡尾酒体验",
    entryTitle1: "抽一张牌。",
    entryTitle2: "调一杯酒。遇见自己。",
    entryDescription: "让塔罗指引你的下一杯鸡尾酒。<br>命运、风味，还有一点魔法。",
    // Quiz page
    quizSubtitle: "塔罗占卜",
    quizTitle1: "揭示你的牌。",
    quizTitle2: "找到<em>你的</em>饮品。",
    quizDescription: "凭直觉回答。你的第一反应最清楚。",
    actionSearchTitle: "按材料搜索",
    actionSearchDesc: "告诉我们你有什么。<br>我们来调制完美饮品。",
    actionTarotTitle: "塔罗占卜",
    actionTarotDesc: "回答10个问题<br>揭示你的牌和鸡尾酒。",
    actionRandomTitle: "随机抽取",
    actionRandomDesc: "让命运为你选择。<br>抽取惊喜鸡尾酒。",
    tarot: "塔罗",
    search: "搜索",
    random: "随机",
    searchTitle: "酒精偏好设置",
    alcoholicChoiceTitle: "您希望饮品含酒精吗？",
    alcoholicChoiceYes: "要酒精",
    alcoholicChoiceNo: "不要酒精",
    alcoholicNextStep: "下一步",
    ingredientLabel: "材料",
    ingredientOpen: "选择材料",
    ingredientBack: "返回",
    ingredientDone: "下一步",
    baseSpiritPageTitle: "STEP1: 选择基酒",
    baseSpiritSearchPlaceholder: "搜索基酒",
    ingredientsPageTitle: "选择其他材料",
    ingredientsSearchPlaceholder: "搜索材料",
    categoryLabel: "类别",
    glassLabel: "杯型",
    alcoholicLabel: "酒精类型",
    ingredientGroups: {
      base: "基酒",
      fruit: "水果",
      liqueur: "利口酒",
      juice: "果汁",
      soda: "气泡饮料 / 苏打",
      dairy: "乳制品",
      syrup: "糖浆 / 酱",
      nut: "坚果 / 种子",
      other: "其他"
    },
    selectedCount: (count) => `已选 ${count} 项`,
    missingLabel: "可缺少材料数量",
    tasteLabel: "味觉偏好",
    strengthLabel: "酒精度",
    mixButton: "🍸 调一杯 ✨",
    statusLoading: "正在加载筛选项...",
    statusReady: "",
    baseSpiritStep: "Step 1",
    statusMixing: "正在调制...",
    statusError: "筛选项加载失败，请稍后重试。",
    statusNoResult: "没有找到匹配的酒，试试放宽筛选条件。",
    statusResult: (name, category, alcoholic, glass) => `推荐：${name} · ${category} · ${alcoholic} · ${glass}`,
    mixResultTitle: "你的鸡尾酒",
    mixResultTitleWithIndex: (current, total) => `匹配结果（${current}/${total}）`,
    mixBackSearch: "返回搜索",
    mixBackTitle: "原料与做法",
    mixSwipeHint: "左右滑动切换卡片 · 点击卡片翻面",
    mixNoInstructions: "暂无制作说明。",
    mixLoadingDetail: "正在加载详情...",
    mixNeedAtLeastTwo: "请至少选择 1 个材料。",
    mixNeedBaseSpirit: "请至少选择 1 个基酒。",
    noticeConfirm: "知道了",
    mixUntitled: "未命名鸡尾酒",
    optionAny: "不限",
    back: "返回上一题",
    answered: "已答",
    questionLabel: "第",
    options: [
      { label: "非常同意", value: 2 },
      { label: "比较同意", value: 1 },
      { label: "比较不同意", value: -1 },
      { label: "非常不同意", value: -2 }
    ],
    resultText: (mbti) => `你的类型：${mbti}。结果仅存储在本地。`
  }
};

function getText(key) {
  return i18n[currentLanguage][key];
}

function getQuestionText(question) {
  return question.text;
}

function getOptionConfig() {
  return i18n[currentLanguage].options;
}

function createOptionButton(config) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option-btn";
  button.dataset.value = String(config.value);
  button.textContent = config.label;
  return button;
}

function showNoticeModal(message) {
  if (!noticeModalEl || !noticeMessageEl) return;
  noticeMessageEl.textContent = message;
  noticeModalEl.classList.add("is-open");
  noticeModalEl.hidden = false;
}

function hideNoticeModal() {
  if (!noticeModalEl) return;
  noticeModalEl.classList.remove("is-open");
  noticeModalEl.hidden = true;
}

// ── Sidebar Control Functions ──
function openSidebar() {
  if (!sidebarEl || !sidebarOverlayEl) return;
  sidebarEl.classList.add('is-open');
  sidebarOverlayEl.classList.add('is-open');
  sidebarEl.hidden = false;
  sidebarOverlayEl.hidden = false;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
  if (!sidebarEl || !sidebarOverlayEl) return;
  sidebarEl.classList.remove('is-open');
  sidebarOverlayEl.classList.remove('is-open');
  // Small delay to allow animation before hiding
  setTimeout(() => {
    sidebarEl.hidden = true;
    sidebarOverlayEl.hidden = true;
    document.body.style.overflow = '';
  }, 300);
}

function safeSetLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
  }
}

function safeGetLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeSetJsonLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
  }
}

function safeGetJsonLocalStorage(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

async function fetchJsonWithTimeout(url, timeoutMs = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function fetchFirstSuccessfulJson(urls, timeoutMs = REQUEST_TIMEOUT_MS) {
  let lastError = null;
  for (const url of urls) {
    try {
      const data = await fetchJsonWithTimeout(url, timeoutMs);
      return data;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("All requests failed");
}

function initStarProgressBar() {
  if (!starProgressContainerEl) return;
  starProgressContainerEl.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    const star = document.createElement("span");
    star.className = "progress-star";
    star.textContent = "✦";
    starProgressContainerEl.appendChild(star);
  }
}

function renderCurrentQuestion() {
  const question = questions[currentQuestionIndex];
  if (currentLanguage === "zh") {
    cardIndexEl.textContent = `第 ${currentQuestionIndex + 1} 题 / 共 ${questions.length} 题`;
  } else {
    cardIndexEl.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  }
  questionTextEl.textContent = getQuestionText(question);
  optionListEl.innerHTML = "";

  const selectedValue = answers[currentQuestionIndex];

  question.options.forEach((opt, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.dataset.value = String(index);
    button.textContent = opt.text;
    if (selectedValue === index) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      answers[currentQuestionIndex] = index;

      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex += 1;
        renderCurrentQuestion();
        updateProgress();
      } else {
        updateProgress();
        showResultIfComplete();
      }
    });

    optionListEl.append(button);
  });

  backButtonEl.textContent = getText("back");
  backButtonEl.hidden = currentQuestionIndex === 0;
  backButtonEl.disabled = currentQuestionIndex === 0;
}

function updateProgress() {
  const answered = answers.filter((value) => value !== null).length;
  const currentProgress = currentQuestionIndex + 1;
  progressTextEl.textContent = `${getText("answered")} ${currentProgress} / ${questions.length}`;
  
  // Update star progress bar
  if (starProgressContainerEl) {
    const stars = starProgressContainerEl.querySelectorAll(".progress-star");
    stars.forEach((star, index) => {
      star.classList.remove("filled", "current");
      if (index < currentQuestionIndex && answers[index] !== null) {
        // Answered previous questions
        star.classList.add("filled");
        star.textContent = "✦";
      } else if (index === currentQuestionIndex) {
        // Current question
        star.classList.add("current");
        star.textContent = "🌙";
      } else {
        // Future questions
        star.textContent = "✦";
      }
    });
  }
  
  showResultIfComplete();
}

function getType() {
  const tally = {};
  questions.forEach((question, index) => {
    const answer = answers[index];
    if (answer === null || answer === undefined) return;
    const tags = question.options[answer] ? question.options[answer].tags : [];
    tags.forEach((tag) => {
      tally[tag] = (tally[tag] || 0) + 1;
    });
  });
  let topCard = "The Fool";
  let topCount = 0;
  Object.entries(tally).forEach(([card, count]) => {
    if (count > topCount) {
      topCount = count;
      topCard = card;
    }
  });
  return topCard;
}

function showResultIfComplete() {
  if (answers.some((answer) => answer === null)) {
    resultBoxEl.hidden = true;
    return;
  }

  const tarotCard = getType();
  safeSetLocalStorage("arkti-latest-result", tarotCard);

  // Show 2-second loading overlay, then reveal tarot result
  tarotLoadingOverlayEl.hidden = false;
  setAppView("entry"); // hide quiz behind overlay
  window.scrollTo(0, 0);

  setTimeout(() => {
    tarotLoadingOverlayEl.hidden = true;
    showTarotResult(tarotCard);
  }, 2000);
}

async function showTarotResult(cardName) {
  setAppView("tarot-result");
  window.scrollTo(0, 0);

  // Set tarot card front
  tarotCardNameEl.textContent = cardName;
  const imageUrl = TAROT_IMAGES[cardName] || TAROT_IMAGES["Fool"];
  tarotCardImageEl.src = imageUrl;
  tarotCardImageEl.alt = cardName;

  // Reset flip state
  tarotFlipCardEl.classList.remove("is-flipped");

  // Reset cocktail back
  tarotCocktailNameEl.textContent = "Loading…";
  tarotCocktailIngredientsEl.innerHTML = "";
  tarotCocktailStepsEl.textContent = "";
  tarotCocktailImageEl.src = "";

  // Fetch cocktail
  try {
    const keyword = TAROT_COCKTAIL_KEYWORDS[cardName] || "cocktail";
    const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(keyword)}`;
    const data = await fetch(searchUrl).then((r) => r.json());
    const drink = (data.drinks && data.drinks[0]) ||
      await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((r) => r.json()).then((d) => d.drinks[0]);

    if (drink) {
      tarotCocktailImageEl.src = drink.strDrinkThumb || "";
      tarotCocktailImageEl.alt = drink.strDrink || "";
      tarotCocktailNameEl.textContent = drink.strDrink || "Unknown Cocktail";

      // Build ingredients list
      tarotCocktailIngredientsEl.innerHTML = "";
      for (let i = 1; i <= 15; i++) {
        const ing = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (!ing) break;
        const li = document.createElement("li");
        const ingSpan = document.createElement("span");
        ingSpan.textContent = ing;
        li.appendChild(ingSpan);
        if (measure) {
          const measureSpan = document.createElement("span");
          measureSpan.className = "measure";
          measureSpan.textContent = measure.trim();
          li.appendChild(measureSpan);
        }
        tarotCocktailIngredientsEl.appendChild(li);
      }

      tarotCocktailStepsEl.textContent = drink.strInstructions || "No instructions available.";
    }
  } catch (err) {
    tarotCocktailNameEl.textContent = "Couldn't load cocktail";
    tarotCocktailStepsEl.textContent = "Please check your connection.";
  }
}

function setAppView(view) {
  entryPageEl.hidden = view !== "entry";
  searchAppEl.hidden = view !== "search";
  if (mixResultAppEl) mixResultAppEl.hidden = view !== "mix-result";
  if (ingredientsBaseAppEl) ingredientsBaseAppEl.hidden = view !== "ingredients-base";
  if (ingredientsAppEl) ingredientsAppEl.hidden = view !== "ingredients";
  quizAppEl.hidden = view !== "quiz";
  if (tarotResultAppEl) tarotResultAppEl.hidden = view !== "tarot-result";
  if (collectionsAppEl) collectionsAppEl.hidden = view !== "collections";
  if (aboutAppEl) aboutAppEl.hidden = view !== "about";
}

async function fetchCocktailForTarotCard(cardName) {
  const keyword = TAROT_COCKTAIL_KEYWORDS[cardName] || "cocktail";
  const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(keyword)}`;
  const searchData = await fetch(searchUrl).then((response) => response.json());
  if (searchData.drinks?.length) {
    return searchData.drinks[0];
  }

  const randomData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json());
  return randomData.drinks?.[0] || null;
}

function createCollectionTarotCard(cardName) {
  console.log('Creating card for:', cardName);
  
  const cardEl = document.createElement("div");
  cardEl.className = "collection-flip";
  cardEl.setAttribute("role", "button");
  cardEl.setAttribute("tabindex", "0");
  cardEl.setAttribute("aria-label", `Flip ${cardName} card`);

  cardEl.innerHTML = `
    <div class="collection-flip-inner">
      <article class="collection-face collection-front">
        <img src="${TAROT_IMAGES[cardName]}" alt="${cardName}" />
        <p class="collection-card-title">${cardName}</p>
      </article>
      <article class="collection-face collection-back">
        <div class="collection-back-content">
          <img class="collection-cocktail-image" alt="Cocktail" />
          <h4 class="collection-cocktail-name">Loading...</h4>
          <p class="label">Ingredients</p>
          <ul class="collection-ingredients"></ul>
          <p class="label">Steps</p>
          <p class="steps">Loading...</p>
        </div>
      </article>
    </div>
  `;

  const toggleFlip = () => {
    cardEl.classList.toggle("is-flipped");
    console.log('Card flipped:', cardName);
  };
  
  cardEl.addEventListener("click", toggleFlip);
  cardEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  });

  return cardEl;
}

async function hydrateCollectionCard(cardEl, cardName) {
  console.log('Hydrating card:', cardName);
  
  const drinkImageEl = cardEl.querySelector(".collection-cocktail-image");
  const drinkNameEl = cardEl.querySelector(".collection-cocktail-name");
  const ingredientListEl = cardEl.querySelector(".collection-ingredients");
  const stepsEl = cardEl.querySelector(".steps");
  if (!drinkImageEl || !drinkNameEl || !ingredientListEl || !stepsEl) {
    console.error('Missing elements in card:', cardName);
    return;
  }

  try {
    const drink = await fetchCocktailForTarotCard(cardName);
    if (!drink) {
      console.log('No drink found for:', cardName);
      drinkNameEl.textContent = "No cocktail found";
      stepsEl.textContent = "No instructions available.";
      return;
    }

    console.log('Loaded drink for', cardName, ':', drink.strDrink);
    
    drinkImageEl.src = drink.strDrinkThumb || "";
    drinkImageEl.alt = drink.strDrink || "Cocktail";
    drinkNameEl.textContent = drink.strDrink || getText("mixUntitled");

    ingredientListEl.innerHTML = "";
    getDrinkIngredients(drink).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientListEl.append(li);
    });

    stepsEl.textContent = getDrinkInstructions(drink);
  } catch (error) {
    console.error('Error loading cocktail for', cardName, ':', error);
    drinkNameEl.textContent = "Failed to load cocktail";
    stepsEl.textContent = "Please check your connection.";
  }
}

async function openCollectionsView() {
  console.log('openCollectionsView called');
  
  // 确保元素存在
  const gridEl = document.getElementById('collectionCardGrid');
  if (!gridEl) {
    console.error('collectionCardGrid element not found');
    return;
  }

  setAppView("collections");
  window.scrollTo(0, 0);
  gridEl.innerHTML = "";
  
  console.log('TAROT_COLLECTION_CARDS:', TAROT_COLLECTION_CARDS);

  const cards = TAROT_COLLECTION_CARDS.map((cardName) => {
    const cardEl = createCollectionTarotCard(cardName);
    gridEl.append(cardEl);
    return { cardEl, cardName };
  });
  
  console.log('Created', cards.length, 'cards');

  await Promise.all(cards.map(({ cardEl, cardName }) => hydrateCollectionCard(cardEl, cardName)));
  console.log('Collections view loaded successfully');
}

async function openSearchView() {
  setAppView("search");
  window.scrollTo(0, 0);
  try {
    await loadIngredientOptions();
    loadSearchFilterOptions().catch(() => {
      updateStatusText("statusError");
    });
  } catch (error) {
    updateStatusText("statusError");
  }
}

async function openRandomDrink() {
  try {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const drink = data.drinks?.[0];
    if (!drink) throw new Error("No drink data");

    mixedDrinkCards = [drink];
    currentMixedDrinkIndex = 0;
    mixSourceMode = "random";
    await renderCurrentMixedDrinkCard(true);
  } catch (error) {
    showNoticeModal("Failed to load random cocktail. Please try again.");
  }
}

function updateStatusText(statusKey) {
  const message = getText(statusKey);
  if (apiStatusEl) apiStatusEl.textContent = message;
  if (baseIngredientsStatusEl) baseIngredientsStatusEl.textContent = message;
  if (ingredientsStatusEl) ingredientsStatusEl.textContent = message;
}

function updateStatusMessage(message) {
  if (apiStatusEl) apiStatusEl.textContent = message;
  if (baseIngredientsStatusEl) baseIngredientsStatusEl.textContent = message;
  if (ingredientsStatusEl) ingredientsStatusEl.textContent = message;
}

function getDrinkIngredients(drink) {
  const items = [];
  for (let index = 1; index <= 15; index += 1) {
    const ingredient = drink[`strIngredient${index}`]?.trim();
    if (!ingredient) continue;
    const measure = drink[`strMeasure${index}`]?.trim();
    items.push(measure ? `${measure} ${ingredient}` : ingredient);
  }
  return items;
}

function getDrinkInstructions(drink) {
  if (currentLanguage === "zh") {
    return (
      drink["strInstructionsZH-HANS"] ||
      drink.strInstructionsZH ||
      drink.strInstructions ||
      getText("mixNoInstructions")
    );
  }
  return drink.strInstructions || getText("mixNoInstructions");
}

function updateMixResultTitle() {
  if (!mixResultTitleEl) return;
  if (!mixedDrinkCards.length) {
    mixResultTitleEl.textContent = getText("mixResultTitle");
    return;
  }
  if (mixedDrinkCards.length === 1) {
    mixResultTitleEl.textContent = mixedDrinkCards[0].strDrink || getText("mixUntitled");
    return;
  }
  mixResultTitleEl.textContent = getText("mixResultTitleWithIndex")(currentMixedDrinkIndex + 1, mixedDrinkCards.length);
}

async function ensureDrinkDetail(drinkId) {
  if (mixedDrinkDetailsCache.has(drinkId)) {
    return mixedDrinkDetailsCache.get(drinkId);
  }

  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(drinkId)}`);
  const data = await res.json();
  const detail = data.drinks?.[0] || null;
  mixedDrinkDetailsCache.set(drinkId, detail);
  return detail;
}

async function renderCurrentMixedDrinkCard(navigate = true) {
  if (!mixedDrinkCards.length) return;
  if (!cocktailNameEl || !cocktailImageEl || !cocktailIngredientsEl || !cocktailInstructionsEl || !cocktailFlipCardEl) return;

  const requestId = ++mixRenderRequestId;
  const currentDrink = mixedDrinkCards[currentMixedDrinkIndex];

  updateMixResultTitle();
  if (mixedDrinkCards.length === 1) {
    cocktailNameEl.style.display = "none";
  } else {
    cocktailNameEl.style.display = "";
    cocktailNameEl.textContent = currentDrink.strDrink || getText("mixUntitled");
  }
  cocktailImageEl.src = currentDrink.strDrinkThumb || "";
  cocktailImageEl.alt = currentDrink.strDrink || getText("mixUntitled");

  cocktailIngredientsEl.innerHTML = "";
  cocktailInstructionsEl.textContent = getText("mixLoadingDetail");
  cocktailFlipCardEl.classList.remove("is-flipped");

  if (navigate) {
    setAppView("mix-result");
    window.scrollTo(0, 0);
  }

  try {
    const detail = await ensureDrinkDetail(currentDrink.idDrink);
    if (requestId !== mixRenderRequestId) return;

    if (!detail) {
      cocktailInstructionsEl.textContent = getText("mixNoInstructions");
      return;
    }

    cocktailNameEl.textContent = detail.strDrink || currentDrink.strDrink || getText("mixUntitled");
    cocktailImageEl.src = detail.strDrinkThumb || currentDrink.strDrinkThumb || "";
    cocktailImageEl.alt = detail.strDrink || currentDrink.strDrink || getText("mixUntitled");

    cocktailIngredientsEl.innerHTML = "";
    getDrinkIngredients(detail).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      cocktailIngredientsEl.append(li);
    });

    cocktailInstructionsEl.textContent = getDrinkInstructions(detail);
  } catch (error) {
    if (requestId !== mixRenderRequestId) return;
    cocktailInstructionsEl.textContent = getText("mixNoInstructions");
  }

  // Update hint based on card count
  if (cocktailSwipeHintEl) {
    if (mixedDrinkCards.length === 1) {
      cocktailSwipeHintEl.textContent = "Tap card to flip";
    } else {
      cocktailSwipeHintEl.textContent = getText("mixSwipeHint");
    }
  }
}

function changeMixedDrinkCard(offset) {
  if (mixedDrinkCards.length < 2) return;
  currentMixedDrinkIndex = (currentMixedDrinkIndex + offset + mixedDrinkCards.length) % mixedDrinkCards.length;
  renderCurrentMixedDrinkCard(false);
}

function populateSelect(selectEl, values) {
  if (!selectEl) return;
  selectEl.innerHTML = "";

  const anyOption = document.createElement("option");
  anyOption.value = "";
  anyOption.textContent = getText("optionAny");
  selectEl.append(anyOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.append(option);
  });
}

function getListValues(items, key) {
  return items.map((item) => item[key]).filter(Boolean);
}

const PROVIDED_BASE_SPIRIT_LIST = [
  "151 proof rum",
  "Absinthe",
  "Absolut Kurant",
  "Absolut Peppar",
  "Absolut Vodka",
  "Absolut citron",
  "Advocaat",
  "Aejo Rum",
  "Aftershock",
  "Ale",
  "Amaretto",
  "Amaro Montenegro",
  "Anis",
  "Anisette",
  "Aperol",
  "Apfelkorn",
  "Apple Brandy",
  "Apple Schnapps",
  "Applejack",
  "Apricot Brandy",
  "Apricot Nectar",
  "Aquavit",
  "Arrack",
  "Averna",
  "Añejo Rum",
  "Bacardi",
  "Bacardi Limon",
  "Baileys Irish Cream",
  "Banana Liqueur",
  "Banana Rum",
  "Barenjager",
  "Beer",
  "Benedictine",
  "Bitters",
  "Black Rum",
  "Black Sambuca",
  "Blackberry Brandy",
  "Blackberry Schnapps",
  "Blackcurrant Schnapps",
  "Blackstrap rum",
  "Blended Scotch",
  "Blended Whiskey",
  "Blue Curacao",
  "Blue Maui",
  "Blueberry Schnapps",
  "Bourbon",
  "Brandy",
  "Butterscotch Schnapps",
  "Cachaca",
  "Calvados",
  "Campari",
  "Canadian Whisky",
  "Chambord Raspberry Liqueur",
  "Champagne",
  "Chareau",
  "Cherry Brandy",
  "Cherry Heering",
  "Cherry Liqueur",
  "Chocolate Liqueur",
  "Cinnamon Schnapps",
  "Cinnamon Whisky",
  "Citrus Vodka",
  "Cocchi Americano",
  "Coconut Liqueur",
  "Coconut Rum",
  "Coffee Brandy",
  "Coffee Liqueur",
  "Cognac",
  "Cointreau",
  "Cranberry Liqueur",
  "Cranberry Vodka",
  "Cream Sherry",
  "Creme De Almond",
  "Creme De Banane",
  "Creme De Cacao",
  "Creme De Cassis",
  "Creme De Noyaux",
  "Creme de Mure",
  "Creme de Violette",
  "Crown Royal",
  "Curacao",
  "Cynar",
  "Dark Creme De Cacao",
  "Dark Rum",
  "Drambuie",
  "Dry Curacao",
  "Dry Vermouth",
  "Dubonnet Blanc",
  "Dubonnet Rouge",
  "Erin Cream",
  "Everclear",
  "Falernum",
  "Fernet-Branca",
  "Firewater",
  "Forbidden Fruit",
  "Frangelico",
  "Galliano",
  "Gin",
  "Gold Tequila",
  "Gold rum",
  "Goldschlager",
  "Grain Alcohol",
  "Grand Marnier",
  "Green Chartreuse",
  "Green Creme de Menthe",
  "Guinness",
  "Guinness stout",
  "Hazelnut liqueur",
  "Hooch",
  "Hot Damn",
  "Hpnotiq",
  "Ilegal Joven mezcal",
  "Irish Whiskey",
  "Irish cream",
  "Islay single malt Scotch",
  "Jack Daniels",
  "Jagermeister",
  "Jim Beam",
  "Johnnie Walker",
  "Kahlua",
  "Key Largo Schnapps",
  "Kirschwasser",
  "Kiwi liqueur",
  "Kummel",
  "Lager",
  "Lemon vodka",
  "Light Rum",
  "Lillet",
  "Lillet Blanc",
  "Lime liqueur",
  "Lime vodka",
  "Madeira",
  "Malibu Rum",
  "Mandarine napoleon",
  "Maraschino Liqueur",
  "Martini Bianco",
  "Martini Extra Dry",
  "Martini Rosso",
  "Maui",
  "Melon Liqueur",
  "Melon Vodka",
  "Mezcal",
  "Midori",
  "Midori Melon Liqueur",
  "Nocino",
  "Orange Curacao",
  "Orange liqueur",
  "Orange rum",
  "Orange vodka",
  "Ouzo",
  "Parfait amour",
  "Passoa",
  "Peach Schnapps",
  "Peach Vodka",
  "Peach brandy",
  "Peach liqueur",
  "Peachtree schnapps",
  "Pernod",
  "Pineapple rum",
  "Pineapple vodka",
  "Pisco",
  "Port",
  "Prosecco",
  "Purple passion",
  "Ramazzotti",
  "Raspberry Liqueur",
  "Raspberry Vodka",
  "Raspberry schnapps",
  "Red Wine",
  "Ricard",
  "Rosso Vermouth",
  "Ruby Port",
  "Rum",
  "Rumple Minze",
  "Rye Whiskey",
  "Sake",
  "Sambuca",
  "Schnapps",
  "Scotch",
  "Sherry",
  "Singani",
  "Sloe Gin",
  "Southern Comfort",
  "Spiced Rum",
  "St. Germain",
  "Strawberry liqueur",
  "Swedish punsch",
  "Sweet Vermouth",
  "Tawny port",
  "Tennessee whiskey",
  "Tequila",
  "Tequila rose",
  "Tia Maria",
  "Triple Sec",
  "Tuaca",
  "Vanilla liqueur",
  "Vanilla schnapps",
  "Vanilla vodka",
  "Vermouth",
  "Whisky",
  "White Creme de Menthe",
  "White Rum",
  "White Vermouth",
  "White chocolate liqueur",
  "White port",
  "Wild Turkey",
  "Wildberry schnapps",
  "Vodka",
  "Whiskey",
  "White Wine",
  "Wine",
  "Yellow Chartreuse",
  "Yukon Jack",
  "Zima"
];

function normalizeBaseSpiritKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

const PROVIDED_BASE_SPIRIT_SET = new Set(PROVIDED_BASE_SPIRIT_LIST.map((item) => normalizeBaseSpiritKey(item)));

const REMOVED_FRUIT_INGREDIENT_LIST = [
  "Apple",
  "Apricot",
  "Banana",
  "Berries",
  "Blackberries",
  "Blood Orange",
  "Blueberries",
  "Cantaloupe",
  "Celery",
  "Cherries",
  "Cherry",
  "Coconut Cream",
  "Coconut Milk",
  "Cranberries",
  "Cream of Coconut",
  "Cucumber",
  "Figs",
  "Grapes",
  "Kiwi",
  "Lemon",
  "Lemon Peel",
  "Lime",
  "Lime Peel",
  "Limeade",
  "Mango",
  "Maraschino Cherry",
  "Olive",
  "Orange",
  "Orange Peel",
  "Orange Slice",
  "Orange spiral",
  "Papaya",
  "Peach",
  "Pineapple",
  "Plums",
  "Raisins",
  "Rhubarb",
  "Rose",
  "Strawberries",
  "Tomato",
  "Watermelon"
];

const REMOVED_FRUIT_INGREDIENT_SET = new Set(
  REMOVED_FRUIT_INGREDIENT_LIST.map((item) => normalizeBaseSpiritKey(item))
);

function isRemovedFruitIngredient(value) {
  return REMOVED_FRUIT_INGREDIENT_SET.has(normalizeBaseSpiritKey(value));
}

const REMOVED_EXTRA_INGREDIENT_LIST = [
  "Beef Stock",
  "Candy",
  "Chocolate",
  "Cold Water",
  "Crystal Light",
  "Dark Chocolate",
  "Elderflower cordial",
  "Food Coloring",
  "Fruit",
  "Fruit Punch",
  "Gatorade",
  "Glycerine",
  "Green Ginger Wine",
  "Green Olives",
  "Hawaiian punch",
  "Hot Chocolate",
  "Ice",
  "Iced tea",
  "Jello",
  "Jelly",
  "Marshmallows",
  "Mini-snickers bars",
  "Olive Brine",
  "Olive Oil",
  "Onion",
  "Cocktail Onion",
  "Plain Chocolate",
  "Plain Flour",
  "Raspberry Jam",
  "Raspberry cordial",
  "Rosewater",
  "Salted Chocolate",
  "Sarsaparilla",
  "Sherbet",
  "Sunny delight",
  "Tang",
  "Tea",
  "Vanilla",
  "Vanilla extract",
  "Vinegar",
  "Water",
  "White Vinegar",
  "Yeast",
  "Pisang Ambon",
  "Sour Apple Pucker",
  "Watermelon schnapps",
  "Root beer schnapps",
  "Peppermint Schnapps",
  "Allspice Dram",
  "Angostura Bitters",
  "Orange Bitters",
  "Peychaud bitters",
  "Allspice",
  "Angelica Root",
  "Asafoetida",
  "Basil",
  "Black Pepper",
  "Cayenne Pepper",
  "Cinnamon",
  "Cloves",
  "Coriander",
  "Dried Oregano",
  "Fresh Basil",
  "Fresh Mint",
  "Ginger",
  "Ground Ginger",
  "Habanero Peppers",
  "Lavender",
  "Licorice Root",
  "Marjoram leaves",
  "Mint",
  "Nutmeg",
  "Pepper",
  "Red Chile Flakes",
  "Red Chili Flakes",
  "Red Hot Chili Flakes",
  "Rosemary",
  "Thyme",
  "Wormwood",
  "Brown Sugar",
  "Caramel Coloring",
  "Demerara Sugar",
  "Granulated Sugar",
  "Honey",
  "Powdered Sugar",
  "Rock Salt",
  "Salt",
  "Celery Salt",
  "Sugar",
  "Tajin",
  "Daiquiri Mix",
  "Margarita mix",
  "Pina colada mix",
  "Sour Mix",
  "Sweet and Sour",
  "Cola",
  "Egg White",
  "Egg Yolk",
  "Tropicana",
  "Squeezed Orange"
];

const REMOVED_EXTRA_INGREDIENT_SET = new Set(
  REMOVED_EXTRA_INGREDIENT_LIST.map((item) => normalizeBaseSpiritKey(item))
);

function isRemovedIngredient(value) {
  const normalized = normalizeBaseSpiritKey(value);
  return REMOVED_FRUIT_INGREDIENT_SET.has(normalized) || REMOVED_EXTRA_INGREDIENT_SET.has(normalized);
}

function isProvidedBaseSpirit(value) {
  return PROVIDED_BASE_SPIRIT_SET.has(normalizeBaseSpiritKey(value));
}

function isLiqueurIngredient(value) {
  const text = normalizeBaseSpiritKey(value);
  return /(liqueur|creme de|creme de|triple sec|curacao|amaretto|amaro|chartreuse|cointreau|drambuie|frangelico|galliano|kahlua|midori|sambuca|benedictine|anisette|ouzo|pernod|ricard|passoa|parfait amour|st\. germain|tia maria|falernum|nocino|campari|aperol|cynar|averna|ramazzotti|mandarine napoleon|maraschino)/i.test(text);
}

const DAIRY_INGREDIENT_SET = new Set([
  "Butter",
  "Chocolate Ice-cream",
  "Chocolate Milk",
  "Condensed Milk",
  "Cream",
  "Creme Fraiche",
  "Egg",
  "Eggnog",
  "Half-and-half",
  "Heavy cream",
  "Ice-Cream",
  "Light Cream",
  "Milk",
  "Soy Milk",
  "Soya Milk",
  "Sweet Cream",
  "Vanilla Ice-Cream",
  "Whipped Cream",
  "Whipping Cream",
  "Yoghurt"
].map((item) => normalizeBaseSpiritKey(item)));

const SYRUP_SAUCE_INGREDIENT_SET = new Set([
  "Agave Syrup",
  "Banana Syrup",
  "Caramel Sauce",
  "Chocolate Sauce",
  "Chocolate Syrup",
  "Coconut Syrup",
  "Corn Syrup",
  "Dark Soy Sauce",
  "Garlic Sauce",
  "Ginger Syrup",
  "Grenadine",
  "Honey syrup",
  "Hot Sauce",
  "Maple syrup",
  "Mint syrup",
  "Orgeat Syrup",
  "Oyster Sauce",
  "Passion fruit syrup",
  "Pineapple Syrup",
  "Raspberry syrup",
  "Rosemary Syrup",
  "Strawberry Syrup",
  "Roses sweetened lime juice",
  "Sirup of roses",
  "Soy Sauce",
  "Soya Sauce",
  "Sugar Syrup",
  "Tabasco Sauce",
  "Vanilla syrup",
  "Worcestershire Sauce"
].map((item) => normalizeBaseSpiritKey(item)));

const NUT_SEED_INGREDIENT_SET = new Set([
  "Almond",
  "Almond Flavoring",
  "Cardamom",
  "Cumin Powder",
  "Cumin Seed",
  "Fennel Seeds",
  "Flaked Almonds",
  "Peanut Oil"
].map((item) => normalizeBaseSpiritKey(item)));

function isDairyIngredient(value) {
  return DAIRY_INGREDIENT_SET.has(normalizeBaseSpiritKey(value));
}

function isSyrupOrSauceIngredient(value) {
  return SYRUP_SAUCE_INGREDIENT_SET.has(normalizeBaseSpiritKey(value));
}

function isNutOrSeedIngredient(value) {
  return NUT_SEED_INGREDIENT_SET.has(normalizeBaseSpiritKey(value));
}

const JUICE_INGREDIENT_SET = new Set([
  "Apple Juice",
  "Cherry Juice",
  "Clamato Juice",
  "Cranberry Juice",
  "Fresh Lemon Juice",
  "Fresh Lime Juice",
  "Fruit Juice",
  "Grape juice",
  "Grapefruit Juice",
  "Guava juice",
  "Lemon Juice",
  "Lime Juice",
  "Lime juice cordial",
  "Maraschino cherry juice",
  "Orange Juice",
  "Papaya juice",
  "Passion fruit juice",
  "Peach juice",
  "Pineapple Juice",
  "Pineapple-orange-banana juice",
  "Pomegranate juice",
  "Raspberry Juice",
  "Strawberry juice",
  "Tomato Juice",
  "White grape juice"
].map((item) => normalizeBaseSpiritKey(item)));

const SODA_INGREDIENT_SET = new Set([
  "7-up",
  "Apple Cider",
  "Bitter lemon",
  "Carbonated Soft Drink",
  "Carbonated Water",
  "Cherry Cola",
  "Cider",
  "Club Soda",
  "Coca-Cola",
  "Corona",
  "Cream Soda",
  "Diet Coke",
  "Dr. Pepper",
  "Fanta",
  "Fresca",
  "Ginger Ale",
  "Ginger Beer",
  "Grape soda",
  "Lemon soda",
  "Lemon-lime soda",
  "Lemonade",
  "Mountain Dew",
  "Orange Soda",
  "Pepsi Cola",
  "Pink lemonade",
  "Red Bull",
  "Root beer",
  "Schweppes Lemon",
  "Schweppes Russchian",
  "Soda Water",
  "Sprite",
  "Squirt",
  "Surge",
  "Tonic Water"
].map((item) => normalizeBaseSpiritKey(item)));

function isJuiceIngredient(value) {
  return JUICE_INGREDIENT_SET.has(normalizeBaseSpiritKey(value));
}

function isSodaIngredient(value) {
  return SODA_INGREDIENT_SET.has(normalizeBaseSpiritKey(value));
}

function classifyIngredientGroup(value) {
  const text = value.toLowerCase();

  if (isLiqueurIngredient(value)) return "liqueur";
  if (isJuiceIngredient(value)) return "juice";
  if (isSodaIngredient(value)) return "soda";
  if (isDairyIngredient(value)) return "dairy";
  if (isSyrupOrSauceIngredient(value)) return "syrup";
  if (isNutOrSeedIngredient(value)) return "nut";

  if (/(vodka|gin|rum|tequila|whisk(?:e)?y|bourbon|rye|brandy|cognac|scotch|mezcal|pisco|cachaca|aquavit|armagnac|grappa)/i.test(text)) {
    return "base";
  }
  if (/(milk|yogurt|yoghurt|whey|cheese|buttermilk|half and half|half-and-half|condensed milk|cream|creme|egg|yoghurt)/i.test(text)) return "dairy";
  if (/(apple|apricot|avocado|banana|berry|blackberry|blueberry|cherry|coconut|cranberry|fig|grape|grapefruit|guava|kiwi|lemon|lime|lychee|mango|melon|nectarine|orange|papaya|passion fruit|peach|pear|pineapple|plum|pomegranate|raspberry|strawberry|tangerine|watermelon)/i.test(text)) {
    return "fruit";
  }
  if (/(juice|water|tea|coffee|cola|soda|tonic|ginger ale|beer|wine|liqueur|rum|gin|vodka|whiskey|whisky|brandy|champagne|cider|kombucha|drink)/i.test(text)) {
    return "other";
  }
  return "other";
}

function getBaseSpiritValues(values) {
  return values.filter((value) => isProvidedBaseSpirit(value) && !isLiqueurIngredient(value));
}

function getOtherIngredientValues(values) {
  return values.filter((value) => !isProvidedBaseSpirit(value) || isLiqueurIngredient(value));
}

function getSelectedBaseSpiritCount() {
  return Array.from(selectedIngredients).filter((value) => isProvidedBaseSpirit(value) && !isLiqueurIngredient(value)).length;
}

function sortBaseSpiritsWithPriority(values) {
  const priorityOrder = new Map([
    ["bacardi", 0],
    ["absolut vodka", 1],
    ["absolute vodka", 1],
    ["whisky", 2],
    ["gin", 3]
  ]);

  return [...values].sort((left, right) => {
    const leftKey = normalizeBaseSpiritKey(left);
    const rightKey = normalizeBaseSpiritKey(right);
    const leftRank = priorityOrder.has(leftKey) ? priorityOrder.get(leftKey) : Number.MAX_SAFE_INTEGER;
    const rightRank = priorityOrder.has(rightKey) ? priorityOrder.get(rightKey) : Number.MAX_SAFE_INTEGER;

    if (leftRank !== rightRank) {
      return leftRank - rightRank;
    }
    return left.localeCompare(right);
  });
}

function getIngredientImageUrl(ingredientName) {
  const imageName = ingredientName.toLowerCase();
  return `${COCKTAIL_DB_INGREDIENT_IMAGE_BASE_URL}/${encodeURIComponent(imageName)}-medium.png`;
}

function createIngredientImage(ingredientName, className = "ingredient-image") {
  const image = document.createElement("img");
  image.className = className;
  image.src = getIngredientImageUrl(ingredientName);
  image.alt = ingredientName;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.style.display = "none";
  });
  return image;
}

function createIngredientCard(value, imageClassName = "ingredient-image") {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "ingredient-card-btn";
  card.classList.toggle("active", selectedIngredients.has(value));

  const image = createIngredientImage(value, imageClassName);

  const text = document.createElement("span");
  text.className = "ingredient-card-name";
  text.textContent = value;

  card.append(image, text);

  card.addEventListener("click", () => {
    if (selectedIngredients.has(value)) {
      selectedIngredients.delete(value);
    } else {
      selectedIngredients.add(value);
    }
    card.classList.toggle("active", selectedIngredients.has(value));
    updateSelectedCount();
  });

  return card;
}

function updateSelectedCount() {
  const text = getText("selectedCount")(selectedIngredients.size);
  if (baseSelectedCountEl) {
    baseSelectedCountEl.textContent = getText("selectedCount")(getSelectedBaseSpiritCount());
  }
  if (selectedCountEl) selectedCountEl.textContent = text;
  if (selectedCountPageEl) selectedCountPageEl.textContent = text;
}

function pruneSelectedIngredients(availableIngredients) {
  const availableSet = new Set(availableIngredients);
  Array.from(selectedIngredients).forEach((value) => {
    if (!availableSet.has(value)) {
      selectedIngredients.delete(value);
    }
  });
}

function renderBaseSpiritChecklist(values) {
  if (!baseSpiritChecklistEl) return;
  baseSpiritChecklistEl.innerHTML = "";

  const baseSpirits = sortBaseSpiritsWithPriority(getBaseSpiritValues(values));
  const keyword = normalizeBaseSpiritKey(baseSpiritSearchQuery);
  const filteredBaseSpirits = keyword
    ? baseSpirits.filter((value) => normalizeBaseSpiritKey(value).includes(keyword))
    : baseSpirits;

  const list = document.createElement("div");
  list.className = "ingredient-group-list";

  filteredBaseSpirits.forEach((value) => {
    const card = createIngredientCard(value, "base-spirit-image");
    list.append(card);
  });

  baseSpiritChecklistEl.append(list);

  if (keyword) {
    const firstMatch = list.querySelector(".ingredient-card-btn");
    if (firstMatch instanceof HTMLElement) {
      firstMatch.scrollIntoView({ block: "nearest" });
    }
  }

  updateSelectedCount();
}

function renderIngredientChecklist(values) {
  if (!ingredientChecklistEl) return;
  ingredientChecklistEl.innerHTML = "";

  const otherIngredients = getOtherIngredientValues(values);
  const keyword = normalizeBaseSpiritKey(ingredientSearchQuery);
  const filteredOtherIngredients = keyword
    ? otherIngredients.filter((value) => normalizeBaseSpiritKey(value).includes(keyword))
    : otherIngredients;

  const groups = {
    liqueur: [],
    juice: [],
    soda: [],
    dairy: [],
    syrup: [],
    nut: [],
    other: []
  };

  filteredOtherIngredients.forEach((value) => {
    const groupKey = classifyIngredientGroup(value);
    if (groupKey === "base" || groupKey === "fruit") {
      groups.other.push(value);
      return;
    }
    groups[groupKey].push(value);
  });

  const order = ["liqueur", "juice", "soda", "dairy", "syrup", "nut", "other"];
  const groupLabels = getText("ingredientGroups");

  order.forEach((key) => {
    if (!groups[key].length) return;

    const groupSection = document.createElement("details");
    groupSection.className = "ingredient-group";
    groupSection.open = true;

    const title = document.createElement("summary");
    title.className = "ingredient-group-title";
    title.textContent = groupLabels[key];

    const list = document.createElement("div");
    list.className = "ingredient-group-list";

    groups[key].forEach((value) => {
      const card = createIngredientCard(value);
      list.append(card);
    });

    groupSection.append(title, list);
    ingredientChecklistEl.append(groupSection);
  });

  updateSelectedCount();
}

function setSelectValue(selectEl, value) {
  if (!selectEl) return;
  if (!value) {
    selectEl.value = "";
    return;
  }
  const hasValue = Array.from(selectEl.options).some((option) => option.value === value);
  selectEl.value = hasValue ? value : "";
}

async function getCategoriesByAlcoholic(alcoholicType) {
  if (alcoholicCategoryCache.has(alcoholicType)) {
    return alcoholicCategoryCache.get(alcoholicType);
  }

  const listRes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(alcoholicType)}`);
  const listData = await listRes.json();
  const drinks = listData.drinks || [];

  if (!drinks.length) {
    alcoholicCategoryCache.set(alcoholicType, []);
    return [];
  }

  const ids = Array.from(new Set(drinks.map((item) => item.idDrink).filter(Boolean)));
  const categorySet = new Set();
  const batchSize = 12;

  for (let index = 0; index < ids.length; index += batchSize) {
    const batchIds = ids.slice(index, index + batchSize);
    const categories = await Promise.allSettled(
      batchIds.map(async (id) => {
        const detailRes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`);
        const detailData = await detailRes.json();
        return detailData.drinks?.[0]?.strCategory || "";
      })
    );

    categories.forEach((result) => {
      if (result.status === "fulfilled" && result.value) {
        categorySet.add(result.value);
      }
    });

    if (categorySet.size === filterOptions.category.length) {
      break;
    }
  }

  let filteredCategories = filterOptions.category.filter((category) => categorySet.has(category));
  if (alcoholicType === "Alcoholic") {
    filteredCategories = filteredCategories.filter((category) => /^(cocktail|shot)$/i.test(category));
  }
  if (/^non[\s-]*alcoholic$/i.test(alcoholicType)) {
    filteredCategories = filteredCategories.filter((category) => !/^cocktail$/i.test(category));
  }
  alcoholicCategoryCache.set(alcoholicType, filteredCategories);
  return filteredCategories;
}

function updateCategoryByAlcoholic() {
  if (!categorySelectEl || !alcoholicSelectEl || !filtersLoaded) return;

  const alcoholicValue = alcoholicSelectEl.value;
  const currentCategory = categorySelectEl.value;
  const isOptionalAlcohol = /^option(?:al)?[\s-]*alcohol$/i.test(alcoholicValue);

  if (!alcoholicValue || isOptionalAlcohol) {
    populateSelect(categorySelectEl, filterOptions.category);
    setSelectValue(categorySelectEl, currentCategory);
    updateStatusText("statusReady");
    return;
  }

  let filteredCategories = [...filterOptions.category];
  if (alcoholicValue === "Alcoholic") {
    filteredCategories = filteredCategories.filter((category) => /^(cocktail|shot)$/i.test(category));
  } else if (/^non[\s-]*alcoholic$/i.test(alcoholicValue)) {
    filteredCategories = filteredCategories.filter((category) => !/^cocktail$/i.test(category));
  }

  populateSelect(categorySelectEl, filteredCategories);
  setSelectValue(categorySelectEl, currentCategory);
  updateStatusText("statusReady");
}

async function loadCocktailFilters() {
  if (filtersLoaded && ingredientsLoaded && searchFiltersLoaded) {
    updateStatusText("statusReady");
    return;
  }

  await loadIngredientOptions();
  await loadSearchFilterOptions();
  filtersLoaded = true;
}

async function loadIngredientOptions() {
  if (ingredientsLoaded) {
    return;
  }

  const cachedIngredients = safeGetJsonLocalStorage(INGREDIENT_CACHE_KEY);
  if (Array.isArray(cachedIngredients) && cachedIngredients.length) {
    const filteredIngredients = cachedIngredients.filter((value) => !isRemovedIngredient(value));
    filterOptions.ingredient = filteredIngredients;
    pruneSelectedIngredients(filteredIngredients);
    if (filteredIngredients.length !== cachedIngredients.length) {
      safeSetJsonLocalStorage(INGREDIENT_CACHE_KEY, filteredIngredients);
    }
    renderBaseSpiritChecklist(filterOptions.ingredient);
    renderIngredientChecklist(filterOptions.ingredient);
    ingredientsLoaded = true;
    filtersLoaded = searchFiltersLoaded;
    updateStatusText("statusReady");
    return;
  }

  updateStatusText("statusLoading");

  try {
    const ingredientData = await fetchFirstSuccessfulJson([
      `${COCKTAIL_DB_V2_BASE_URL}/list.php?i=list`,
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    ]);
    const loadedIngredients = getListValues(ingredientData.drinks || [], "strIngredient1");
    filterOptions.ingredient = loadedIngredients.filter((value) => !isRemovedIngredient(value));
    pruneSelectedIngredients(filterOptions.ingredient);

    if (!filterOptions.ingredient.length) {
      throw new Error("No ingredient options");
    }

    safeSetJsonLocalStorage(INGREDIENT_CACHE_KEY, filterOptions.ingredient);
    renderBaseSpiritChecklist(filterOptions.ingredient);
    renderIngredientChecklist(filterOptions.ingredient);

    ingredientsLoaded = true;
    filtersLoaded = searchFiltersLoaded;
    if (searchFiltersLoaded) {
      updateStatusText("statusReady");
    }
  } catch (error) {
    updateStatusText("statusError");
  }
}

async function loadSearchFilterOptions() {
  if (searchFiltersLoaded) {
    return;
  }

  try {
    const [categoryData, glassData, alcoholicData] = await Promise.all([
      fetchFirstSuccessfulJson([
        `${COCKTAIL_DB_V2_BASE_URL}/list.php?c=list`,
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      ]),
      fetchFirstSuccessfulJson([
        `${COCKTAIL_DB_V2_BASE_URL}/list.php?g=list`,
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
      ]),
      fetchFirstSuccessfulJson([
        `${COCKTAIL_DB_V2_BASE_URL}/list.php?a=list`,
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
      ])
    ]);

    filterOptions.category = getListValues(categoryData.drinks || [], "strCategory");
    filterOptions.glass = getListValues(glassData.drinks || [], "strGlass");
    filterOptions.alcoholic = getListValues(alcoholicData.drinks || [], "strAlcoholic");

    populateSelect(categorySelectEl, filterOptions.category);
    populateSelect(glassSelectEl, filterOptions.glass);
    populateSelect(alcoholicSelectEl, filterOptions.alcoholic);

    searchFiltersLoaded = true;
    filtersLoaded = ingredientsLoaded;
    if (ingredientsLoaded) {
      updateStatusText("statusReady");
    }
  } catch (error) {
    updateStatusText("statusError");
  }
}

async function fetchIdsByFilter(filterKey, value) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filterKey}=${encodeURIComponent(value)}`);
  const data = await res.json();
  return new Set((data.drinks || []).map((drink) => drink.idDrink).filter(Boolean));
}

function toApiIngredientValue(value) {
  return value.trim().replace(/\s+/g, "_");
}

async function fetchDrinksByIngredients(ingredients) {
  // 新逻辑：只要选中项中任意两个组合能组成酒就返回结果
  if (!Array.isArray(ingredients) || ingredients.length < 2) return [];

  // 生成所有两两组合（含egg特殊处理）
  function getIngredientPairs(arr) {
    const pairs = [];
    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        pairs.push([arr[i], arr[j]]);
      }
    }
    return pairs;
  }

  const pairs = getIngredientPairs(ingredients);
  const EGG_VARIANTS = ["Egg", "Egg White", "Egg Yolk"];

  // 对每组组合调用API，egg特殊处理
  const fetches = pairs.map(async (pair) => {
    // 如果有egg，扩展
    if (pair.some((i) => normalizeBaseSpiritKey(i) === "egg")) {
      const nonEgg = pair.filter((i) => normalizeBaseSpiritKey(i) !== "egg");
      const results = await Promise.all(
        EGG_VARIANTS.map(async (eggVariant) => {
          const variant = [...nonEgg, eggVariant];
          const ingredientQuery = variant.map(toApiIngredientValue).join(",");
          const res = await fetch(`${COCKTAIL_DB_V2_BASE_URL}/filter.php?i=${encodeURIComponent(ingredientQuery)}`);
          const data = await res.json();
          return data.drinks || [];
        })
      );
      return results.flat();
    } else {
      const ingredientQuery = pair.map(toApiIngredientValue).join(",");
      const res = await fetch(`${COCKTAIL_DB_V2_BASE_URL}/filter.php?i=${encodeURIComponent(ingredientQuery)}`);
      const data = await res.json();
      return data.drinks || [];
    }
  });

  // 收集所有结果并去重
  const allResults = (await Promise.all(fetches)).flat();
  // 统计每个酒用到了多少选中项，优先展示用得多的
  const drinkMap = new Map(); // idDrink -> {drink, matchCount}
  for (const drink of allResults) {
    if (drink && drink.idDrink) {
      if (!drinkMap.has(drink.idDrink)) {
        drinkMap.set(drink.idDrink, { drink, matchCount: 0 });
      }
      // 统计命中次数
      drinkMap.get(drink.idDrink).matchCount++;
    }
  }

  // 进一步统计“完全适配”——即所有ingredient都在酒里
  const resultArr = Array.from(drinkMap.values());
  // 需要获取酒的所有原料
  async function fetchFullDrinkInfo(drink) {
    if (drink.strIngredients) return drink; // 已经有详细信息
    const res = await fetch(`${COCKTAIL_DB_V2_BASE_URL}/lookup.php?i=${drink.idDrink}`);
    const data = await res.json();
    return data.drinks && data.drinks[0] ? data.drinks[0] : drink;
  }

  // 先查出所有 drink 的详细原料
  const detailedDrinks = await Promise.all(resultArr.map(obj => fetchFullDrinkInfo(obj.drink)));

  // 计算每个 drink 匹配了多少选中项
  function countMatchedIngredients(drink, selected) {
    const normalizedSelected = selected.map(normalizeBaseSpiritKey);
    const drinkIngredients = [];
    for (let i = 1; i <= 15; ++i) {
      const ing = drink[`strIngredient${i}`];
      if (ing) drinkIngredients.push(normalizeBaseSpiritKey(ing));
    }
    // egg 特殊处理
    return normalizedSelected.filter(sel => {
      if (sel === "egg") {
        return drinkIngredients.includes("egg") || drinkIngredients.includes("egg white") || drinkIngredients.includes("egg yolk");
      }
      return drinkIngredients.includes(sel);
    }).length;
  }

  // 重新排序，优先展示适配项多的
  const sorted = resultArr
    .map((obj, idx) => {
      const drink = detailedDrinks[idx];
      const matchCount = countMatchedIngredients(drink, ingredients);
      return { drink: obj.drink, matchCount };
    })
    .sort((a, b) => b.matchCount - a.matchCount);

  return sorted.map(obj => obj.drink);
}

function intersectIdSets(idSets) {
  if (!idSets.length) return new Set();
  const [first, ...rest] = idSets;
  return new Set(Array.from(first).filter((id) => rest.every((set) => set.has(id))));
}

async function mixOneDrink() {
  if (!filtersLoaded) {
    await loadCocktailFilters();
    if (!filtersLoaded) return;
  }

  updateStatusText("statusMixing");

  try {
    const alcoholicValue = selectedAlcoholic || "";
    const ingredientValues = Array.from(selectedIngredients);

    if (ingredientValues.length < 1) {
      updateStatusText("mixNeedAtLeastTwo");
      return;
    }

    let matchedDrinks = await fetchDrinksByIngredients(ingredientValues);

    if (!matchedDrinks.length) {
      updateStatusText("statusNoResult");
      return;
    }

    // 根据酒精类型过滤
    if (alcoholicValue) {
      const filterIdSet = await fetchIdsByFilter("a", alcoholicValue);
      matchedDrinks = matchedDrinks.filter((drink) => filterIdSet.has(drink.idDrink));

      if (!matchedDrinks.length) {
        updateStatusText("statusNoResult");
        return;
      }
    }

    matchedDrinks.sort((left, right) => left.strDrink.localeCompare(right.strDrink));
    mixedDrinkCards = matchedDrinks;
    currentMixedDrinkIndex = 0;
    mixSourceMode = "search";
    updateStatusMessage("");
    await renderCurrentMixedDrinkCard(true);
  } catch (error) {
    updateStatusText("statusError");
  }
}

function applyLanguage(langCode) {
  currentLanguage = langCode === "zh" ? "zh" : "en";
  safeSetLocalStorage("arkti-language", currentLanguage);

  if (currentLanguageEl) {
    currentLanguageEl.textContent = getText("languageLabel");
  }

  languageOptions.forEach((option) => {
    option.classList.toggle("active", option.dataset.code === currentLanguage);
  });

  if (navCollectionsEl) navCollectionsEl.textContent = getText("collections");
  if (navAboutEl) navAboutEl.textContent = getText("about");
  if (collectionsTitleEl) collectionsTitleEl.textContent = getText("collectionsTitle");
  if (startNowTabEl) startNowTabEl.textContent = getText("startNow");
  
  
  // Update sidebar elements
  if (sidebarMenuTitleEl) sidebarMenuTitleEl.textContent = getText("menu");
  if (sidebarCollectionsEl) sidebarCollectionsEl.textContent = getText("sidebarCollections");
  if (sidebarAboutEl) sidebarAboutEl.textContent = getText("sidebarAbout");
  
  // Update About page elements
  const aboutSectionLabelEl = document.getElementById("aboutSectionLabel");
  const aboutMainTitleEl = document.getElementById("aboutMainTitle");
  const aboutIntro1El = document.getElementById("aboutIntro1");
  const aboutIntro2El = document.getElementById("aboutIntro2");
  const aboutIntro3El = document.getElementById("aboutIntro3");
  const aboutIntro4El = document.getElementById("aboutIntro4");
  const aboutBtnGithubEl = document.getElementById("aboutBtnGithub");
  const aboutDesc1El = document.getElementById("aboutDesc1");
  const aboutDesc2El = document.getElementById("aboutDesc2");
  const aboutDesc3El = document.getElementById("aboutDesc3");
  const aboutDesc4El = document.getElementById("aboutDesc4");
  const aboutDesc5El = document.getElementById("aboutDesc5");
  const aboutDesc6El = document.getElementById("aboutDesc6");
  const aboutDesc7El = document.getElementById("aboutDesc7");
  
  if (aboutSectionLabelEl) aboutSectionLabelEl.textContent = getText("aboutSectionLabel");
  if (aboutMainTitleEl) aboutMainTitleEl.textContent = getText("aboutMainTitle");
  if (aboutIntro1El) aboutIntro1El.textContent = getText("aboutIntro1");
  if (aboutIntro2El) aboutIntro2El.textContent = getText("aboutIntro2");
  
  // For links, we need to preserve the HTML structure and replace the prefix text
  if (aboutIntro3El) {
    const linkUrl = "https://leminxu.github.io/MistBar-quiz/";
    const linkLabel = getText("aboutIntro3");
    aboutIntro3El.innerHTML = linkLabel + `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="about-link">${linkUrl}</a>`;
  }
  if (aboutIntro4El) {
    const linkUrl = "https://leminxu.github.io/MistBar-quiz/";
    const linkLabel = getText("aboutIntro4");
    aboutIntro4El.innerHTML = linkLabel + `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="about-link">${linkUrl}</a>`;
  }
  
  if (aboutBtnGithubEl) aboutBtnGithubEl.textContent = getText("aboutBtnGithub");
  if (aboutDesc1El) aboutDesc1El.textContent = getText("aboutDesc1");
  if (aboutDesc2El) aboutDesc2El.textContent = getText("aboutDesc2");
  if (aboutDesc3El) aboutDesc3El.textContent = getText("aboutDesc3");
  if (aboutDesc4El) aboutDesc4El.textContent = getText("aboutDesc4");
  if (aboutDesc5El) aboutDesc5El.textContent = getText("aboutDesc5");
  if (aboutDesc6El) aboutDesc6El.textContent = getText("aboutDesc6");
  
  if (aboutDesc7El) {
    const text = getText("aboutDesc7");
    const linkUrl = "https://github.com/YBWLawao/ARKTI";
    aboutDesc7El.innerHTML = text.replace(/ACGTI/g, `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="about-link"><strong>ACGTI</strong></a>`);
  }
  
// Update entry page elements
  if (entrySubtitleEl) entrySubtitleEl.textContent = getText("entrySubtitle");
  if (entryTitleLineEls[0]) entryTitleLineEls[0].textContent = getText("entryTitle1");
  if (entryTitleLineEls[1]) entryTitleLineEls[1].innerHTML = getText("entryTitle2");
  if (entryDescriptionEl) entryDescriptionEl.innerHTML = getText("entryDescription");
  
  // Update quiz page elements
  if (quizSubtitleEl) quizSubtitleEl.textContent = getText("quizSubtitle");
  if (quizTitle1El) quizTitle1El.textContent = getText("quizTitle1");
  if (quizTitle2El) quizTitle2El.innerHTML = getText("quizTitle2");
  if (quizDescriptionEl) quizDescriptionEl.textContent = getText("quizDescription");
  
  if (actionSearchTitleEl) actionSearchTitleEl.textContent = getText("actionSearchTitle");
  if (actionSearchDescEl) actionSearchDescEl.innerHTML = getText("actionSearchDesc");
  if (actionTarotTitleEl) actionTarotTitleEl.textContent = getText("actionTarotTitle");
  if (actionTarotDescEl) actionTarotDescEl.innerHTML = getText("actionTarotDesc");
  if (actionRandomTitleEl) actionRandomTitleEl.textContent = getText("actionRandomTitle");
  if (actionRandomDescEl) actionRandomDescEl.innerHTML = getText("actionRandomDesc");
  
  if (entryTarotBtn) entryTarotBtn.textContent = getText("tarot");
  if (entrySearchBtn) entrySearchBtn.textContent = getText("search");
  if (entryRandomBtn) entryRandomBtn.textContent = getText("random");
  if (baseSpiritStepEl) baseSpiritStepEl.textContent = getText("baseSpiritStep");
  if (searchTitleEl) searchTitleEl.textContent = getText("searchTitle");
  
  // 酒精偏好选择按钮
  const alcoholicChoiceTitleEl = document.getElementById("alcoholicChoiceTitle");
  const alcoholicChoiceYesEl = document.getElementById("alcoholicChoiceYes");
  const alcoholicChoiceNoEl = document.getElementById("alcoholicChoiceNo");
  if (alcoholicChoiceTitleEl) alcoholicChoiceTitleEl.textContent = getText("alcoholicChoiceTitle");
  if (alcoholicChoiceYesEl) alcoholicChoiceYesEl.textContent = getText("alcoholicChoiceYes");
  if (alcoholicChoiceNoEl) alcoholicChoiceNoEl.textContent = getText("alcoholicChoiceNo");
  if (mixButtonEl) mixButtonEl.textContent = getText("alcoholicNextStep");
  
  if (baseSpiritPageTitleEl) baseSpiritPageTitleEl.textContent = getText("baseSpiritPageTitle");
  if (baseSpiritSearchInputEl) {
    const placeholder = getText("baseSpiritSearchPlaceholder");
    baseSpiritSearchInputEl.placeholder = placeholder;
    baseSpiritSearchInputEl.setAttribute("aria-label", placeholder);
  }
  if (ingredientSearchInputEl) {
    const placeholder = getText("ingredientsSearchPlaceholder");
    ingredientSearchInputEl.placeholder = placeholder;
    ingredientSearchInputEl.setAttribute("aria-label", placeholder);
  }
  if (ingredientsPageTitleEl) ingredientsPageTitleEl.textContent = getText("ingredientsPageTitle");
  if (ingredientLabelEl) ingredientLabelEl.textContent = getText("ingredientLabel");
  if (openIngredientsBtnEl) openIngredientsBtnEl.textContent = getText("ingredientOpen");
  if (baseBackBtnEl) baseBackBtnEl.setAttribute("aria-label", getText("ingredientBack"));
  if (baseNextBtnEl) baseNextBtnEl.textContent = getText("ingredientDone");
  if (searchBackBtnEl) searchBackBtnEl.setAttribute("aria-label", getText("ingredientBack"));
  if (ingredientsBackBtnEl) ingredientsBackBtnEl.setAttribute("aria-label", getText("ingredientBack"));
  if (ingredientsDoneBtnEl) ingredientsDoneBtnEl.textContent = getText("ingredientDone");
  if (categoryLabelEl) categoryLabelEl.textContent = getText("categoryLabel");
  if (glassLabelEl) glassLabelEl.textContent = getText("glassLabel");
  if (alcoholicLabelEl) alcoholicLabelEl.textContent = getText("alcoholicLabel");
  updateMixResultTitle();
  if (cocktailBackTitleEl) cocktailBackTitleEl.textContent = getText("mixBackTitle");
  if (cocktailSwipeHintEl) cocktailSwipeHintEl.textContent = getText("mixSwipeHint");
  if (mixBackButtonEl) mixBackButtonEl.setAttribute("aria-label", getText("mixBackSearch"));
  if (noticeConfirmBtnEl) noticeConfirmBtnEl.textContent = getText("noticeConfirm");
  updateSelectedCount();

  if (filtersLoaded) {
    const currentCategory = categorySelectEl ? categorySelectEl.value : "";
    const currentGlass = glassSelectEl ? glassSelectEl.value : "";
    const currentAlcoholic = alcoholicSelectEl ? alcoholicSelectEl.value : "";

    if (categorySelectEl) {
      populateSelect(categorySelectEl, filterOptions.category);
    }
    if (glassSelectEl) {
      populateSelect(glassSelectEl, filterOptions.glass);
    }
    renderBaseSpiritChecklist(filterOptions.ingredient);
    renderIngredientChecklist(filterOptions.ingredient);
    if (alcoholicSelectEl) {
      populateSelect(alcoholicSelectEl, filterOptions.alcoholic);
    }

    setSelectValue(categorySelectEl, currentCategory);
    setSelectValue(glassSelectEl, currentGlass);
    setSelectValue(alcoholicSelectEl, currentAlcoholic);

    updateCategoryByAlcoholic();
  }

  if (filtersLoaded) {
    updateStatusText("statusReady");
  }

  if (mixedDrinkCards.length) {
    renderCurrentMixedDrinkCard(false);
  }

  initStarProgressBar();
  renderCurrentQuestion();
  updateProgress();
}

// Entry page action cards click handlers
document.addEventListener("click", (event) => {
  const target = event.target;
  const actionCard = target.closest('.action-card');
  if (!actionCard) return;
  
  const action = actionCard.dataset.action;
  
  if (action === "tarot") {
    safeSetLocalStorage("arkti-entry-mode", "tarot");
    setAppView("quiz");
    initStarProgressBar();
    renderCurrentQuestion();
    updateProgress();
    window.scrollTo(0, 0);
  } else if (action === "search") {
    safeSetLocalStorage("arkti-entry-mode", "search");
    openSearchView();
  } else if (action === "random") {
    safeSetLocalStorage("arkti-entry-mode", "random");
    openRandomDrink();
  }
});

if (tarotEntryBtn) {
  tarotEntryBtn.addEventListener("click", () => {
    safeSetLocalStorage("arkti-entry-mode", "tarot");
    setAppView("quiz");
    initStarProgressBar();
    renderCurrentQuestion();
    updateProgress();
    window.scrollTo(0, 0);
  });
}

if (entrySearchBtn) {
  entrySearchBtn.addEventListener("click", async () => {
    safeSetLocalStorage("arkti-entry-mode", "search");
    await openSearchView();
  });
}

if (entryRandomBtn) {
  entryRandomBtn.addEventListener("click", async () => {
    safeSetLocalStorage("arkti-entry-mode", "random");
    await openRandomDrink();
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest('.entry-btn[data-action="search"]');
  if (!button) return;

  event.preventDefault();
  safeSetLocalStorage("arkti-entry-mode", "search");
  openSearchView();
});

if (alcoholicSelectEl) {
  alcoholicSelectEl.addEventListener("change", () => {
    updateCategoryByAlcoholic();
  });
}

if (mixButtonEl) {
  mixButtonEl.addEventListener("click", () => {
    // 检查是否选择了酒精类型
    const alcoholicBtns = document.querySelectorAll('.alcoholic-choice-btn');
    const selectedBtn = Array.from(alcoholicBtns).find(btn => btn.classList.contains('selected'));
    
    if (!selectedBtn) {
      alert('Please select an option first!');
      return;
    }
    
    selectedAlcoholic = selectedBtn.getAttribute('data-value');
    
    // 根据选择跳转
    if (selectedAlcoholic === "Non_Alcoholic") {
      // 跳过基酒选择，直接到配料页面
      setAppView("ingredients");
    } else {
      // 进入基酒选择页面
      setAppView("ingredients-base");
    }
    window.scrollTo(0, 0);
  });
}

// 酒精类型选择按钮逻辑 - 使用事件代理确保按钮正常工作
document.addEventListener('DOMContentLoaded', function() {
  // 使用事件代理处理动态内容
  document.addEventListener('click', function(e) {
    if (e.target.matches('.alcoholic-choice-btn')) {
      const alcoholicBtns = document.querySelectorAll('.alcoholic-choice-btn');
      alcoholicBtns.forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  });
});

const alcoholicChoiceBtns = document.querySelectorAll('.alcoholic-choice-btn');
alcoholicChoiceBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    alcoholicChoiceBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

if (searchBackBtnEl) {
  searchBackBtnEl.addEventListener("click", () => {
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (openIngredientsBtnEl) {
  openIngredientsBtnEl.addEventListener("click", () => {
    setAppView("ingredients-base");
    window.scrollTo(0, 0);
  });
}

if (baseNextBtnEl) {
  baseNextBtnEl.addEventListener("click", () => {
    if (!getSelectedBaseSpiritCount()) {
      showNoticeModal(getText("mixNeedBaseSpirit"));
      return;
    }
    setAppView("ingredients");
    window.scrollTo(0, 0);
    updateStatusText("statusReady");
  });
}

if (baseSpiritSearchInputEl) {
  baseSpiritSearchInputEl.addEventListener("input", () => {
    baseSpiritSearchQuery = baseSpiritSearchInputEl.value || "";
    if (filterOptions.ingredient.length) {
      renderBaseSpiritChecklist(filterOptions.ingredient);
    }
  });
}

if (ingredientSearchInputEl) {
  ingredientSearchInputEl.addEventListener("input", () => {
    ingredientSearchQuery = ingredientSearchInputEl.value || "";
    if (filterOptions.ingredient.length) {
      renderIngredientChecklist(filterOptions.ingredient);
    }
  });
}

if (baseBackBtnEl) {
  baseBackBtnEl.addEventListener("click", () => {
    setAppView("search");
    window.scrollTo(0, 0);
  });
}

if (ingredientsDoneBtnEl) {
  ingredientsDoneBtnEl.addEventListener("click", async () => {
    if (!selectedIngredients.size) {
      updateStatusText("mixNeedAtLeastTwo");
      return;
    }
    // 直接调一杯酒
    await mixOneDrink();
    if (mixedDrinkCards.length > 0) {
      setAppView("mix-result");
      window.scrollTo(0, 0);
    }
  });
}

if (ingredientsBackBtnEl) {
  ingredientsBackBtnEl.addEventListener("click", () => {
    // 如果选择了non-alcoholic，返回到酒精偏好页面；否则返回到基酒页面
    if (selectedAlcoholic === "Non_Alcoholic") {
      setAppView("search");
    } else {
      setAppView("ingredients-base");
    }
    window.scrollTo(0, 0);
  });
}

if (backButtonEl) {
  backButtonEl.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex -= 1;
      renderCurrentQuestion();
      updateProgress();
    }
  });
}

if (mixBackButtonEl) {
  mixBackButtonEl.addEventListener("click", () => {
    if (mixSourceMode === "random") {
      setAppView("entry");
    } else {
      setAppView("search");
    }
    window.scrollTo(0, 0);
  });
}

if (tarotBackBtnEl) {
  tarotBackBtnEl.addEventListener("click", () => {
    // Reset quiz for replay
    answers.fill(null);
    currentQuestionIndex = 0;
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (quizBackBtnEl) {
  quizBackBtnEl.addEventListener("click", () => {
    // Reset quiz and return to entry
    answers.fill(null);
    currentQuestionIndex = 0;
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (tarotFlipCardEl) {
  tarotFlipCardEl.addEventListener("click", () => {
    tarotFlipCardEl.classList.toggle("is-flipped");
  });
  tarotFlipCardEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      tarotFlipCardEl.classList.toggle("is-flipped");
    }
  });
}

if (noticeConfirmBtnEl) {
  noticeConfirmBtnEl.addEventListener("click", () => {
    hideNoticeModal();
  });
}

if (noticeModalEl) {
  noticeModalEl.addEventListener("click", (event) => {
    if (event.target === noticeModalEl) {
      hideNoticeModal();
    }
  });
}

if (cocktailFlipCardEl) {
  cocktailFlipCardEl.addEventListener("click", () => {
    if (suppressFlipAfterSwipe) {
      suppressFlipAfterSwipe = false;
      return;
    }
    cocktailFlipCardEl.classList.toggle("is-flipped");
  });

  cocktailFlipCardEl.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  });

  cocktailFlipCardEl.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const diffX = touch.clientX - touchStartX;
    const diffY = touch.clientY - touchStartY;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      suppressFlipAfterSwipe = true;
      changeMixedDrinkCard(diffX < 0 ? 1 : -1);
    }
  });

  cocktailFlipCardEl.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeMixedDrinkCard(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeMixedDrinkCard(1);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      cocktailFlipCardEl.classList.toggle("is-flipped");
    }
  });
}

if (startNowTabEl) {
  startNowTabEl.addEventListener("click", () => {
    safeSetLocalStorage("arkti-entry-mode", "tab-start-now");
    setAppView("quiz");
    initStarProgressBar();
    renderCurrentQuestion();
    updateProgress();
    window.scrollTo(0, 0);
  });
}

if (brandHomeBtnEl) {
  brandHomeBtnEl.addEventListener("click", () => {
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (navCollectionsEl) {
  navCollectionsEl.addEventListener("click", async (event) => {
    event.preventDefault();
    await openCollectionsView();
  });
}

if (collectionsBackBtnEl) {
  collectionsBackBtnEl.addEventListener("click", () => {
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (navAboutEl) {
  navAboutEl.addEventListener("click", (event) => {
    event.preventDefault();
    setAppView("about");
    window.scrollTo(0, 0);
  });
}

if (aboutBackBtnEl) {
  aboutBackBtnEl.addEventListener("click", () => {
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (languageToggleEl && languageMenuEl) {
  languageToggleEl.addEventListener("click", () => {
    const isExpanded = languageToggleEl.getAttribute("aria-expanded") === "true";
    languageToggleEl.setAttribute("aria-expanded", String(!isExpanded));
    languageMenuEl.hidden = isExpanded;
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      applyLanguage(option.dataset.code || "en");
      languageMenuEl.hidden = true;
      languageToggleEl.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (languageMenuEl.hidden) return;
    if (!languageMenuEl.contains(target) && !languageToggleEl.contains(target)) {
      languageMenuEl.hidden = true;
      languageToggleEl.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && noticeModalEl && !noticeModalEl.hidden) {
    hideNoticeModal();
  }
  if (event.key === "Escape" && sidebarEl && !sidebarEl.hidden) {
    closeSidebar();
  }
});

// ── Sidebar Event Listeners ──
if (hamburgerBtnEl) {
  hamburgerBtnEl.addEventListener("click", () => {
    openSidebar();
  });
}

if (closeSidebarBtnEl) {
  closeSidebarBtnEl.addEventListener("click", () => {
    closeSidebar();
  });
}

if (sidebarOverlayEl) {
  sidebarOverlayEl.addEventListener("click", () => {
    closeSidebar();
  });
}

// Update sidebar navigation links
if (sidebarCollectionsEl) {
  sidebarCollectionsEl.addEventListener("click", (event) => {
    event.preventDefault();
    closeSidebar();
    safeSetLocalStorage("arkti-collections-source", "entry");
    setAppView("collections");
    window.scrollTo(0, 0);
  });
}

if (sidebarAboutEl) {
  sidebarAboutEl.addEventListener("click", (event) => {
    event.preventDefault();
    closeSidebar();
    setAppView("about");
    window.scrollTo(0, 0);
  });
}

const savedLanguage = safeGetLocalStorage("arkti-language");
hideNoticeModal();
applyLanguage(savedLanguage === "zh" ? "zh" : "en");

