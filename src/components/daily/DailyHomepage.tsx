import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BellRing,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Image,
  Lightbulb,
  Link2,
  ListChecks,
  Menu,
  MessageCircleHeart,
  Mic,
  NotebookPen,
  RefreshCcw,
  Sparkles,
  Split,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import jovidaWordmark from "@/assets/jovida-wordmark.png";
import jovidaWordmarkDark from "@/assets/jovida-wordmark-dark.png";
import jovidaDailyHero from "@/assets/jovida-daily-hero.png";
import { dailyFeatures } from "@/data/dailyFeatures";

// Replace this URL once the Jovida Daily App Store listing is live.
const JOVIDA_DAILY_APP_URL = "#";

const captureMethods = [
  { icon: Mic, label: "Voice" },
  { icon: Image, label: "Screenshots" },
  { icon: Link2, label: "Links" },
  { icon: NotebookPen, label: "Notes" },
  { icon: WandSparkles, label: "Agent Skills" },
];

const differentiators = [
  {
    icon: Brain,
    title: "AI brain dump organizer",
    desc: "Get everything out at once. Jovida Daily separates scattered thoughts into clear tasks and useful context.",
    color: "bg-brand-yellow",
    href: "/jovida-daily/features/brain-dump-organizer",
  },
  {
    icon: ListChecks,
    title: "Clear, prioritized to-do list",
    desc: "See what needs doing, what matters most, and what can wait instead of facing one flat list.",
    color: "bg-brand-purple",
    href: "/jovida-daily/features/prioritized-to-do-list",
  },
  {
    icon: Split,
    title: "Big tasks made easier to start",
    desc: "Turn an overwhelming project or vague deadline into practical steps with one clear place to begin.",
    color: "bg-brand-blue",
    href: "/jovida-daily/features/ai-task-breakdown",
  },
  {
    icon: BellRing,
    title: "Reminders that follow up",
    desc: "Return to important tasks with the right context, then get another check-in if they still need attention.",
    color: "bg-brand-orange",
    href: "/jovida-daily/features/smart-reminders",
  },
  {
    icon: RefreshCcw,
    title: "A plan that resets with you",
    desc: "When the day changes, Jovida Daily rebuilds the remaining schedule around the time you still have.",
    color: "bg-[#F7F2E4]",
    href: "/jovida-daily/features/daily-planning",
  },
  {
    icon: MessageCircleHeart,
    title: "An AI companion that checks in",
    desc: "Jovida Daily checks on planned work and offers a smaller step when you are stuck.",
    color: "bg-brand-yellow",
    href: "/jovida-daily/features/ai-planning-companion",
  },
];

const steps = [
  {
    num: "01",
    title: "Add tasks manually",
    desc: "Type a task, deadline, note, or checklist just as you would in a traditional to-do app.",
    color: "bg-brand-orange",
  },
  {
    num: "02",
    title: "Or ask AI to set it up",
    desc: "Send Jovida Daily a voice note, screenshot, message, link, or brain dump. AI can extract and structure the work for you.",
    color: "bg-brand-purple",
  },
  {
    num: "03",
    title: "Confirm the result",
    desc: "Review the tasks and subtasks, change anything you want, then approve them before they enter your list.",
    color: "bg-brand-blue",
  },
];

const planningFeatures = [
  {
    icon: NotebookPen,
    title: "Spend less time entering tasks",
    desc: "One message, image, or brain dump can become several complete tasks without filling in every field yourself.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/15",
  },
  {
    icon: ListChecks,
    title: "Make fewer priority decisions",
    desc: "A clear order helps you choose what to work on without comparing the whole list again and again.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/15",
  },
  {
    icon: BellRing,
    title: "Keep fewer follow-ups in your head",
    desc: "Jovida Daily remembers what is still waiting and brings it back when it needs another decision.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/15",
  },
];

