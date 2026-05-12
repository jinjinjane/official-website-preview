interface CodeBlockProps {
  language?: string;
  children: string;
}

const CodeBlock = ({ language, children }: CodeBlockProps) => {
  const showLang = language && language !== "text";
  return (
    <figure className="my-6 not-prose relative">
      <pre className="bg-secondary border border-border rounded-2xl p-5 overflow-x-auto">
        <code className="block text-sm font-mono text-foreground whitespace-pre leading-relaxed">
          {children}
        </code>
      </pre>
      {showLang && (
        <span className="absolute top-3 right-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70 pointer-events-none">
          {language}
        </span>
      )}
    </figure>
  );
};

export default CodeBlock;
