import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  BellRing,
  Brain,
  Camera,
  CheckCircle2,
  HeartHandshake,
  ListChecks,
  Mic,
  RefreshCcw,
  Split,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDailyFeature } from "@/data/dailyFeatures";
import brainDumpHero from "@/assets/jovida-daily-brain-dump.png";
import companionHero from "@/assets/jovida-daily-companions.png";

const APP_URL = "#";

const icons = {
  capture: Mic,
  brain: Brain,
  priority: ListChecks,
  breakdown: Split,
  reminders: BellRing,
  planning: RefreshCcw,
  companion: HeartHandshake,
};

const DailyFeaturePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = getDailyFeature(slug);

  if (!feature) return <Navigate to="/" replace />;

  const Icon = icons[feature.icon];
  const canonicalUrl = `https://jovida.ai/jovida-daily/features/${feature.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: feature.seoTitle,
        description: feature.seoDescription,
        keywords: feature.keywords,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://jovida.ai/#website",
          name: "Jovida",
          url: "https://jovida.ai/",
        },
        about: { "@id": `${canonicalUrl}#software` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        name: "Jovida Daily",
        alternateName: feature.title,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "iOS",
        url: canonicalUrl,
        description: feature.seoDescription,
        keywords: feature.keywords,
        featureList: feature.benefits.map((item) => item.title),
        brand: { "@type": "Brand", name: "Jovida Daily" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Jovida Daily",
            item: "https://jovida.ai/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Features",
            item: "https://jovida.ai/#features",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: feature.navLabel,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{feature.seoTitle}</title>
        <meta name="description" content={feature.seoDescription} />
        <meta name="keywords" content={feature.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jovida" />
        <meta property="og:title" content={feature.seoTitle} />
        <meta property="og:description" content={feature.seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://jovida.ai/jovida-wordmark.png" />
        <meta property="og:image:alt" content={`${feature.title} feature in Jovida Daily`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={feature.seoTitle} />
        <meta name="twitter:description" content={feature.seoDescription} />
        <meta name="twitter:image" content="https://jovida.ai/jovida-wordmark.png" />
        <meta name="twitter:image:alt" content={`${feature.title} feature in Jovida Daily`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />
      <main>
        <section className="daily-dot-hero min-h-[88vh] flex items-center px-4 pb-16 pt-28">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-display text-sm font-extrabold uppercase text-foreground/55">{feature.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                {feature.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {feature.summary}
              </p>
              <a
                href={APP_URL}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-lime-light"
              >
                Download App <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {feature.slug === "brain-dump-organizer" || feature.slug === "ai-planning-companion" ? (
              <div className="relative mx-auto w-full max-w-md" data-app-image-slot={feature.slug}>
                <img
                  src={feature.slug === "brain-dump-organizer" ? brainDumpHero : companionHero}
                  alt={
                    feature.slug === "brain-dump-organizer"
                      ? "Jovida Daily brain dump inputs from images, voice, text, and Agent Skills"
                      : "Jovida and Mr. Bomb, two AI planning companion personalities in Jovida Daily"
                  }
                  className="h-auto w-full object-contain"
                />
              </div>
            ) : (
            <div className="relative mx-auto w-full max-w-md" data-app-image-slot={feature.slug}>
              <div
                className={`rounded-3xl border border-foreground/10 p-7 shadow-elevated ${
                  feature.icon === "companion" ? "bg-charcoal text-background" : "bg-card"
                }`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}>
                  <Icon className="h-7 w-7 text-charcoal" />
                </div>
                <p
                  className={`mt-6 font-display text-2xl font-extrabold ${
                    feature.icon === "companion" ? "text-background" : "text-foreground"
                  }`}
                >
                  {feature.heroLabel}
                </p>
                <div className="mt-6 space-y-3">
                  {feature.examples.map((example, index) => {
                    const [name, personality] = example.split(" · ");

                    if (feature.icon === "companion") {
                      return (
                        <div key={example} className="flex items-center gap-4 rounded-xl border border-background/10 bg-background/5 p-4">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            index === 0 ? "bg-brand-orange" : index === 1 ? "bg-brand-purple" : "bg-brand-blue"
                          } font-display font-extrabold text-charcoal`}>
                            {name.replace("The ", "").charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-background">{name}</p>
                            <p className="mt-0.5 text-sm text-background/55">{personality}</p>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={example} className="flex items-center gap-3 rounded-xl bg-warm-gray p-4">
                        {feature.icon === "priority" ? (
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground font-display text-xs font-extrabold text-background">
                            {index + 1}
                          </span>
                        ) : feature.icon === "reminders" ? (
                          <BellRing className="h-5 w-5 shrink-0 text-brand-orange" />
                        ) : index === 0 && feature.icon === "capture" ? (
                          <Camera className="h-5 w-5 shrink-0 text-brand-blue" />
                        ) : index === 1 && feature.icon === "capture" ? (
                          <Mic className="h-5 w-5 shrink-0 text-brand-orange" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        )}
                        <span className="font-medium text-foreground">{example}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            )}
          </div>
        </section>

        <section className="bg-background px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl font-display text-4xl font-extrabold text-foreground md:text-5xl">
              {feature.benefitsTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {feature.benefitsIntro}
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {feature.benefits.map((benefit) => (
                <article key={benefit.title} className="border-t-2 border-foreground pt-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-4 py-24 text-background">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-4xl font-extrabold md:text-5xl">{feature.stepsTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-background/60">
              {feature.stepsIntro}
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {feature.steps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-background/10 bg-background/5 p-7">
                  <span className="font-display text-sm font-extrabold text-lime-light">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-background/60">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm-gray px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-extrabold text-foreground md:text-5xl">
                {feature.scenariosTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {feature.scenariosIntro}
              </p>
            </div>
            {feature.scenarioLayout === "transform" && (
              <div className="mt-12 space-y-5">
                {feature.scenarios.map((scenario, index) => (
                  <article
                    key={scenario.title}
                    className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[0.75fr_1fr_1fr]"
                  >
                    <div className="flex items-center gap-4 border-b border-border p-6 md:border-b-0 md:border-r">
                      <span className="font-display text-sm font-extrabold text-primary">0{index + 1}</span>
                      <h3 className="font-display text-xl font-bold text-foreground">{scenario.title}</h3>
                    </div>
                    <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-bold uppercase text-muted-foreground">Starting point</p>
                      <p className="mt-3 leading-relaxed text-foreground">{scenario.input}</p>
                    </div>
                    <div className="bg-charcoal p-6 text-background">
                      <p className="text-xs font-bold uppercase text-background/50">Jovida Daily result</p>
                      <p className="mt-3 leading-relaxed">{scenario.result}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {feature.scenarioLayout === "cards" && (
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {feature.scenarios.map((scenario, index) => (
                  <article key={scenario.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="p-7">
                      <span className="font-display text-sm font-extrabold text-primary">0{index + 1}</span>
                      <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{scenario.title}</h3>
                      <p className="mt-5 text-sm font-bold uppercase text-muted-foreground">Situation</p>
                      <p className="mt-2 leading-relaxed text-foreground">{scenario.input}</p>
                    </div>
                    <div className="border-t border-border bg-charcoal p-7 text-background">
                      <p className="text-xs font-bold uppercase text-background/50">Response</p>
                      <p className="mt-3 leading-relaxed">{scenario.result}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {feature.scenarioLayout === "timeline" && (
              <div className="mt-12 grid gap-0 md:grid-cols-3">
                {feature.scenarios.map((scenario, index) => (
                  <article key={scenario.title} className="relative border-l-2 border-primary pb-12 pl-8 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-8">
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary md:-top-[9px] md:left-0" />
                    <div className="md:pr-8">
                      <p className="font-display text-sm font-extrabold text-primary">0{index + 1}</p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{scenario.title}</h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">{scenario.input}</p>
                      <p className="mt-5 border-l-2 border-foreground pl-4 font-semibold leading-relaxed text-foreground">
                        {scenario.result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#F7F2E4] px-4 py-20 text-center">
          <ListChecks className="mx-auto h-9 w-9 text-charcoal" />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold text-charcoal md:text-5xl">
            {feature.closingTitle}
          </h2>
          <a href={APP_URL} className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 font-semibold text-lime-light">
            Download App <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DailyFeaturePage;
