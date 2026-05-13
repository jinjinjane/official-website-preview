import { Fragment } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

const toText = (node: unknown): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (
    node &&
    typeof node === "object" &&
    "props" in node &&
    (node as { props: { children?: unknown } }).props?.children !== undefined
  ) {
    return toText((node as { props: { children: unknown } }).props.children);
  }
  return "";
};

const components: Components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: ({ className, children }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (match) {
      return (
        <CodeBlock language={match[1]}>
          {toText(children).replace(/\n$/, "")}
        </CodeBlock>
      );
    }
    return (
      <code className="px-1.5 py-0.5 rounded bg-secondary text-foreground text-[0.9em] font-mono">
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto my-6 not-prose">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead>{children}</thead>,
  th: ({ children }) => (
    <th className="text-left p-3 bg-secondary text-secondary-foreground font-semibold border-b border-border">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="p-3 text-muted-foreground border-b border-border align-top">
      {children}
    </td>
  ),
  tr: ({ children }) => <tr>{children}</tr>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-primary underline underline-offset-2 hover:text-primary/80"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
};

const RichMarkdown = ({ children }: { children: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
    {children}
  </ReactMarkdown>
);

export default RichMarkdown;
