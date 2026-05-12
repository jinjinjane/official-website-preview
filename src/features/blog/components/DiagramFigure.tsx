import type { ReactNode } from "react";

interface DiagramFigureProps {
  caption?: string;
  children: ReactNode;
}

const DiagramFigure = ({ caption, children }: DiagramFigureProps) => (
  <figure className="my-10 not-prose">
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      {children}
    </div>
    {caption && (
      <figcaption className="mt-3 text-sm text-muted-foreground text-center">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default DiagramFigure;
