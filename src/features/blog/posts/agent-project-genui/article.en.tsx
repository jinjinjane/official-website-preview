import RichMarkdown from "@/features/blog/components/RichMarkdown";
import DiagramFigure from "@/features/blog/components/DiagramFigure";
import GenUILayersDiagram from "@/features/blog/diagrams/GenUILayersDiagram";
import ProjectStructureDiagram from "@/features/blog/diagrams/ProjectStructureDiagram";
import FeedbackLoopDiagram from "@/features/blog/diagrams/FeedbackLoopDiagram";

const intro = `
## Summary

Over the past year, the Agent UI ecosystem has rapidly split into several routes: A2UI, OpenUI, and Open-JSON-UI take the declarative-UI path; MCP-UI, MCP Apps, and the OpenAI Apps SDK take the embedded-tool-UI path; Vercel AI SDK and similar projects map tool results into in-app components; AG-UI provides an event runtime protocol between agent and frontend.

These approaches mostly solve the runtime delivery problem: how an agent or tool, in this specific turn, hands a UI intent over to the frontend for rendering. Agent Project enters from a different angle—it does not treat UI as a one-shot output inside a conversation, but organizes the state, structure, rules, resources, skills, and executable logic behind a UI into a persistent workspace that an agent can read, write, validate, and revisit.

The two are not alternatives. A more useful layering is: Agent Project manages the persistent state, business semantics, and operable structure, while A2UI, OpenUI, MCP-UI, Apps SDK, and friends handle the delivery of current state into a specific host for rendering.
`;

const genuiRoutes = `
## Four Routes in the GenUI Ecosystem

GenUI today is no longer just "let the agent output components." Behind these approaches sit four distinct design routes, differing on: who owns the UI, what the agent outputs, what the frontend executes.

| Route | Representative | What the agent outputs | What the frontend does | Core trade-off |
|---|---|---|---|---|
| Declarative UI | A2UI, OpenUI, Open-JSON-UI | UI descriptions, component trees, data-model updates | Render with a trusted component library | Safe, cross-platform, consistent—but bounded by the component catalog |
| Embedded Tool UI | MCP-UI, MCP Apps, OpenAI Apps SDK | UI resources, HTML, widget/template references | Render in a sandboxed iframe or host runtime | Expressive—but style isolation and the security model are more complex |
| Framework-Native Tool UI | Vercel AI SDK, assistant-ui | tool calls / tool results | Map them to React-style components inside the app | Quick to ship, full control—but weak cross-host reuse |
| Event Runtime Protocol | AG-UI | agent state, tool lifecycle, UI events | Sync agent and frontend state | Unified runtime connection—but it does not define what the UI looks like |

### Declarative UI: UI as Safe Data

A2UI, OpenUI, and Open-JSON-UI share a single idea: the agent does not emit arbitrary HTML or JavaScript; it emits a constrained UI description. The frontend allows only pre-registered components—Card, Form, Chart, Table.

A2UI uses JSON/JSONL messages and separates UI structure, data model, and client rendering. OpenUI goes further by compressing the output into a streaming-oriented DSL that emphasizes token efficiency and line-by-line rendering. The strengths are safety, cross-platform consistency, and easy inheritance of the host's design system; the cost is that expressiveness is bounded by the component catalog.

### Embedded Tool UI: UI as Tool-Returned App Fragments

MCP-UI, MCP Apps, and the OpenAI Apps SDK feel more like "the tool returns an embeddable mini-app." The tool result carries a \`ui://...\` resource or a widget/template reference; the host puts it inside a sandboxed iframe or the corresponding runtime.

This route handles complex interaction well: dashboards, maps, forms, multi-step workflows, 3D viewers. The strength is raw expressiveness. The drawbacks are real: styling does not naturally inherit from the host, cross-native parity is weaker than the declarative route, and the security model leans more heavily on sandboxing, CSP, and permission control.

### Framework-Native Tool UI: Mapping Tool Results to App Components

Vercel AI SDK and assistant-ui generally do not define a cross-host UI protocol. They map tool calls or tool results into React components inside the application. A weather tool returns data and the app shows a \`WeatherCard\`; an order tool returns data and the app shows an order card with action buttons.

This route is the most pragmatic for product engineering: components, styling, interaction, types, and tests all live inside the app. But it is not an open UI protocol—cross-product, cross-host, cross-organization reuse is weak; and as your business grows, components and tool-glue code grow linearly with it.

### Event Runtime Protocol: Connecting Agent and Frontend, Not Defining Components

AG-UI is easy to confuse with A2UI, but it is not a Generative UI schema. It behaves more like an event bus between agent and frontend—handling agent state, tool lifecycle, streaming, user interaction, cancel/resume, and similar runtime concerns.

AG-UI can therefore carry A2UI, MCP-UI, Open-JSON-UI, or custom UI schemes. It addresses "how agent and app stay synchronized in state and events," not "how a Card should be declared."

These routes collectively solve the **runtime delivery problem**: in a given interaction, an agent or tool produces a UI intent, the frontend renders it, and the user's interaction returns to the agent or app logic. That direction matters, because plain text dialogue cannot carry complex input, structured browsing, or dense information.

But when the goal is a long-lived UI that is repeatedly edited and evolved—an operations dashboard, a visual report, a data-analysis project, a content management page, a low-code app, a configuration backend—a single round of UI output is not enough. A UI project maintained by an agent has to answer a different set of questions:

- What did the agent generate last time?
- Which data points are historical facts, and which are only the current view?
- Can the agent change a single card without rewriting the entire interface?
- Where do the schema and business rules live? Will they evaporate with the session?
- If the frontend fails to render, can the agent read back and fix the state?
- When a new business type appears, does it require adding a new tool and a new backend path?

That is the layer Agent Project addresses.
`;

