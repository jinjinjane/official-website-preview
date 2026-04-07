export interface NudgePreview {
  title: string;
  description: string;
  type: "checklist" | "card" | "scan" | "audio" | "list" | "action";
}

export interface AgentDetail {
  slug: string;
  name: string;
  emoji: string;
  desc: string;
  category: string;
  popular: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  tagline: string;
  features: string[];
  onboardingQuestions: string[];
  alwaysNudges: NudgePreview[];
  conditionalNudges: NudgePreview[];
}

export const featuredAgents: AgentDetail[] = [
  {
    slug: "skin-care-routine",
    name: "Skin Care Routine",
    emoji: "🧴",
    desc: "Personalized skincare guidance based on your skin type, weather, and UV index to keep your skin healthy.",
    category: "Body",
    popular: true,
    seoTitle: "Skincare Routine Agent – Morning & Evening Skincare Checklist",
    seoDescription: "Build a personalized skincare routine with morning and evening checklists, face scan reports, product shelfie analysis, and weekly skincare plans based on your skin type and goals.",
    seoKeywords: "skincare routine, morning skincare checklist, evening skincare routine, skin type quiz, face scan app, skincare product analysis, skincare for oily skin, skincare for dry skin, anti-aging routine, acne skincare plan, UV protection tips, personalized skincare app",
    tagline: "Your personal dermatologist in your pocket",
    features: [
      "Morning and evening skincare routine checklists based on your skin type",
      "7-day skincare flow overview with daily focus",
      "Curated skincare knowledge cards (video & article links)",
      "Face scanning with auto-generated skin report",
      "Product shelfie analysis: upload all products at once for ingredient breakdown and usage order",
    ],
    onboardingQuestions: [
      "What is your skin type? (Oily / Dry / Combination / Sensitive / Normal)",
      "What are your skincare goals? (Anti-aging / Acne control / Brightening / Hydration / Sun protection)",
    ],
    alwaysNudges: [
      { title: "Morning skincare routine", description: "Your AM routine checklist for your specific skin type: cleanser, toner, serum, moisturizer, sunscreen.", type: "checklist" },
      { title: "Evening skincare routine", description: "Your PM routine checklist: double cleanse, treatment, night cream, eye cream.", type: "checklist" },
      { title: "Weekly skincare flow", description: "7-day overview showing which treatments to focus on each day. Daily checklist for today's step.", type: "card" },
      { title: "Skincare knowledge cards", description: "1–2 curated articles or videos about ingredients, techniques, or seasonal skincare tips.", type: "card" },
    ],
    conditionalNudges: [
      { title: "Face scan report", description: "Upload a selfie to get a skin analysis highlighting concerns like dryness, redness, or dark spots. Report generated instantly after upload, no repeat until next scan.", type: "scan" },
      { title: "Product shelfie analysis", description: "Upload a photo of all your skincare products at once. Get a full ingredient breakdown, conflict warnings, and a recommended usage order. Prompted weekly, not daily.", type: "scan" },
    ],
  },
  {
    slug: "weight-loss",
    name: "Weight Loss",
    emoji: "🏃",
    desc: "Build healthier eating habits and stay active to achieve sustainable weight loss.",
    category: "Body",
    popular: true,
    seoTitle: "Weight Loss Agent – Daily Meal Plan & Calorie Tracker",
    seoDescription: "Lose weight sustainably with daily meal suggestions, calorie tracking nudges, activity reminders, restaurant menu scanning, and weekly progress check-ins. Built for real results.",
    seoKeywords: "weight loss app, healthy meal plan, calorie tracker, diet coach, lose weight fast, sustainable weight loss, meal planning app, exercise reminder, restaurant healthy options, macro tracking, weight loss motivation",
    tagline: "Small daily choices, big lasting results",
    features: [
      "Personalized daily calorie target with meal-time nudges",
      "Smart lunch & dinner suggestions based on nearby options",
      "Activity reminders with micro-workout options",
      "Weekly progress check-in with trend analysis",
      "Restaurant menu scanner for healthiest options",
    ],
    onboardingQuestions: [
      "What is your current weight and target weight?",
      "What is your activity level? (Sedentary / Lightly active / Active / Very active)",
      "Do you have any dietary restrictions? (Vegetarian / Vegan / Gluten-free / None)",
    ],
    alwaysNudges: [
      { title: "It's lunchtime", description: "Low-carb meal options selected from nearby cafeterias or restaurants, with calorie counts.", type: "list" },
      { title: "Daily activity check", description: "Quick movement reminder with 5-minute micro-workout or step goal update.", type: "action" },
      { title: "Evening meal plan", description: "Healthy dinner suggestions based on what you've eaten today to hit your macro goals.", type: "card" },
      { title: "Hydration reminder", description: "Timely water intake nudges throughout the day.", type: "action" },
    ],
    conditionalNudges: [
      { title: "Weekly weigh-in", description: "Log your weight once a week. Get a trend chart and adjusted recommendations.", type: "card" },
      { title: "Meal photo analysis", description: "Snap a photo of your meal for instant calorie and macro estimation.", type: "scan" },
    ],
  },
  {
    slug: "quit-smoking",
    name: "Quit Smoking",
    emoji: "🚭",
    desc: "Break free from smoking with virtual breathing exercises, craving intervention, and daily support.",
    category: "Lifestyle",
    popular: true,
    seoTitle: "Quit Smoking Agent – Craving Intervention & Recovery Tracker",
    seoDescription: "Quit smoking for good with breathing exercises, craving intervention tools, health milestone tracking, and daily motivation. See your body recover in real time.",
    seoKeywords: "quit smoking app, stop smoking, craving management, breathing exercises for smokers, nicotine withdrawal help, smoking cessation tool, quit smoking tips, how to stop smoking, cigarette craving relief, smoking health recovery, money saved from quitting",
    tagline: "Every craving you beat makes the next one weaker",
    features: [
      "Virtual cigarette game: 3-minute breathing exercise to replace cravings",
      "Craving intensity tracker with real-time intervention",
      "Daily motivation cards with health milestone updates",
      "Money saved calculator and health recovery timeline",
      "Community-style progress sharing",
    ],
    onboardingQuestions: [
      "How many cigarettes do you smoke per day?",
      "When do your strongest cravings usually hit? (Morning / After meals / Stress / Social / Evening)",
      "Have you tried quitting before? What method? (Cold turkey / Patches / Gum / First time)",
    ],
    alwaysNudges: [
      { title: "Morning strength check", description: "Start your day with a quick motivation boost and remind yourself why you're quitting.", type: "card" },
      { title: "Craving intervention", description: "When cravings hit, a guided breathing exercise simulates the smoking ritual with deep inhale-hold-exhale.", type: "action" },
      { title: "Daily health milestone", description: "See how your body is recovering: oxygen levels, taste, lung capacity improvements over time.", type: "card" },
      { title: "Evening reflection", description: "Log today's cravings, celebrate wins, and prepare for tomorrow.", type: "action" },
    ],
    conditionalNudges: [
      { title: "Emergency craving SOS", description: "Tap when a craving hits hard. Get an immediate distraction activity or breathing exercise.", type: "action" },
      { title: "Weekly progress report", description: "Cigarettes avoided, money saved, and health recovery stats in one glanceable card.", type: "card" },
    ],
  },
  {
    slug: "manifestation-practice",
    name: "Manifestation Practice",
    emoji: "✨",
    desc: "Daily visualization exercises and affirmations to help you manifest your goals with personalized emotional imagery.",
    category: "Growth",
    popular: true,
    seoTitle: "Manifestation Agent – Daily Affirmations & Visualization Practice",
    seoDescription: "Practice daily manifestation with personalized affirmations, guided visualization, gratitude journaling, and vision board tracking. Build the habit of attracting your goals.",
    seoKeywords: "manifestation practice, daily affirmations app, visualization exercises, law of attraction, gratitude journal, vision board app, positive thinking habits, manifest goals, morning affirmations, manifestation for beginners, attract abundance",
    tagline: "See it, feel it, become it",
    features: [
      "Daily personalized affirmation cards",
      "Guided visualization with emotional imagery prompts",
      "Gratitude journaling nudges",
      "Vision board progress tracking",
      "Weekly manifestation reflection and intention setting",
    ],
    onboardingQuestions: [
      "What is your primary manifestation goal? (Career / Relationships / Health / Wealth / Self-growth)",
      "How experienced are you with manifestation? (Beginner / Intermediate / Advanced)",
    ],
    alwaysNudges: [
      { title: "Your affirmation for today", description: "A personalized affirmation to visualize and feel deeply. Repeat it, believe it.", type: "card" },
      { title: "Visualization moment", description: "A 3-minute guided imagery exercise tied to your specific goals.", type: "action" },
      { title: "Gratitude check-in", description: "List 3 things you're grateful for today to raise your vibrational frequency.", type: "action" },
      { title: "Manifestation knowledge", description: "1 curated article or video on manifestation techniques and mindset.", type: "card" },
    ],
    conditionalNudges: [
      { title: "Weekly intention reset", description: "Reflect on last week's manifestation progress and set a focused intention for the coming week.", type: "card" },
      { title: "Vision board update", description: "Add new images or goals to your digital vision board. Review how your vision is evolving.", type: "action" },
    ],
  },
  {
    slug: "english-momentum",
    name: "English Momentum",
    emoji: "📚",
    desc: "Build English into your day with one new word, one quick check-in, and low-pressure writing practice.",
    category: "Growth",
    popular: true,
    seoTitle: "English Learning Agent – Daily Vocabulary & Pronunciation Practice",
    seoDescription: "Build English fluency with a new word every day, pronunciation practice, weekly quizzes, and low-pressure writing exercises. Perfect for non-native speakers who want real progress.",
    seoKeywords: "learn English app, English vocabulary builder, daily English practice, pronunciation practice, English writing exercises, ESL app, English fluency, improve English speaking, English for beginners, vocabulary quiz, English learning habit",
    tagline: "One word a day, fluency on the way",
    features: [
      "Daily new word with pronunciation audio and example sentence",
      "Weekly vocabulary check-in quiz",
      "Low-pressure writing prompts with gentle feedback",
      "Pronunciation practice with playback",
      "Progress tracking with streak rewards",
    ],
    onboardingQuestions: [
      "What is your current English level? (Beginner / Intermediate / Advanced)",
      "What is your learning goal? (Conversation / Business English / Academic / Travel / General fluency)",
    ],
    alwaysNudges: [
      { title: "Today's word, in one minute", description: "Learn one useful word with a clear pronunciation and a real example sentence. Listen, repeat, remember.", type: "audio" },
      { title: "Quick check-in quiz", description: "A two-minute quiz built from this week's words. Keep your memory sharp.", type: "action" },
      { title: "Writing prompt", description: "A low-pressure writing exercise: one sentence using today's word. No judgment, just practice.", type: "action" },
      { title: "English tip of the day", description: "A bite-sized grammar tip, idiom, or cultural note to broaden your understanding.", type: "card" },
    ],
    conditionalNudges: [
      { title: "Weekly review report", description: "See all the words you learned this week, quiz scores, and writing progress.", type: "card" },
      { title: "Pronunciation challenge", description: "Record yourself saying this week's words. Compare with native pronunciation.", type: "audio" },
    ],
  },
  {
    slug: "ai-founder-feed",
    name: "AI Founder Feed",
    emoji: "🚀",
    desc: "Stay sharp on AI tools, surface the right people, and keep your startup moving with a daily founder briefing.",
    category: "Productivity",
    popular: true,
    seoTitle: "Founder Feed Agent – Daily Startup & Tech Intelligence Briefing",
    seoDescription: "Get a daily curated briefing on tools, startup signals, and industry trends filtered for your product stage and direction. Built for founders who need signal, not noise.",
    seoKeywords: "startup news app, founder briefing, tech trends, startup intelligence, product signals, tool discovery, startup founder tools, daily tech digest, industry trend alerts, founder productivity, startup newsletter alternative",
    tagline: "The signals that matter, filtered for you",
    features: [
      "Daily curated AI & startup signal digest",
      "Filtered by your product stage and direction",
      "Key people and companies to watch",
      "Trend alerts relevant to your industry",
      "Weekly strategic summary with action items",
    ],
    onboardingQuestions: [
      "What is your startup stage? (Idea / MVP / Growth / Scale)",
      "What is your product domain? (SaaS / Consumer / AI / Fintech / Health / Other)",
      "What topics matter most? (AI models / Funding / Product launches / Hiring / Market trends)",
    ],
    alwaysNudges: [
      { title: "The few signals worth your attention", description: "Three AI and startup links filtered for your current stage and product direction.", type: "list" },
      { title: "Person to watch", description: "One founder, investor, or builder doing something relevant to your space. Quick context on why they matter.", type: "card" },
      { title: "Tool spotlight", description: "One AI tool or product that could impact your workflow or competitive landscape.", type: "card" },
      { title: "Market pulse", description: "A quick summary of what's happening in your industry today.", type: "card" },
    ],
    conditionalNudges: [
      { title: "Weekly strategic digest", description: "A longer-form summary of the week's most important signals, with suggested action items.", type: "card" },
      { title: "Trend alert", description: "When a significant shift happens in your domain, get an immediate heads-up with context.", type: "action" },
    ],
  },
];

