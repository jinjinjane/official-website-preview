const DemoVideoSection = () => {
  return (
    <section id="demo" className="px-4 py-20 2xl:py-28 3xl:py-36 bg-background">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 3xl:mb-16">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-foreground tracking-tight">
            Meet Jovida Life Coach
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl 3xl:max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-foreground shadow-elevated">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/jRj5846YRec?rel=0&modestbranding=1"
              title="Jovida Life Coach product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
