import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";
import coverAgentProjectGenUI from "./agent-project-genui/cover.svg";

export type Locale = "en" | "zh";

export interface RichBlogPostMeta {
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  coverImage: string;
  author: { name: string; type: "Person" | "Organization" };
  faq?: { question: string; answer: string }[];
}

export interface RichBlogPost extends RichBlogPostMeta {
  Component: LazyExoticComponent<ComponentType>;
}

export const richBlogPosts: RichBlogPost[] = [
  {
    slug: "agent-project-genui",
    locale: "zh",
    title: "Agent Project：把生成式 UI 从「输出格式」推进到「可维护 UI 工作空间」",
    excerpt:
      "Agent 已经会「生成」UI，但还不擅长「维护」一个长期演化的 UI 项目。Agent Project 把 UI 背后的状态、Schema、规则和资源，抽象成 Agent 可读写、可校验的持久项目工作空间。",
    category: "Agent Technology",
    date: "May 11, 2026",
    readTime: "13 min",
    metaTitle: "Agent Project：GenUI 之下的持久项目层 | Jovida Blog",
    metaDescription:
      "为什么 GenUI 之外还需要一个 Agent 项目层。Agent Project 把 UI 背后的状态、Schema、技能与资源组织成 Agent 可读写、可校验的持久项目工作空间，与 A2UI、MCP-UI、Apps SDK 等渲染协议互补。",
    keywords:
      "agent project, genui, generative ui, a2ui, mcp-ui, ag-ui, openai apps sdk, schema2ui, agent ui, jovida",
    coverImage: coverAgentProjectGenUI,
    author: { name: "Jasper D", type: "Person" },
    faq: [
      {
        question: "Agent Project 是不是另一个 GenUI 协议？",
        answer:
          "不是。A2UI、MCP-UI、Apps SDK 这类方案解决的是「Agent 如何把 UI 交付到宿主渲染」，Agent Project 解决的是「Agent 如何长期维护 UI 背后的状态、Schema 和业务规则」。两者是分层关系，Project 在渲染协议之下。",
      },
      {
        question: "为什么用文件系统语义而不是业务 API？",
        answer:
          "因为 LLM 已经被证明擅长用 read/write/edit/grep/glob 操作文件项目(Claude Code 等场景)。把业务差异塞进项目自己的 PROJECT.md 和 schema.json，而不是塞进新增的工具 schema，可以让平台保持薄，新增 UI 类型不再等价于新增工具链。",
      },
      {
        question: "Project 适合所有 UI 场景吗？",
        answer:
          "不适合。对话内的一次性卡片仍然应该走消息内 GenUI；高度实时、帧级交互的 UI 不应由 Agent 文件编辑驱动；成熟的应用前端不需要搬进 Project。Project 适合持久 UI：看板、低代码页面、可视化文档、配置后台、数据分析项目。",
      },
    ],
    Component: lazy(() => import("./agent-project-genui/article")),
  },
  {
    slug: "agent-project-genui",
    locale: "en",
    title:
      "Agent Project: From Generative UI Output to a Maintainable UI Workspace",
    excerpt:
      "AI agents can already generate UI, but they are not yet good at maintaining a UI project that evolves over time. Agent Project abstracts the state, schemas, rules, and resources behind a UI into a persistent workspace an agent can read, write, and validate.",
    category: "Agent Technology",
    date: "May 12, 2026",
    readTime: "13 min",
    metaTitle:
      "Agent Project: The Persistent Project Layer Beneath GenUI | Jovida Blog",
    metaDescription:
      "Why GenUI alone is not enough. Agent Project organizes the state, schemas, skills, and resources behind a UI into a persistent workspace that agents can read, write, and validate—complementary to rendering protocols like A2UI, MCP-UI, and Apps SDK.",
    keywords:
      "agent project, genui, generative ui, a2ui, mcp-ui, ag-ui, openai apps sdk, schema2ui, agent ui, jovida",
    coverImage: coverAgentProjectGenUI,
    author: { name: "Jasper D", type: "Person" },
    faq: [
      {
        question: "Is Agent Project another GenUI protocol?",
        answer:
          "No. Solutions like A2UI, MCP-UI, and Apps SDK address how an agent delivers UI to a host for rendering. Agent Project addresses how an agent maintains the state, schemas, and business rules behind that UI over time. They are layered—Agent Project sits beneath the rendering protocols, not alongside them.",
      },
      {
        question: "Why filesystem semantics instead of business APIs?",
        answer:
          "Because LLMs have already proven good at operating file projects via read/write/edit/grep/glob—Claude Code is the canonical example. Pushing business specifics into a project's own PROJECT.md and schema.json, rather than into new tool schemas, keeps the platform thin: adding a new UI type no longer means adding a new toolchain.",
      },
      {
        question: "Is Agent Project suited for every UI?",
        answer:
          "No. One-off cards inside a conversation are still better served by in-message GenUI; highly real-time, frame-level interactive UI should not be driven by an agent editing files; mature application frontends do not need to be ported into a project. Agent Project fits persistent UI: dashboards, low-code pages, visual documents, configuration panels, data analysis projects.",
      },
    ],
    Component: lazy(() => import("./agent-project-genui/article.en")),
  },
];
