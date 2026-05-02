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
const baseSpiritSubtitleEl = document.getElementById("baseSpiritSubtitle");
const ingredientsPageTitleEl = document.getElementById("ingredientsPageTitle");
const ingredientsSubtitleEl = document.getElementById("ingredientsSubtitle");
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
const prevCocktailBtnEl = document.getElementById("prevCocktailBtn");
const nextCocktailBtnEl = document.getElementById("nextCocktailBtn");
const noticeModalEl = document.getElementById("noticeModal");
const noticeMessageEl = document.getElementById("noticeMessage");
const noticeConfirmBtnEl = document.getElementById("noticeConfirmBtn");

// Tarot result elements
const tarotLoadingOverlayEl = document.getElementById("tarotLoadingOverlay");
const tarotResultAppEl = document.getElementById("tarotResultApp");
const tarotBackBtnEl = document.getElementById("tarotBackBtn");
const tarotTryAgainBtnEl = document.getElementById("tarotTryAgainBtn");
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

// 鸡尾酒名称中英文对照表
const COCKTAIL_NAME_TRANSLATIONS = {
  "Mojito": "莫吉托",
  "Margarita": "玛格丽特",
  "Old Fashioned": "老式鸡尾酒",
  "Negroni": "内格罗尼",
  "Daiquiri": "黛克瑞",
  "Manhattan": "曼哈顿",
  "Whiskey Sour": "威士忌酸味酒",
  "Martini": "马提尼",
  "Cosmopolitan": "大都会",
  "Pina Colada": "椰林飘香",
  "Mai Tai": "迈泰",
  "Gimlet": "琴蕾",
  "Bloody Mary": "血腥玛丽",
  "Moscow Mule": "莫斯科骡子",
  "Caipirinha": "凯匹林纳",
  "Singapore Sling": "新加坡司令",
  "Mint Julep": "薄荷朱利普",
  "Tom Collins": "汤姆柯林斯",
  "Aperol Spritz": "阿佩罗气泡酒",
  "Espresso Martini": "浓缩咖啡马提尼",
  "French 75": "法国75",
  "Sazerac": "萨泽拉克",
  "Paloma": "帕洛玛",
  "Long Island Iced Tea": "长岛冰茶",
  "Tequila Sunrise": "龙舌兰日出",
  "Sex on the Beach": "性感沙滩",
  "Bellini": "贝利尼",
  "Irish Coffee": "爱尔兰咖啡",
  "White Russian": "白色俄罗斯",
  "Black Russian": "黑色俄罗斯",
  "Gin and Tonic": "金汤力",
  "Rum and Coke": "朗姆可乐",
  "Screwdriver": "螺丝起子",
};

// 配料中英文对照表
const INGREDIENT_TRANSLATIONS = {
  // 基酒
  "Vodka": "伏特加",
  "Gin": "金酒",
  "Rum": "朗姆酒",
  "Light rum": "白朗姆酒",
  "Dark rum": "深色朗姆酒",
  "Tequila": "龙舌兰",
  "Whiskey": "威士忌",
  "Bourbon": "波旁威士忌",
  "Scotch": "苏格兰威士忌",
  "Brandy": "白兰地",
  "Cognac": "干邑",
  
  // 利口酒
  "Triple sec": "橙味利口酒",
  "Cointreau": "君度橙酒",
  "Grand Marnier": "金万利橙酒",
  "Kahlua": "咖啡利口酒",
  "Baileys irish cream": "百利甜酒",
  "Amaretto": "杏仁利口酒",
  "Campari": "金巴利",
  "Aperol": "阿佩罗",
  "Vermouth": "苦艾酒",
  "Sweet Vermouth": "甜苦艾酒",
  "Dry Vermouth": "干苦艾酒",
  
  // 果汁和饮料
  "Lime juice": "青柠汁",
  "Lemon juice": "柠檬汁",
  "Orange juice": "橙汁",
  "Cranberry juice": "蔓越莓汁",
  "Pineapple juice": "菠萝汁",
  "Grapefruit juice": "葡萄柚汁",
  "Tomato juice": "番茄汁",
  "Apple juice": "苹果汁",
  "Lime Juice": "青柠汁",
  "Lemon Juice": "柠檬汁",
  
  // 糖浆和甜味剂
  "Simple syrup": "糖浆",
  "Sugar syrup": "糖浆",
  "Sugar": "糖",
  "Honey": "蜂蜜",
  "Grenadine": "石榴糖浆",
  "Agave syrup": "龙舌兰糖浆",
  
  // 苏打水和气泡水
  "Soda water": "苏打水",
  "Club soda": "苏打水",
  "Tonic water": "汤力水",
  "Ginger ale": "姜汁汽水",
  "Ginger beer": "姜啤",
  "Cola": "可乐",
  "Sprite": "雪碧",
  "Prosecco": "普罗塞克起泡酒",
  "Champagne": "香槟",
  
  // 新鲜食材
  "Mint": "薄荷",
  "Lime": "青柠",
  "Lemon": "柠檬",
  "Orange": "橙子",
  "Cherry": "樱桃",
  "Strawberry": "草莓",
  "Cucumber": "黄瓜",
  "Basil": "罗勒",
  "Thyme": "百里香",
  "Rosemary": "迷迭香",
  
  // 其他
  "Ice": "冰块",
  "Salt": "盐",
  "Black pepper": "黑胡椒",
  "Tabasco sauce": "塔巴斯科辣酱",
  "Worcestershire sauce": "伍斯特酱",
  "Bitters": "苦精",
  "Angostura bitters": "安格斯图拉苦精",
  "Coffee": "咖啡",
  "Espresso": "浓缩咖啡",
  "Cream": "奶油",
  "Milk": "牛奶",
  "Coconut cream": "椰浆",
  "Egg white": "蛋清",
  "Maraschino cherry": "黑樱桃",
};

