import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { dailyFeatures } from "../src/data/dailyFeatures";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.join(PROJECT_ROOT, "dist");
const SITE_ORIGIN = "https://jovida.ai";
const SOCIAL_IMAGE = `${SITE_ORIGIN}/jovida-wordmark.png`;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const removeManagedHeadTags = (html: string) =>
  html
    .replace(/<title[^>]*data-rh="true"[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<(meta|link)[^>]*data-rh="true"[^>]*\/?>/gi, "")
    .replace(/<script[^>]*data-rh="true"[^>]*>[\s\S]*?<\/script>/gi, "");

async function main() {
  const baseHtml = await readFile(path.join(DIST_DIR, "index.html"), "utf8");
  const shellHtml = removeManagedHeadTags(baseHtml);

  for (const feature of dailyFeatures) {
    const canonicalUrl = `${SITE_ORIGIN}/jovida-daily/features/${feature.slug}`;
    const title = escapeHtml(feature.seoTitle);
    const description = escapeHtml(feature.seoDescription);
    const keywords = escapeHtml(feature.keywords);
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
            "@id": `${SITE_ORIGIN}/#website`,
            name: "Jovida",
            url: `${SITE_ORIGIN}/`,
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
              item: `${SITE_ORIGIN}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: `${SITE_ORIGIN}/#features`,
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
    const head = [
      `<title data-rh="true">${title}</title>`,
      `<meta data-rh="true" name="description" content="${description}">`,
      `<meta data-rh="true" name="keywords" content="${keywords}">`,
      `<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
      `<link data-rh="true" rel="canonical" href="${canonicalUrl}">`,
      `<meta data-rh="true" property="og:type" content="website">`,
      `<meta data-rh="true" property="og:site_name" content="Jovida">`,
      `<meta data-rh="true" property="og:title" content="${title}">`,
      `<meta data-rh="true" property="og:description" content="${description}">`,
      `<meta data-rh="true" property="og:url" content="${canonicalUrl}">`,
      `<meta data-rh="true" property="og:image" content="${SOCIAL_IMAGE}">`,
      `<meta data-rh="true" property="og:image:alt" content="${escapeHtml(`${feature.title} feature in Jovida Daily`)}">`,
      `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
      `<meta data-rh="true" name="twitter:title" content="${title}">`,
      `<meta data-rh="true" name="twitter:description" content="${description}">`,
      `<meta data-rh="true" name="twitter:image" content="${SOCIAL_IMAGE}">`,
      `<meta data-rh="true" name="twitter:image:alt" content="${escapeHtml(`${feature.title} feature in Jovida Daily`)}">`,
      `<script data-rh="true" type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`,
    ].join("\n    ");

    const outputDir = path.join(DIST_DIR, "jovida-daily", "features", feature.slug);
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, "index.html"), shellHtml.replace("</head>", `    ${head}\n  </head>`), "utf8");
    console.log(`  ✓ dist/jovida-daily/features/${feature.slug}/index.html`);
  }

  console.log(`\nGenerated ${dailyFeatures.length} Jovida Daily feature SEO page(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
