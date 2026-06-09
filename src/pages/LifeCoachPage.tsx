import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoVideoSection from "@/components/DemoVideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgentSquareSection from "@/components/AgentSquareSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import heroVisual from "@/assets/hero-visual.webp";

const LifeCoachPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Jovida Life Coach | Turn Your Desire Into Action</title>
        <meta
          name="description"
          content="Jovida Life Coach turns your goals into clear plans, smart nudges, and daily follow-through with proactive AI support."
        />
        <meta
          name="keywords"
          content="Jovida Life Coach, AI life coach, proactive AI coach, goal planning app, smart nudges, AI accountability coach, daily goal planner, personal AI agent"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jovida.ai/jovida-life-coach" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jovida" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://jovida.ai/jovida-life-coach" />
        <meta property="og:title" content="Jovida Life Coach | Turn Your Desire Into Action" />
        <meta
          property="og:description"
          content="Turn your goals into clear plans, smart nudges, and daily follow-through with Jovida Life Coach."
        />
        <meta property="og:image" content="https://jovida.ai/jovida-wordmark.png" />
        <meta property="og:image:alt" content="Jovida Life Coach proactive AI coaching app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jovida Life Coach | Turn Your Desire Into Action" />
        <meta
          name="twitter:description"
          content="Turn your goals into clear plans, smart nudges, and daily follow-through with Jovida Life Coach."
        />
        <meta name="twitter:image" content="https://jovida.ai/jovida-wordmark.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://jovida.ai/jovida-life-coach#webpage",
                url: "https://jovida.ai/jovida-life-coach",
                name: "Jovida Life Coach | Turn Your Desire Into Action",
                description:
                  "Jovida Life Coach turns your goals into clear plans, smart nudges, and daily follow-through with proactive AI support.",
                keywords:
                  "AI life coach, proactive AI coach, goal planning app, smart nudges, AI accountability coach",
                about: { "@id": "https://jovida.ai/jovida-life-coach#software" },
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://jovida.ai/jovida-life-coach#software",
                name: "Jovida Life Coach",
                applicationCategory: "LifestyleApplication",
                operatingSystem: "iOS",
                url: "https://jovida.ai/jovida-life-coach",
                brand: { "@type": "Brand", name: "Jovida" },
                featureList: [
                  "Proactive goal planning",
                  "Smart nudges and reminders",
                  "Long-term memory",
                  "Context-aware coaching",
                  "Goal-specific AI agents",
                ],
              },
            ],
          })}
        </script>
        <link rel="preload" as="image" href={heroVisual} fetchPriority="high" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <DemoVideoSection />
        <UseCasesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AgentSquareSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LifeCoachPage;
