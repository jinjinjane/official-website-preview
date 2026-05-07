import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredAgents, existingAgents, categories } from "@/data/agentsData";
import { Star } from "lucide-react";

const AgentsPage = () => {
  const canonicalUrl = "https://jovida.ai/agents";
  const [activeCategory, setActiveCategory] = useState("All");

  const allAgents = [...featuredAgents, ...existingAgents];
  const filtered = activeCategory === "All" ? allAgents : allAgents.filter((a) => a.category === activeCategory);
  const isFeatured = (slug: string) => featuredAgents.some((a) => a.slug === slug);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Playbook – Browse Goal-Specific AI Agents | Jovida</title>
        <meta
          name="description"
          content="Explore the Jovida Agent Square — specialized AI agents for weight loss, skincare, language learning, quitting smoking, manifestation, and more. Activate with one tap."
        />
        <meta
          name="keywords"
          content="AI agents, goal agents, weight loss agent, skincare agent, quit smoking, English learning, manifestation, AI coaching, personalized nudges"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Playbook – Browse Goal-Specific AI Agents | Jovida" />
        <meta property="og:description" content="Explore the Jovida Agent Square — specialized AI agents for weight loss, skincare, language learning, quitting smoking, manifestation, and more. Activate with one tap." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Playbook – Browse Goal-Specific AI Agents | Jovida" />
        <meta name="twitter:description" content="Explore the Jovida Agent Square — specialized AI agents for weight loss, skincare, language learning, quitting smoking, manifestation, and more. Activate with one tap." />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-black italic text-foreground">
              Playbook
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Browse specialized agents for every life goal. Each agent is pre-built for its domain and adapts to your unique context.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured section */}
          {(activeCategory === "All" || featuredAgents.some((a) => a.category === activeCategory)) && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">Featured Agents</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredAgents
                  .filter((a) => activeCategory === "All" || a.category === activeCategory)
                  .map((agent) => (
                    <Link
                      key={agent.slug}
                      to={`/agents/${agent.slug}`}
                      className="group bg-card rounded-2xl p-6 border border-border hover:shadow-elevated transition-all hover:-translate-y-1 relative block"
                    >
                      <span className="absolute top-4 right-4 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                        Featured
                      </span>
                      <div className="text-4xl mb-4">{agent.emoji}</div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {agent.name}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        {agent.category}
                      </span>
                      <p className="text-muted-foreground text-sm mt-3">{agent.desc}</p>
                      <span className="mt-4 inline-block text-sm text-primary font-medium group-hover:underline">
                        View details →
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Other agents */}
          {existingAgents.filter((a) => activeCategory === "All" || a.category === activeCategory).length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">More Agents</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {existingAgents
                  .filter((a) => activeCategory === "All" || a.category === activeCategory)
                  .map((agent, i) => (
                    <article
                      key={i}
                      className="bg-card rounded-2xl p-6 border border-border hover:shadow-elevated transition-all hover:-translate-y-1"
                    >
                      <div className="text-4xl mb-4">{agent.emoji}</div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">{agent.name}</h3>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        {agent.category}
                      </span>
                      <p className="text-muted-foreground text-sm mt-3">{agent.desc}</p>
                    </article>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentsPage;
