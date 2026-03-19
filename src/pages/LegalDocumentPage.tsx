import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalDocumentPageProps = {
  title: string;
  description: string;
  markdown: string;
};

const LegalDocumentPage = ({ title, description, markdown }: LegalDocumentPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title} | Jovida</title>
        <meta name="description" content={description} />
      </Helmet>

      <Navbar />

      <main className="px-4 pb-24 pt-28 md:px-6">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-card/80 p-6 shadow-elevated backdrop-blur md:p-10">
          <article className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary md:prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalDocumentPage;