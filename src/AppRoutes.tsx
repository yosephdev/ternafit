import ScholarshipProgramPage from "./pages/ScholarshipProgramPage";
import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./contexts/LanguageContext";
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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ContactPage from "./pages/ContactPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import NotFound from "./pages/NotFound";

import StoriesPage from "./pages/StoriesPage";
import ImpactPage from "./pages/ImpactPage";

const AppRoutes = () => {
  const { t } = useLanguage();

  const routes = [
    {
      path: t("path.scholarshipProgram"),
      element: <ScholarshipProgramPage />,
    },
    {
      path: t("path.home"),
      element: <HomePage />,
    },
    {
      path: t("path.about"),
      element: <AboutPage />,
    },
    {
      path: t("path.work"),
      element: <WorkPage />,
    },
    {
      path: t("path.blog"),
      element: <BlogPage />,
    },
    {
      path: `${t("path.blogPost")}:id`,
      element: <BlogPostPage />,
    },
    {
      path: t("path.podcast"),
      element: <PodcastPage />,
    },
    {
      path: t("path.news"),
      element: <NewsPage />,
    },
    {
      path: t("path.donate"),
      element: <DonatePage />,
    },
    {
      path: t("path.donationSuccess"),
      element: <DonationSuccessPage />,
    },
    {
      path: t("path.donationCancel"),
      element: <DonationCancelPage />,
    },
    {
      path: t("path.privacyPolicy"),
      element: <PrivacyPolicyPage />,
    },
    {
      path: t("path.termsOfService"),
      element: <TermsOfServicePage />,
    },
    {
      path: t("path.contact"),
      element: <ContactPage />,
    },
    {
      path: t("path.getInvolved"),
      element: <GetInvolvedPage />,
    },
    {
      path: t("path.stories"),
      element: <StoriesPage />,
    },
    {
      path: t("path.impact"),
      element: <ImpactPage />,
    },
    {
      path: t("path.notFound"),
      element: <NotFound />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
