import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is a 'life agent'?",
    a: "Think of Jovida as a proactive personal assistant living in your phone. Unlike to-do apps, it actively plans your day, handles tedious setup work, and keeps pushing you toward your goals with well-timed nudges.",
  },
  {
    q: "What are nudges and how do they work?",
    a: "Nudges are interactive task cards inside the app that tell you exactly what to do next. Jovida sends you push notifications and WhatsApp messages to make sure you see them at the right time, based on your calendar, location, and daily patterns.",
  },
  {
    q: "What kind of goals can I set?",
    a: "Anything from losing body fat and building a workout routine, to quitting caffeine, fixing your sleep, learning a new skill, or revamping your dating profile. If you have a personal goal, Jovida can help you get there.",
  },
  {
    q: "Does Jovida actually do work for me?",
    a: "Yes. Jovida handles the busywork so you can focus on doing. For example, it generates your grocery list, creates a meal plan, builds a detox schedule, or drafts content for you. You just follow through.",
  },
  {
    q: "Is my data safe?",
    a: "Your data is encrypted end-to-end and never sold to third parties. Calendar and location access are optional and only used to make your experience more relevant. You control what Jovida can see.",
  },
  {
    q: "Is Jovida free?",
    a: "Every new user gets free credits on sign-up, enough to explore all features and see real results. After that, Jovida runs on a credit-based subscription. Every command you give and every autonomous decision the agent makes consumes credits, scaled to the complexity of the task. Choose from Standard (8,000 credits/month at $19.99), Pro (22,000 credits/month at $49.99), or Max (46,000 credits/month at $99.90). Annual plans save you roughly two months.",
  },
  {
    q: "What is the Agent Square?",
    a: "The Agent Square is like an app store for goals. Browse goal-specific agents built by our team and real users, each one a proven blueprint for a specific goal. Find one you like and activate it with one tap.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-warm-gray">
      <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
          <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">
            Everything you need to know about Jovida.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="font-display font-bold text-foreground text-left text-base 2xl:text-lg 3xl:text-xl hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed 2xl:text-base 3xl:text-lg">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
