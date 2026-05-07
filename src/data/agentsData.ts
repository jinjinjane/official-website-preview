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
    slug: "art-daily",
    name: "Art Daily",
    emoji: "🖼️",
    desc: "Discover iconic paintings, artists, and visual ideas every day through short, inspiring art prompts.",
    category: "Interest",
    popular: true,
    seoTitle: "Art Daily Agent – Daily Art Discovery & Visual Culture Practice",
    seoDescription: "Build a lightweight daily art habit with curated paintings, artist stories, visual references, and reflection prompts delivered in simple, inspiring nudges.",
    seoKeywords: "art discovery app, daily art history, famous paintings, artist inspiration, visual culture, art appreciation habit, museum inspiration, creative prompts, learn art daily",
    tagline: "A small daily encounter with beauty and meaning",
    features: [
      "Daily iconic artwork recommendations with quick context",
      "Short artist background and cultural notes",
      "Personalized reflection prompts to deepen taste",
      "Curated mini themes across movements, mediums, and eras",
      "Weekly recap of the works that stayed with you",
    ],
    onboardingQuestions: [
      "What kind of art interests you most? (Painting / Photography / Sculpture / Mixed / Not sure)",
      "How do you want to engage with art? (Inspiration / Learning / Taste building / Creative practice)",
    ],
    alwaysNudges: [
      { title: "Today's artwork", description: "One standout piece with just enough context to make it memorable and worth a pause.", type: "card" },
      { title: "Why it matters", description: "A short explanation of the artist, era, or technique behind today's selection.", type: "card" },
      { title: "Look closer", description: "A simple prompt that helps you notice color, composition, or mood more deeply.", type: "action" },
      { title: "Save your taste", description: "Quickly mark what resonates so future recommendations feel more personal.", type: "action" },
    ],
    conditionalNudges: [
      { title: "Weekly visual recap", description: "A recap of the pieces you explored this week and the patterns in what drew your attention.", type: "card" },
      { title: "Style thread", description: "When a clear taste pattern emerges, Jovida groups related artists and works into a mini trail for you.", type: "list" },
    ],
  },
  {
    slug: "english-daily",
    name: "English Daily",
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
    slug: "mystery-book",
    name: "Mystery Book",
    emoji: "📘",
    desc: "Build a daily reading ritual around mystery and thriller stories with curated picks and bite-sized prompts.",
    category: "Interest",
    popular: true,
    seoTitle: "Mystery Book Agent – Daily Thriller Reading & Book Discovery",
    seoDescription: "Create a steady mystery reading habit with thriller recommendations, reading prompts, chapter pacing nudges, and weekly book momentum check-ins.",
    seoKeywords: "mystery books, thriller reading app, daily reading habit, book discovery, reading prompts, suspense novels, mystery reading list, fiction habit app",
    tagline: "A little suspense, every day",
    features: [
      "Curated mystery and thriller recommendations matched to your taste",
      "Gentle daily reading prompts to keep momentum going",
      "Chapter pacing support for busy schedules",
      "Mood-based book picks and reading atmosphere suggestions",
      "Weekly recap of what you finished, paused, or want next",
    ],
    onboardingQuestions: [
      "What kind of mystery do you enjoy? (Classic / Psychological / Crime / Cozy / Not sure)",
      "How much time do you usually have for reading? (10 min / 20 min / 30+ min)",
    ],
    alwaysNudges: [
      { title: "Today's reading moment", description: "A light nudge to pick up your book at a time that fits your routine.", type: "action" },
      { title: "Next title suggestion", description: "A mystery or thriller pick based on your past favorites and mood.", type: "card" },
      { title: "Reading atmosphere", description: "A small prompt to make reading easier to start, from setting the scene to clearing distractions.", type: "action" },
      { title: "Why this book fits", description: "Quick context on why a title may match your taste right now.", type: "card" },
    ],
    conditionalNudges: [
      { title: "Weekly reading recap", description: "See what you read this week and get a smart suggestion for what to continue or start next.", type: "card" },
      { title: "Taste trail", description: "When you finish a book, Jovida maps related authors and titles to keep your momentum alive.", type: "list" },
    ],
  },
  {
    slug: "sleep-well",
    name: "Sleep Well",
    emoji: "💤",
    desc: "Build better sleep habits with science-backed routines, gentle wind-down support, and consistent check-ins.",
    category: "Lifestyle",
    popular: true,
    seoTitle: "Sleep Well Agent – Better Sleep Routine & Wind-Down Support",
    seoDescription: "Improve sleep with personalized wind-down routines, bedtime reminders, habit support, and consistent sleep check-ins designed for real life.",
    seoKeywords: "sleep app, sleep routine, better sleep habits, bedtime reminders, wind down routine, improve sleep, sleep consistency, restful sleep support",
    tagline: "Better nights begin with gentler evenings",
    features: [
      "Personalized bedtime and wind-down routine support",
      "Sleep consistency nudges built around your schedule",
      "Low-pressure behavior changes for better rest",
      "Evening habit reminders to reduce sleep friction",
      "Weekly sleep reflection with practical adjustments",
    ],
    onboardingQuestions: [
      "What sleep issue matters most right now? (Falling asleep / Staying asleep / Consistency / Energy on waking)",
      "What time do you realistically want to wind down on most nights?",
    ],
    alwaysNudges: [
      { title: "Wind-down starts now", description: "A calm reminder to begin your evening routine before bedtime sneaks up on you.", type: "action" },
      { title: "Sleep-friendly check-in", description: "A quick prompt to reduce light, stimulation, or caffeine depending on your habits.", type: "card" },
      { title: "Bedtime consistency", description: "A simple nudge that helps you protect a more repeatable sleep rhythm.", type: "action" },
      { title: "Reset for tomorrow", description: "Small evening choices that make tomorrow morning easier.", type: "card" },
    ],
    conditionalNudges: [
      { title: "Weekly sleep review", description: "A lightweight reflection on what helped, what disrupted your rest, and what to adjust next.", type: "card" },
      { title: "Late-night recovery plan", description: "When your night gets pushed back, Jovida offers a gentler fallback instead of an all-or-nothing routine.", type: "action" },
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
  {
    slug: "ai-radar",
    name: "AI Radar",
    emoji: "🧠",
    desc: "Stay ahead of important AI signals with a filtered stream of tools, shifts, and opportunities worth your attention.",
    category: "Productivity",
    popular: true,
    seoTitle: "AI Radar Agent – Daily AI Signals, Tools & Opportunity Tracking",
    seoDescription: "Track the AI developments that matter with curated tools, trend summaries, market signals, and opportunity nudges tailored to your interests.",
    seoKeywords: "AI news app, AI tools, AI trends, artificial intelligence updates, AI signal tracker, AI opportunity alerts, daily AI digest, AI market watch",
    tagline: "Signal over noise, every day",
    features: [
      "Filtered AI signal feed based on your interests",
      "Tool, trend, and market updates in digestible form",
      "Priority summaries for what matters now",
      "Opportunity spotting across products, media, and investing",
      "Weekly signal roundup with suggested follow-ups",
    ],
    onboardingQuestions: [
      "What kind of AI signals matter most to you? (Tools / Startups / Investing / Research / Creator trends)",
      "How deep do you want updates to be? (Quick digest / Balanced / Detailed)",
    ],
    alwaysNudges: [
      { title: "Today's AI signal", description: "One meaningful development worth paying attention to, without the noise around it.", type: "card" },
      { title: "Tool to know", description: "A new or rising AI product with quick context on why it matters.", type: "card" },
      { title: "What changed", description: "A short breakdown of an AI shift in product, market, or public conversation.", type: "card" },
      { title: "Worth a closer look?", description: "A quick nudge to save, ignore, or revisit a signal based on relevance.", type: "action" },
    ],
    conditionalNudges: [
      { title: "Weekly radar recap", description: "A summary of the AI signals, tools, and patterns that mattered most this week.", type: "card" },
      { title: "Opportunity alert", description: "When something relevant spikes in your area of interest, Jovida flags it with context.", type: "action" },
    ],
  },
  {
    slug: "travel-plan",
    name: "Travel Plan",
    emoji: "🌸",
    desc: "Plan a personalized trip that fits your interests, timing, and budget with guided next steps from spark to itinerary.",
    category: "Lifestyle",
    popular: true,
    seoTitle: "Travel Plan Agent – Trip Planning, Timing & Booking Support",
    seoDescription: "Turn travel inspiration into a real itinerary with timing, booking reminders, destination planning, and smart trip preparation nudges.",
    seoKeywords: "trip planner app, travel planning, itinerary builder, flight reminders, hotel planning, vacation planning, travel inspiration, travel booking support",
    tagline: "From travel idea to trip plan",
    features: [
      "Turns inspiration into a step-by-step trip plan",
      "Booking timing support for flights, hotels, and activities",
      "Destination ideas matched to your vibe and budget",
      "Lightweight itinerary building without overwhelm",
      "Preparation nudges so plans actually happen",
    ],
    onboardingQuestions: [
      "What kind of trip are you imagining? (Relaxing / City / Nature / Food / Cultural / Not sure)",
      "What matters most for this trip? (Budget / Timing / Ease / Aesthetic / Experiences)",
    ],
    alwaysNudges: [
      { title: "Shape the trip", description: "A simple step to turn a vague travel desire into a clearer destination or plan direction.", type: "action" },
      { title: "Best next booking move", description: "Know whether to check tickets, compare stays, or hold off for now.", type: "card" },
      { title: "Trip-building checklist", description: "A lightweight planning list that keeps the trip moving forward without feeling like admin.", type: "checklist" },
      { title: "Save this inspiration", description: "Capture a place, post, or image and let Jovida connect it back to your travel plan.", type: "action" },
    ],
    conditionalNudges: [
      { title: "Booking window alert", description: "Get prompted when it's a smart time to lock in flights, hotels, or key reservations.", type: "action" },
      { title: "Pre-trip recap", description: "A clear summary of what's booked, what's left, and what needs attention next.", type: "card" },
    ],
  },
  {
    slug: "secret-crush",
    name: "Secret Crush",
    emoji: "💗",
    desc: "Take small, genuine steps toward someone you like with thoughtful nudges that reduce hesitation and overthinking.",
    category: "Lifestyle",
    popular: true,
    seoTitle: "Secret Crush Agent – Gentle Social Confidence & Relationship Momentum",
    seoDescription: "Move from overthinking to action with subtle prompts, social confidence support, and low-pressure next steps for getting closer to someone you like.",
    seoKeywords: "crush advice app, social confidence, relationship nudges, texting confidence, dating mindset, shy crush support, social momentum, connection building",
    tagline: "Less overthinking, more honest momentum",
    features: [
      "Turns feelings into low-pressure next steps",
      "Encourages genuine action instead of over-analysis",
      "Social confidence nudges tailored to your comfort level",
      "Conversation and timing support without forcing it",
      "Progressive guidance that stays respectful and natural",
    ],
    onboardingQuestions: [
      "What feels hardest right now? (Starting a conversation / Staying consistent / Reading the vibe / Being confident)",
      "What kind of pace feels right for you? (Very gentle / Moderate / More direct)",
    ],
    alwaysNudges: [
      { title: "One small move", description: "A low-pressure suggestion that helps you build momentum without making things feel forced.", type: "action" },
      { title: "Confidence reset", description: "A quick reminder to stay grounded, genuine, and out of your head.", type: "card" },
      { title: "Read the moment", description: "A prompt to notice timing, tone, and energy before acting.", type: "card" },
      { title: "Keep it natural", description: "A suggestion for showing interest in a way that still feels like you.", type: "action" },
    ],
    conditionalNudges: [
      { title: "After-the-moment reflection", description: "Reflect briefly after an interaction so Jovida can guide the next step with better context.", type: "card" },
      { title: "Momentum nudge", description: "If you stall for too long, Jovida suggests a small next move to keep things from fading out.", type: "action" },
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

export const categories = ["All", "Body", "Lifestyle", "Growth", "Interest", "Nutrition", "Productivity"];
