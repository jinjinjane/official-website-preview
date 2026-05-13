import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { RichBlogPost } from "@/features/blog/posts";

interface Props {
  post: RichBlogPost;
  children: ReactNode;
}

const SITE_ORIGIN = "https://jovida.ai";

const RichBlogArticleLayout = ({ post, children }: Props) => {
  const isZh = post.locale === "zh";
  const canonicalUrl = isZh
    ? `${SITE_ORIGIN}/blog/zh/${post.slug}`
    : `${SITE_ORIGIN}/blog/${post.slug}`;
  const backLabel = isZh ? "返回 Blog" : "Back to Blog";
  const faqHeading = isZh ? "常见问题" : "Frequently Asked Questions";
  const readSuffix = isZh ? "阅读" : "read";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": post.author.type,
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Jovida",
    },
    mainEntityOfPage: canonicalUrl,
    image: post.coverImage,
    inLanguage: isZh ? "zh-CN" : "en",
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={isZh ? "zh-CN" : "en"} />
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        {isZh && <meta name="robots" content="noindex,nofollow" />}
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={post.coverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.coverImage} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <article className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance break-keep">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} {readSuffix}</span>
            <span>·</span>
            <span>{post.author.name}</span>
          </div>

          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl mb-12 object-cover max-h-96"
          />

          <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary md:prose-lg">
            {children}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                {faqHeading}
              </h2>
              <div className="space-y-6">
                {post.faq.map((item) => (
                  <div
                    key={item.question}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RichBlogArticleLayout;
