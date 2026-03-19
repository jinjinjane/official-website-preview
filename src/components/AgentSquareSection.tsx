import { Link } from "react-router-dom";
import { featuredAgents } from "@/data/agentsData";

const AgentSquareSection = () => {
  return (
    <section id="agent-square" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-background">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-foreground tracking-tight">
            Agent Square
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">
            Browse goal-specific agents and start building better habits today.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 3xl:gap-6">
          {featuredAgents.map((agent) => (
            <Link
              key={agent.slug}
              to={`/agents/${agent.slug}`}
              className="bg-card rounded-2xl p-6 3xl:p-8 border border-border hover:shadow-elevated hover:border-primary/30 transition-all group text-center"
            >
              <div className="text-4xl 3xl:text-5xl mb-3 group-hover:scale-110 transition-transform">
                {agent.emoji}
              </div>
              <h3 className="font-display text-xs 2xl:text-sm 3xl:text-base font-bold text-foreground">
                {agent.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentSquareSection;
