import RichMarkdown from "@/features/blog/components/RichMarkdown";
import DiagramFigure from "@/features/blog/components/DiagramFigure";
import GenUILayersDiagram from "@/features/blog/diagrams/GenUILayersDiagram";
import ProjectStructureDiagram from "@/features/blog/diagrams/ProjectStructureDiagram";
import FeedbackLoopDiagram from "@/features/blog/diagrams/FeedbackLoopDiagram";

const intro = `
## 摘要

过去一年，Agent UI 生态快速分化出几条路线：A2UI、OpenUI、Open-JSON-UI 走声明式 UI；MCP-UI、MCP Apps、OpenAI Apps SDK 走嵌入式工具 UI；Vercel AI SDK 这类方案把 tool result 映射成应用内组件；AG-UI 则提供 Agent 与前端之间的事件运行时协议。

这些方案主要解决的是运行时交付问题：Agent 或工具这一次如何把 UI 意图交给前端渲染。Agent Project 的切入点不同——它不把 UI 当作一次对话里的输出片段，而是把 UI 背后的状态、结构、规则、资源、技能和可执行逻辑组织成一个 Agent 可读写、可校验、可回溯的持久工作空间。

两者并非替代关系。更合理的分层是：Agent Project 管理持久状态、业务语义和可操作结构，A2UI、OpenUI、MCP-UI、Apps SDK 等方案负责把当前状态渲染到具体宿主里。
`;

const genuiRoutes = `
## GenUI 生态的四种路线

现在的 GenUI 方案不只是"让 Agent 输出组件"这么简单。不同方案背后其实是四种不同的设计路线，差别在于：谁拥有 UI、Agent 输出什么、前端执行什么。

| 路线 | 代表方案 | Agent 输出什么 | 前端做什么 | 核心取舍 |
|---|---|---|---|---|
| 声明式 UI | A2UI、OpenUI、Open-JSON-UI | UI 描述、组件树、data model update | 用可信组件库渲染 | 安全、跨端、样式一致，但受组件目录限制 |
| 嵌入式工具 UI | MCP-UI、MCP Apps、OpenAI Apps SDK | UI resource、HTML、widget 引用 | 在 sandbox 或宿主 runtime 中渲染 | 表达能力强，但样式隔离和安全模型更复杂 |
| 框架内工具 UI | Vercel AI SDK、assistant-ui | tool call / tool result | 应用内映射成 React 等组件 | 工程落地快、控制力强，但跨宿主复用弱 |
| 事件运行时协议 | AG-UI | agent state、tool lifecycle、UI events | 同步 Agent 与前端状态 | 统一运行时连接，但本身不规定 UI 长相 |

### 声明式 UI：把 UI 当作安全数据

A2UI、OpenUI、Open-JSON-UI 的共同思路是：Agent 不生成任意 HTML 或 JavaScript，而是生成受约束的 UI 描述。前端只允许它使用预注册的组件，比如 Card、Form、Chart、Table。

A2UI 采用 JSON/JSONL 消息，把 UI structure、data model 和 client rendering 分开；OpenUI 则进一步把输出格式压缩成面向流式生成的 DSL，强调 token efficiency 和逐行渲染。这类方案的优势是安全、跨端、容易继承宿主设计系统；代价是表达能力取决于组件 catalog。

### 嵌入式工具 UI：把 UI 当作工具返回的应用片段

MCP-UI、MCP Apps 和 OpenAI Apps SDK 更像"工具返回一个可嵌入的小应用"。工具结果里带一个 \`ui://...\` resource 或 widget/template 引用，宿主把它放进 sandbox iframe 或对应 runtime 中渲染。

这条路线适合复杂交互：dashboard、地图、表单、多步骤工作流、3D viewer 都可以做。它的优势是表达能力强，缺点也明显：样式不一定天然融入宿主，跨 native 端不如声明式 UI 自然，安全模型也更依赖 sandbox、CSP 和权限控制。

### 框架内工具 UI：把 tool result 映射为应用组件

Vercel AI SDK、assistant-ui 这类方案通常不定义一个跨宿主 UI 协议，而是在应用内部把 tool call 或 tool result 映射成 React 组件。比如天气工具返回数据，应用展示 \`WeatherCard\`；订单工具返回数据，应用展示订单卡片和操作按钮。

这条路线最工程实用：组件、样式、交互都由应用掌控，类型和测试也更容易落地。但它不是开放 UI 协议，跨产品、跨宿主、跨组织复用较弱；业务越多，组件和工具 glue code 也会线性增长。

### 事件运行时协议：连接 Agent 与前端，而不是定义组件

AG-UI 容易和 A2UI 混淆，但它不是 Generative UI schema。它更像 Agent 与前端之间的事件总线，负责 agent state、tool lifecycle、streaming、user interaction、cancel/resume 等运行时连接。

因此 AG-UI 可以承载 A2UI、MCP-UI、Open-JSON-UI 或自定义 UI 方案。它解决"Agent 和应用如何同步状态与事件"，而不是解决"一个 Card 应该怎么声明"。

这些路线共同解决的是**运行时交付问题**：Agent 或工具在某一轮交互中产生 UI 意图，前端把它渲染出来，用户交互再回到 Agent 或应用逻辑。这个方向非常重要，因为纯文本对话无法承载复杂输入、结构化浏览和高密度信息。

但如果目标是一个长期存在、可反复编辑和演化的 UI，比如运营看板、可视化报表、数据分析项目、内容管理页面、低代码应用、配置后台，单次 UI 输出还不够。一个由 Agent 管理的 UI 项目需要回答的是另一组问题：

- Agent 上次生成了什么？
- 哪些数据是历史事实，哪些只是当前展示？
- Agent 能不能只改一个卡片，而不是重写整个界面？
- Schema 和业务规则放在哪里，是否会随会话丢失？
- 前端渲染失败后，Agent 能否读回状态并修正？
- 新增一个业务类型时，是否必须新增专用工具和后端代码？

这就是 Agent Project 要解决的层级。
`;

