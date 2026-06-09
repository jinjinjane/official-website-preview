import { Helmet } from "react-helmet-async";
import DailyHomepage from "@/components/daily/DailyHomepage";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jovida Daily | ADHD Planner &amp; Smart To-Do List</title>
        <meta
          name="description"
          content="Jovida Daily is an ADHD planner and smart to-do list that turns brain dumps into clear tasks, breaks down big work, and follows up with reminders."
        />
        <meta
          name="keywords"
          content="ADHD planner, to-do list, brain dump, daily planner app, AI task manager, ADHD daily planner, AI daily planner, ADHD to-do list, AI task breakdown, smart reminders"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jovida.ai/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jovida" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://jovida.ai/" />
        <meta property="og:title" content="Jovida Daily | ADHD Planner &amp; Smart To-Do List" />
        <meta
          property="og:description"
          content="An ADHD planner and smart to-do list that organizes brain dumps, breaks down big tasks, and follows up with reminders."
        />
        <meta property="og:image" content="https://jovida.ai/jovida-wordmark.png" />
        <meta property="og:image:alt" content="Jovida Daily ADHD planner and smart to-do list" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jovida Daily | ADHD Planner &amp; Smart To-Do List" />
        <meta
          name="twitter:description"
          content="An ADHD planner and smart to-do list that organizes brain dumps, breaks down big tasks, and follows up with reminders."
        />
        <meta name="twitter:image" content="https://jovida.ai/jovida-wordmark.png" />
        <meta name="twitter:image:alt" content="Jovida Daily ADHD planner and smart to-do list" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Jovida Daily",
            applicationCategory: "ProductivityApplication",
            operatingSystem: "iOS",
            description:
              "An ADHD planner, daily planner app, AI task manager, and smart to-do list that organizes brain dumps, breaks down big work, and follows up with reminders.",
            keywords:
              "ADHD planner, to-do list, brain dump, daily planner app, AI task manager, ADHD daily planner, AI task breakdown",
            featureList: [
              "Voice, screenshot, link, and note capture",
              "AI task organization",
              "Automatic task breakdown",
              "Daily planning and resets",
              "Smart reminders and follow-up check-ins",
              "ADHD-friendly planning support",
            ],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>
      </Helmet>
      <DailyHomepage />
    </>
  );
};

export default Index;