// 配方说明关键词翻译（用于简单替换）
const INSTRUCTION_KEYWORDS = {
  // 动词
  "Combine": "混合",
  "combine": "混合",
  "Mix": "混合",
  "mix": "混合",
  "Shake": "摇匀",
  "shake": "摇匀",
  "Stir": "搅拌",
  "stir": "搅拌",
  "Strain": "过滤",
  "strain": "过滤",
  "Pour": "倒入",
  "pour": "倒入",
  "Add": "加入",
  "add": "加入",
  "Muddle": "捣碎",
  "muddle": "捣碎",
  "Garnish": "装饰",
  "garnish": "装饰",
  "Serve": "上桌",
  "serve": "上桌",
  "Fill": "装满",
  "fill": "装满",
  "Top": "倒至顶部",
  "top": "倒至顶部",
  "Build": "直调",
  "build": "直调",
  "Layer": "分层",
  "layer": "分层",
  "Rim": "杯口沾边",
  "rim": "杯口沾边",
  "Squeeze": "挤压",
  "squeeze": "挤压",
  "Drop": "滴入",
  "drop": "滴入",
  
  // 名词
  "ingredients": "所有配料",
  "ice": "冰块",
  "shaker": "调酒器",
  "glass": "杯子",
  "cocktail glass": "鸡尾酒杯",
  "highball glass": "高球杯",
  "rocks glass": "古典杯",
  "old fashioned glass": "古典杯",
  "contents": "内容物",
  "wedge": "角",
  "slice": "片",
  "twist": "扭卷",
  "peel": "皮",
  "wheel": "轮片",
  "sprig": "枝",
  "cherry": "樱桃",
  "olive": "橄榄",
  "salt": "盐",
  "sugar": "糖",
  
  // 介词和连词
  " with ": " 加入 ",
  " into ": " 倒入 ",
  " in ": " 在 ",
  " and ": " 和 ",
  " all ": " 所有 ",
};

// Translation cache to avoid repeated lookups
const translationCache = {};

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
// Map tarot cards to specific cocktail IDs for consistency
const TAROT_COCKTAIL_IDS = {
  "Fool":             "11000",  // Mojito
  "Magician":         "17196",  // Cosmopolitan
  "High Priestess":   "11003",  // Negroni (classic blue cocktail alternative)
  "Empress":          "17208",  // Rose
  "Emperor":          "11001",  // Old Fashioned
  "Hierophant":       "12198",  // Sangria
  "Lovers":           "13804",  // Sex on the Beach
  "Chariot":          "13621",  // Tequila Sunrise
  "Strength":         "11004",  // Whiskey Sour
  "Hermit":           "17211",  // Dark and Stormy
  "Wheel of Fortune": "11007",  // Margarita
  "Justice":          "17255",  // Gimlet
  "Hanged Man":       "11003",  // Negroni
  "Death":            "11102",  // Black Russian
  "Temperance":       "15941",  // Americano
  "Devil":            "11320",  // Black Devil
  "Tower":            "17131",  // Hurricane
  "Star":             "11288",  // Stardust
  "Moon":             "11058",  // Moonlight
  "Sun":              "13621",  // Tequila Sunrise
  "Judgement":        "11006",  // Daiquiri
  "World":            "11888"   // Singapore Sling
};

const TAROT_COCKTAIL_KEYWORDS = {
  "Fool":             "mojito",
  "Magician":         "cosmopolitan",
  "High Priestess":   "negroni",
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
  "Moon":             "moonlight",
  "Sun":              "tequila sunrise",
  "Judgement":        "daiquiri",
  "World":            "singapore sling"
};

const TAROT_COLLECTION_CARDS = Object.keys(TAROT_IMAGES);
const INGREDIENT_CACHE_KEY = "arkti-ingredient-options";
const REQUEST_TIMEOUT_MS = 8000;

// Helper function to add delay between requests
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to batch process requests with delay
async function batchProcess(items, processor, batchSize = 5, delayMs = 100) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processor));
    results.push(...batchResults);
    if (i + batchSize < items.length) {
      await delay(delayMs);
    }
  }
  return results;
}

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
let filteredIngredientsForBaseSpirit = []; // Store filtered ingredients based on selected base spirits