const projectBasicIntro = `
## Agent Project 的核心命题：UI 不是消息，而是项目

定义直接：**一个 Agent Project 是一组由 Agent 长期维护、可被 UI 渲染和操作的项目状态**。

Agent Project 的本质不是业务页面，而是一个 Agent 可操作的文件项目：
`;

const projectBasicDetail = `
这里的 \`data/\` 内部结构只是示例。Project 只约定业务数据从 \`data/\` 进入，并由目录内的 \`schema.json\` 描述和校验；至于里面是 \`sections/\`、\`cards/\`、\`records/\`、\`incidents/\` 还是 \`metrics/\`，都由具体项目定义。

\`\`\`text
/projects/{name}/
  PROJECT.md
  data/
    schema.json
    {section}/
      schema.json
      {item}.json
  skills/
    {project_scoped_skill}/
      SKILL.md
  resources/
    ...
  handlers/
    ...
\`\`\`

其中几类文件各司其职：

| 部分 | 作用 |
|---|---|
| \`PROJECT.md\` | 项目入口手册。让 Agent 理解这个项目的用途、各 section 的业务角色、路由规则和不变量 |
| \`data/\` | 业务数据入口。UI 消费方从这里拿到纯业务数据视图 |
| \`schema.json\` | 机器可校验的结构契约。Agent 写 JSON 时自动校验，失败会作为工具错误返回 |
| \`skills/\` | Project-scoped Skill。只在操作该项目时提供局部知识，控制影响范围 |
| \`resources/\` | 可选的项目级持久资源。Agent 可按需读取并在项目数据中引用，不塞进单次上下文 |
| \`handlers/\` | 可选的 action handler。让项目从数据集合升级为可执行的全栈项目 |

最关键的工程取舍是：**Agent 不通过业务专用 API 操作 UI，而是用通用文件读写能力操作 \`/projects/\`**。

也就是说，Agent 不需要 \`render_order_card\`、\`update_inventory_section\`、\`create_refund_form\` 这类特化工具。它只需要 \`read\`、\`write\`、\`edit\`、\`list\`、\`glob\`、\`grep\`。业务差异不进工具层，而进项目自己的 \`PROJECT.md\` 和 \`schema.json\`。

这带来一个重要转变：新增 UI 类型不再等价于新增工具链。新增的是一个自解释的项目定义。
`;

