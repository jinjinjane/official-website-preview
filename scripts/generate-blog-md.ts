/**
 * Generate per-article Markdown exports for AI fetch tools.
 *
 * Reads blogPosts from src/data/blogData.ts and writes
 * public/blog/{slug}.md for each entry. Run via:
 *
 *   npm run blog:md
 *
 * Also chained into `npm run build` so production builds always ship
 * fresh markdown alongside the SPA bundle. The Agent Project article
 * (in src/features/blog/posts/agent-project-genui) is not in blogPosts
 * and is therefore not touched here — its .md is hand-maintained.
 */

import { fileURLToPath } from "node:url";
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

import { blogPosts, type BlogPost } from "../src/data/blogData";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.resolve(PROJECT_ROOT, "public/blog");
const SITE_ORIGIN = "https://jovida.ai";

const escapeYaml = (value: string): string =>
  value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const buildFrontMatter = (post: BlogPost): string =>
  [
    "---",
    `title: "${escapeYaml(post.title)}"`,
    "author: Jovida",
    `published: "${post.date}"`,
    `category: "${escapeYaml(post.category)}"`,
    `read_time: "${post.readTime}"`,
    `url: ${SITE_ORIGIN}/blog/${post.slug}`,
    `description: "${escapeYaml(post.excerpt)}"`,
    `keywords: "${escapeYaml(post.keywords)}"`,
    "---",
  ].join("\n");

const buildFaq = (post: BlogPost): string => {
  if (!post.faq?.length) return "";
  const items = post.faq
    .map(({ question, answer }) => `### ${question}\n\n${answer}`)
    .join("\n\n");
  return `\n\n## Frequently Asked Questions\n\n${items}`;
};

const buildMarkdown = (post: BlogPost): string => {
  const frontMatter = buildFrontMatter(post);
  const body = post.content.trim();
  const faq = buildFaq(post);
  return `${frontMatter}\n\n# ${post.title}\n\n${body}${faq}\n`;
};

async function main(): Promise<void> {
  await mkdir(OUT_DIR, { recursive: true });
  for (const post of blogPosts) {
    const filePath = path.join(OUT_DIR, `${post.slug}.md`);
    await writeFile(filePath, buildMarkdown(post), "utf8");
    console.log(`  ✓ public/blog/${post.slug}.md`);
  }
  console.log(`\nGenerated ${blogPosts.length} blog markdown file(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
