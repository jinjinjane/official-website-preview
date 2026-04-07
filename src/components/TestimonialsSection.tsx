import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Lost 12kg in 4 months",
    avatar: "S",
    quote: "I tried so many fitness apps before. Jovida is the first one that tells me what to do and when. I just follow the nudge cards and it works.",
    stars: 5,
    avatarColor: "bg-brand-orange",
  },
  {
    name: "Marcus T.",
    role: "Quit caffeine in 3 weeks",
    avatar: "M",
    quote: "It sent me a WhatsApp right when I was about to grab a coffee. Felt like having a friend who genuinely wants me to hit my goals.",
    stars: 5,
    avatarColor: "bg-brand-purple",
  },
  {
    name: "Emily R.",
    role: "Built a morning routine",
    avatar: "E",
    quote: "Never expected an app to understand my schedule this well. When my day goes off track, it adjusts instead of making me feel bad about it.",
    stars: 5,
    avatarColor: "bg-brand-blue",
  },
  {
    name: "David L.",
    role: "Improved sleep score by 40%",
    avatar: "D",
    quote: "Jovida remembered I have a problem with screens before bed and started sending me nudges earlier each week. It genuinely learns how I work.",
    stars: 5,
    avatarColor: "bg-lime",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 2xl:py-32 3xl:py-40 px-4 bg-charcoal">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1800px] mx-auto">
        <div className="text-center mb-16 3xl:mb-24">
           <h2 className="font-display text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-background tracking-tight">
            Loved by Goal-Crushers
          </h2>
          <p className="mt-4 text-background/60 max-w-lg 3xl:max-w-2xl mx-auto 2xl:text-lg 3xl:text-xl">
            Thousands of people are already outsourcing their willpower to Jovida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 3xl:gap-10">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 3xl:p-12 border border-background/10 hover:border-background/20 transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 3xl:w-6 3xl:h-6 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-background text-sm 2xl:text-base 3xl:text-lg leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 3xl:w-14 3xl:h-14 rounded-full ${t.avatarColor} flex items-center justify-center`}>
                  <span className="font-display font-bold text-background text-sm 3xl:text-lg">{t.avatar}</span>
                </div>
                <div>
                   <p className="font-display font-bold text-background text-sm 2xl:text-base 3xl:text-lg">{t.name}</p>
                  <p className="text-background/60 text-xs 2xl:text-sm 3xl:text-base">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