const projectBasicIntro = `
## The Core Premise of Agent Project: UI Is a Project, Not a Message

Plain definition: **an Agent Project is a set of project state that an agent maintains over time and that a UI can render and operate on**.

At heart, an Agent Project is not a business page—it is an agent-operable file project:
`;

const projectBasicDetail = `
The internal layout of \`data/\` above is only an example. Agent Project only requires business data to enter through \`data/\` and be described and validated by the directory's \`schema.json\`. Whether the children are \`sections/\`, \`cards/\`, \`records/\`, \`incidents/\`, or \`metrics/\` is up to each project to define.

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

Each file plays a distinct role:

| Part | Role |
|---|---|
| \`PROJECT.md\` | Project manifest. Lets the agent understand the project's purpose, the business role of each section, routing rules, and invariants |
| \`data/\` | Business data entry. UI consumers read from here as a clean business data view |
| \`schema.json\` | Machine-checkable structural contract. Validated on write; failure is returned as a tool error |
| \`skills/\` | Project-scoped Skill. Provides local knowledge only when operating on this project, containing blast radius |
| \`resources/\` | Optional persistent project resources. The agent can read on demand and reference inside project data, without bloating a single context |
| \`handlers/\` | Optional action handlers. Lift the project from a data collection into an executable full-stack project |

The key engineering trade-off is: **the agent does not operate the UI through business-specific APIs—it uses generic file read/write capabilities on \`/projects/\`**.

That is, the agent does not need \`render_order_card\`, \`update_inventory_section\`, or \`create_refund_form\`-style specialized tools. It only needs \`read\`, \`write\`, \`edit\`, \`list\`, \`glob\`, \`grep\`. Business specifics do not enter the tool layer; they enter the project's own \`PROJECT.md\` and \`schema.json\`.

This brings a meaningful shift: adding a new UI type is no longer equivalent to adding a new toolchain. What you add is a self-describing project definition.
`;

const layering = `
## Three-Layer Separation: System Capability vs. Business Knowledge

Agent Project is a three-layer structure in engineering terms:

| Layer | Essence | Defined by | Examples |
|---|---|---|---|
| L1 Infrastructure | System capability | Agent Framework | \`/projects/\` path, \`PROJECT.md\` front matter schema, \`schema.json\` validation, Project API, change events |
| L2 Project Definition | Structure and rules | Business preset | The \`PROJECT.md\`, \`schema.json\`, and directory conventions of a specific project type |
| L3 Project Content | Data and state | Agent runtime + preset resources | Business JSON files, \`resources/\`, \`handlers/\`, Project-scoped Skill |

The layering yields an important extensibility property: **adding a new project type requires zero L1 code change**.

- Want an "operations dashboard" project type? Write an L2 \`PROJECT.md\` + \`schema.json\` and you're done. The Agent Framework code does not move; the agent's toolset does not change.
- Different users on the same project type? L3 content can be completely different—the data the agent generates within the rules is inherently personalized.
- Business rules change? Edit the L2 declarative files. L1 and the agent prompt stay untouched.

**L1 does not know L2 exists** (the Agent Framework does not know what an "operations dashboard" is); **L2 does not constrain L3 content** (different users on the same project type can have completely different actual data). The three layers communicate through declarative contracts, not API calls.
`;

const bootstrap = `
## How an Agent Bootstraps a Project From Scratch

L1/L2/L3 is structure, but what is more convincing is this: **an agent can actually walk through full project initialization using nothing but generic file tools**. A typical bootstrap flow looks like:

1. **Confirm the goal warrants a project**—it should be cross-session, multi-dimensional, history-driven.
2. **Negotiate the observation dimensions**—the agent uses an ask-style dialogue tool to settle 3–4 core dimensions with the user, in language the user understands, without exposing internal terms like schema or section.
3. **Design the schema**—the agent works backward from the agreed dimensions to write \`schema.json\`, picking the right card type for each section and tightening the constraints against a meta-schema.
4. **Write the entry files**—the agent uses \`write\` to create \`PROJECT.md\` (with a \`bootstrap: in_progress\` front-matter marker) plus the per-section \`schema.json\` files and empty section files.
5. **Seed the first card**—the agent writes the first business record, removes the \`bootstrap: in_progress\` marker, and bootstrap is done.

The whole process uses **no business-specific tool**. The agent only uses \`write\`, \`edit\`, \`read\` (plus an ask-style dialogue tool for negotiation) to take a project from nothing to a working state. During bootstrap, the project appears in the agent's context with a "(bootstrap in progress)" suffix and can be resumed across sessions.

This is evidence for a non-obvious claim: **if an agent can read and write files, and if it has a project definition plus a schema to guide it, it can maintain a project of arbitrary type**. Adding a new project type does not require adding new tools—only adding the L2 declarative constraints.
`;

const schema2ui = `
## Schema2UI: Turning Project Files Into a UI Data Layer

Agent Project is not "let the agent write files however it likes." On top of the project files sits a layer called Schema2UI—a contract that lets structured business data reliably turn into a UI-consumable data view.

Schema2UI rests on three rules:

1. \`data/\` is the single entry for business data.
2. \`schema.json\` describes the immediate contents of its directory—both files and child-directory collections.
3. The data-view API recursively builds a clean business data tree from \`data/\`, so consumers do not need to understand file paths.

Note that Schema2UI does not prescribe what business directories must live under \`data/\`. It only prescribes how directories and schemas are interpreted; the actual shape of the data is decided by each project.

For example, an operations dashboard project might look like this:

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

When the agent writes \`/projects/ops_dashboard/data/incidents/inc-2026-04-12.json\`, the system automatically reads the sibling \`schema.json\` and validates. A validation failure does not silently land on disk—it immediately returns a tool error, and the agent can fix it on the spot.

The UI does not need to scan the filesystem. It calls the data-view API and receives a recursive data view like this:

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

This makes the filesystem serve three roles at once:

- For the agent: readable, writable, searchable, locally editable.
- For the platform: validatable, event-emitting, data-view generating.
- For the UI: consumable, transformable, with no need to understand the underlying paths.

Worth calling out is **the dual role of \`schema.json\`**. One file serves two scenarios:

1. **Agent side**: validated on write; a failure becomes a tool error and the agent fixes it immediately.
2. **API side**: the data-view API recognizes "any directory with a \`schema.json\` is a structured collection" and automatically parses JSON files into structured data.

One schema, two reuses, no extra configuration. The business team does not need to maintain a separate "frontend transformation rule" or "validation rule" on top of the schema—the same schema is both the agent's constraint and the UI's contract.
`;

