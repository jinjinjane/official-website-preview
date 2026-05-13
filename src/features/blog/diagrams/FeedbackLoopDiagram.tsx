import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  RotateCw,
} from "lucide-react";

type Locale = "en" | "zh";

interface Step {
  num: number;
  title: string;
  caption: string;
  accent?: boolean;
}

const LABELS: Record<Locale, { aria: string; steps: Step[] }> = {
  zh: {
    aria: "Agent 写入、校验、渲染、反馈构成顺时针闭环",
    steps: [
      {
        num: 1,
        title: "Agent 写入或编辑",
        caption: "通用文件工具 read / write / edit",
        accent: true,
      },
      {
        num: 2,
        title: "Schema 校验 + 变更",
        caption: "同目录 schema.json，失败立即返回 Agent",
      },
      {
        num: 3,
        title: "UI 拉取并渲染",
        caption: "通过项目 API 取数据，转为宿主渲染协议",
      },
      {
        num: 4,
        title: "渲染异常反馈",
        caption: "错误回到 Agent，作为可编辑的项目状态",
      },
    ],
  },
  en: {
    aria: "Agent writes, schema validates, UI renders, errors feed back—a clockwise loop",
    steps: [
      {
        num: 1,
        title: "Agent writes or edits",
        caption: "Generic file tools: read / write / edit",
        accent: true,
      },
      {
        num: 2,
        title: "Schema validate + commit",
        caption: "Same-dir schema.json; failure returns to Agent",
      },
      {
        num: 3,
        title: "UI fetches and renders",
        caption: "Via Project API, mapped to host rendering protocol",
      },
      {
        num: 4,
        title: "Render error feedback",
        caption: "Errors return to Agent as editable project state",
      },
    ],
  },
};

const StepBox = ({ step, className }: { step: Step; className?: string }) => (
  <div
    className={`bg-background border rounded-xl px-3 py-3 sm:px-4 sm:py-4 ${
      step.accent ? "border-primary" : "border-border"
    } ${className ?? ""}`}
  >
    <div className="flex items-baseline gap-2">
      <span
        className={`font-mono text-xs ${
          step.accent ? "text-primary" : "text-muted-foreground"
        }`}
      >
        0{step.num}
      </span>
      <span className="font-semibold text-sm text-foreground leading-snug">
        {step.title}
      </span>
    </div>
    <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
      {step.caption}
    </div>
  </div>
);

const ArrowCell = ({
  direction,
  className,
}: {
  direction: "right" | "down" | "left" | "up";
  className?: string;
}) => {
  const Icon =
    direction === "right"
      ? ArrowRight
      : direction === "down"
        ? ArrowDown
        : direction === "left"
          ? ArrowLeft
          : ArrowUp;
  return (
    <div
      className={`flex items-center justify-center text-muted-foreground ${className ?? ""}`}
      aria-hidden="true"
    >
      <Icon size={18} />
    </div>
  );
};

const FeedbackLoopDiagram = ({ locale = "zh" }: { locale?: Locale }) => {
  const L = LABELS[locale];
  return (
    <div
      role="img"
      aria-label={L.aria}
      className="grid gap-2 max-w-xl mx-auto"
      style={{ gridTemplateColumns: "1fr auto 1fr" }}
    >
      <StepBox step={L.steps[0]} className="col-start-1 row-start-1" />
      <ArrowCell direction="right" className="col-start-2 row-start-1" />
      <StepBox step={L.steps[1]} className="col-start-3 row-start-1" />

      <ArrowCell direction="up" className="col-start-1 row-start-2" />
      <div
        className="col-start-2 row-start-2 flex flex-col items-center justify-center text-primary gap-1"
        aria-hidden="true"
      >
        <RotateCw size={22} />
        <span className="text-[10px] font-mono uppercase tracking-wider">
          loop
        </span>
      </div>
      <ArrowCell direction="down" className="col-start-3 row-start-2" />

      <StepBox step={L.steps[3]} className="col-start-1 row-start-3" />
      <ArrowCell direction="left" className="col-start-2 row-start-3" />
      <StepBox step={L.steps[2]} className="col-start-3 row-start-3" />
    </div>
  );
};

export default FeedbackLoopDiagram;
