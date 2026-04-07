import blogProactiveAgent from "@/assets/blog-proactive-agent.png";
import blogOpenclaw from "@/assets/blog-openclaw.png";
import blogGemini from "@/assets/blog-gemini.png";
import blogMemory from "@/assets/blog-memory.png";
import blogBehaviorCover from "@/assets/20260407/cover.jpeg";
import blogBehaviorHope from "@/assets/20260407/hope.png";
import blogBehaviorCloudAgent from "@/assets/20260407/cloud-agent.png";
import blogBehaviorGoal from "@/assets/20260407/goal.png";

import blogNutrition from "@/assets/blog-nutrition.png";
import blogWeightLoss from "@/assets/blog-weight-loss.png";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  faq: { question: string; answer: string }[];
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jovida-built-for-real-human-behavior-change",
    coverImage: blogBehaviorCover,
    title: "Jovida: Built for Real Human Behavior Change",
    excerpt: "Jovida is designed as a proactive Life Agent that helps users follow through on goals by combining persistent memory, context-aware timing, and an action layer that reduces friction. Instead of removing humans from the loop, Jovida stays embedded in daily life to support behavior change over time.",
    category: "Product Philosophy",
    date: "Apr 7, 2026",
    readTime: "8 min",
    metaTitle: "Jovida: Built for Real Human Behavior Change | Jovida Blog",
    metaDescription: "Learn how Jovida combines memory, context-aware timing, and an execution layer to help users close the gap between intention and follow-through.",
    keywords: "jovida life agent, human loop ai, behavior change ai, proactive ai agent, execution gap",
    faq: [
      {
        question: "What problem is Jovida designed to solve?",
        answer: "Jovida is designed to solve the execution gap, which is the distance between knowing what to do and actually following through consistently in daily life."
      },
      {
        question: "How is Jovida different from a typical AI assistant?",
        answer: "Most AI assistants answer a prompt and stop there. Jovida stays embedded in your daily context, tracks progress over time, and intervenes when the timing and action are most likely to help you move forward."
      },
      {
        question: "Why does Jovida focus on the Human Loop instead of full autonomy?",
        answer: "Because meaningful life change happens through human decisions made over time. Jovida is designed to support those decisions, not replace them."
      }
    ],
    content: `
Written by Janie Zhang

Most AI products today function as static tools. You ask a question, receive a response, and the interaction ends there. This model works for retrieving facts but fails when you want to change your habits or life direction.

We built Jovida, an iOS application designed to solve the execution gap. Think of it as a Life Agent in the style of Mr. Meeseeks from Rick and Morty. The goal is simple: understand the goal and help the user achieve it. Unlike the show, this agent is grounded in real-world data to ensure you actually follow through.

## The Real Bottleneck Is Behavior

Knowledge rarely prevents progress. The true problem lies in follow-through. Recent research from Anthropic confirms this shift in user needs. Beyond professional tasks, people increasingly turn to AI for personal transformation and life management, often valuing it more than pure productivity. Most products fall short because they stop assisting the moment a task is marked complete. They solve for information, but they do not solve for behavior.

  ![What people hope for](${blogBehaviorHope})

Source: [What 81,000 people want from AI](https://www.anthropic.com/features/81k-interviews).

## Moving From Agent Loops to Human Loops

The tech industry currently focuses on Agent Loops where systems plan and execute autonomously. This approach attempts to remove the person from the process. However, life is shaped by the decisions you make over time.

We prioritize the Human Loop instead. Jovida stays embedded in your specific context to help you keep moving forward. The agent works within your life cycle rather than trying to operate in a vacuum.

To drive actual change, the system must solve for the three elements of the Fogg Behavior Model: motivation, ability, and prompts.

## The Proactive System: Turning Intentions into Actions

Jovida does not just suggest actions. It uses a specific technical stack to bridge the gap between intent and reality.

### Sustaining Motivation Through Memory

Sustaining motivation over weeks or months requires a sense of trajectory. Jovida utilizes a persistent memory architecture to track your progress and identify where your routines break down. This history allows the system to align with your actual behavior rather than offering generic advice. By reflecting your patterns back to you, the agent keeps your long-term goals visible even when daily distractions take over.

### Increasing Ability Through Action and Evolution

Jovida increases your ability to act by taking on the heavy lifting of execution through its Action layer. This handles the tedious setup, such as drafting complex communications or filtering real-world options to fit your constraints.

To stay effective, the agent also supports self-evolution. Based on your specific goals, the system automatically identifies and installs relevant Agent Skills from a shared library. If you pivot to a new career goal, Jovida fetches the necessary tools to support that specific journey without manual configuration. You retain all decision-making power while the agent removes the noise surrounding the execution.

### Optimizing Prompts Through Context and Proactivity

A prompt only works if it arrives when you can actually act on it. Jovida integrates context from your phone, watch, and other signals. It understands your environment, including your current energy levels and schedule. This ensures that suggestions remain doable in the moment.

The system operates on a heartbeat mechanism, which is a background rhythm that checks in at key intervals. This proactive approach ensures your goals stay front-of-mind without the need for manual input. By combining environmental context with proactive timing, Jovida surfaces interventions only when they are most likely to result in action.

![Human behavior loop](${blogBehaviorGoal})

## A System That Lives Beyond One App

Jovida implements an Edge-Cloud integrated architecture to bridge the gap between agent reasoning and physical reality.

In this system, the cloud functions as a high-level brain that handles complex planning and long-term memory. Your local devices, including phones, watches, and computers, operate as distributed nodes that provide real-world sensing and execution. This design moves beyond simple synchronization. Every device registers its specific capabilities to the central agent through a secure protocol link.

This registration process turns your hardware into the eyes and limbs of the agent. Your watch provides biometric signals like heart rate and sleep data, while your phone offers environmental context like location and movement. The cloud layer synthesizes these distributed inputs to understand your current state. As you add more devices or external skills, you expand the agent's overall capability network. This feedback loop ensures that the system stays grounded in your actual behavior, allowing the agent to initiate actions across messaging apps, email, or local interfaces exactly when the context requires it.

![Edge-cloud integrated architecture](${blogBehaviorCloudAgent})

## What's Next for Jovida

We are currently deepening the system by integrating more signals for better timing and expanding the range of actions the agent can take. The goal involves moving the agent from something you manage to a quiet, persistent force that changes how things actually get done.

We are also opening up the underlying Agent Skill architecture. If you have unique needs, you can define your own execution logic and build a personalized wish-fulfillment machine.

If this way of thinking about AI resonates with you, download Jovida on iOS: https://apps.apple.com/us/app/jovida/id6752009326

We want you to help us build this. Join the community: https://discord.gg/qJ2usXk2fX
    `,
  },
  {
    slug: "proactive-ai-agent-vs-reactive-chatbot",
    coverImage: blogProactiveAgent,
    title: "Proactive AI Agent vs Reactive Chatbot: Why the Difference Matters for Your Daily Life",
    excerpt: "Most AI tools sit and wait for you to type something. A proactive AI agent works differently. It watches your goals, checks your progress, and sends you the right action at the right time.",
    category: "Agent Technology",
    date: "Mar 15, 2026",
    readTime: "7 min",
    metaTitle: "Proactive AI Agent vs Reactive Chatbot | Jovida Blog",
    metaDescription: "Learn how proactive AI agents differ from reactive chatbots, and why proactive agents like Jovida drive better results for daily goal tracking and habit building.",
    keywords: "proactive ai agent, reactive chatbot, ai agent comparison, smart nudge, habit building ai",
    faq: [
      {
        question: "What is a proactive AI agent?",
        answer: "A proactive AI agent monitors your goals, schedule, and behavior patterns continuously. Instead of waiting for you to ask a question, it reaches out with actionable task cards through push notifications and WhatsApp when the timing is right."
      },
      {
        question: "How is a proactive agent different from Siri or Alexa?",
        answer: "Siri and Alexa are reactive. You say a command, they respond. A proactive agent like Jovida tracks your goals over days and weeks, learns your patterns, and sends you specific actions before you even think to ask."
      },
      {
        question: "Does Jovida use proactive AI agent technology?",
        answer: "Yes. Jovida is built on a proactive agent architecture. It monitors your goal progress, calculates the best time to reach you, and delivers interactive task cards through the app, push notifications, and WhatsApp."
      }
    ],
    content: `
## What Does "Proactive" Actually Mean in AI?

Most AI tools today follow a simple pattern: you ask, they answer. You type a prompt, they generate a response. Close the app, and they forget you exist.

A **proactive AI agent** works on a completely different model. It keeps track of your goals, watches your progress over time, and reaches out to you when there is something you should do. You do not need to remember to open the app. The agent comes to you.

## The Core Problem With Reactive AI

Reactive AI puts the entire burden on the user. You need to:

- Remember to open the app
- Know what question to ask
- Interpret the answer and decide what to do
- Actually follow through

This breaks down fast for anyone trying to build new habits or stick to a plan. The people who need the most help are the least likely to proactively seek it out.

## How a Proactive Agent Works

A proactive AI agent runs on a loop that continuously evaluates:

1. **Goal progress**: Are you on track, behind, or ahead?
2. **Context signals**: What time is it? What is on your calendar? What did you do yesterday?
3. **Intervention timing**: When are you most likely to act on a suggestion?
4. **Action design**: What is the smallest useful step you can take right now?

The output is an interactive task card delivered through the app. You also get notified through push notifications and WhatsApp so you never miss it.

## Side-by-Side Comparison

| Aspect | Reactive Chatbot | Proactive AI Agent |
|--------|-----------------|-------------------|
| Who starts | You do | The agent does |
| Context | Single conversation | Continuous awareness |
| Memory | Forgets between sessions | Remembers everything |
| Adaptation | You change the settings | The agent adjusts automatically |
| Friction | High (you must remember) | Low (the agent reaches out) |

## Why This Matters for Real Goals

If you want to lose weight, learn a language, or fix your sleep schedule, you need consistent daily action. Reactive tools depend on your motivation every single day. Proactive agents remove that dependency by bringing the action to you.

Research shows proactive systems drive **3-4x higher engagement** compared to passive apps. The reason is simple: they remove the biggest barrier to action, which is remembering to start.

## How Jovida Uses Proactive Agent Architecture

Jovida breaks your goal into daily steps, then delivers each step as an interactive task card inside the app. The agent checks your schedule, your recent activity, and your energy patterns to pick the right moment. If you miss something, it adjusts tomorrow's plan automatically.

You also get notified through push notifications and WhatsApp, so Jovida feels less like an app and more like a teammate living in your pocket.
    `,
  },
  {
    slug: "openclaw-open-source-ai-agent-framework-and-jovida",
    coverImage: blogOpenclaw,
    title: "OpenClaw and the Rise of Open Source AI Agent Frameworks: What It Means for You",
    excerpt: "Open source AI agent frameworks like OpenClaw are making autonomous agents accessible to every developer. Here is why that matters for the future of personal AI.",
    category: "Agent Technology",
    date: "Mar 12, 2026",
    readTime: "6 min",
    metaTitle: "OpenClaw Open Source AI Agent Framework | What It Means for Personal AI",
    metaDescription: "OpenClaw and other open source AI agent frameworks are accelerating the proactive agent revolution. Learn what this trend means for consumers and the future of personal AI.",
    keywords: "openclaw, open source ai agent, ai agent framework, proactive agent, autonomous ai agent",
    faq: [
      {
        question: "What is OpenClaw?",
        answer: "OpenClaw is an open source framework for building autonomous AI agents. It provides tools for agent memory, planning, and tool use, allowing developers to create custom AI agent applications."
      },
      {
        question: "Is Jovida built on OpenClaw?",
        answer: "No. Jovida is an independent product with its own proactive agent architecture. OpenClaw and Jovida share a common vision of autonomous agents, but they are separate projects solving different problems."
      },
      {
        question: "Why do open source agent frameworks matter?",
        answer: "Open source frameworks lower the barrier for building AI agents. More developers experimenting means faster innovation across the entire ecosystem, which benefits everyone, including end users of consumer products like Jovida."
      }
    ],
    content: `
## The Agent Framework Boom

2025 and 2026 have seen a wave of open source projects tackling the same question: how do you build an AI that acts on its own instead of waiting for commands?

**OpenClaw** is one of the most talked-about entries. It gives developers a modular toolkit for building autonomous agents with memory, planning, and tool use baked in. And it is fully open source.

But OpenClaw is not alone. Projects like AutoGen, CrewAI, and LangGraph are all pushing in a similar direction. The message is clear: the industry is moving from chatbots to agents.

## What Makes OpenClaw Interesting

OpenClaw stands out for a few reasons:

- **Modular architecture**: Pick the pieces you need. Memory, planning, tool calling, each module works independently.
- **Agent-to-agent communication**: Multiple agents can collaborate on a task, each handling a different piece.
- **Open governance**: Community-driven development means rapid iteration and transparent decision making.

For developers, this is exciting. Building an AI agent from scratch used to take months. Frameworks like OpenClaw compress that to days.

## From Framework to Product: A Different Problem

Here is the thing about agent frameworks: they solve the engineering problem. They do not solve the human problem.

Building the engine is hard. But making a product that actual people use every day to hit their goals? That is a completely different challenge.

| Challenge | Framework (OpenClaw, etc.) | Consumer Product |
|-----------|---------------------------|------------------|
| Target user | Developers | Everyone |
| Core problem | "How do I build an agent?" | "How do I stick to my plan?" |
| Delivery | Code and APIs | Push notifications, WhatsApp |
| Psychology | Not considered | Central to the design |
| Memory | Configurable modules | Deeply personalized profiles |

## Why Jovida Exists in This Landscape

Jovida is not a framework. It is not built on OpenClaw or any other open source agent toolkit. It is an independent consumer product with its own proactive agent architecture.

What Jovida shares with projects like OpenClaw is a belief: **AI should act, not just respond.**

But where frameworks give developers building blocks, Jovida gives regular people a finished product:

- Your goals broken into daily interactive task cards
- An agent that reaches out through push notifications and WhatsApp
- Long-term memory that learns your patterns over weeks and months
- Behavioral science built into every interaction

## The Rising Tide

Open source agent frameworks are good for everyone. More developers building agents means more experimentation, more patterns discovered, and faster progress across the entire ecosystem.

As a consumer product team, we watch these developments closely. When the open source community discovers a better approach to agent memory or planning, the entire industry levels up. That includes us.

## What This Means for You

If you are a developer, check out OpenClaw. Build something. The barrier to creating your own AI agent has never been lower.

If you are someone who wants an AI agent working for you right now, without writing code, that is what Jovida is for. Download the app, pick a goal, and let the agent handle the rest.

The proactive agent era is here. Open source is accelerating it. And that benefits everyone.
    `,
  },
  {
    slug: "gemini-3-1-and-proactive-ai-agents",
    coverImage: blogGemini,
    title: "Gemini 3.1 and the Future of Proactive AI Agents",
    excerpt: "Google's Gemini 3.1 brings longer context windows, better reasoning, and native tool use. Here is what that means for proactive AI agents like Jovida.",
    category: "Agent Technology",
    date: "Mar 10, 2026",
    readTime: "7 min",
    metaTitle: "Gemini 3.1 for Proactive AI Agents | How Jovida Uses Latest Models",
    metaDescription: "Explore how Google Gemini 3.1's extended context, reasoning, and tool use capabilities power the next generation of proactive AI agents like Jovida.",
    keywords: "gemini 3.1, proactive ai agent, google gemini, ai agent model, jovida ai",
    faq: [
      {
        question: "What is Gemini 3.1?",
        answer: "Gemini 3.1 is Google's latest large language model. It features an extended context window, improved multi-step reasoning, and native tool use, making it well suited for autonomous AI agent applications."
      },
      {
        question: "How does Jovida use models like Gemini 3.1?",
        answer: "Jovida uses advanced language models to power its proactive agent engine. Longer context windows allow the agent to consider weeks of user history when generating task cards. Better reasoning means more accurate plans. Native tool use lets the agent take real actions like generating grocery lists or adjusting schedules."
      },
      {
        question: "Does a better model mean a better AI agent?",
        answer: "A better model improves the agent's reasoning and context handling, but the model alone does not make a great product. Jovida combines model capabilities with behavioral science, proactive delivery through push and WhatsApp, and a consumer-grade mobile experience."
      }
    ],
    content: `
## Why Foundation Models Matter for AI Agents

An AI agent is only as good as the model powering its reasoning. When the model gets better at understanding context, following multi-step instructions, and using external tools, the agent gets better at helping you.

Google's Gemini 3.1 represents a significant step forward in all three areas.

## What Gemini 3.1 Brings to the Table

### Extended Context Window

Gemini 3.1 can process significantly longer inputs. For a proactive AI agent, this means the model can consider weeks or even months of user history in a single reasoning pass. Your agent does not need to summarize and compress your past. It can look at the full picture.

### Improved Multi-Step Reasoning

Planning a path from "I want to run a marathon" to today's specific workout requires dozens of reasoning steps. The model needs to consider your current fitness level, your schedule, weather, recovery status, and nutrition. Gemini 3.1's improved chain-of-thought reasoning handles this more reliably.

### Native Tool Use

Gemini 3.1 can call external tools as part of its reasoning process. For Jovida, this means the agent can:

- Pull your calendar data to check schedule conflicts
- Generate a grocery list based on your meal plan
- Look up restaurant menus when you are dining out
- Adjust your workout based on real-time weather data

## What This Means for Jovida Users

### Smarter Daily Plans

With better reasoning and longer context, your daily task cards become more relevant. The agent can spot patterns across weeks of data that shorter-context models would miss.

### More Accurate Goal Adjustments

If you have been sleeping poorly for three days, the agent can trace the impact across your nutrition, energy, and workout performance. It adjusts all three simultaneously instead of treating each domain in isolation.

### Faster Action Generation

Native tool use means the agent can generate grocery lists, meal plans, and schedule adjustments without additional API calls or processing delays. The task card arrives faster with more actionable detail.

## The Model Is Not the Product

A common mistake in the AI space is thinking that a better model automatically means a better product. The model is one piece of the puzzle.

Jovida adds:

- **Proactive delivery**: The agent reaches out to you through push notifications and WhatsApp. You do not need to open the app.
- **Behavioral science**: Task difficulty scaling, momentum tracking, recovery celebrations. These come from psychology research, not model improvements.
- **Consumer UX**: Interactive task cards, the Playbook, one-tap goal activation. These are product decisions that no model provides out of the box.

## Looking Ahead

As models like Gemini 3.1 continue to improve, the ceiling for what proactive AI agents can do keeps rising. Jovida will continue adopting the best available models to make your daily agent smarter, faster, and more context-aware.

The future of personal AI is not a chatbot you talk to. It is an agent that knows your goals and takes action to get you there.
    `,
  },
  {
    slug: "long-term-memory-ai-agent",
    coverImage: blogMemory,
    title: "How Long-Term Memory Makes AI Agents Actually Useful",
    excerpt: "A chatbot that forgets you between sessions cannot truly help. Long-term memory lets an AI agent learn your preferences, calendar, location, and patterns to deliver guidance that actually fits your life.",
    category: "Agent Technology",
    date: "Mar 5, 2026",
    readTime: "7 min",
    metaTitle: "Long-Term Memory in AI Agents | Why It Matters | Jovida",
    metaDescription: "Discover how long-term memory transforms AI agents from forgetful chatbots into context-aware companions that know your preferences, calendar, location, and life patterns.",
    keywords: "long-term memory ai, ai agent memory, personalized ai agent, context-aware ai, ai life agent",
    faq: [
      {
        question: "Why does an AI agent need long-term memory?",
        answer: "Without long-term memory, an AI agent starts from zero every time you interact with it. It cannot track your progress, remember your preferences, or learn what strategies work for you. Memory is what turns a generic tool into a personalized agent."
      },
      {
        question: "What does Jovida remember about me?",
        answer: "Jovida remembers your likes and dislikes, calendar events, location patterns, communication preferences, past goals and outcomes, and contextual signals like weather and schedule. You can view, edit, or delete any stored memory at any time."
      },
      {
        question: "Is my data safe with Jovida?",
        answer: "Yes. You have full control over your memory data. You can view everything the agent remembers, delete specific memories, set retention periods, and export your complete profile."
      }
    ],
    content: `
## The Forgetting Problem

Most AI interactions are one-shot. You ask a question, get an answer, and the AI forgets you ever existed. Next time you come back, it has no idea who you are.

For an AI agent that is supposed to help you build habits and hit goals, this is a dealbreaker. Imagine a personal trainer who forgot everything about you between sessions. They would ask the same intake questions every time. They would suggest exercises you already told them you cannot do.

**That describes most AI assistants today.**

## What Long-Term Memory Enables

Jovida's memory system stores and retrieves four categories of information:

### Preference Memory
- Things you like and things you avoid, from food to music to hobbies
- Communication style preferences (encouraging or direct, brief or detailed)
- Your typical schedule, routines, and availability windows
- Places you frequent: favorite restaurants, gym, coffee shops

### Contextual Memory
- Your calendar events, deadlines, and upcoming commitments
- Real-time location and local weather conditions
- Recent sleep quality, energy levels, and mood patterns
- Travel plans, social events, and life changes

### History Memory
- Past goals and whether they succeeded or not
- Which strategies worked and which did not
- Seasonal patterns like motivation drops in winter
- Progress trends over weeks and months

### Relational Memory
- What motivates you versus what discourages you
- How you respond to different coaching approaches
- Important people in your life and shared activities
- How you prefer to celebrate wins

## How Memory Changes the Experience

**Without memory:**
"How about trying a new Italian restaurant tonight?"
(You mentioned last week that you are avoiding heavy meals before your Thursday morning runs.)

**With memory:**
"You have a 7am run tomorrow. There is a poke bowl place near your office with solid reviews. Want me to save the location?"

The difference between generic suggestions and truly personal guidance comes down to memory. Because the agent knows your calendar, your preferences, your location, and what has worked before, every interaction feels like talking to someone who actually knows you.

## What the Agent Can Perceive

Long-term memory is not just about storing facts. It is about connecting signals across your entire life:

- **Calendar**: Knows when you are busy, when you have free blocks, and when deadlines are approaching
- **Location**: Understands where you are, suggests nearby options, and adapts plans to your commute
- **Weather**: Adjusts outdoor activity suggestions based on real-time conditions
- **Likes and dislikes**: Remembers your coffee order, your least favorite workout, the podcast genre you always skip
- **Patterns**: Notices you are more productive in the morning, tend to skip goals on Fridays, or get stressed before monthly reviews

This is what makes a proactive agent feel like a real companion, not a tool.

## Privacy and Control

Memory is powerful, and it requires trust. You have full control:

- View everything the agent remembers
- Delete specific memories or entire categories
- Set memory retention periods
- Export your complete memory profile

Your data makes your agent smarter, but it always belongs to you.
    `,
  },
  {
    slug: "zero-math-nutrition-ai-agent",
    coverImage: blogNutrition,
    title: "Zero-Math Nutrition: From Goal to Grocery List in 10 Seconds",
    excerpt: "You should not need a calculator to eat well. Jovida's nutrition agent translates body composition goals into automated meal plans and instant grocery lists.",
    category: "Features Deep Dive",
    date: "Feb 22, 2026",
    readTime: "6 min",
    metaTitle: "AI Nutrition Agent: Goal to Grocery List in Seconds | Jovida",
    metaDescription: "See how Jovida's AI nutrition agent converts your body composition goals into daily meal plans, grocery lists, and restaurant recommendations with zero manual tracking.",
    keywords: "ai nutrition agent, meal planning ai, grocery list generator, calorie tracking alternative, proactive nutrition",
    faq: [
      {
        question: "Do I need to count calories with Jovida?",
        answer: "No. You set your goal (like reaching 15% body fat) and the nutrition agent handles all the math. It generates meal plans, grocery lists, and portion guidance automatically."
      },
      {
        question: "Can the agent help when I eat at restaurants?",
        answer: "Yes. When you are dining out, the agent recommends dishes that fit your remaining daily targets, suggests modifications, and adjusts the rest of your day's plan to accommodate."
      },
      {
        question: "How does the grocery list feature work?",
        answer: "The agent converts your weekly meal plan into a grocery list organized by store section. Quantities adjust for household size, and the agent suggests substitutions for items you cannot find."
      }
    ],
    content: `
## The Calorie Counting Problem

Traditional nutrition apps ask you to:

1. Look up the calorie content of every food you eat
2. Weigh your portions with a kitchen scale
3. Log every meal, snack, and drink manually
4. Calculate your macronutrient ratios
5. Adjust your intake based on your activity level
6. Do this every single day, forever

No wonder 95% of people abandon calorie-counting apps within the first month. These apps turn eating into an accounting exercise.

## The Zero-Math Approach

Jovida works differently: **you set the goal, the agent handles the math**.

### Step 1: Define Your Goal (5 seconds)
"I want to drop to 15% body fat in 5 months."

### Step 2: Agent Calculates Everything (instant)
- Current estimated body fat: 22%
- Required calorie deficit: ~500 kcal/day
- Optimal macro split for your activity level
- Daily targets for calories, protein, carbs, and fat

### Step 3: Receive Your Plan (automatic)
The agent generates a weekly meal plan, a grocery list organized by store section, dining-out alternatives, and quick-prep recipes sorted by cooking time.

### Step 4: Just Eat
Follow the plan. The agent adjusts dynamically based on your activity, energy levels, and progress.

## Smart Grocery Integration

The agent converts your meal plan into an organized grocery list:

- Ingredients grouped by store section
- Quantities adjusted for household size
- Substitution suggestions for unavailable items
- Cost estimates based on local pricing data

Users report saving an average of **45 minutes per week** on grocery planning alone.

## Fridge-Based Recipe Generation

Tell the agent what is in your fridge, and it generates recipes that use your available ingredients, hit your macro targets, match your cooking skill level, and minimize food waste.

## Dining Out Support

When you are at a restaurant, the agent:

1. Recommends dishes that fit your remaining daily budget
2. Suggests modifications to improve the nutritional profile
3. Adjusts the rest of your day's plan to accommodate

You do not need a calculator. You do not need a food scale. You just eat what the agent suggests.
    `,
  },
];