const layering = `
## 三层分层：把"系统能力"和"业务知识"分开

Agent Project 在工程上是三层结构：

| 层 | 本质 | 由谁定义 | 例子 |
|---|---|---|---|
| L1 基础设施 | 系统能力 | Agent Framework | \`/projects/\` 路径、\`PROJECT.md\` front matter schema、\`schema.json\` 校验、Project API、变更事件 |
| L2 项目定义 | 结构与规则 | 业务方预置 | 具体项目类型的 \`PROJECT.md\`、\`schema.json\`、目录约定 |
| L3 项目内容 | 数据与状态 | Agent 运行时 + 预置资源 | 业务 JSON 文件、\`resources/\`、\`handlers/\`、Project-scoped Skill |

这个分层带来一个重要的扩展性属性：**新增项目类型，L1 零代码改动**。

- 新增"运营看板"项目？写一份 L2 的 \`PROJECT.md\` + \`schema.json\` 就够了。Agent Framework 代码不动，Agent 工具集也不变。
- 同类项目的不同用户？L3 内容可以完全不同——Agent 按规则生成的数据本就是个性化的。
- 业务规则更新？只改 L2 的声明式文件，不动 L1 也不动 Agent prompt。

**L1 不知道 L2 的存在**（Agent Framework 不知道什么是"运营看板"），**L2 不限制 L3 的内容**（同类项目的不同用户可以有完全不同的实际数据）。三层之间是声明式合约，而不是 API 调用。
`;

const schema2ui = `
## Schema2UI：把项目文件变成 UI 数据层

Project 不是"随便让 Agent 写文件"。系统在项目文件之上加了一层 Schema2UI 契约，让结构化业务数据可以稳定转成 UI 可消费的数据视图。

Schema2UI 的核心约定有三条：

1. \`data/\` 是业务数据唯一入口。
2. \`schema.json\` 描述当前目录的一级内容，既描述文件，也描述子目录集合。
3. 数据视图 API 从 \`data/\` 递归构建纯业务数据树，消费方无需理解文件路径。

注意，Schema2UI 不规定 \`data/\` 下必须有哪些业务目录。它只规定目录和 schema 的解释方式，具体的数据形状由项目定义决定。

例如，一个运营看板项目可以长这样：

\`\`\`text
/projects/ops_dashboard/
  PROJECT.md
  data/
    schema.json
    overview.json
    incidents/
      schema.json
      inc-2026-04-12.json
    metrics/
      schema.json
      2026-04-01.json
\`\`\`

Agent 写入 \`/projects/ops_dashboard/data/incidents/inc-2026-04-12.json\` 时，系统会自动读取同目录的 \`schema.json\` 校验。校验失败不会默默落盘，而是立刻返回工具错误，Agent 可以当场修正。

UI 侧不需要扫描文件系统。它调用数据视图 API，拿到的是这样的递归数据视图：

\`\`\`json
{
  "name": "ops_dashboard",
  "description": "Operations dashboard",
  "data": {
    "name": "data",
    "items": [
      {
        "id": "overview",
        "data": {
          "status": "degraded",
          "open_incidents": 3
        }
      }
    ],
    "children": [
      {
        "name": "incidents",
        "description": "Open and recent incidents",
        "items": [
          {
            "id": "inc-2026-04-12",
            "data": {
              "severity": "high",
              "service": "checkout",
              "summary": "Payment timeout rate increased"
            }
          }
        ]
      },
      {
        "name": "metrics",
        "description": "Daily service metrics",
        "items": [
          {
            "id": "2026-04-01",
            "data": {
              "availability": 0.998,
              "p95_latency_ms": 420
            }
          }
        ]
      }
    ]
  }
}
\`\`\`

这让文件系统同时服务三类角色：

- 对 Agent：可读、可写、可搜索、可局部编辑。
- 对平台：可校验、可发事件、可生成数据视图。
- 对 UI：可消费、可转换、无需理解底层路径。

值得单独强调的是 **\`schema.json\` 的双重作用**：同一个文件同时服务两个场景：

1. **Agent 侧**：写入时自动按它校验，失败立即作为 tool error 返回，Agent 当场修正。
2. **API 侧**：数据视图 API 识别"有 schema.json 的目录就是结构化集合"，自动把 JSON 文件解析为结构化数据返回。

写一份 schema，两处复用，无需额外配置。业务方不需要在 schema 之外再写一份"前端转换规则"或"校验规则"——同一份 schema 既是 Agent 的约束也是 UI 的契约。
`;