// Quiz Questions - Immersive Story: Finding Yourself in the Mist
const questionsEn = [
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

const questionsZh = [
  { text: "迷雾环绕着你。你跨过一扇古老的门。门后是：", options: [
    { text: "A. 映出真实自我的镜子", tags: ["High Priestess", "Justice"] },
    { text: "B. 无尽延伸的蜿蜒道路", tags: ["Fool", "Magician"] },
    { text: "C. 繁花盛开的园地", tags: ["Empress", "Lovers"] },
    { text: "D. 秩序井然的金色宫殿", tags: ["Emperor", "Hierophant"] }
  ]},
  { text: "迷雾中走来一个身影。它是：", options: [
    { text: "A. 吟诵古老箴言的声音", tags: ["Hierophant", "High Priestess"] },
    { text: "B. 邀你共舞的手", tags: ["Lovers", "Chariot"] },
    { text: "C. 骑在烈马上的骑士", tags: ["Chariot", "Emperor"] },
    { text: "D. 温柔包容的怀抱", tags: ["Strength", "Hermit"] }
  ]},
  { text: "你想起上一次独处。那时你正在：", options: [
    { text: "A. 在黑暗中点起一盏灯", tags: ["Hermit", "Justice"] },
    { text: "B. 面对命运之轮的转动，无能为力", tags: ["Wheel of Fortune", "Death"] },
    { text: "C. 在对立的力量之间寻找平衡", tags: ["Justice", "Temperance"] },
    { text: "D. 倒悬着，等待时机", tags: ["Hanged Man", "Moon"] }
  ]},
  { text: "一个无法逃避的真相：生命终将结束。你感到：", options: [
    { text: "A. 这是自然的转化，我会重生", tags: ["Death", "Temperance"] },
    { text: "B. 我已学会放手，内心平和", tags: ["Temperance", "Hermit"] },
    { text: "C. 我最深的欲望被唤醒", tags: ["Devil", "Tower"] },
    { text: "D. 旧的自我必须粉碎才能重建", tags: ["Tower", "Fool"] }
  ]},
  { text: "天空裂开了一道口子。光芒穿透迷雾。那是：", options: [
    { text: "A. 永恒指引的星辰", tags: ["Star", "Judgement"] },
    { text: "B. 与影子交织的月光", tags: ["Moon", "Devil"] },
    { text: "C. 璀璨夺目的金色太阳", tags: ["Sun"] },
    { text: "D. 宇宙意识的觉醒", tags: ["Judgement", "World"] }
  ]},
  { text: "两条路在此分岔。一条通往：", options: [
    { text: "A. 完整的自我，完美的和谐", tags: ["World", "Temperance"] },
    { text: "B. 无限的可能性，创造的力量", tags: ["Magician", "Fool"] },
    { text: "C. 一座容纳所有答案的神殿", tags: ["High Priestess", "Hierophant"] },
    { text: "D. 生命的源头，万物的苏醒", tags: ["Empress", "Wheel of Fortune"] }
  ]},
  { text: "风暴突然降临。你的选择是：", options: [
    { text: "A. 无论代价，坚守我的真理", tags: ["Emperor", "Justice"] },
    { text: "B. 保持信念，以力量抗击", tags: ["Hierophant", "Strength"] },
    { text: "C. 反思内心，追随我的心", tags: ["Lovers", "Hanged Man"] },
    { text: "D. 以勇气乘风破浪", tags: ["Chariot", "Magician"] }
  ]},
  { text: "风暴过去，夜幕降临。你感觉到：", options: [
    { text: "A. 沉睡已久的勇气觉醒", tags: ["Strength", "Fool"] },
    { text: "B. 来自内心深处的古老智慧", tags: ["Hermit", "High Priestess"] },
    { text: "C. 命运之轮悄然转动", tags: ["Wheel of Fortune", "Judgement"] },
    { text: "D. 隐藏的真相闪闪发光", tags: ["Justice", "Devil"] }
  ]},
  { text: "穿越黑暗与光明，秘密浮现：", options: [
    { text: "A. 优雅地放手，自由随之而来", tags: ["Hanged Man", "Death"] },
    { text: "B. 在矛盾中寻找和谐", tags: ["Temperance", "Lovers"] },
    { text: "C. 拥抱欲望与阴影", tags: ["Devil", "Empress"] },
    { text: "D. 打破界限，获得重生", tags: ["Tower", "World"] }
  ]},
  { text: "迷雾散去。古老的门再次出现。你会：", options: [
    { text: "A. 打开它，迎接未知", tags: ["Star", "Strength"] },
    { text: "B. 忽视它，这只是一场梦", tags: ["Moon", "Hermit"] },
    { text: "C. 转身离开，原路返回", tags: ["Sun"] },
    { text: "D. 砸碎这扇门", tags: ["Judgement", "Chariot"] }
  ]}
];

const answers = Array(questionsEn.length).fill(null);
let currentQuestionIndex = 0;
let currentLanguage = "en";

// Helper function to get questions based on current language
function getQuestions() {
  return currentLanguage === "zh" ? questionsZh : questionsEn;
}

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
    baseSpiritPageTitle: "Choose Your Base Spirit",
    baseSpiritSubtitle: "Select the spirit that speaks to you.",
    baseSpiritSearchPlaceholder: "Search base spirit",
    ingredientsPageTitle: "Choose Other Ingredients",
    ingredientsSubtitle: "Select additional ingredients you have.",
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
    mixSwipeHint: "Tap card to flip",
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
    baseSpiritPageTitle: "选择您的基酒",
    baseSpiritSubtitle: "选择能与您对话的酒。",
    baseSpiritSearchPlaceholder: "搜索基酒",
    ingredientsPageTitle: "选择其他材料",
    ingredientsSubtitle: "选择您手边有的其他材料。",
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

// Local translation function using dictionary
function translateText(text, targetLang = "ZH") {
  if (!text || !text.trim()) return text;
  if (targetLang !== "ZH") return text;
  
  // Check cache first
  const cacheKey = `${text}_${targetLang}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }
  
  // Try exact match first (case-insensitive)
  const textLower = text.toLowerCase();
  
  // Check cocktail names
  for (const [en, zh] of Object.entries(COCKTAIL_NAME_TRANSLATIONS)) {
    if (en.toLowerCase() === textLower) {
      translationCache[cacheKey] = zh;
      return zh;
    }
  }
  
  // Check ingredients
  for (const [en, zh] of Object.entries(INGREDIENT_TRANSLATIONS)) {
    if (en.toLowerCase() === textLower) {
      translationCache[cacheKey] = zh;
      return zh;
    }
  }
  
  // Try partial match for ingredients (e.g., "Light Rum" might not match "Light rum")
  for (const [en, zh] of Object.entries(INGREDIENT_TRANSLATIONS)) {
    if (textLower.includes(en.toLowerCase()) || en.toLowerCase().includes(textLower)) {
      translationCache[cacheKey] = zh;
      return zh;
    }
  }
  
  // If no translation found, return original text
  return text;
}

// Translate instructions by replacing keywords
function translateInstructions(text, targetLang = "ZH") {
  if (!text || !text.trim()) return text;
  if (targetLang !== "ZH") return text;
  
  // Check cache first
  const cacheKey = `instructions_${text}_${targetLang}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }
  
  let translated = text;
  
  // Replace instruction keywords
  for (const [en, zh] of Object.entries(INSTRUCTION_KEYWORDS)) {
    // Use word boundary for better matching
    const regex = new RegExp(en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    translated = translated.replace(regex, zh);
  }
  
  // Translate ingredient names in the instructions
  for (const [en, zh] of Object.entries(INGREDIENT_TRANSLATIONS)) {
    const regex = new RegExp('\\b' + en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
    translated = translated.replace(regex, zh);
  }
  
  // Cache and return
  translationCache[cacheKey] = translated;
  return translated;
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
  const questions = getQuestions();
  for (let i = 0; i < questions.length; i++) {
    const star = document.createElement("span");
    star.className = "progress-star";
    star.textContent = "✦";
    starProgressContainerEl.appendChild(star);
  }
}

function renderCurrentQuestion() {
  const questions = getQuestions();
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
  const questions = getQuestions();
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
  const questions = getQuestions();
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

  // Fetch cocktail using consistent method
  try {
    const drink = await fetchCocktailForTarotCard(cardName);

    if (drink) {
      tarotCocktailImageEl.src = drink.strDrinkThumb || "";
      tarotCocktailImageEl.alt = drink.strDrink || "";
      
      // Translate cocktail name
      const drinkName = await getDrinkName(drink);
      tarotCocktailNameEl.textContent = drinkName;

      // Build ingredients list
      tarotCocktailIngredientsEl.innerHTML = "";
      for (let i = 1; i <= 15; i++) {
        const ing = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (!ing) break;
        const li = document.createElement("li");
        const ingSpan = document.createElement("span");
        
        // Translate ingredient if in Chinese mode
        ingSpan.textContent = currentLanguage === "zh" ? translateText(ing, "ZH") : ing;
        
        li.appendChild(ingSpan);
        if (measure) {
          const measureSpan = document.createElement("span");
          measureSpan.className = "measure";
          measureSpan.textContent = measure.trim();
          li.appendChild(measureSpan);
        }
        tarotCocktailIngredientsEl.appendChild(li);
      }

      // Translate instructions
      const instructions = getDrinkInstructions(drink);
      tarotCocktailStepsEl.textContent = instructions;
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
  // First try to fetch by fixed ID for consistency
  const cocktailId = TAROT_COCKTAIL_IDS[cardName];
  if (cocktailId) {
    try {
      const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
      const idData = await fetch(idUrl).then((response) => response.json());
      if (idData.drinks?.[0]) {
        return idData.drinks[0];
      }
    } catch (error) {
      console.warn(`Failed to fetch cocktail by ID ${cocktailId}, falling back to keyword search`, error);
    }
  }
  
  // Fallback to keyword search
  const keyword = TAROT_COCKTAIL_KEYWORDS[cardName] || "cocktail";
  const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(keyword)}`;
  const searchData = await fetch(searchUrl).then((response) => response.json());
  
  if (searchData.drinks?.length) {
    // Sort drinks by name to ensure consistent ordering
    const sortedDrinks = searchData.drinks.sort((a, b) => 
      a.strDrink.localeCompare(b.strDrink)
    );
    
    // Try to find exact match first (case-insensitive)
    const exactMatch = sortedDrinks.find(drink => 
      drink.strDrink.toLowerCase() === keyword.toLowerCase()
    );
    
    if (exactMatch) {
      return exactMatch;
    }
    
    // Otherwise return the first sorted result (consistent ordering)
    return sortedDrinks[0];
  }

  // Last resort: random
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
    console.log('[Collection] Current language:', currentLanguage);
    
    drinkImageEl.src = drink.strDrinkThumb || "";
    const drinkName = getDrinkName(drink);
    drinkImageEl.alt = drinkName;
    drinkNameEl.textContent = drinkName;

    ingredientListEl.innerHTML = "";
    const ingredients = getDrinkIngredients(drink);
    for (const item of ingredients) {
      const li = document.createElement("li");
      // Translate ingredient if in Chinese mode
      if (currentLanguage === "zh") {
        // Split measure and ingredient
        const parts = item.split(/\s+/);
        if (parts.length > 1) {
          // Has measure, translate only the ingredient part
          const measure = parts[0];
          const ingredient = parts.slice(1).join(" ");
          const translatedIng = translateText(ingredient, "ZH");
          li.textContent = `${measure} ${translatedIng}`;
        } else {
          // No measure, translate the whole thing
          li.textContent = translateText(item, "ZH");
        }
      } else {
        li.textContent = item;
      }
      ingredientListEl.append(li);
    }

    const instructions = getDrinkInstructions(drink);
    stepsEl.textContent = instructions;
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
    const zhInstructions = drink["strInstructionsZH-HANS"] || drink.strInstructionsZH;
    if (zhInstructions) return zhInstructions;
    
    // If no Chinese instructions, return English instructions
    const enInstructions = drink.strInstructions;
    if (enInstructions) {
      return enInstructions;
    }
    return getText("mixNoInstructions");
  }
  return drink.strInstructions || getText("mixNoInstructions");
}

function getDrinkName(drink) {
  if (currentLanguage === "zh" && drink.strDrink) {
    return translateText(drink.strDrink, "ZH");
  }
  return drink.strDrink || getText("mixUntitled");
}

function updateMixResultTitle() {
  if (!mixResultTitleEl) return;
  if (!mixedDrinkCards.length) {
    mixResultTitleEl.textContent = getText("mixResultTitle");
    return;
  }
  if (mixedDrinkCards.length === 1) {
    const drinkName = getDrinkName(mixedDrinkCards[0]);
    mixResultTitleEl.textContent = drinkName;
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
    const displayName = getDrinkName(currentDrink);
    cocktailNameEl.textContent = displayName;
  }
  cocktailImageEl.src = currentDrink.strDrinkThumb || "";
  const altName = getDrinkName(currentDrink);
  cocktailImageEl.alt = altName;

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

    const detailName = getDrinkName(detail);
    cocktailNameEl.textContent = detailName;
    cocktailImageEl.src = detail.strDrinkThumb || currentDrink.strDrinkThumb || "";
    cocktailImageEl.alt = detailName;

    cocktailIngredientsEl.innerHTML = "";
    const ingredients = getDrinkIngredients(detail);
    for (const item of ingredients) {
      const li = document.createElement("li");
      // Translate ingredient if in Chinese mode
      if (currentLanguage === "zh") {
        // Split measure and ingredient
        const parts = item.split(/\s+/);
        if (parts.length > 1) {
          // Has measure, translate only the ingredient part
          const measure = parts[0];
          const ingredient = parts.slice(1).join(" ");
          const translatedIng = translateText(ingredient, "ZH");
          li.textContent = `${measure} ${translatedIng}`;
        } else {
          // No measure, translate the whole thing
          li.textContent = translateText(item, "ZH");
        }
      } else {
        li.textContent = item;
      }
      cocktailIngredientsEl.append(li);
    }

    const instructions = getDrinkInstructions(detail);
    cocktailInstructionsEl.textContent = instructions;
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

  // Update navigation buttons visibility and state
  if (prevCocktailBtnEl && nextCocktailBtnEl) {
    if (mixedDrinkCards.length <= 1) {
      prevCocktailBtnEl.style.display = "none";
      nextCocktailBtnEl.style.display = "none";
    } else {
      prevCocktailBtnEl.style.display = "";
      nextCocktailBtnEl.style.display = "";
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

// Get selected base spirits
function getSelectedBaseSpirits() {
  return Array.from(selectedIngredients).filter((value) => isProvidedBaseSpirit(value) && !isLiqueurIngredient(value));
}

// Helper function to delay between API calls
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Map specific base spirit names to generic API ingredient names
const BASE_SPIRIT_TO_API_INGREDIENT = {
  // Rum brands/types
  'bacardi': 'Light rum',
  'bacardi limon': 'Light rum',
  'malibu rum': 'Coconut rum',
  'captain morgan': 'Spiced rum',
  'dark rum': 'Dark rum',
  'light rum': 'Light rum',
  'white rum': 'Light rum',
  'spiced rum': 'Spiced rum',
  'black rum': 'Dark rum',
  'gold rum': 'Light rum',
  '151 proof rum': 'Light rum',
  'rum': 'Light rum',
  
  // Vodka brands/types
  'absolut vodka': 'Vodka',
  'absolut citron': 'Vodka',
  'absolut kurant': 'Vodka',
  'absolut peppar': 'Vodka',
  'smirnoff': 'Vodka',
  'grey goose': 'Vodka',
  'vodka': 'Vodka',
  'citrus vodka': 'Vodka',
  'lemon vodka': 'Vodka',
  'vanilla vodka': 'Vodka',
  
  // Whiskey brands/types
  'jack daniels': 'Bourbon',
  'jim beam': 'Bourbon',
  'johnnie walker': 'Scotch',
  'crown royal': 'Canadian whisky',
  'wild turkey': 'Bourbon',
  'bourbon': 'Bourbon',
  'scotch': 'Scotch',
  'whiskey': 'Bourbon',
  'whisky': 'Scotch',
  'rye whiskey': 'Rye whiskey',
  'irish whiskey': 'Irish whiskey',
  'tennessee whiskey': 'Bourbon',
  
  // Gin
  'gin': 'Gin',
  'sloe gin': 'Sloe gin',
  
  // Tequila
  'tequila': 'Tequila',
  'gold tequila': 'Tequila',
  
  // Brandy
  'brandy': 'Brandy',
  'cognac': 'Cognac',
  
  // Others
  'absinthe': 'Absinthe',
  'mezcal': 'Mezcal',
  'sake': 'Sake',
  'cachaca': 'Cachaca',
};

function getApiIngredientName(baseSpiritName) {
  const normalized = normalizeBaseSpiritKey(baseSpiritName);
  return BASE_SPIRIT_TO_API_INGREDIENT[normalized] || baseSpiritName;
}

// Fetch ingredients that are compatible with selected base spirits
async function getIngredientsForBaseSpirits(baseSpirits) {
  console.log('[Ingredient Filter] Selected base spirits:', baseSpirits);
  
  if (!baseSpirits || baseSpirits.length === 0) {
    console.log('[Ingredient Filter] No base spirits selected, returning all ingredients');
    return filterOptions.ingredient; // Return all ingredients if no base spirit selected
  }
  
  try {
    const allIngredients = new Set();
    
    // For each selected base spirit, fetch cocktails containing it
    for (const baseSpirit of baseSpirits) {
      // Map to generic API ingredient name
      const apiIngredientName = getApiIngredientName(baseSpirit);
      const ingredientQuery = toApiIngredientValue(apiIngredientName);
      // Use v2 API for filtering by ingredient
      const apiUrl = `${COCKTAIL_DB_V2_BASE_URL}/filter.php?i=${ingredientQuery}`;
      console.log(`[Ingredient Filter] Mapping ${baseSpirit} -> ${apiIngredientName}`);
      console.log('[Ingredient Filter] API URL:', apiUrl);
      
      let res, data;
      try {
        res = await fetch(apiUrl);
        if (!res.ok) {
          console.warn(`[Ingredient Filter] API returned status ${res.status} for ${baseSpirit}`);
          if (res.status === 429) {
            console.warn('[Ingredient Filter] Rate limit hit, skipping remaining requests');
            break; // Stop fetching more base spirits
          }
          continue; // Skip this base spirit
        }
        data = await res.json();
      } catch (fetchError) {
        console.error(`[Ingredient Filter] Network error for ${baseSpirit}:`, fetchError);
        continue; // Skip this base spirit on error
      }
      
      console.log('[Ingredient Filter] Full API response:', data);
      
      // Check if drinks is actually an array
      let drinks = [];
      if (data.drinks && Array.isArray(data.drinks)) {
        drinks = data.drinks;
      } else if (data.drinks === 'None found' || data.drinks === 'no data found') {
        console.warn(`[Ingredient Filter] No cocktails found for ${apiIngredientName}`);
        drinks = [];
      }
      
      console.log(`[Ingredient Filter] Found ${drinks.length} cocktails for ${baseSpirit}`);
      
      if (drinks.length > 0) {
        console.log('[Ingredient Filter] Sample drink data:', drinks[0]);
      }
      
      // Fetch full details for each drink to get all ingredients
      // Limit to 5 drinks per base spirit to reduce API calls
      const drinksToFetch = drinks.slice(0, 5);
      for (let idx = 0; idx < drinksToFetch.length; idx++) {
        const drink = drinksToFetch[idx];
        
        if (!drink || !drink.idDrink) {
          console.warn(`[Ingredient Filter] Invalid drink object at index ${idx}:`, drink);
          continue;
        }
        try {
          // Add delay between requests to avoid rate limiting
          if (idx > 0) {
            await delay(150); // 150ms delay between requests
          }
          
          // Use v2 API for drink details
          const detailRes = await fetch(`${COCKTAIL_DB_V2_BASE_URL}/lookup.php?i=${drink.idDrink}`);
          if (!detailRes.ok) {
            console.warn(`[Ingredient Filter] Failed to fetch drink ${drink.idDrink}: ${detailRes.status}`);
            if (detailRes.status === 429) {
              console.warn('[Ingredient Filter] Rate limit hit on drink details');
              break; // Stop fetching more drinks
            }
            continue;
          }
          
          const detailData = await detailRes.json();
          const fullDrink = detailData.drinks?.[0];
          
          if (fullDrink) {
            // Extract all ingredients from this cocktail
            for (let i = 1; i <= 15; i++) {
              const ingredient = fullDrink[`strIngredient${i}`];
              if (ingredient && ingredient.trim()) {
                allIngredients.add(ingredient.trim());
              }
            }
          }
        } catch (err) {
          console.warn(`[Ingredient Filter] Failed to fetch drink details for ${drink.idDrink}:`, err.message);
        }
      }
      
      // Add longer delay between different base spirits to avoid rate limits
      if (baseSpirits.indexOf(baseSpirit) < baseSpirits.length - 1) {
        await delay(300); // 300ms delay between base spirits
      }
    }
    
    console.log(`[Ingredient Filter] Total unique ingredients found: ${allIngredients.size}`);
    console.log('[Ingredient Filter] Ingredients:', Array.from(allIngredients).slice(0, 20));
    
    // Filter to only include ingredients that exist in our main ingredient list
    const compatibleIngredients = filterOptions.ingredient.filter(ing => 
      Array.from(allIngredients).some(fetchedIng => 
        normalizeBaseSpiritKey(ing) === normalizeBaseSpiritKey(fetchedIng)
      )
    );
    
    console.log(`[Ingredient Filter] Compatible ingredients after filtering: ${compatibleIngredients.length}`);
    console.log('[Ingredient Filter] Sample compatible ingredients:', compatibleIngredients.slice(0, 10));
    
    if (compatibleIngredients.length === 0) {
      console.warn('[Ingredient Filter] No compatible ingredients found, returning all ingredients');
    }
    
    return compatibleIngredients.length > 0 ? compatibleIngredients : filterOptions.ingredient;
  } catch (error) {
    console.error('Error fetching ingredients for base spirits:', error);
    return filterOptions.ingredient; // Return all ingredients on error
  }
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
  if (baseNextBtnEl) {
    baseNextBtnEl.disabled = getSelectedBaseSpiritCount() === 0;
  }
}

function resetAllSelections() {
  selectedIngredients.clear();
  filteredIngredientsForBaseSpirit = [];
  // Re-render both checklists to remove .active classes from cards
  if (filterOptions.ingredient.length) {
    renderBaseSpiritChecklist(filterOptions.ingredient);
  }
  if (ingredientChecklistEl) {
    ingredientChecklistEl.innerHTML = "";
  }
  updateSelectedCount();
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
  console.log('[renderIngredientChecklist] Called with', values.length, 'values');
  console.log('[renderIngredientChecklist] First 10 values:', values.slice(0, 10));
  
  if (!ingredientChecklistEl) return;
  ingredientChecklistEl.innerHTML = "";

  const otherIngredients = getOtherIngredientValues(values);
  console.log('[renderIngredientChecklist] After filtering out base spirits:', otherIngredients.length);
  
  const keyword = normalizeBaseSpiritKey(ingredientSearchQuery);
  const filteredOtherIngredients = keyword
    ? otherIngredients.filter((value) => normalizeBaseSpiritKey(value).includes(keyword))
    : otherIngredients;
  
  console.log('[renderIngredientChecklist] After search filter:', filteredOtherIngredients.length);

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
    // Use filtered ingredients if available, otherwise use all ingredients
    const ingredientsToDisplay = filteredIngredientsForBaseSpirit.length > 0 
      ? filteredIngredientsForBaseSpirit 
      : filterOptions.ingredient;
    renderIngredientChecklist(ingredientsToDisplay);
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
    // Use filtered ingredients if available, otherwise use all ingredients
    const ingredientsToDisplay = filteredIngredientsForBaseSpirit.length > 0 
      ? filteredIngredientsForBaseSpirit 
      : filterOptions.ingredient;
    renderIngredientChecklist(ingredientsToDisplay);

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
  
  // Map ingredient names to API-compatible names (e.g., Bacardi -> Light rum)
  const mappedIngredients = ingredients.map(ing => {
    const normalized = normalizeBaseSpiritKey(ing);
    // Check if this is a base spirit that needs mapping
    if (BASE_SPIRIT_TO_API_INGREDIENT[normalized]) {
      return BASE_SPIRIT_TO_API_INGREDIENT[normalized];
    }
    return ing;
  });
  
  console.log('[fetchDrinksByIngredients] Original ingredients:', ingredients);
  console.log('[fetchDrinksByIngredients] Mapped ingredients:', mappedIngredients);

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

  const pairs = getIngredientPairs(mappedIngredients);
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
          const apiUrl = `${COCKTAIL_DB_V2_BASE_URL}/filter.php?i=${encodeURIComponent(ingredientQuery)}`;
          console.log('[fetchDrinksByIngredients] API call for egg variant:', variant, 'URL:', apiUrl);
          const res = await fetch(apiUrl);
          const data = await res.json();
          console.log('[fetchDrinksByIngredients] Egg variant response:', data);
          return data.drinks || [];
        })
      );
      return results.flat();
    } else {
      const ingredientQuery = pair.map(toApiIngredientValue).join(",");
      const apiUrl = `${COCKTAIL_DB_V2_BASE_URL}/filter.php?i=${encodeURIComponent(ingredientQuery)}`;
      console.log('[fetchDrinksByIngredients] API call for pair:', pair, 'Query:', ingredientQuery, 'URL:', apiUrl);
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log('[fetchDrinksByIngredients] API response:', data);
      return data.drinks || [];
    }
  });

  // 收集所有结果并去重
  const allResults = (await Promise.all(fetches)).flat();
  console.log('[fetchDrinksByIngredients] Total API results:', allResults.length);
  
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
    console.log('[mixOneDrink] Filters not loaded, loading now...');
    await loadCocktailFilters();
    if (!filtersLoaded) {
      console.error('[mixOneDrink] Failed to load filters');
      return;
    }
  }

  updateStatusText("statusMixing");

  try {
    const alcoholicValue = selectedAlcoholic || "";
    const ingredientValues = Array.from(selectedIngredients);
    
    console.log('[mixOneDrink] Starting with ingredients:', ingredientValues);
    console.log('[mixOneDrink] Alcoholic filter:', alcoholicValue);

    if (ingredientValues.length < 2) {
      console.warn('[mixOneDrink] Less than 2 ingredients selected');
      updateStatusText("mixNeedAtLeastTwo");
      return;
    }

    console.log('[mixOneDrink] Calling fetchDrinksByIngredients...');
    let matchedDrinks = await fetchDrinksByIngredients(ingredientValues);
    console.log('[mixOneDrink] Matched drinks:', matchedDrinks.length);
    
    if (matchedDrinks.length > 0) {
      console.log('[mixOneDrink] Sample matched drinks:', matchedDrinks.slice(0, 3).map(d => d.strDrink));
    }

    if (!matchedDrinks.length) {
      console.warn('[mixOneDrink] No drinks matched');
      updateStatusText("statusNoResult");
      return;
    }

    // 根据酒精类型过滤
    if (alcoholicValue) {
      console.log('[mixOneDrink] Applying alcoholic filter:', alcoholicValue);
      const filterIdSet = await fetchIdsByFilter("a", alcoholicValue);
      console.log('[mixOneDrink] Filter ID set size:', filterIdSet.size);
      matchedDrinks = matchedDrinks.filter((drink) => filterIdSet.has(drink.idDrink));
      console.log('[mixOneDrink] Drinks after alcoholic filter:', matchedDrinks.length);

      if (!matchedDrinks.length) {
        console.warn('[mixOneDrink] No drinks after alcoholic filter');
        updateStatusText("statusNoResult");
        return;
      }
    }

    matchedDrinks.sort((left, right) => left.strDrink.localeCompare(right.strDrink));
    mixedDrinkCards = matchedDrinks;
    currentMixedDrinkIndex = 0;
    mixSourceMode = "search";
    updateStatusMessage("");
    console.log('[mixOneDrink] Rendering', matchedDrinks.length, 'drinks');
    await renderCurrentMixedDrinkCard(true);
  } catch (error) {
    console.error('[mixOneDrink] Error:', error);
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
  if (baseSpiritSubtitleEl) baseSpiritSubtitleEl.textContent = getText("baseSpiritSubtitle");
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
  if (ingredientsSubtitleEl) ingredientsSubtitleEl.textContent = getText("ingredientsSubtitle");
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
    // Use filtered ingredients if available, otherwise use all ingredients
    const ingredientsToDisplay = filteredIngredientsForBaseSpirit.length > 0 
      ? filteredIngredientsForBaseSpirit 
      : filterOptions.ingredient;
    renderIngredientChecklist(ingredientsToDisplay);
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
    // Reset filtered ingredients when entering base spirit selection
    filteredIngredientsForBaseSpirit = [];
    setAppView("ingredients-base");
    window.scrollTo(0, 0);
  });
}

if (baseNextBtnEl) {
  baseNextBtnEl.addEventListener("click", async () => {
    if (!getSelectedBaseSpiritCount()) return;

    const selectedBaseSpirits = getSelectedBaseSpirits();

    // Show preparing overlay while fetching
    const prepOverlay = document.getElementById("ingredientsPrepOverlay");
    if (prepOverlay) prepOverlay.hidden = false;

    const compatibleIngredients = await getIngredientsForBaseSpirits(selectedBaseSpirits);
    filteredIngredientsForBaseSpirit = compatibleIngredients;
    renderIngredientChecklist(compatibleIngredients);

    // Hide overlay then navigate
    if (prepOverlay) prepOverlay.hidden = true;
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
    // Use filtered ingredients if available (when base spirits are selected), otherwise use all ingredients
    const ingredientsToRender = filteredIngredientsForBaseSpirit.length > 0 
      ? filteredIngredientsForBaseSpirit 
      : filterOptions.ingredient;
    if (ingredientsToRender.length) {
      renderIngredientChecklist(ingredientsToRender);
    }
  });
}

if (baseBackBtnEl) {
  baseBackBtnEl.addEventListener("click", () => {
    resetAllSelections();
    setAppView("search");
    window.scrollTo(0, 0);
  });
}

if (ingredientsDoneBtnEl) {
  ingredientsDoneBtnEl.addEventListener("click", async () => {
    console.log('[Ingredient Done] Button clicked');
    console.log('[Ingredient Done] Selected ingredients size:', selectedIngredients.size);
    console.log('[Ingredient Done] Selected ingredients:', Array.from(selectedIngredients));
    
    if (!selectedIngredients.size) {
      console.warn('[Ingredient Done] No ingredients selected');
      updateStatusText("mixNeedAtLeastTwo");
      return;
    }
    
    console.log('[Ingredient Done] Calling mixOneDrink...');
    // 直接调一杯酒
    await mixOneDrink();
    
    console.log('[Ingredient Done] mixOneDrink completed. mixedDrinkCards.length:', mixedDrinkCards.length);
    
    if (mixedDrinkCards.length > 0) {
      console.log('[Ingredient Done] Navigating to mix-result view');
      resetAllSelections();
      setAppView("mix-result");
      window.scrollTo(0, 0);
    } else {
      console.warn('[Ingredient Done] No drinks found, staying on current page');
    }
  });
}

if (ingredientsBackBtnEl) {
  ingredientsBackBtnEl.addEventListener("click", () => {
    // Only clear non-base-spirit ingredients when going back; keep base spirit selections intact
    Array.from(selectedIngredients).forEach((value) => {
      if (!(isProvidedBaseSpirit(value) && !isLiqueurIngredient(value))) {
        selectedIngredients.delete(value);
      }
    });
    // Reset filtered ingredients when going back to reselect base spirits
    filteredIngredientsForBaseSpirit = [];
    // 如果选择了non-alcoholic，返回到酒精偏好页面；否则返回到基酒页面
    if (selectedAlcoholic === "Non_Alcoholic") {
      setAppView("search");
    } else {
      setAppView("ingredients-base");
    }
    updateSelectedCount();
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
    resetAllSelections();
    setAppView("entry");
    window.scrollTo(0, 0);
  });
}

if (prevCocktailBtnEl) {
  prevCocktailBtnEl.addEventListener("click", () => {
    changeMixedDrinkCard(-1);
  });
}

if (nextCocktailBtnEl) {
  nextCocktailBtnEl.addEventListener("click", () => {
    changeMixedDrinkCard(1);
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

if (tarotTryAgainBtnEl) {
  tarotTryAgainBtnEl.addEventListener("click", () => {
    // Reset quiz and restart
    answers.fill(null);
    currentQuestionIndex = 0;
    renderCurrentQuestion();
    updateProgress();
    setAppView("quiz");
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

