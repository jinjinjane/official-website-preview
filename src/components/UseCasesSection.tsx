import { Bell, Brain, MapPin, Puzzle, Wrench, TrendingUp } from "lucide-react";

const differentiators = [
{
  icon: Bell,
  title: "Proactive Agent",
  desc: "Jovida anticipates your friction points and pushes smart nudges at the exact right moment to tell you what to do next.",
  gradient: "from-brand-orange to-brand-yellow"
},
{
  icon: Brain,
  title: "Long-Term Memory",
  desc: "Over time, Jovida remembers your past struggles and shifting preferences, ensuring your agent grows smarter with your evolution.",
  gradient: "from-brand-purple to-brand-blue"
},
{
  icon: MapPin,
  title: "Live Context",
  desc: "By understanding your real-time schedule and location, Jovida ensures every piece of advice fits perfectly into your current situation.",
  gradient: "from-brand-blue to-lime"
},
{
  icon: Puzzle,
  title: "Self-Evolving",
  desc: "Jovida automatically equips relevant skills and agents uploaded by other users, instantly upgrading itself to fuel your specific goals.",
  gradient: "from-lime to-lime-light"
},
{
  icon: Wrench,
  title: "Zero Busywork",
  desc: "Jovida tackles the tedious setup and actually does part of the work for you, so you can focus entirely on taking action.",
  gradient: "from-brand-orange to-brand-purple"
},
{
  icon: TrendingUp,
  title: "Real Change",
  desc: "Jovida consistently follows up, adjusts your path without judgment, and keeps you moving forward.",
  gradient: "from-brand-yellow to-brand-orange"
}];

const UseCasesSection = () => {
  return (
    <section id="difference" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-warm-gray">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-foreground tracking-tight">
            Why Jovida
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">Go beyond a goal tracker. A proactive agent that drives real results.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-12">
          {differentiators.map((d, i) =>
          <article
            key={i}
            className="bg-card backdrop-blur-sm rounded-2xl p-8 3xl:p-12 border border-border hover:shadow-elevated transition-all hover:-translate-y-1 text-center">
              <div className={`w-14 h-14 3xl:w-20 3xl:h-20 rounded-full bg-gradient-to-br ${d.gradient} flex items-center justify-center mx-auto mb-6`}>
                <d.icon className="w-7 h-7 3xl:w-10 3xl:h-10 text-card" />
              </div>
              <h3 className="font-display text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-foreground mb-3">{d.title}</h3>
              <p className="text-muted-foreground text-sm 2xl:text-base 3xl:text-lg leading-relaxed">{d.desc}</p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