const a2uiDiff = `
## 与 A2UI 的真正差异

A2UI 的设计非常合理：Agent 发送声明式 UI 数据，客户端用自己的原生组件渲染，不执行任意代码；它还考虑了流式生成、data model、surface update 和跨平台渲染。

但 A2UI 的抽象中心仍然是"UI 消息"。它关心的是远端 Agent 如何跨信任边界把 UI 意图传给宿主。

Agent Project 的抽象中心是"项目状态"。它关心的是一个可持续演化的 UI 背后，状态、规则、资源和知识如何被 Agent 持续维护。

| 维度 | A2UI / 典型 GenUI | Agent Project |
|---|---|---|
| 基本对象 | 一段可渲染的 UI 描述或更新消息 | 一个持久项目目录 |
| 生命周期 | 通常绑定交互会话或运行时 surface | 可跨会话长期存在，也可按业务生命周期归档 |
| Agent 回读 | 依赖宿主状态或上下文回传 | Agent 直接 \`read\` / \`grep\` / \`glob\` 项目文件 |
| 更新方式 | 发送新的 UI/update message | 对文件做局部 \`edit\` / \`write\` |
| Schema 位置 | 通常在组件 catalog、prompt 或协议层 | 项目目录中的 \`schema.json\` |
| 业务语义 | 依赖 prompt、tool 或应用代码 | \`PROJECT.md\` + Project-scoped Skill |
| UI 消费 | 客户端直接渲染协议消息 | 客户端从项目 API 拿数据视图再渲染 |
| 调试方式 | 看消息流、组件树、运行时 state | 看文件、diff、schema 错误、变更事件 |
| 扩展方式 | 扩展组件 catalog / renderer / tool | 新增项目定义，不改平台基础层 |

可以把两者关系理解成：

\`\`\`text
Agent Project          = Agent 维护 UI 项目状态的 workspace
A2UI / MCP-UI / Apps SDK = 把当前状态交付到宿主 UI 的渲染协议
AG-UI                  = Agent 运行过程与前端同步的 event protocol
\`\`\`

所以 Agent Project 不应该被定位为"比 A2UI 更好的 GenUI 协议"。更准确的表述是：**Agent Project 是 GenUI 协议下面的持久项目层**。
`;

const fsSemantics = `
## 为什么"用文件系统语义替代 API 语义"很关键

传统实现里，每一种 UI 或业务对象都容易长出一套专用工具：

\`\`\`text
render_order_card
update_inventory_section
delete_campaign_card
append_refund_section
update_revenue_chart
...
\`\`\`

这会带来几个问题：

- 工具 schema 和业务强绑定，新增 UI 类型要改工具。
- Agent 不能自然回溯自己之前的输出。
- 局部更新困难，常常退化成"重新生成整个 UI"。
- 数据在数据库或运行时对象里，不利于调试、diff 和迁移。
- 业务规则分散在 prompt、工具描述、后端 validator、前端 converter 里。

Agent Project 反过来走：工具保持通用，业务进入项目文件。底层判断是：LLM 很擅长理解和修改文件项目——Claude Code 证明了 Agent 可以通过文件系统理解一个软件项目，Agent Project 把同样的模式推广到通用 UI 项目。
`;

