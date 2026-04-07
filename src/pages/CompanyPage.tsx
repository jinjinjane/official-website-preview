import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const CompanyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About FluxVita Corp | The Company Behind Jovida</title>
        <meta name="description" content="FluxVita Corp builds AI agents that help people achieve their goals. Meet the team behind Jovida, the proactive AI life agent." />
        <meta name="keywords" content="FluxVita Corp, Jovida company, AI agent company, proactive AI" />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6">FluxVita Corporation

          </h1>
          <p className="text-xl text-muted-foreground mb-12">We build AI for lifelong transformation, not just short-term tasks.</p>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We believe AI should serve people and fuel human growth, not replace it. Jovida is not here to automate your life away. As AI agents begin to form their own interconnected networks to share knowledge and skills, Jovida acts as the vital middle layer between you and this vast ecosystem - a space where humans and agents grow together over time.

            </p>
            <p className="text-muted-foreground leading-relaxed">Your personal agent taps into this collective intelligence while learning your specific goals, patterns, and struggles. It evolves alongside you, handles the busywork, and brings you the right action at the right moment to drive real change.

            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Believe</h2>
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">AI serves people, not the other way around</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We do not build AI that replaces human effort. We build AI that amplifies it. Your agent handles the tedious parts so you can focus on the meaningful ones.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Symbiosis, not just automation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Jovida is the middle layer where humans and agents coexist. Your agent gets smarter as you use it, and you get better as the agent supports you. Long-term growth, together.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Proactive, not passive</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  An AI that waits for you to ask is just a search engine with better grammar. A proactive agent reaches out at the right moment with the right action. That is what we build.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Product</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Jovida</strong> is a proactive AI life agent. You set a goal. The agent breaks it down into daily steps, delivers each step as an interactive task card, and adjusts the plan based on your progress.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notifications come through push and WhatsApp, so the agent reaches you even when the app is closed. The Playbook lets you browse and activate goal-specific playbooks built by our team and by the community.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reach us at <a href="mailto:support@fluxvita.com" className="text-foreground underline hover:text-primary transition-colors">support@fluxvita.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>);

};

export default CompanyPage;