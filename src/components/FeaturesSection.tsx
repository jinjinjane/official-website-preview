import { Store, MessageCircle, LayoutList } from "lucide-react";

const features = [
{
  icon: Store,
  title: "Agent Square",
  desc: "Browse goal-specific agents built by our team and real users. See actual results, read reviews, and activate any agent with a single tap.",
  color: "text-brand-orange",
  bg: "bg-brand-orange/15"
},
{
  icon: LayoutList,
  title: "Interactive Nudges",
  desc: "Every nudge arrives as an actionable card you can complete, skip, or reschedule. No walls of text, just clear next moves ready for your tap.",
  color: "text-brand-blue",
  bg: "bg-brand-blue/15"
},
{
  icon: MessageCircle,
  title: "Native Chat Integration",
  desc: "Jovida reaches you where you already are. Get nudges through WhatsApp and push notifications so you never need to remember to open the app.",
  color: "text-brand-purple",
  bg: "bg-brand-purple/15"
}];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-warm-gray">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-foreground mt-4 tracking-tight">The Ultimate Life Coach</h2>
          <p className="mt-4 text-muted-foreground max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">
            Smart features built to turn your big ambitions into daily wins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 3xl:gap-12">
          {features.map((f, i) =>
          <div
            key={i}
            className="bg-card rounded-2xl p-8 3xl:p-12 border border-border hover:shadow-elevated transition-shadow group">
              <div className={`w-14 h-14 3xl:w-20 3xl:h-20 rounded-xl ${f.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-7 h-7 3xl:w-10 3xl:h-10 ${f.color}`} />
              </div>
              <h3 className="font-display text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm 2xl:text-base 3xl:text-lg leading-relaxed">{f.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
