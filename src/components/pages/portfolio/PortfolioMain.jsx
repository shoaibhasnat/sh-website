// Provides an array of sections for the Case Study page
import { lazy, Suspense } from "react";
import Hero from "./hero/Hero";
import IntroSection from "./intro-section/IntroSection";
import ProjectsHeadline from "./projects-headline/ProjectsHeadline";
import PageSectionsWrapper from "../../ui/page-sections-wrapper/PageSectionsWrapper";
import LazyOnVisible from "../../ui/lazy-on-visible/LazyOnVisible";

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

const sections = [
  { component: Hero, scroll: false },
  { component: IntroSection, scroll: true },
  { component: ProjectsHeadline, scroll: true },
  { loader: () => import("./projects-section/ProjectsSection"), name: "LazyProjectsSection", scroll: true, minHeight: 700 },
  { loader: () => import("../contact/contact-form/ContactForm"), name: "LazyContactForm", scroll: true, minHeight: 760 },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazySection(section),
    scroll: section.scroll,
  };
});

const PortfolioMain = ({ private: isPrivate = false }) => {
  return (
    <PageSectionsWrapper
      sections={sections}
      parent={isPrivate ? "private-portfolio" : "case-study"}
      extraProps={{ private: isPrivate }}
    />
  );
};

export default PortfolioMain;
