import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { featuredAgents } from "../src/data/agentsData";
import { getAgentSeo } from "../src/lib/agentSeo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.join(PROJECT_ROOT, "dist");

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

const buildHead = (agent: (typeof featuredAgents)[number]) => {
  const seo = getAgentSeo(agent);
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const keywords = escapeHtml(seo.keywords);
  const imageAlt = escapeHtml(`${agent.name} AI Agent by Jovida`);

  return [
    `<title data-rh="true">${title}</title>`,
    `<meta data-rh="true" name="description" content="${description}">`,
    `<meta data-rh="true" name="keywords" content="${keywords}">`,
    `<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
    `<meta data-rh="true" name="author" content="Jovida">`,
    `<link data-rh="true" rel="canonical" href="${seo.canonicalUrl}">`,
    `<meta data-rh="true" property="og:type" content="website">`,
    `<meta data-rh="true" property="og:site_name" content="Jovida">`,
    `<meta data-rh="true" property="og:locale" content="en_US">`,
    `<meta data-rh="true" property="og:title" content="${title}">`,
    `<meta data-rh="true" property="og:description" content="${description}">`,
    `<meta data-rh="true" property="og:url" content="${seo.canonicalUrl}">`,
    `<meta data-rh="true" property="og:image" content="${seo.socialImage}">`,
    `<meta data-rh="true" property="og:image:alt" content="${imageAlt}">`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:title" content="${title}">`,
    `<meta data-rh="true" name="twitter:description" content="${description}">`,
    `<meta data-rh="true" name="twitter:image" content="${seo.socialImage}">`,
    `<meta data-rh="true" name="twitter:image:alt" content="${imageAlt}">`,
    `<script data-rh="true" type="application/ld+json">${JSON.stringify(seo.structuredData).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
};

async function main() {
  const baseHtml = await readFile(path.join(DIST_DIR, "index.html"), "utf8");
  const shellHtml = removeManagedHeadTags(baseHtml);

  for (const agent of featuredAgents) {
    const outputDir = path.join(DIST_DIR, "agents", agent.slug);
    const html = shellHtml.replace("</head>", `    ${buildHead(agent)}\n  </head>`);
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, "index.html"), html, "utf8");
    console.log(`  ✓ dist/agents/${agent.slug}/index.html`);
  }

  console.log(`\nGenerated ${featuredAgents.length} agent SEO page(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