const a2uiDiff = `
## The Real Difference From A2UI

A2UI's design is reasonable: the agent sends declarative UI data; the client renders with its own native components and never executes arbitrary code; the protocol covers streaming, data model, surface updates, and cross-platform rendering.

But A2UI's center of abstraction remains "the UI message." Its concern is how a remote agent ships UI intent across a trust boundary into a host.

Agent Project's center of abstraction is "project state." Its concern is how the state, rules, resources, and knowledge behind a continually evolving UI keep being maintained by an agent.

| Dimension | A2UI / Typical GenUI | Agent Project |
|---|---|---|
| Basic object | A renderable UI description or update message | A persistent project directory |
| Lifecycle | Usually bound to an interaction session or runtime surface | Persists across sessions; can be archived by business lifecycle |
| Agent read-back | Depends on host state or context retransmission | Agent directly \`read\` / \`grep\` / \`glob\` the project files |
| Update mode | Send a new UI / update message | Local \`edit\` / \`write\` against files |
| Schema location | Component catalog, prompt, or protocol layer | The \`schema.json\` inside the project directory |
| Business semantics | Embedded in prompts, tools, or app code | \`PROJECT.md\` + Project-scoped Skill |
| UI consumption | Client renders protocol messages directly | Client pulls the data view from the project API and renders |
| Debugging | Inspect message streams, component trees, runtime state | Inspect files, diffs, schema errors, change events |
| Extension | Extend the component catalog / renderer / tool | Add a new project definition; the platform base does not change |

The relationship between the two can be stated as:

\`\`\`text
Agent Project          = an agent's workspace for maintaining UI project state
A2UI / MCP-UI / Apps SDK = rendering protocols that deliver current state to a host
AG-UI                  = an event protocol that synchronizes agent runtime with frontend
\`\`\`

So Agent Project should not be positioned as "a better GenUI protocol than A2UI." A more accurate framing is: **Agent Project is the persistent project layer underneath the GenUI protocols**.
`;

const fsSemantics = `
## Why "Replacing API Semantics With Filesystem Semantics" Matters

In the traditional implementation, every UI or business object tends to grow its own specialized tool:

\`\`\`text
render_order_card
update_inventory_section
delete_campaign_card
append_refund_section
update_revenue_chart
...
\`\`\`

This creates several problems:

- The tool schema is tightly bound to the business—adding a new UI type means changing the tools.
- The agent cannot naturally read back its own prior output.
- Local updates are hard, and they tend to degrade into "regenerate the entire UI."
- Data lives in databases or runtime objects, which makes debugging, diffing, and migration painful.
- Business rules scatter across prompts, tool descriptions, backend validators, and frontend converters.

Agent Project goes the other way: tools stay generic, business specifics enter the project files. The underlying bet is that LLMs are very good at understanding and editing file projects—Claude Code has demonstrated that an agent can understand a software project through the filesystem; Agent Project extends the same pattern to generic UI projects.
`;

const feedbackIntro = `
## Events, Rendering, and the Feedback Loop

An Agent Project is not an offline folder. The system wires events into the write path automatically. A typical flow:
`;

const feedbackDetail = `
If rendering fails, the error does not stop at frontend logs. The application can return the render exception to the agent as a system feedback message:

\`\`\`text
Client render fails
  -> System feedback message
  -> Agent reads the relevant project files
  -> Agent edits to fix
  -> Change event triggers another UI update
\`\`\`

This is very different from one-shot GenUI output. The failure object is not a message that has already been sent—it is a project state that is readable, editable, and revalidatable.
`;

