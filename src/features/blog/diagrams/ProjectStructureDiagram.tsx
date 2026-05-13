import {
  FolderOpen,
  FileText,
  FileJson,
  FileCode,
  Folder,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type Locale = "en" | "zh";

interface RowData {
  name: string;
  caption?: string;
  accent?: boolean;
}

const LABELS: Record<Locale, { aria: string; rows: RowData[] }> = {
  zh: {
    aria: "Agent Project 项目目录结构示例",
    rows: [
      { name: "/projects/{name}/", accent: true },
      { name: "PROJECT.md", caption: "项目入口手册" },
      { name: "data/", caption: "业务数据入口" },
      { name: "schema.json", caption: "结构契约" },
      { name: "{section}/", caption: "业务自定义结构（示例）" },
      { name: "skills/", caption: "Project-scoped Skill" },
      { name: "resources/", caption: "持久资源" },
      { name: "handlers/", caption: "可选 action handler" },
    ],
  },
  en: {
    aria: "Example directory structure of an Agent Project",
    rows: [
      { name: "/projects/{name}/", accent: true },
      { name: "PROJECT.md", caption: "Project manifest" },
      { name: "data/", caption: "Business data entry" },
      { name: "schema.json", caption: "Structural contract" },
      { name: "{section}/", caption: "Business-defined (example)" },
      { name: "skills/", caption: "Project-scoped Skill" },
      { name: "resources/", caption: "Persistent resources" },
      { name: "handlers/", caption: "Optional action handlers" },
    ],
  },
};

const ICONS: ComponentType<{ size?: number }>[] = [
  FolderOpen,
  FileText,
  FolderOpen,
  FileJson,
  Folder,
  Folder,
  Folder,
  FileCode,
];
const DEPTHS = [0, 1, 1, 2, 2, 1, 1, 1];

interface RowProps {
  icon: ReactNode;
  name: string;
  depth: number;
  caption?: string;
  accent?: boolean;
}

const Row = ({ icon, name, depth, caption, accent }: RowProps) => (
  <div className="flex items-center gap-4 py-2 border-b border-border last:border-b-0">
    <div
      className="flex items-center gap-2 font-mono text-sm shrink-0"
      style={{ paddingLeft: `${depth * 20}px` }}
    >
      <span className={accent ? "text-primary" : "text-muted-foreground"}>
        {icon}
      </span>
      <span className="text-foreground">{name}</span>
    </div>
    {caption && (
      <span className="text-xs text-muted-foreground italic ml-auto text-right">
        {caption}
      </span>
    )}
  </div>
);

const ProjectStructureDiagram = ({
  locale = "zh",
}: {
  locale?: Locale;
}) => {
  const L = LABELS[locale];
  return (
    <div role="img" aria-label={L.aria} className="max-w-2xl mx-auto">
      {L.rows.map((row, i) => {
        const Icon = ICONS[i];
        return (
          <Row
            key={row.name}
            icon={<Icon size={16} />}
            name={row.name}
            depth={DEPTHS[i]}
            caption={row.caption}
            accent={row.accent}
          />
        );
      })}
    </div>
  );
};

export default ProjectStructureDiagram;