const useCases = [
  { icon: Brain, title: "ADHD brains", desc: "Fast capture and smaller starting steps" },
  { icon: BriefcaseBusiness, title: "Professionals", desc: "Meetings, projects, and follow-ups" },
  { icon: Lightbulb, title: "Creators", desc: "Ideas, screenshots, and content plans" },
  { icon: Users, title: "Busy households", desc: "Errands, cleaning, and shared admin" },
  { icon: GraduationCap, title: "Students", desc: "Assignments, exams, and deadlines" },
  { icon: Sparkles, title: "Anyone overwhelmed", desc: "A calmer way to decide what is next" },
];

const faqs = [
  {
    q: "What is Jovida Daily?",
    a: "Jovida Daily is a daily planner and task manager that helps you capture tasks quickly, organize messy thoughts, break down overwhelming work, and follow through with smart reminders and check-ins.",
  },
  {
    q: "How can I add tasks?",
    a: "You can add tasks manually or capture them with voice, images, screenshots, shortcuts, quick notes, links, and imported Agent Skills. Jovida Daily can turn those inputs into tasks for you to review and confirm.",
  },
  {
    q: "Can Jovida Daily break down a big project?",
    a: "Yes. Jovida Daily can turn a vague or overwhelming task into smaller, concrete actions. You can review and edit the suggested breakdown before saving it.",
  },
  {
    q: "How are Jovida Daily reminders different?",
    a: "Jovida Daily reminders can include the original context, deadline, and a concrete action. Important unfinished tasks can receive a later follow-up instead of disappearing after one notification.",
  },
  {
    q: "Is Jovida Daily useful for ADHD?",
    a: "It is designed around common friction points such as capturing tasks immediately, reducing planning effort, breaking work into smaller steps, and checking back after a reminder is missed.",
  },
  {
    q: "Who is Jovida Daily for?",
    a: "Jovida Daily is for ADHD minds, students, busy professionals, creators, and anyone who captures lots of tasks but struggles to organize, remember, or start them.",
  },
  {
    q: "Will there be a free plan?",
    a: "Jovida Daily will be free to start. Premium plans will offer more AI help for organizing thoughts, breaking down tasks, planning and resetting your day, and protecting important follow-ups.",
  },
];

const AppleIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const DownloadAppButton = ({ compact = false }: { compact?: boolean }) => (
  <a
    href={JOVIDA_DAILY_APP_URL}
    className={`inline-flex items-center justify-center rounded-full bg-foreground font-semibold transition-opacity hover:opacity-90 ${
      compact
        ? "gap-2 px-5 py-2 text-sm text-background 3xl:px-7 3xl:py-3 3xl:text-base"
        : "gap-2.5 px-7 py-3.5 text-sm text-lime-light 2xl:text-base 3xl:px-10 3xl:py-5 3xl:text-lg"
    }`}
  >
    <AppleIcon className={compact ? "h-4 w-4 3xl:h-5 3xl:w-5" : "h-5 w-5 3xl:h-7 3xl:w-7"} />
    Download App
  </a>
);

