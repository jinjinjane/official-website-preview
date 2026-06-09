import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import RouteScrollManager from "@/components/RouteScrollManager";
const Index = lazy(() => import("./pages/Index.tsx"));
const LifeCoachPage = lazy(() => import("./pages/LifeCoachPage.tsx"));
const AgentsPage = lazy(() => import("./pages/AgentsPage.tsx"));
const AgentDetailPage = lazy(() => import("./pages/AgentDetailPage.tsx"));
const DailyFeaturePage = lazy(() => import("./pages/DailyFeaturePage.tsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage.tsx"));
const RichBlogArticlePage = lazy(() => import("./pages/RichBlogArticlePage.tsx"));
const CompanyPage = lazy(() => import("./pages/CompanyPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const LifeCoachPrivacyPage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/privacy-policy.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Privacy Policy"
        description="Jovida Life Coach privacy policy."
        markdown={markdown}
        productName="Jovida Life Coach"
        canonicalPath="/jovida-life-coach/privacy"
        keywords="Jovida Life Coach privacy policy, AI life coach privacy, Jovida privacy"
      />
    ),
  };
});

const LifeCoachTermsPage = lazy(async () => {
  const [{ default: LegalDocumentPage }, { default: markdown }] = await Promise.all([
    import("./pages/LegalDocumentPage.tsx"),
    import("./content/legal/terms-and-conditions.md?raw"),
  ]);

  return {
    default: () => (
      <LegalDocumentPage
        title="Terms and Conditions"
        description="Jovida Life Coach terms and conditions."
        markdown={markdown}
        productName="Jovida Life Coach"
        canonicalPath="/jovida-life-coach/terms"
        keywords="Jovida Life Coach terms, AI life coach terms of service, Jovida terms"
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
        productName="Jovida Daily"
        canonicalPath="/jovida-daily/privacy"
        keywords="Jovida Daily privacy policy, daily planner privacy, AI task manager privacy"
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
        productName="Jovida Daily"
        canonicalPath="/jovida-daily/terms"
        keywords="Jovida Daily terms, daily planner terms of service, AI task manager terms"
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
        canonicalPath="/subscription-guide"
        keywords="Jovida subscription, Jovida pricing, Jovida credits, Jovida billing guide"
      />
    ),
  };
});

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <RouteScrollManager />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jovida-life-coach" element={<LifeCoachPage />} />
            <Route path="/jovida-daily/features/:slug" element={<DailyFeaturePage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/agents/:slug" element={<AgentDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/zh/:slug" element={<RichBlogArticlePage locale="zh" />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/privacy" element={<JovidaDailyPrivacyPage />} />
            <Route path="/privacy-policy" element={<JovidaDailyPrivacyPage />} />
            <Route path="/terms" element={<JovidaDailyTermsPage />} />
            <Route path="/terms-of-use" element={<JovidaDailyTermsPage />} />
            <Route path="/subscription-guide" element={<SubscriptionGuidePage />} />
            <Route path="/jovida-daily/privacy" element={<JovidaDailyPrivacyPage />} />
            <Route path="/jovida-daily/privacy-policy" element={<JovidaDailyPrivacyPage />} />
            <Route path="/jovida-daily/terms" element={<JovidaDailyTermsPage />} />
            <Route path="/jovida-daily/terms-of-use" element={<JovidaDailyTermsPage />} />
            <Route path="/jovida-life-coach/privacy" element={<LifeCoachPrivacyPage />} />
            <Route path="/jovida-life-coach/privacy-policy" element={<LifeCoachPrivacyPage />} />
            <Route path="/jovida-life-coach/terms" element={<LifeCoachTermsPage />} />
            <Route path="/jovida-life-coach/terms-of-use" element={<LifeCoachTermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
