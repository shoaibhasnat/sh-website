// Provides an array of sections for an individual project page
import { lazy, Suspense } from "react";
import Hero from "./hero/Hero";
import IntroSection from "./intro-section/IntroSection";
import MainFeatures from "./main-features/MainFeatures";
import PageSectionsWrapper from "../../../ui/page-sections-wrapper/PageSectionsWrapper";
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
import { PortfolioData } from "../../../../data/pages/portfolio/PortfolioData";
import { useLocation } from "react-router-dom";
import ChallengesFaced from "./challenges-faced/ChallengesFaced";
import ProposedSolution from "./proposed-solution/ProposedSolution";
import FaqSection from "./faq-section/FaqSection";

const sections = [
  { component: Hero, scroll: false },
  { component: IntroSection, scroll: true },
  { component: MainFeatures, scroll: true },
  { component: ChallengesFaced, scroll: true },
  { component: ProposedSolution, scroll: true },
  { component: FaqSection, scroll: true },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazySection(section),
    scroll: section.scroll,
  };
});

const ProjectDetailsMain = () => {
  // Data absence checks
  if (!PortfolioData?.projectsSection || !Array.isArray(PortfolioData.projectsSection)) {
    return null;
  }

  const location = useLocation();
  const slug = location.pathname.split("/").pop();
  const project = PortfolioData.projectsSection.find(
    (item) => item.id == +slug,
  );

  if (!project) return null;

  return (
    <PageSectionsWrapper
      sections={sections}
      parent="project"
      extraProps={{ project }}
    />
  );
};

export default ProjectDetailsMain;