const DailyNavbar = () => {
  const [open, setOpen] = useState(false);
  const productItems = [
    { label: "Jovida Daily", href: "/" },
    { label: "Jovida Life Coach", href: "/jovida-life-coach" },
  ];
  const resourceItems = [
    { label: "Blog", href: "/blog" },
    { label: "Playbook", href: "/agents" },
    { label: "Company", href: "/company" },
  ];
  const featureItems = dailyFeatures.map((feature) => ({
    label: feature.navLabel,
    href: `/jovida-daily/features/${feature.slug}`,
  }));

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl">
      <div className="bg-card/90 backdrop-blur-xl rounded-full px-6 py-3 3xl:px-10 3xl:py-5 flex items-center justify-between shadow-elevated border border-border">
        <Link to="/" className="flex items-center" aria-label="Jovida home">
          <img src={jovidaWordmark} alt="Jovida" className="h-6 3xl:h-9 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-5 3xl:gap-10">
          <div className="relative group">
            <button className="inline-flex items-center gap-1 text-sm 3xl:text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              Product <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-border bg-card p-2 shadow-elevated">
                {productItems.map((item) => (
                  <Link key={item.label} to={item.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center gap-1 text-sm 3xl:text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-border bg-card p-2 shadow-elevated">
                {featureItems.map((item) => (
                  <Link key={item.label} to={item.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center gap-1 text-sm 3xl:text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-border bg-card p-2 shadow-elevated">
                {resourceItems.map((item) => (
                  <Link key={item.label} to={item.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <DownloadAppButton compact />
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-elevated border border-border">
          <p className="px-2 pb-1 text-xs font-bold uppercase text-muted-foreground">Product</p>
          {productItems.map((item) => (
            <Link key={item.label} to={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <p className="mt-3 px-2 pb-1 text-xs font-bold uppercase text-muted-foreground">Features</p>
          {featureItems.map((item) => (
            <Link key={item.label} to={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <p className="mt-3 px-2 pb-1 text-xs font-bold uppercase text-muted-foreground">Resources</p>
          {resourceItems.map((item) => (
            <Link key={item.label} to={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <div className="mt-3">
            <DownloadAppButton compact />
          </div>
        </div>
      )}
    </nav>
  );
};

const DailyHero = () => (
  <section className="daily-dot-hero min-h-screen flex items-center pt-24 pb-16 px-4 relative overflow-hidden">
    <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto w-full grid md:grid-cols-[1.08fr_0.92fr] gap-8 2xl:gap-12 items-center">
      <div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold leading-tight tracking-tight text-foreground">
          A daily planner
          <br />
          <span className="text-primary">that checks in</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl 2xl:text-2xl text-muted-foreground max-w-xl">
          Capture tasks from thoughts, images, messages, links, and Agent Skills. Jovida Daily
          organizes them into clear to-dos, breaks big tasks into manageable steps, and checks
          back before they get forgotten.
        </p>
        <div className="mt-8 3xl:mt-12 flex flex-wrap gap-4">
          <DownloadAppButton />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md 2xl:max-w-lg">
        <img
          src={jovidaDailyHero}
          alt="Jovida Daily reminder and task follow-up interface"
          className="h-auto w-full object-contain"
          fetchPriority="high"
        />
      </div>
    </div>
  </section>
);

const CaptureSection = () => (
  <section className="px-4 py-20 2xl:py-28 bg-background">
    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-foreground">
          Capture tasks instantly
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Use whatever is already in front of you. Jovida Daily can work with the rough version.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
        {captureMethods.map((method) => (
          <div key={method.label} className="border border-border bg-card rounded-2xl p-6 text-center">
            <method.icon className="mx-auto h-8 w-8 text-foreground" />
            <p className="mt-3 font-display font-bold text-foreground">{method.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="rounded-2xl bg-warm-gray p-6">
          <p className="text-xs font-bold uppercase text-muted-foreground">Messy input</p>
          <p className="mt-3 text-lg text-foreground">
            “Friday's presentation is still a mess. I need Maya's latest numbers, the room is not booked, and the team needs the final deck.”
          </p>
        </div>
        <ArrowRight className="hidden h-6 w-6 text-primary md:block" />
        <div className="rounded-2xl bg-charcoal p-6 text-background">
          <p className="text-xs font-bold uppercase text-background/50">Clear next actions</p>
          <div className="mt-3 space-y-2">
            {[
              "Ask Maya for the latest numbers",
              "Book a room for Friday's presentation",
              "Send the final deck to the team",
            ].map((task) => (
              <p key={task} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-light" />
                {task}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DifferenceSection = () => (
  <section id="features" className="py-24 px-4 bg-warm-gray">
    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-foreground">
          Key features
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
          Built for the gap between remembering what you need to do and actually getting it done.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentiators.map((item) => (
          <article key={item.title} className="bg-card rounded-2xl p-8 border border-border">
            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
              <item.icon className="w-7 h-7 text-charcoal" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            {item.href && (
              <Link to={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

const DailyHowItWorks = () => (
  <section id="how-it-works" className="py-24 px-4 bg-charcoal">
    <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-background">
          How to use Jovida Daily
        </h2>
        <p className="mt-4 text-background/60 text-lg">
          Use it like a traditional to-do list, or let AI prepare the tasks for you to review.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <article key={step.num} className="bg-background/5 rounded-2xl p-8 border border-background/10">
            <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-6`}>
              <span className="font-display text-lg font-extrabold text-background">{step.num}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-background mb-3">{step.title}</h3>
            <p className="text-background/60 leading-relaxed">{step.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const PlanningSection = () => (
  <section className="py-24 px-4 bg-warm-gray">
    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-foreground">
          Less work around the work
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
          Spend less effort maintaining the system and more time completing what is in it.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {planningFeatures.map((feature) => (
          <article key={feature.title} className="bg-card rounded-2xl p-8 border border-border">
            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
              <feature.icon className={`w-7 h-7 ${feature.color}`} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const UseCases = () => (
  <section id="use-cases" className="py-24 px-4 bg-background">
    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-foreground">
          For minds that move quickly
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
          Useful when ideas arrive faster than you can organize them, or a normal to-do list is too easy to ignore.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {useCases.map((useCase) => (
          <article key={useCase.title} className="bg-card rounded-2xl p-5 border border-border text-center">
            <useCase.icon className="mx-auto h-7 w-7 text-primary" />
            <h3 className="mt-4 font-display text-sm font-bold text-foreground">{useCase.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{useCase.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const DailyFaq = () => (
  <section id="faq" className="py-24 px-4 bg-warm-gray">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-foreground">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">Everything you need to know about Jovida Daily.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.q} value={`daily-faq-${index}`}>
            <AccordionTrigger className="font-display font-bold text-left text-base hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const DailyCta = () => (
  <section className="py-24 px-4 bg-[#F7F2E4]">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-charcoal">
        Make daily planning easier with Jovida Daily
      </h2>
      <p className="mt-6 text-lg text-charcoal/65 max-w-xl mx-auto">
        Capture tasks, review AI suggestions, and keep one clear plan for the day.
      </p>
      <div className="mt-8">
        <DownloadAppButton />
      </div>
    </div>
  </section>
);

const DailyFooter = () => (
  <footer className="bg-foreground text-background py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="inline-flex" aria-label="Jovida home">
            <img src={jovidaWordmarkDark} alt="Jovida" className="h-9 w-auto" />
          </Link>
          <p className="mt-4 text-background/60 text-sm">
            AI agents designed to work in the human loop.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase text-background/40">Product</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/" className="hover:text-background">Jovida Daily</Link></li>
            <li><Link to="/jovida-life-coach" className="hover:text-background">Jovida Life Coach</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase text-background/40">Resources</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/blog" className="hover:text-background">Blog</Link></li>
            <li><Link to="/agents" className="hover:text-background">Playbook</Link></li>
            <li><Link to="/company" className="hover:text-background">Company</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase text-background/40">Legal</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/jovida-daily/privacy" className="hover:text-background">Privacy Policy</Link></li>
            <li><Link to="/jovida-daily/terms" className="hover:text-background">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
        &copy; {new Date().getFullYear()} FluxVita Corp. All rights reserved.
      </div>
    </div>
  </footer>
);

const DailyHomepage = () => (
  <div className="min-h-screen bg-background">
    <DailyNavbar />
    <main>
      <DailyHero />
      <CaptureSection />
      <DifferenceSection />
      <DailyHowItWorks />
      <PlanningSection />
      <UseCases />
      <DailyFaq />
      <DailyCta />
    </main>
    <DailyFooter />
  </div>
);

export default DailyHomepage;
