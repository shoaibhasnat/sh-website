// Provides an array of sections for the Careers page
import Hero from "./hero/Hero";
import CategoriesSection from "./categories-section/CategoriesSection";
import PageSectionsWrapper from "../../ui/page-sections-wrapper/PageSectionsWrapper";
import createLazyPageSection from "../../ui/lazy-section/createLazyPageSection";

const sections = [
  { component: Hero, scroll: false },
  { component: CategoriesSection, scroll: true },
  {
    loader: () => import("./resume-section/ResumeSection"),
    name: "LazyResumeSection",
    scroll: false,
    reserveHeight: 640,
    rootMargin: "1800px",
  },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazyPageSection(section),
    scroll: section.scroll,
  };
});

const CareersMain = () => {
  return <PageSectionsWrapper sections={sections} parent="careers" />;
};

export default CareersMain;
