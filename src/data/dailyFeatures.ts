export interface DailyFeature {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  color: string;
  icon: "capture" | "brain" | "priority" | "breakdown" | "reminders" | "planning" | "companion";
  heroLabel: string;
  examples: string[];
  benefitsTitle: string;
  benefitsIntro: string;
  benefits: Array<{ title: string; description: string }>;
  stepsTitle: string;
  stepsIntro: string;
  steps: Array<{ title: string; description: string }>;
  scenariosTitle: string;
  scenariosIntro: string;
  scenarioLayout: "transform" | "cards" | "timeline";
  scenarios: Array<{ title: string; input: string; result: string }>;
  closingTitle: string;
}

export const dailyFeatures: DailyFeature[] = [
  {
    slug: "fast-capture",
    navLabel: "Fast Capture",
    eyebrow: "Jovida Daily · Fast Capture",
    title: "Multi-Format Task Capture",
    summary:
      "Jovida Daily uses AI to turn voice notes, screenshots, links, and quick notes into simple tasks.",
    seoTitle: "AI Task Capture from Voice, Images & Links | Jovida Daily",
    seoDescription:
      "Capture tasks from voice notes, screenshots, images, links, shortcuts, and notes. Jovida Daily extracts the action and keeps the useful context.",
    keywords:
      "Jovida Daily task capture, AI task capture, fast task capture, voice to task, screenshot to task, image to task, link to task, quick capture app, ADHD task capture",
    color: "bg-brand-yellow",
    icon: "capture",
    heroLabel: "Captured",
    examples: ["Voice note: renew the passport next month", "Screenshot of a meeting request", "Link to an article to review"],
    benefitsTitle: "Supported Capture Methods",
    benefitsIntro: "Send what you already have. Jovida Daily finds the action.",
    benefits: [
      { title: "Use the fastest input", description: "Speak, share, paste, photograph, or type before the thought disappears." },
      { title: "Keep the source attached", description: "The original image, link, note, or message stays available when you return." },
      { title: "Let AI find the action", description: "Jovida Daily identifies what needs doing instead of storing another unprocessed item." },
    ],
    stepsTitle: "How Task Capture Works",
    stepsIntro: "Capture, check, save.",
    steps: [
      { title: "Send what you have", description: "Share a voice note, screenshot, image, link, shortcut, or quick note." },
      { title: "AI reads the context", description: "Jovida Daily finds the action, details, people, and timing." },
      { title: "Confirm the task", description: "Review a usable to-do without rebuilding the information by hand." },
    ],
    scenariosTitle: "Task Capture Examples",
    scenariosIntro: "Different formats. The same simple result.",
    scenarioLayout: "transform",
    scenarios: [
      { title: "From a screenshot", input: "A screenshot of: Can we review the budget Thursday?", result: "Schedule the budget review for Thursday" },
      { title: "From a voice note", input: "Remind me to order a birthday gift for Dad after work", result: "Order Dad's birthday gift after work" },
      { title: "From a link", input: "A shared application page with a June 18 deadline", result: "Submit the application by June 18" },
    ],
    closingTitle: "Capture Tasks with Jovida Daily",
  },
  {
    slug: "brain-dump-organizer",
    navLabel: "Brain Dump",
    eyebrow: "Jovida Daily · Brain Dump",
    title: "AI Brain Dump Organizer",
    summary:
      "Write or speak freely. Jovida Daily finds the tasks, dates, and details, then gives you a clean list to review.",
    seoTitle: "AI Brain Dump Organizer & To-Do List | Jovida Daily",
    seoDescription:
      "Turn messy thoughts and brain dumps into an organized to-do list. Jovida Daily separates tasks, preserves context, and identifies clear next actions.",
    keywords:
      "Jovida Daily brain dump, brain dump, brain dump organizer, AI brain dump, brain dump to-do list, messy thoughts to tasks, ADHD brain dump app",
    color: "bg-brand-purple",
    icon: "brain",
    heroLabel: "AI-organized tasks",
    examples: ["Ask Maya for the latest numbers", "Book a room for Friday", "Send the final deck to the team"],
    benefitsTitle: "What the AI Organizes",
    benefitsIntro: "Jovida Daily handles the structure so you can think naturally.",
    benefits: [
      { title: "No formatting required", description: "Write the tangled, repetitive version instead of translating your thoughts first." },
      { title: "Separate distinct actions", description: "Several obligations inside one paragraph become individual to-dos." },
      { title: "Preserve names and deadlines", description: "People, dates, and useful details stay attached to the right task." },
    ],
    stepsTitle: "How Brain Dump Organization Works",
    stepsIntro: "One input becomes clear, editable tasks.",
    steps: [
      { title: "Empty your head", description: "Type or speak the unfinished, out-of-order version in one pass." },
      { title: "AI separates the details", description: "Jovida Daily identifies actions, dates, names, and open questions." },
      { title: "Review the organized list", description: "Edit, prioritize, or start from a set of clear next actions." },
    ],
    scenariosTitle: "Brain Dump Examples",
    scenariosIntro: "Work, school, and life can all arrive in one messy paragraph.",
    scenarioLayout: "transform",
    scenarios: [
      { title: "After a meeting", input: "Need to send notes, ask Leo about pricing, and update the timeline before Monday", result: "Three assigned follow-ups with Monday attached to the timeline update" },
      { title: "Before exam week", input: "Chem chapters, find the practice test, email the professor, laundry somewhere in there", result: "Study tasks separated from the email and personal errand" },
      { title: "Personal admin", input: "Insurance form, return package, call the dentist, figure out the electricity bill", result: "Four independent tasks ready to schedule and prioritize" },
    ],
    closingTitle: "Organize Brain Dumps with Jovida Daily",
  },
  {
    slug: "prioritized-to-do-list",
    navLabel: "Prioritized To-Do List",
    eyebrow: "Jovida Daily · Smart To-Do List",
    title: "AI-Prioritized To-Do List",
    summary:
      "Jovida Daily uses AI to rank tasks by deadline, importance, effort, and the time you actually have.",
    seoTitle: "Prioritized To-Do List & AI Task Prioritizer | Jovida Daily",
    seoDescription:
      "Organize tasks into a clear prioritized to-do list. Jovida Daily uses deadlines, importance, and available time to show what to do first.",
    keywords:
      "Jovida Daily prioritized to-do list, prioritized to-do list, AI task prioritizer, organize to-do list, task priority app, what should I do first, ADHD to-do list",
    color: "bg-brand-yellow",
    icon: "priority",
    heroLabel: "Today, in order",
    examples: ["Submit expense report - due today", "Prepare three points for the client call", "Replace desk lamp - can wait"],
    benefitsTitle: "Task Prioritization Criteria",
    benefitsIntro: "See what matters now without comparing every task yourself.",
    benefits: [
      { title: "See the order, not just the inventory", description: "Tasks are arranged so the next decision is already easier." },
      { title: "Keep deadlines visible", description: "Time-sensitive work does not disappear among low-stakes errands." },
      { title: "Protect realistic capacity", description: "Today's list can stay focused while later tasks remain safely captured." },
    ],
    stepsTitle: "How AI Task Prioritization Works",
    stepsIntro: "Jovida Daily looks beyond the order tasks were added.",
    steps: [
      { title: "Collect the open tasks", description: "Bring together tasks captured from notes, messages, images, and manual entries." },
      { title: "Compare what matters", description: "Jovida Daily considers deadlines, impact, effort, and available time." },
      { title: "Build a workable order", description: "See what to do now, what to schedule, and what can wait." },
    ],
    scenariosTitle: "Task Prioritization Examples",
    scenariosIntro: "The right order depends on your day.",
    scenarioLayout: "cards",
    scenarios: [
      { title: "Busy workday", input: "Nine open tasks, a client call at 2 PM, and one report due today", result: "The report and call preparation rise above lower-impact admin" },
      { title: "Assignment week", input: "Reading, two quizzes, a paper outline, and a group message", result: "Deadline-driven schoolwork is ordered before flexible study tasks" },
      { title: "Low-energy day", input: "A full list but only an hour of focused energy", result: "One important task and a few short actions form a realistic plan" },
    ],
    closingTitle: "Prioritize Tasks with Jovida Daily",
  },
  {
    slug: "ai-task-breakdown",
    navLabel: "Task Breakdown",
    eyebrow: "Jovida Daily · AI Task Breakdown",
    title: "AI Task Breakdown",
    summary:
      "Jovida Daily turns a vague project into a short, practical sequence with one obvious place to begin.",
    seoTitle: "AI Task Breakdown for Big Projects & To-Dos | Jovida Daily",
    seoDescription:
      "Break big, vague, or overwhelming tasks into clear subtasks and actionable next steps with Jovida Daily's AI task breakdown.",
    keywords:
      "Jovida Daily task breakdown, AI task breakdown, break tasks into steps, project task breakdown, ADHD task breakdown, automatic subtasks, next action planner",
    color: "bg-brand-blue",
    icon: "breakdown",
    heroLabel: "Project broken down",
    examples: ["Choose the presentation's three main points", "Draft one slide for each point", "Add evidence and rehearse once"],
    benefitsTitle: "Task Breakdown Controls",
    benefitsIntro: "AI finds the steps without turning your list into clutter.",
    benefits: [
      { title: "Find the first physical action", description: "Start with something concrete enough to do immediately." },
      { title: "Choose the right level of detail", description: "Use a short outline or ask for smaller steps when the work still feels stuck." },
      { title: "Keep the sequence logical", description: "Dependencies stay in order so later steps do not create extra confusion." },
    ],
    stepsTitle: "How AI Task Breakdown Works",
    stepsIntro: "Add the goal, review the steps, begin.",
    steps: [
      { title: "Name the outcome", description: "Add the project, deadline, assignment, errand, or goal as you currently understand it." },
      { title: "Generate the steps", description: "Jovida Daily creates a practical sequence based on what completion requires." },
      { title: "Adjust and begin", description: "Make the steps smaller, remove what is unnecessary, and start with the first action." },
    ],
    scenariosTitle: "Task Breakdown Examples",
    scenariosIntro: "AI adapts the breakdown to the type of work.",
    scenarioLayout: "timeline",
    scenarios: [
      { title: "Write a research paper", input: "A paper due in two weeks with no topic chosen", result: "Choose topic, gather sources, form thesis, outline, draft, revise" },
      { title: "Move apartments", input: "Move out by the end of the month", result: "Book movers, sort belongings, transfer utilities, pack by room, clean" },
      { title: "Prepare for finals", input: "Three exams with different dates and weak subjects", result: "Study blocks organized by exam date, topic difficulty, and practice needs" },
    ],
    closingTitle: "Break Down Tasks with Jovida Daily",
  },
  {
    slug: "smart-reminders",
    navLabel: "Smart Reminders",
    eyebrow: "Jovida Daily · Smart Reminders",
    title: "Context-Aware Task Reminders",
    summary:
      "Jovida Daily reminds you with the useful details attached and checks again when an important task is still unfinished.",
    seoTitle: "Context-Aware Task Reminders & Follow-Ups | Jovida Daily",
    seoDescription:
      "Use smart reminders with context, next steps, and follow-up check-ins. Jovida Daily helps important tasks get handled instead of dismissed.",
    keywords:
      "Jovida Daily reminders, context-aware reminders, smart reminders, task reminder app, follow-up reminders, ADHD reminders, reminder with next steps",
    color: "bg-brand-orange",
    icon: "reminders",
    heroLabel: "Reminder with context",
    examples: ["Call the clinic before it closes at 5", "Start with the two-line follow-up email", "Still pending - reschedule or finish now?"],
    benefitsTitle: "Reminder Context and Follow-Ups",
    benefitsIntro: "See the context, know the action, and decide what happens next.",
    benefits: [
      { title: "Bring back the reason", description: "See why the task matters and where it originally came from." },
      { title: "Return with a next step", description: "Open the reminder to a concrete action instead of a vague title." },
      { title: "Follow up on unfinished work", description: "Important tasks receive another check-in instead of silently disappearing." },
    ],
    stepsTitle: "How Smart Reminders Work",
    stepsIntro: "Right time, useful context, clear choice.",
    steps: [
      { title: "Connect timing to the task", description: "Use a deadline, useful time window, or a suggested moment to return." },
      { title: "Receive the full reminder", description: "The notification includes context and a clear re-entry point." },
      { title: "Complete, move, or shrink it", description: "Finish the task, reschedule honestly, or choose a smaller next action." },
    ],
    scenariosTitle: "Smart Reminder Examples",
    scenariosIntro: "Not every unfinished task needs the same reminder.",
    scenarioLayout: "cards",
    scenarios: [
      { title: "Time-sensitive call", input: "Call the insurance office sometime", result: "Reminder appears while the office is open with the phone context attached" },
      { title: "Waiting on a reply", input: "Follow up with Sam if there is no response", result: "Jovida Daily checks back after the expected reply window passes" },
      { title: "Avoided assignment", input: "Continue the essay tonight", result: "The reminder returns with: open the draft and write one paragraph" },
    ],
    closingTitle: "Set Smart Reminders with Jovida Daily",
  },
  {
    slug: "daily-planning",
    navLabel: "Daily Planning",
    eyebrow: "Jovida Daily · AI Daily Planning",
    title: "Adaptive AI Daily Planning",
    summary:
      "Jovida Daily turns your tasks and calendar into a simple plan, then updates it when the day changes.",
    seoTitle: "Adaptive AI Daily Planner for Tasks | Jovida Daily",
    seoDescription:
      "Plan your day, prioritize tasks, and reset after falling behind with Jovida Daily, an AI daily planner built for flexible real-life schedules.",
    keywords:
      "Jovida Daily planner, adaptive AI daily planner, daily planner app, AI daily planner, daily task planner, plan my day, ADHD daily planner, daily reset",
    color: "bg-[#F7F2E4]",
    icon: "planning",
    heroLabel: "Today's realistic plan",
    examples: ["Before lunch: finish the budget notes", "2 PM: client call", "After the call: send decisions and reset the list"],
    benefitsTitle: "Daily Planning Inputs",
    benefitsIntro: "AI works around your meetings, deadlines, time, and energy.",
    benefits: [
      { title: "Plan around fixed commitments", description: "Meetings, classes, appointments, and deadlines shape the available task windows." },
      { title: "Match work to capacity", description: "Use the time and energy you have instead of planning an idealized day." },
      { title: "Reset without starting over", description: "Unfinished work is reconsidered and rescheduled when the original plan stops fitting." },
    ],
    stepsTitle: "How AI Daily Planning Works",
    stepsIntro: "Check the day, build the order, adjust when needed.",
    steps: [
      { title: "Check today's constraints", description: "Add fixed events, urgent work, available time, and anything already off track." },
      { title: "Build a realistic order", description: "Jovida Daily fits priority tasks around the shape of the day." },
      { title: "Replan what remains", description: "When plans change, rebuild the rest without treating the day as lost." },
    ],
    scenariosTitle: "Daily Planning Examples",
    scenariosIntro: "AI adapts the schedule to the time you actually have.",
    scenarioLayout: "transform",
    scenarios: [
      { title: "Meeting-heavy day", input: "Four meetings and two hours of focused work", result: "One deep-work block plus short admin tasks between meetings" },
      { title: "Study day", input: "An exam tomorrow, a class at noon, and errands after 5", result: "High-focus review before class and lighter practice later" },
      { title: "Morning went off track", input: "The first three hours disappeared and five tasks remain", result: "The list is reduced, reordered, and carried forward realistically" },
    ],
    closingTitle: "Plan Your Day with Jovida Daily",
  },
  {
    slug: "ai-planning-companion",
    navLabel: "AI Companion",
    eyebrow: "Jovida Daily · AI Companion",
    title: "Customizable AI Planning Companion",
    summary:
      "Pick a role and personality that match how you like to be supported. Jovida Daily can be calm, direct, encouraging, or quietly practical.",
    seoTitle: "Customizable AI Planning Companion | Jovida Daily",
    seoDescription:
      "Customize a Jovida Daily AI planning companion with different roles and personalities for task check-ins, accountability, motivation, and daily support.",
    keywords:
      "Jovida Daily AI companion, customizable AI companion, AI planning companion, AI companion personalities, AI accountability partner, daily check-in app, ADHD accountability app",
    color: "bg-brand-purple",
    icon: "companion",
    heroLabel: "Choose your companion",
    examples: ["The Coach · direct and focused", "The Friend · warm and encouraging", "The Guide · calm and practical"],
    benefitsTitle: "Companion Roles and Personalities",
    benefitsIntro: "Choose how Jovida Daily speaks, checks in, and helps you move.",
    benefits: [
      { title: "Different roles", description: "Choose a coach, friend, guide, or another role designed for the kind of support you want." },
      { title: "Different personalities", description: "Set the tone from direct and focused to gentle, playful, or low-pressure." },
      { title: "Support that adapts", description: "Change the role or tone when your task, mood, or situation changes." },
    ],
    stepsTitle: "How to Customize Your Companion",
    stepsIntro: "Choose a role, set the tone, change it anytime.",
    steps: [
      { title: "Choose a role", description: "Pick the kind of relationship that feels most useful for daily planning." },
      { title: "Choose a personality", description: "Decide whether support should feel direct, warm, calm, playful, or quiet." },
      { title: "Adjust as you go", description: "Switch styles when you need a different kind of motivation or accountability." },
    ],
    scenariosTitle: "How Different Personalities Respond",
    scenariosIntro: "Each personality can respond in its own way.",
    scenarioLayout: "cards",
    scenarios: [
      { title: "The Coach", input: "The report is still untouched", result: "Open the draft now. Write the three section headings first." },
      { title: "The Friend", input: "The report is still untouched", result: "Rough day? Let us make this smaller. How about just opening the draft?" },
      { title: "The Guide", input: "The report is still untouched", result: "You have 30 minutes left. A short outline is the most useful next move." },
    ],
    closingTitle: "Customize Your Jovida Daily Companion",
  },
];

export const getDailyFeature = (slug?: string) =>
  dailyFeatures.find((feature) => feature.slug === slug);
