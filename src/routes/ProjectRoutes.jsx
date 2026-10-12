import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedLayout from "../utils/layout/ProtectedLayout";

// Keep Home eager because it is the main/heavy page.
import Home from "../pages/home/Home";

const ServiceDetails = lazy(() => import("../pages/services/service-details/ServiceDetails"));
const IndustryDetails = lazy(() => import("../pages/industries/industry-details/IndustryDetails"));
const MediaDetails = lazy(() => import("../pages/media/media-details/MediaDetails"));
const ProjectDetails = lazy(() => import("../pages/case-study/project-details/ProjectDetails"));
const Services = lazy(() => import("../pages/services/Services"));

const Industries = lazy(() => import("../pages/industries/Industries"));

const CaseStudy = lazy(() => import("../pages/case-study/CaseStudy"));

const PrivatePortfolio = lazy(
  () => import("../pages/private-portfolio/PrivatePortfolio"),
);
const Media = lazy(() => import("../pages/media/Media"));

const AboutUs = lazy(() => import("../pages/about-us/AboutUs"));
const Careers = lazy(() => import("../pages/careers/Careers"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const PrivacyPolicy = lazy(
  () => import("../pages/privacy-policy/PrivacyPolicy"),
);
const TermsAndConditions = lazy(
  () => import("../pages/terms-and-conditions/TermsAndConditions"),
);
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:id" element={<IndustryDetails />} />

        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/:id" element={<ProjectDetails />} />

        <Route path="/private-portfolio" element={<PrivatePortfolio />} />

        <Route path="/media" element={<Media />} />
        <Route path="/media/:id" element={<MediaDetails />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoutes;
