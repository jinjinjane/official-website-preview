import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogData";
import { richBlogPosts } from "@/features/blog/posts";

const categories = ["All", "Agent Technology", "Product Philosophy", "Features Deep Dive"];
const canonicalUrl = "https://jovida.ai/blog";

type ListPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
};

const richEnPosts: ListPost[] = richBlogPosts.filter((p) => p.locale === "en");
const gridPosts: ListPost[] = [...blogPosts.slice(1), ...richEnPosts];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Jovida Blog | AI Agent Insights, Proactive Coaching, and Product Updates</title>
        <meta name="description" content="Read about proactive AI agents, smart nudge technology, behavioral science, and how Jovida helps you build better habits and hit your goals." />
        <meta name="keywords" content="ai agent blog, proactive ai, smart nudge, habit building, ai life coach" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Jovida Blog | AI Agent Insights, Proactive Coaching, and Product Updates" />
        <meta property="og:description" content="Read about proactive AI agents, smart nudge technology, behavioral science, and how Jovida helps you build better habits and hit your goals." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jovida Blog | AI Agent Insights, Proactive Coaching, and Product Updates" />
        <meta name="twitter:description" content="Read about proactive AI agents, smart nudge technology, behavioral science, and how Jovida helps you build better habits and hit your goals." />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground">
              Blog
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              How proactive AI agents work, the science behind behavior change, and what we are building at Jovida.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link to={`/blog/${blogPosts[0].slug}`} className="block">
            <article className="bg-card rounded-2xl border border-border mb-8 hover:shadow-elevated transition-shadow overflow-hidden">
              <img
                src={blogPosts[0].coverImage}
                alt={blogPosts[0].title}
                className="w-full h-48 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="p-8 md:p-12">
                <span className="text-xs bg-primary/20 text-foreground px-3 py-1 rounded-full font-medium">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mt-3 text-lg">{blogPosts[0].excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{blogPosts[0].date}</span>
                  <span>&middot;</span>
                  <span>{blogPosts[0].readTime} read</span>
                </div>
              </div>
            </article>
          </Link>

          <div className="grid md:grid-cols-2 gap-6">
            {gridPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
                <article className="bg-card rounded-2xl border border-border hover:shadow-elevated transition-all hover:-translate-y-1 h-full overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-3">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
