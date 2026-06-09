import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredAgents } from "@/data/agentsData";
import { getAgentSeo } from "@/lib/agentSeo";
import { ArrowLeft, Sparkles, MessageCircle, Zap, CheckCircle2 } from "lucide-react";

const nudgeTypeIcons: Record<string, React.ReactNode> = {
  checklist: <CheckCircle2 className="w-4 h-4 text-primary" />,
  card: <Sparkles className="w-4 h-4 text-primary" />,
  scan: <Zap className="w-4 h-4 text-brand-orange" />,
  audio: <MessageCircle className="w-4 h-4 text-brand-blue" />,
  list: <Sparkles className="w-4 h-4 text-primary" />,
  action: <Zap className="w-4 h-4 text-brand-purple" />,
};

const nudgeTypeLabels: Record<string, string> = {
  checklist: "Checklist",
  card: "Knowledge Card",
  scan: "Smart Scan",
  audio: "Audio",
  list: "Curated List",
  action: "Interactive",
};

const AgentDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const agent = featuredAgents.find((a) => a.slug === slug);

  if (!agent) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-24 px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Agent Not Found</h1>
          <p className="text-muted-foreground mb-8">This agent doesn't have a detail page yet.</p>
          <Link to="/agents" className="text-primary hover:underline font-medium">
            ← Back to Jovida Life Coach Playbook
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const seo = getAgentSeo(agent);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Jovida" />
        <link rel="canonical" href={seo.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jovida" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:image" content={seo.socialImage} />
        <meta property="og:image:alt" content={`${agent.name} AI Agent by Jovida`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.socialImage} />
        <meta name="twitter:image:alt" content={`${agent.name} AI Agent by Jovida`} />
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jovida Life Coach Playbook
          </Link>

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-5xl mx-auto mb-6">
              {agent.emoji}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-3">
              {agent.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">{agent.desc}</p>
            <p className="text-primary font-display font-semibold italic">{agent.tagline}</p>
          </div>

          {/* Features */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">What This Agent Does</h2>
            <div className="grid gap-3">
              {agent.features.map((f, i) => (
                <div key={i} className="flex gap-3 items-start bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Preview: Daily Nudges */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Daily Nudges</h2>
            <p className="text-muted-foreground mb-6">
              These nudges are sent every day based on your routine and preferences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {agent.alwaysNudges.map((nudge, i) => (
                <div key={i} className="bg-charcoal rounded-2xl p-5 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    {nudgeTypeIcons[nudge.type]}
                    <span className="text-xs text-muted-foreground bg-secondary/20 px-2 py-0.5 rounded-full">
                      {nudgeTypeLabels[nudge.type]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-primary-foreground mb-1">{nudge.title}</h3>
                  <p className="text-sm text-muted-foreground">{nudge.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Preview: Smart Nudges */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Smart Nudges</h2>
            <p className="text-muted-foreground mb-6">
              These are triggered by your actions or sent on a weekly basis. Never spammy.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {agent.conditionalNudges.map((nudge, i) => (
                <div key={i} className="bg-card rounded-2xl p-5 border-2 border-dashed border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    {nudgeTypeIcons[nudge.type]}
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {nudgeTypeLabels[nudge.type]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">{nudge.title}</h3>
                  <p className="text-sm text-muted-foreground">{nudge.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-charcoal rounded-3xl p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to start your {agent.name} journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get Jovida Life Coach and activate this agent with one tap.
            </p>
            <a
              href="https://apps.apple.com/us/app/jovida/id6752009326"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Jovida Life Coach
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentDetailPage;
