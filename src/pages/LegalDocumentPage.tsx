import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalDocumentPageProps = {
  title: string;
  description: string;
  markdown: string;
  productName?: string;
  canonicalPath?: string;
  keywords?: string;
};

const LegalDocumentPage = ({
  title,
  description,
  markdown,
  productName = "Jovida",
  canonicalPath,
  keywords,
}: LegalDocumentPageProps) => {
  const canonicalUrl = canonicalPath ? `https://jovida.ai${canonicalPath}` : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title} | {productName}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jovida" />
        <meta property="og:title" content={`${title} | ${productName}`} />
        <meta property="og:description" content={description} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
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