const bootstrap = `
## Agent 如何从零 bootstrap 一个项目

L1/L2/L3 是结构，但更具说服力的是：**Agent 真的能用通用文件工具走完整个项目初始化**。一种典型的 bootstrap 流程是这样的：

1. **确认目标值得 project 化**——跨会话连续、可多维拆分、history-driven。
2. **协商观察维度**——Agent 用 ask 类对话工具和用户敲定 3-4 个核心 dimension，用用户能理解的语言，不暴露 schema、section 这些内部词。
3. **设计 schema**——Agent 根据敲定的 dimension 反向写 \`schema.json\`，每个 section 选一个最合适的 card 类型，按 meta-schema 收窄约束。
4. **写入入口文件**——Agent 用 \`write\` 工具创建 \`PROJECT.md\`（带 \`bootstrap: in_progress\` front matter 标记）+ 各 section 的 \`schema.json\` + 空 section 文件。
5. **录入首张 card**——Agent 写第一条业务数据，删掉 \`bootstrap: in_progress\` 标记，bootstrap 完成。

整个过程**没有用任何业务专用工具**。Agent 只用 \`write\`、\`edit\`、\`read\`（加一个引导对话用的 ask 工具）就完成了项目的从无到有。bootstrap 期间项目在 Agent 上下文里以 "(bootstrap in progress)" 后缀出现，跨会话可以续做。

这佐证了一个不显然的论点：**只要 Agent 会读写文件 + 有项目定义和 schema 引导，它就能维护任意类型的项目**。新增项目类型不需要新增工具，只需要新增 L2 的声明性约束。
`;

const feedbackIntro = `
## 事件、渲染和反馈闭环

Project 不是离线文件夹。系统在写入链路上自动接入事件。典型流程是：
`;

const feedbackDetail = `
如果渲染失败，错误不只停在前端日志里。应用侧可以把渲染异常作为系统反馈消息交回 Agent：

\`\`\`text
客户端渲染异常
  -> 系统反馈消息
  -> Agent 读取相关项目文件
  -> Agent 编辑修正
  -> 变更事件再次触发 UI 更新
\`\`\`

这点和单次 GenUI 输出很不一样。失败对象不是一段已经发出去的消息，而是一个可读、可改、可再次校验的项目状态。
`;

const safety = `
## 通用 UI 系统里的安全边界

这一节的设计动机回到一个更根本的问题：**谁被期望持有专业能力**。

- **开发者工具**（Claude Code、Cursor）：用户是创作者。用户写配置或 Skill 时，清楚自己在"编程"工具的行为；输出不好 → 因果链清晰 → 用户自查。
- **消费级产品**（面向终端用户的 Agent 产品）：用户是使用者。用户提供偏好或资源时，认为自己在"告诉专家我的情况"，而不是在配置系统；输出不好 → 因果链模糊 → 归咎平台。

这个区别意味着，**消费级 Agent 系统必须控制任何内容变化对 Agent 能力的影响面**。一条新写的 Skill 出错不能波及无关项目，一个项目的 schema 失误不能让其他用户受影响。

回到 UI 系统：当 Agent 能持续修改 UI 状态时，系统不能只依赖一次性输出校验。配置、资源、业务规则、渲染协议、action handler 都可能影响最终界面。如果所有知识都进入全局 prompt 或全局工具，任何局部规则错误都可能扩散到其他 UI 项目。

Project 的几个隔离机制都是在回应这个责任边界：

- Project-scoped Skill 只影响当前项目，不污染全局 Agent。
- \`schema.json\` 在写入时自动校验，结构错误立即暴露。
- \`PROJECT.md\` 承载业务规则和不变量，避免把业务语义塞进全局 prompt。
- \`data/\`、\`skills/\`、\`resources/\` 分区明确，业务数据和系统知识不混在一起。
- UI 渲染由应用侧转换层负责，项目层不执行任意前端代码。

这不是传统意义上的 sandbox，而是**能力作用域设计**。对于长期运行、面向消费级用户的 Agent UI 系统，这比"让 Agent 每轮生成完整 UI"更可控。
`;

const broader = `
## 更广的应用前景

本文用 Schema2UI 作为主要例子，因为 \`data/ + schema.json + 数据视图\` 是最容易理解的锚点。但 Agent Project 的更大想象空间，是把"Agent 可维护的项目工作空间"推广到更多 UI 形态。

如果项目里放的是 \`src/\`、组件、路由、样式和测试，它就可以演化成完整 Web 项目；如果放的是 Markdown、图表配置和引用资源，它可以是可视化文档或报告；如果放的是数据集、脚本和结果产物，它可以是数据分析项目。

这时校验机制不一定是 \`schema.json\`，也可以是 typecheck、lint、unit test、build 或 dry-run；UI 消费方式也不一定是数据视图 API，而可能是预览页面、构建产物、组件清单或运行状态。

这不改变本文的主线：Agent Project 首先解决的是"Agent 如何维护一个可被 UI 呈现和操作的持久项目状态"。Schema2UI 是这个思路在结构化数据 UI 上的落地方式。
`;

const fit = `
## 适用边界

Project 适合这些场景：

- 持久 UI：运营看板、低代码页面、可视化文档、配置后台、数据分析项目、内容管理页面。
- 多维状态：计划、记录、指标、建议、资源、布局、交互规则需要长期联动。
- 需要可视化反馈：前端或业务系统要能看到当前状态、进度、结构和异常。
- Agent 需要回溯编辑：不是一次性生成，而是持续维护。
- 新业务类型很多：不希望每个 UI 类型都新增一套专用工具。

Project 不适合替代所有 UI：

- 对话里的即时富媒体卡片仍然应该走消息内卡片或 GenUI message。
- 一次性查询结果不需要持久化成 Project。
- 高度实时、帧级交互的 UI 不应由 Agent 文件编辑驱动。
- 已有成熟 App 的完整前端不需要搬进 Agent Project。Agent Project 更适合管理 Agent 参与维护的状态层。

这也解释了为什么 Project 和 A2UI 不冲突。即时渲染可以用 A2UI，持久 UI 项目可以用 Project；同一个产品里两者可以并存。
`;

const reusable = `
## 可复用的设计要点

这套方案最值得复用的不是"Agent 生成 UI"本身，而是下面几个组合点：

1. **Agent 可见的持久 UI 工作空间**：将 UI 背后的状态、结构、资源、规则和交互逻辑组织为 Agent 可通过通用文件工具读写的项目目录，而不是一次性 UI 消息或专用 CRUD API。
2. **项目内 schema 校验闭环**：在文件写入路径中自动基于同目录 schema 校验，校验错误作为工具错误反馈给 Agent，形成生成、校验、修正闭环。
3. **Schema2UI 数据视图**：将文件目录和 schema 映射为 UI 可消费的递归业务数据树，使前端无需理解文件系统，同时保留 Agent 的文件级操作能力。
4. **Project-scoped Skill 与资源共置**：将项目级业务知识、持久资源、数据和可选 action handler 共置于同一项目作用域内，控制能力影响范围。
5. **渲染反馈回到可编辑源状态**：将前端渲染错误反馈回 Agent，使 Agent 通过读取和编辑持久项目文件修正 UI 状态，而不是重新生成临时 UI 输出。

这些点组合起来，形成的是"Agent 维护 UI 项目"的系统，而不是"Agent 发送 UI 描述"的协议。
`;

