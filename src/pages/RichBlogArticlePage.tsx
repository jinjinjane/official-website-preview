import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RichBlogArticleLayout from "@/features/blog/components/RichBlogArticleLayout";
import { richBlogPosts, type Locale } from "@/features/blog/posts";

interface Props {
  locale: Locale;
}

const RichBlogArticlePage = ({ locale }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const post = richBlogPosts.find(
    (p) => p.slug === slug && p.locale === locale,
  );

  if (!post) {
    const isZh = locale === "zh";
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-24 px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">
            {isZh ? "文章未找到" : "Article Not Found"}
          </h1>
          <Link to="/blog" className="mt-4 inline-block text-primary underline">
            {isZh ? "返回 Blog" : "Back to Blog"}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const ArticleComponent = post.Component;

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <RichBlogArticleLayout post={post}>
        <ArticleComponent />
      </RichBlogArticleLayout>
    </Suspense>
  );
};

export default RichBlogArticlePage;
