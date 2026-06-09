import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is an AI life coach?",
    a: "Think of Jovida Life Coach as a proactive personal coach in your phone. Unlike a basic to-do app, it helps plan your next steps, handles tedious setup work, and keeps you moving with well-timed nudges.",
  },
  {
    q: "What are nudges and how do they work?",
    a: "Nudges are interactive task cards that tell you exactly what to do next. Your life coach sends push notifications and WhatsApp messages at useful moments based on your calendar, location, and daily patterns.",
  },
  {
    q: "What kind of goals can I set?",
    a: "Anything from losing body fat and building a workout routine to quitting caffeine, improving your sleep, learning a skill, or revamping your dating profile. If you have a personal goal, Jovida Life Coach can help you move it forward.",
  },
  {
    q: "Does Jovida Life Coach actually do work for me?",
    a: "Yes. Your coach handles busywork so you can focus on doing. For example, it can generate a grocery list, create a meal plan, build a detox schedule, or draft content for you.",
  },
  {
    q: "Is my data safe?",
    a: "Your data is encrypted end-to-end and never sold to third parties. Calendar and location access are optional and only used to make your experience more relevant. You control what your life coach can access.",
  },
  {
    q: "Is Jovida Life Coach free?",
    a: "Every new user gets free credits on sign-up, enough to explore the core experience. After that, Jovida Life Coach uses a credit-based subscription. Commands and autonomous agent actions consume credits based on their complexity, with Standard, Pro, and Max plans available.",
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
            Everything you need to know about Jovida Life Coach.
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