const conclusion = `
## 结论

GenUI 让 Agent 从文本回答走向界面表达，这是必要的一步。但如果 Agent 要维护一个可持续演化的 UI，仅有"把 UI 生成出来"的能力还不够。

通用 UI 项目需要一个可维护的状态层：可读、可写、可校验、可调试、可局部编辑、可跨会话延续。Agent Project 把这一层抽象成文件项目，再用数据视图、变更事件、项目 API 和 Project-scoped Skill 连接 Agent 与 UI。

因此，Project 的定位不是另一个 A2UI，而是 GenUI 之下的持久项目层：让 Agent 不只是会"说 UI"，而是能维护一个 UI 背后的完整项目状态。

## 调研来源

- [A2UI 官方介绍](https://a2ui.org/introduction/what-is-a2ui/)：声明式 Agent-to-UI 协议、native rendering、catalog、data model 等概念。
- [A2UI GitHub](https://github.com/google/A2UI/)：A2UI public preview、跨平台 renderer 与协议定位。
- [AG-UI Generative UI Specs](https://docs.ag-ui.com/concepts/generative-ui-specs)：区分 AG-UI 与 A2UI、MCP-UI、Open-JSON-UI 等 GenUI spec 的关系。
- [AG-UI GitHub](https://github.com/ag-ui-protocol/ag-ui)：事件协议、agent/frontend runtime connection、state synchronization。
- [MCP-UI GitHub](https://github.com/MCP-UI-Org/mcp-ui)：UI over MCP、MCP Apps resource、iframe/Remote DOM、安全模型。
- [MCP-UI Protocol Details](https://mcpui.dev/guide/protocol-details.html)：\`UIResource\`、\`ui://\`、HTML、URI、Remote DOM 等资源类型。
- [OpenAI Apps SDK Help](https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk)：Apps SDK 基于 MCP，定义 ChatGPT 内 App 的逻辑与界面。
- [Vercel AI SDK GenUI](https://vercel.com/blog/ai-sdk-3-generative-ui)：React Server Components 与 tool call 到 UI 的映射。
- [AI SDK RSC 文档](https://ai-sdk.dev/docs/ai-sdk-rsc)：RSC GenUI 仍属 experimental，生产建议使用 AI SDK UI。
`;

const AgentProjectGenUIArticle = () => (
  <>
    <RichMarkdown>{intro}</RichMarkdown>
    <DiagramFigure caption="Agent Project 位于 Agent 与渲染协议层之间，作为持久项目层。">
      <GenUILayersDiagram />
    </DiagramFigure>
    <RichMarkdown>{genuiRoutes}</RichMarkdown>
    <RichMarkdown>{projectBasicIntro}</RichMarkdown>
    <DiagramFigure caption="Agent Project 项目目录结构，data/ 内部仅为示例。">
      <ProjectStructureDiagram />
    </DiagramFigure>
    <RichMarkdown>{projectBasicDetail}</RichMarkdown>
    <RichMarkdown>{layering}</RichMarkdown>
    <RichMarkdown>{bootstrap}</RichMarkdown>
    <RichMarkdown>{schema2ui}</RichMarkdown>
    <RichMarkdown>{a2uiDiff}</RichMarkdown>
    <RichMarkdown>{fsSemantics}</RichMarkdown>
    <RichMarkdown>{feedbackIntro}</RichMarkdown>
    <DiagramFigure caption="写入 → 校验 → 渲染 → 反馈,四个阶段顺时针闭环。">
      <FeedbackLoopDiagram />
    </DiagramFigure>
    <RichMarkdown>{feedbackDetail}</RichMarkdown>
    <RichMarkdown>{safety}</RichMarkdown>
    <RichMarkdown>{broader}</RichMarkdown>
    <RichMarkdown>{fit}</RichMarkdown>
    <RichMarkdown>{reusable}</RichMarkdown>
    <RichMarkdown>{conclusion}</RichMarkdown>
  </>
);

export default AgentProjectGenUIArticle;
