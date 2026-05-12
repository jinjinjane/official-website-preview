import { ArrowDown, ArrowUpDown } from "lucide-react";

type Locale = "en" | "zh";

const LABELS = {
  zh: {
    aria: "Agent Project 位于 Agent 与 GenUI 渲染协议之间，渲染协议下游连接 Client UI",
    agent: "Agent",
    project: "Agent Project",
    projectSub: "持久项目层",
    render: "A2UI / MCP-UI / Apps SDK",
    renderSub: "渲染协议层",
    client: "Client UI",
  },
  en: {
    aria: "Agent Project sits between Agent and the GenUI rendering protocols; rendering protocols connect down to Client UI",
    agent: "Agent",
    project: "Agent Project",
    projectSub: "Persistent Project Layer",
    render: "A2UI / MCP-UI / Apps SDK",
    renderSub: "Rendering Protocol Layer",
    client: "Client UI",
  },
} as const;

interface NodeProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

const Node = ({ title, subtitle, accent }: NodeProps) => (
  <div
    className={`bg-background border rounded-xl px-4 py-3 text-center ${
      accent ? "border-primary" : "border-border"
    }`}
  >
    <div className="font-semibold text-foreground">{title}</div>
    {subtitle && (
      <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>
    )}
  </div>
);

const Connector = ({ bidirectional }: { bidirectional?: boolean }) => (
  <div
    className="flex justify-center py-2 text-muted-foreground"
    aria-hidden="true"
  >
    {bidirectional ? <ArrowUpDown size={20} /> : <ArrowDown size={20} />}
  </div>
);

const GenUILayersDiagram = ({ locale = "zh" }: { locale?: Locale }) => {
  const L = LABELS[locale];
  return (
    <div role="img" aria-label={L.aria} className="max-w-md mx-auto">
      <Node title={L.agent} />
      <Connector bidirectional />
      <Node title={L.project} subtitle={L.projectSub} accent />
      <Connector />
      <Node title={L.render} subtitle={L.renderSub} />
      <Connector />
      <Node title={L.client} />
    </div>
  );
};

export default GenUILayersDiagram;
