// Provides an array of sections for the Industries page
import { lazy, Suspense } from "react";
import Hero from "./hero/Hero";
import IndustriesSection from "./industries-section/IndustriesSection";
import HowWeWorkSection from "./how-we-work/HowWeWorkSection";
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
  { component: IndustriesSection, scroll: true },
  { component: HowWeWorkSection, scroll: true },
  { loader: () => import("../contact/contact-form/ContactForm"), name: "LazyContactForm", scroll: true, minHeight: 760 },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazySection(section),
    scroll: section.scroll,
  };
});

const IndustriesMain = () => {
  return <PageSectionsWrapper sections={sections} parent="industry" />;
};

export default IndustriesMain;
