const steps = [
  {
    num: "01",
    title: "Set your goal",
    desc: "Tell Jovida what you want to achieve. It breaks your goal into a daily plan and handles the setup work, like generating your grocery list, building a detox schedule, or rewriting your dating profile.",
    accent: "bg-brand-orange",
  },
  {
    num: "02",
    title: "Get nudged at the right moment",
    desc: "Jovida reads your schedule and habits, then sends interactive task cards at the perfect time. Each card is a clear, completable action that fits your current moment.",
    accent: "bg-brand-purple",
  },
  {
    num: "03",
    title: "Stay on track without thinking about it",
    desc: "Jovida reaches out through WhatsApp and push notifications so you never need to remember to open an app. It adapts your plan as life changes and keeps momentum going.",
    accent: "bg-brand-blue",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-charcoal">
      <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-[1800px] mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-background tracking-tight">
            How Jovida Drives<br />Your Success
          </h2>
          <p className="mt-4 text-background/60 max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">
            From goal to daily action in under 60 seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 3xl:gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 3xl:p-12 border border-background/10 hover:border-background/20 transition-all relative overflow-hidden"
            >
              <div className={`w-12 h-12 3xl:w-16 3xl:h-16 rounded-xl ${step.accent} flex items-center justify-center mb-6`}>
                <span className="font-display text-lg 3xl:text-2xl font-extrabold text-background">{step.num}</span>
              </div>
              <h3 className="font-display text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-background mb-3">{step.title}</h3>
              <p className="text-background/60 text-sm 2xl:text-base 3xl:text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
