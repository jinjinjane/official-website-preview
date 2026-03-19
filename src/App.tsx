import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AgentsPage from "./pages/AgentsPage.tsx";
import AgentDetailPage from "./pages/AgentDetailPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogArticlePage from "./pages/BlogArticlePage.tsx";
import CompanyPage from "./pages/CompanyPage.tsx";
import LegalDocumentPage from "./pages/LegalDocumentPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import privacyPolicyMarkdown from "./content/legal/privacy-policy.md?raw";
import termsAndConditionsMarkdown from "./content/legal/terms-and-conditions.md?raw";
import subscriptionGuideMarkdown from "./content/legal/subscription-guide.md?raw";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/agents/:slug" element={<AgentDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route
              path="/privacy"
              element={
                <LegalDocumentPage
                  title="Privacy Policy"
                  description="Jovida privacy policy."
                  markdown={privacyPolicyMarkdown}
                />
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <LegalDocumentPage
                  title="Privacy Policy"
                  description="Jovida privacy policy."
                  markdown={privacyPolicyMarkdown}
                />
              }
            />
            <Route
              path="/terms"
              element={
                <LegalDocumentPage
                  title="Terms and Conditions"
                  description="Jovida terms and conditions."
                  markdown={termsAndConditionsMarkdown}
                />
              }
            />
            <Route
              path="/terms-of-use"
              element={
                <LegalDocumentPage
                  title="Terms and Conditions"
                  description="Jovida terms and conditions."
                  markdown={termsAndConditionsMarkdown}
                />
              }
            />
            <Route
              path="/subscription-guide"
              element={
                <LegalDocumentPage
                  title="Jovida Subscription Guide"
                  description="Jovida subscription plans, credits policy, and billing guide."
                  markdown={subscriptionGuideMarkdown}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
