import heroVisual from "@/assets/hero-visual.webp";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto w-full grid md:grid-cols-2 gap-12 3xl:gap-20 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-extrabold leading-tight text-foreground tracking-tight">
            The Proactive
            <br />
            <span className="text-gradient-lime">AI Life Coach</span>
          </h1>
          <h2 className="mt-4 font-display text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-foreground/80 tracking-tight">
            Turn your desire into action
          </h2>

          <p className="mt-6 text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-muted-foreground max-w-xl 3xl:max-w-2xl font-body">
            Jovida Life Coach turns what you want into clear next steps, reminds you at the right time, handles parts of the work for you, and helps you actually follow through.
          </p>

          <div className="mt-8 3xl:mt-12 flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com/us/app/jovida/id6752009326"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground font-semibold px-7 py-3.5 3xl:px-10 3xl:py-5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2.5 text-sm 2xl:text-base 3xl:text-lg text-[#acff4d]">
              
              <svg className="w-5 h-5 3xl:w-7 3xl:h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroVisual}
            alt="Jovida Life Coach app interface"
            loading="eager"
            fetchPriority="high"
            width={1020}
            height={1022}
            className="w-full max-w-md md:max-w-lg 2xl:max-w-xl 3xl:max-w-3xl" />
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
