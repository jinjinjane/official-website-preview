import type { AgentDetail } from "@/data/agentsData";

const SITE_ORIGIN = "https://jovida.ai";
const SOCIAL_IMAGE = `${SITE_ORIGIN}/jovida-wordmark.png`;

const agentPageTitles: Record<string, string> = {
  "skin-care-routine": "Skin Care Routine AI Agent | Personalized Skincare | Jovida",
  "weight-loss": "Weight Loss AI Agent | Meal Plans & Calorie Tracking | Jovida",
  "quit-smoking": "Quit Smoking AI Agent | Craving & Recovery Support | Jovida",
  "manifestation-practice": "Manifestation Practice | Affirmations & Visualization | Jovida",
  "art-daily": "Art Daily AI Agent | Daily Art Discovery | Jovida",
  "english-daily": "English Daily AI Agent | Vocabulary & Pronunciation | Jovida",
  "mystery-book": "Mystery Book AI Agent | Daily Thriller Reading | Jovida",
  "sleep-well": "Sleep Well AI Agent | Better Sleep & Wind-Down | Jovida",
  "ai-founder-feed": "AI Founder Feed | Startup & Tech Briefings | Jovida",
  "ai-radar": "AI Radar Agent | AI Tools & Trend Tracking | Jovida",
  "travel-plan": "Travel Plan AI Agent | Trip Planning & Booking | Jovida",
  "secret-crush": "Secret Crush AI Agent | Social Confidence Support | Jovida",
};

export const getAgentSeo = (agent: AgentDetail) => {
  const canonicalUrl = `${SITE_ORIGIN}/agents/${agent.slug}`;
  const title = agentPageTitles[agent.slug] || `${agent.name} AI Agent | ${agent.tagline} | Jovida`;

  return {
    title,
    description: agent.seoDescription,
    keywords: agent.seoKeywords,
    canonicalUrl,
    socialImage: SOCIAL_IMAGE,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description: agent.seoDescription,
          inLanguage: "en-US",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${SITE_ORIGIN}/#website`,
            name: "Jovida",
            url: `${SITE_ORIGIN}/`,
          },
          about: {
            "@type": "SoftwareApplication",
            name: "Jovida Life Coach",
            url: `${SITE_ORIGIN}/jovida-life-coach`,
          },
          mainEntity: {
            "@id": `${canonicalUrl}#agent`,
          },
        },
        {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#agent`,
          name: `${agent.name} AI Agent`,
          alternateName: agent.name,
          applicationCategory: "LifestyleApplication",
          applicationSubCategory: agent.category,
          operatingSystem: "iOS",
          url: canonicalUrl,
          description: agent.seoDescription,
          keywords: agent.seoKeywords,
          featureList: agent.features,
          brand: {
            "@type": "Brand",
            name: "Jovida",
          },
          isPartOf: {
            "@type": "SoftwareApplication",
            name: "Jovida Life Coach",
            url: `${SITE_ORIGIN}/jovida-life-coach`,
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Jovida",
              item: `${SITE_ORIGIN}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Jovida Life Coach Playbook",
              item: `${SITE_ORIGIN}/agents`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: agent.name,
              item: canonicalUrl,
            },
          ],
        },
      ],
    },
  };
};
