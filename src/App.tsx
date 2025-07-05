
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PodcastPage from "./pages/PodcastPage";
import NewsPage from "./pages/NewsPage";
import DonatePage from "./pages/DonatePage";
import DonationSuccessPage from "./pages/DonationSuccessPage";
import DonationCancelPage from "./pages/DonationCancelPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"; // Added import
import TermsOfServicePage from "./pages/TermsOfServicePage"; // Added import
import ContactPage from "./pages/ContactPage"; // Added import
import GetInvolvedPage from "./pages/GetInvolvedPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPostPage />,
  },
  {
    path: "/podcast",
    element: <PodcastPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/donate",
    element: <DonatePage />,
  },
  {
    path: "/donation-success",
    element: <DonationSuccessPage />,
  },
  {
    path: "/donation-cancel",
    element: <DonationCancelPage />,
  },
  {
    path: "/privacy-policy", // Added route
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/terms-of-service", // Added route
    element: <TermsOfServicePage />,
  },
  {
    path: "/contact", // Added route
    element: <ContactPage />,
  },
  {
    path: "/get-involved",
    element: <GetInvolvedPage />,
  },
  {
    path: "*",    element: <NotFound />,
  },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow overflow-auto">
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
