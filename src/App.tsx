import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));
const AgentsPage = lazy(() => import("./pages/AgentsPage.tsx"));
const AgentDetailPage = lazy(() => import("./pages/AgentDetailPage.tsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage.tsx"));
const RichBlogArticlePage = lazy(() => import("./pages/RichBlogArticlePage.tsx"));
const CompanyPage = lazy(() => import("./pages/CompanyPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const PrivacyPage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/privacy-policy.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Privacy Policy"
        description="Jovida privacy policy."
        markdown={markdown}
      />
    ),
  };
});

const TermsPage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/terms-and-conditions.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Terms and Conditions"
        description="Jovida terms and conditions."
        markdown={markdown}
      />
    ),
  };
});

const JovidaDailyPrivacyPage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/jovida-daily-privacy-policy.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Privacy Policy"
        description="Jovida Daily privacy policy."
        markdown={markdown}
      />
    ),
  };
});

const JovidaDailyTermsPage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/jovida-daily-terms-and-conditions.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Terms and Conditions"
        description="Jovida Daily terms and conditions."
        markdown={markdown}
      />
    ),
  };
});

const SubscriptionGuidePage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/subscription-guide.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Jovida Subscription Guide"
        description="Jovida subscription plans, credits policy, and billing guide."
        markdown={markdown}
      />
    ),
  };
});

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/agents/:slug" element={<AgentDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/zh/:slug" element={<RichBlogArticlePage locale="zh" />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms-of-use" element={<TermsPage />} />
            <Route path="/subscription-guide" element={<SubscriptionGuidePage />} />
            <Route path="/jovida-daily/privacy" element={<JovidaDailyPrivacyPage />} />
            <Route path="/jovida-daily/privacy-policy" element={<JovidaDailyPrivacyPage />} />
            <Route path="/jovida-daily/terms" element={<JovidaDailyTermsPage />} />
            <Route path="/jovida-daily/terms-of-use" element={<JovidaDailyTermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
