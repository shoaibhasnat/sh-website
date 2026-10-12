import { lazy, Suspense } from "react";
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
  // { component: Hero, scroll: false },
  { loader: () => import("./media-list/MediaList"), name: "LazyMediaList", scroll: true, minHeight: 520 },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazySection(section),
    scroll: section.scroll,
  };
});

const MediaMain = () => {
  return <PageSectionsWrapper sections={sections} parent="media" />;
};

export default MediaMain;
