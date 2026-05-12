import { Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft } from "lucide-react";
import RichBlogArticleLayout from "@/features/blog/components/RichBlogArticleLayout";
import { richBlogPosts } from "@/features/blog/posts";

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const richPost = richBlogPosts.find(
    (p) => p.slug === slug && p.locale === "en",
  );
  if (richPost) {
    const ArticleComponent = richPost.Component;
    return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <RichBlogArticleLayout post={richPost}>
          <ArticleComponent />
        </RichBlogArticleLayout>
      </Suspense>
    );
  }

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-24 px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Article Not Found</h1>
          <Link to="/blog" className="mt-4 inline-block text-primary underline">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.trim() === "") {
        i++;
        continue;
      }

      // Table detection
      if (line.includes("|") && lines[i + 1]?.includes("---")) {
        const headers = line.split("|").filter(Boolean).map((h) => h.trim());
        i += 2;
        const rows: string[][] = [];
        while (i < lines.length && lines[i].includes("|")) {
          rows.push(lines[i].split("|").filter(Boolean).map((c) => c.trim()));
          i++;
        }
        elements.push(
          <div key={i} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {headers.map((h, j) => (
                    <th key={j} className="text-left p-3 bg-secondary text-secondary-foreground font-semibold border-b border-border">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j} className="border-b border-border">
                    {row.map((cell, k) => (
                      <td key={k} className="p-3 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }

      if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{line.slice(3)}</h2>);
        i++;
        continue;
      }

      if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">{line.slice(4)}</h3>);
        i++;
        continue;
      }

      if (line.startsWith("> ")) {
        elements.push(
          <blockquote key={i} className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground text-lg">
            {line.slice(2)}
          </blockquote>
        );
        i++;
        continue;
      }

      if (line.startsWith("- ")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          listItems.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={i} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
            {listItems.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
        continue;
      }

      if (/^\d+\.\s/.test(line)) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\.\s/, ""));
          i++;
        }
        elements.push(
          <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
            {listItems.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ol>
        );
        continue;
      }

      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
      i++;
    }

    return elements;
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  const canonicalUrl = `https://jovida.ai/blog/${post.slug}`;

  // Build FAQ JSON-LD
  const faqJsonLd = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  } : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Jovida",
    },
    publisher: {
      "@type": "Organization",
      name: "Jovida",
    },
    mainEntityOfPage: canonicalUrl,
    image: post.coverImage,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={canonicalUrl} />
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
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground mb-8">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime} read</span>
          </div>

          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl mb-12 object-cover max-h-96"
          />

          <div className="prose-jovida">
            {renderContent(post.content)}
          </div>

          {/* FAQ Section */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faq.map((item, idx) => (
                  <div key={idx} className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
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

export default BlogArticlePage;