const safety = `
## Safety Boundaries in a Generic UI System

The design motivation for this section comes back to a more fundamental question: **who is expected to hold the expertise**.

- **Developer tools** (Claude Code, Cursor): users are creators. When users write configurations or skills, they understand they are "programming" the tool's behavior; bad output → causal chain is clear → users debug themselves.
- **Consumer products** (consumer-facing agent products): users are users. When users provide preferences or resources, they think they are "telling an expert about themselves," not configuring a system; bad output → causal chain is fuzzy → blame falls on the platform.

That difference means **a consumer agent system has to control the blast radius of any content change on agent behavior**. A newly written skill that misfires must not damage unrelated projects; one project's schema mistake must not affect other users.

Back to the UI system: when the agent can continuously modify UI state, the system cannot rely on one-shot output validation alone. Configurations, resources, business rules, rendering protocols, and action handlers all influence the final interface. If every piece of knowledge enters the global prompt or the global toolset, any local rule error can spread into other UI projects.

Agent Project's isolation mechanisms answer exactly this responsibility boundary:

- Project-scoped Skill only affects the current project and does not pollute the global agent.
- \`schema.json\` is automatically validated on write; structural errors surface immediately.
- \`PROJECT.md\` carries business rules and invariants, keeping business semantics out of the global prompt.
- \`data/\`, \`skills/\`, \`resources/\` are clearly partitioned, so business data and system knowledge do not mix.
- UI rendering is the application's transformation-layer responsibility; the project layer does not execute arbitrary frontend code.

This is not a sandbox in the traditional sense, but a **capability-scope design**. For long-running agent UI systems aimed at consumer users, this is more controllable than "the agent regenerates the entire UI every turn."
`;

const broader = `
## A Broader Picture

This article uses Schema2UI as the main example because \`data/ + schema.json + data view\` is the easiest anchor to reason about. But Agent Project's bigger horizon is generalizing "an agent-maintainable project workspace" to other UI shapes.

If the project holds \`src/\`, components, routes, styles, and tests, it evolves into a complete web project. If it holds Markdown, chart configurations, and referenced resources, it can be a visual document or report. If it holds datasets, scripts, and result artifacts, it can be a data-analysis project.

In those settings, validation is not necessarily \`schema.json\`—it might be typecheck, lint, unit test, build, or dry-run. UI consumption is not necessarily a data-view API—it might be a preview page, build output, component list, or runtime state.

None of that changes the main argument: Agent Project first solves "how an agent maintains a persistent project state that a UI can render and operate on." Schema2UI is the landing form of that idea for structured-data UI.
`;

const fit = `
## Where It Fits, Where It Doesn't

Agent Project fits these settings:

- Persistent UI: operations dashboards, low-code pages, visual documents, configuration panels, data-analysis projects, content management pages.
- Multi-dimensional state: plans, records, metrics, suggestions, resources, layouts, and interaction rules that need to evolve together over time.
- Visual feedback required: the frontend or business system must surface current state, progress, structure, and exceptions.
- Agent needs to revisit and edit: not one-shot generation, but ongoing maintenance.
- Many new business types: avoiding a new tool for each new UI type.

Agent Project is not a replacement for every UI:

- Inline rich-media cards in a conversation still belong to in-message cards or GenUI messages.
- One-off query results do not need to be persisted into a project.
- Highly real-time, frame-level interactive UI should not be driven by an agent editing files.
- A mature application's full frontend does not need to be ported into Agent Project. Agent Project is better suited for the state layer where the agent participates.

This also explains why Agent Project and A2UI do not conflict. Inline rendering can use A2UI; persistent UI projects can use Agent Project; the two can coexist in the same product.
`;

const reusable = `
## Design Patterns Worth Reusing

The most reusable idea here is not "agents generating UI" itself, but the following combination of points:

1. **An agent-visible persistent UI workspace**: organize the state, structure, resources, rules, and interaction logic behind a UI into a project directory that the agent can read and write with generic file tools, instead of one-shot UI messages or specialized CRUD APIs.
2. **A project-internal schema validation loop**: validate against the sibling schema automatically on write; validation errors return as tool errors and feed back to the agent, forming a generate–validate–correct loop.
3. **Schema2UI data view**: map files and schemas into a recursive UI-consumable business data tree, so the frontend does not need to understand the filesystem, while the agent keeps file-level operability.
4. **Co-located Project-scoped Skill and resources**: keep project-level business knowledge, persistent resources, data, and optional action handlers within the same project scope to control the blast radius of capability.
5. **Render feedback returning to an editable source state**: surface frontend render errors back to the agent so it can fix UI state by reading and editing persistent project files, rather than regenerating a transient UI output.

Combined, these form a system for "an agent maintaining a UI project," not a protocol for "an agent emitting UI descriptions."
`;

