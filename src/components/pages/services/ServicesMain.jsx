// Entry point for the Service page sections.
// Uses reserved lazy sections for lower pinned/heavy blocks.

import IntroSection from "./intro-section/IntroSection";
import Hero from "./hero/Hero";
import PageSectionsWrapper from "../../ui/page-sections-wrapper/PageSectionsWrapper";
import ServicesSection from "./services-section/ServicesSection";
import createLazyPageSection from "../../ui/lazy-section/createLazyPageSection";

const sections = [
  { component: Hero, scroll: false },
  { component: IntroSection, scroll: true },
  { component: ServicesSection, scroll: true },
  {
    loader: () => import("./services-process-section/ServicesProcessSection"),
    name: "LazyServicesProcessSection",
    scroll: true,
    reserveHeight: "900vh",
    rootMargin: "4200px",
  },
  {
    loader: () => import("./techs-section/TechsSection"),
    name: "LazyTechsSection",
    scroll: true,
    reserveHeight: "250vh",
    rootMargin: "3200px",
  },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazyPageSection(section),
    scroll: section.scroll,
  };
});

const ServicesMain = () => {
  return <PageSectionsWrapper sections={sections} parent="service" />;
};

export default ServicesMain;
