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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

export default Index;