const conclusion = `
## Conclusion

GenUI moved agents from text answers to interface expression—an essential step. But if an agent has to maintain a continually evolving UI, "being able to generate UI" is not enough.

A generic UI project needs a maintainable state layer: readable, writable, validatable, debuggable, locally editable, persistent across sessions. Agent Project abstracts that layer into a file project, then connects agent and UI through data views, change events, the Project API, and Project-scoped Skill.

Agent Project is therefore not another A2UI but the persistent project layer beneath GenUI—so that an agent does more than "speak UI"; it maintains the complete project state behind a UI.

## References

- [A2UI: What is A2UI](https://a2ui.org/introduction/what-is-a2ui/) — declarative agent-to-UI protocol, native rendering, catalog, data model.
- [A2UI on GitHub](https://github.com/google/A2UI/) — A2UI public preview, cross-platform renderer, protocol positioning.
- [AG-UI Generative UI Specs](https://docs.ag-ui.com/concepts/generative-ui-specs) — how AG-UI relates to A2UI, MCP-UI, Open-JSON-UI, and other GenUI specs.
- [AG-UI on GitHub](https://github.com/ag-ui-protocol/ag-ui) — event protocol, agent/frontend runtime connection, state synchronization.
- [MCP-UI on GitHub](https://github.com/MCP-UI-Org/mcp-ui) — UI over MCP, MCP Apps resources, iframe/Remote DOM, security model.
- [MCP-UI Protocol Details](https://mcpui.dev/guide/protocol-details.html) — \`UIResource\`, \`ui://\`, HTML, URI, Remote DOM resource types.
- [OpenAI Apps SDK Help](https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk) — Apps SDK built on MCP, defining logic and UI for in-ChatGPT apps.
- [Vercel AI SDK GenUI](https://vercel.com/blog/ai-sdk-3-generative-ui) — React Server Components and tool-call-to-UI mapping.
- [AI SDK RSC Docs](https://ai-sdk.dev/docs/ai-sdk-rsc) — RSC GenUI remains experimental; production guidance favors AI SDK UI.
`;

const AgentProjectGenUIArticleEn = () => (
  <>
    <RichMarkdown>{intro}</RichMarkdown>
    <DiagramFigure caption="Agent Project sits between Agent and the rendering protocol layer, as a persistent project layer.">
      <GenUILayersDiagram locale="en" />
    </DiagramFigure>
    <RichMarkdown>{genuiRoutes}</RichMarkdown>
    <RichMarkdown>{projectBasicIntro}</RichMarkdown>
    <DiagramFigure caption="Example directory of an Agent Project; the internal layout of data/ is illustrative.">
      <ProjectStructureDiagram locale="en" />
    </DiagramFigure>
    <RichMarkdown>{projectBasicDetail}</RichMarkdown>
    <RichMarkdown>{layering}</RichMarkdown>
    <RichMarkdown>{bootstrap}</RichMarkdown>
    <RichMarkdown>{schema2ui}</RichMarkdown>
    <RichMarkdown>{a2uiDiff}</RichMarkdown>
    <RichMarkdown>{fsSemantics}</RichMarkdown>
    <RichMarkdown>{feedbackIntro}</RichMarkdown>
    <DiagramFigure caption="Write → validate → render → feed back: four stages forming a clockwise loop.">
      <FeedbackLoopDiagram locale="en" />
    </DiagramFigure>
    <RichMarkdown>{feedbackDetail}</RichMarkdown>
    <RichMarkdown>{safety}</RichMarkdown>
    <RichMarkdown>{broader}</RichMarkdown>
    <RichMarkdown>{fit}</RichMarkdown>
    <RichMarkdown>{reusable}</RichMarkdown>
    <RichMarkdown>{conclusion}</RichMarkdown>
  </>
);

export default AgentProjectGenUIArticleEn;
