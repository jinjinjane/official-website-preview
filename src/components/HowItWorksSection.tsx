const steps = [
  {
    num: "01",
    title: "Start with what you want",
    desc: "Bring Jovida Life Coach a long-term goal, a passing thought, or something that caught your attention, like a link, photo, or video. Any of them can become the starting point for a plan.",
    accent: "bg-brand-orange",
  },
  {
    num: "02",
    title: "Get the next steps mapped out",
    desc: "Your coach turns that input into actionable steps, timing, and nudges, so you know what to do next without figuring everything out alone.",
    accent: "bg-brand-purple",
  },
  {
    num: "03",
    title: "Follow through with less friction",
    desc: "It reaches out through WhatsApp and push notifications, adapts your plan as life changes, and helps you keep the momentum going.",
    accent: "bg-brand-blue",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-charcoal">
      <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-[1800px] mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-background tracking-tight">
            How Jovida Life Coach Turns<br />Intent Into Action
          </h2>
          <p className="mt-4 text-background/60 max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">
            From spark to next step in under a minute.
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
