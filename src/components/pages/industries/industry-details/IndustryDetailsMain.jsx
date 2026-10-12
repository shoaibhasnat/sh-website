// Provides an array of sections for a specific Industry detail page
import { lazy, Suspense } from "react";
import Hero from "./hero/Hero";
import InfoSection from "./intro-section/IntroSection";
import IndustryChallenges from "./industry-challenges/IndustryChallenges";
import IndustriesServicesSection from "./industries-services/IndustriesServicesSection";
import { useLocation } from "react-router-dom";
import { IndustryDetailsData } from "../../../../data/pages/industries/industry-details/IndustryDetailsData";
import PageSectionsWrapper from "../../../ui/page-sections-wrapper/PageSectionsWrapper";
import ProjectsHeadline from "../../portfolio/projects-headline/ProjectsHeadline";
import LazyOnVisible from "../../../ui/lazy-on-visible/LazyOnVisible";

const createLazySection = ({ loader, minHeight = 500, rootMargin = "900px", name = "LazySection" }) => {
  const ImportedComponent = lazy(loader);

  const LazySection = () => {
    return (
      <LazyOnVisible minHeight={minHeight} rootMargin={rootMargin}>
        <Suspense fallback={null}>
          <ImportedComponent />
        </Suspense>
      </LazyOnVisible>
    );
  };

  LazySection.displayName = name;

  return LazySection;
};

const IndustryDetailsMain = () => {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();
  const industry = IndustryDetailsData.industries.find(
    (item) => item.path === `/${slug}`,
  );

  if (!industry) return null;

  const hasProjects = industry.projectIds && industry.projectIds.length > 0;

  const sections = [
    { component: Hero, scroll: false },
    { component: InfoSection, scroll: true },
    { component: IndustriesServicesSection, scroll: true },

    ...(hasProjects ? [{ loader: () => import("./projects-section/ProjectsSection"), name: "LazyProjectsSection", scroll: true, minHeight: 700 }] : []),

    { component: IndustryChallenges, scroll: true },
    { loader: () => import("../../home/testimonials-section/TestimonialsSection"), name: "LazyTestimonialsSection", scroll: true, minHeight: 620 },
    { loader: () => import("./faq-section/FaqSection"), name: "LazyFaqSection", scroll: true, minHeight: 520 },
  ].map((section) => {
    if (section.component) return section;

    return {
      component: createLazySection(section),
      scroll: section.scroll,
    };
  });

  return (
    <PageSectionsWrapper
      sections={sections}
      parent="industry"
      extraProps={{ industry }}
    />
  );
};

export default IndustryDetailsMain;
