import { Suspense } from "react";
import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import RichBlogArticlePage from "@/pages/RichBlogArticlePage";

const renderAtPath = (path: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Suspense fallback={<div data-testid="suspense-fallback" />}>
          <Routes>
            <Route
              path="/blog/zh/:slug"
              element={<RichBlogArticlePage locale="zh" />}
            />
          </Routes>
        </Suspense>
      </MemoryRouter>
    </HelmetProvider>,
  );

describe("RichBlogArticlePage (zh)", () => {
  it("renders the agent-project-genui article with correct SEO", async () => {
    renderAtPath("/blog/zh/agent-project-genui");

    await waitFor(
      () => {
        expect(document.title).toContain("Agent Project");
      },
      { timeout: 5000 },
    );

    const canonical = document.querySelector("link[rel='canonical']");
    expect(canonical?.getAttribute("href")).toBe(
      "https://jovida.ai/blog/zh/agent-project-genui",
    );

    const robots = document.querySelector("meta[name='robots']");
    expect(robots?.getAttribute("content")).toBe("noindex,nofollow");

    const htmlLang = document.documentElement.getAttribute("lang");
    expect(htmlLang).toBe("zh-CN");

    expect(
      await screen.findByRole("heading", { name: "摘要", level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders a Chinese not-found state for unknown slug", () => {
    renderAtPath("/blog/zh/does-not-exist");
    expect(screen.getByText("文章未找到")).toBeInTheDocument();
  });
});