export const existingAgents = [
  {
    slug: "glow-up-coach",
    name: "Glow Up Coach",
    emoji: "💎",
    desc: "A holistic self-improvement agent covering fitness, grooming, style, and confidence to help you level up.",
    category: "Body",
    popular: false,
  },
  {
    slug: "sleep-optimizer",
    name: "Sleep Optimizer",
    emoji: "🌙",
    desc: "Tracks your sleep patterns and progressively adjusts your wind-down routine for deeper rest.",
    category: "Lifestyle",
    popular: false,
  },
  {
    slug: "social-skills-builder",
    name: "Social Skills Builder",
    emoji: "💬",
    desc: "Daily conversation challenges, body language tips, and real-time social scenario coaching.",
    category: "Growth",
    popular: false,
  },
  {
    slug: "caffeine-detox",
    name: "Caffeine Detox",
    emoji: "☕",
    desc: "Gradual caffeine reduction plan with energy-sustaining alternatives and withdrawal management.",
    category: "Lifestyle",
    popular: false,
  },
  {
    slug: "lean-muscle-agent",
    name: "Lean Muscle Agent",
    emoji: "💪",
    desc: "Progressive overload planning, protein timing, and recovery-aware training schedules.",
    category: "Body",
    popular: false,
  },
  {
    slug: "meal-prep-master",
    name: "Meal Prep Master",
    emoji: "🥗",
    desc: "Weekly meal plans, auto-generated grocery lists, and fridge-based recipe suggestions.",
    category: "Nutrition",
    popular: false,
  },
  {
    slug: "mindfulness-guide",
    name: "Mindfulness Guide",
    emoji: "🧘",
    desc: "Stress-aware meditation prompts, breathing exercises, and emotional check-ins throughout the day.",
    category: "Growth",
    popular: false,
  },
  {
    slug: "dining-out-navigator",
    name: "Dining Out Navigator",
    emoji: "🍽️",
    desc: "Scans nearby restaurant menus and recommends the healthiest options matching your goals.",
    category: "Nutrition",
    popular: false,
  },
];

export const allAgents = [...featuredAgents, ...existingAgents];

export const categories = ["All", "Body", "Lifestyle", "Growth", "Nutrition", "Productivity"];
