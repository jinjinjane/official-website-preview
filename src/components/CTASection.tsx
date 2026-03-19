const CTASection = () => {
  return (
    <section className="py-24 2xl:py-32 3xl:py-40 px-4 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 3xl:w-96 3xl:h-96 bg-brand-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 3xl:w-[30rem] 3xl:h-[30rem] bg-lime/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-background tracking-tight">
          Your Goals Deserve<br />
          More Than a To-Do List
        </h2>
        <p className="mt-6 text-lg 2xl:text-xl 3xl:text-2xl text-background/60 max-w-xl 3xl:max-w-2xl mx-auto">
          Jovida bridges the gap between intention and action. Set a goal, and your agent handles the rest.
        </p>
        <div className="mt-8 3xl:mt-12">
          <a
            href="https://apps.apple.com/us/app/jovida/id6752009326"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 gradient-lime text-charcoal font-semibold px-8 py-4 3xl:px-12 3xl:py-6 rounded-full hover:opacity-90 transition-opacity text-sm 2xl:text-base 3xl:text-lg bg-lime-light">
            <svg className="w-5 h-5 3xl:w-7 3xl:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
