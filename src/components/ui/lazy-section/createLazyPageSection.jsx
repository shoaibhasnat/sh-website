import { lazy, Suspense, useEffect } from "react";
import LazyOnVisible from "../lazy-on-visible/LazyOnVisible";
import { refreshAfterFontsAndImages } from "../../../utils/gsap/scrollTriggerRefresh";

const scheduleImport = (loader, delay = 0) => {
  if (typeof window === "undefined" || typeof loader !== "function") return () => {};

  let timerId;
  let idleId;
  let cancelled = false;

  const load = () => {
    if (cancelled) return;
    try {
      loader();
    } catch {
      // Dynamic import preloading is best-effort.
    }
  };

  const run = () => {
    if (cancelled) return;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(load, { timeout: 3500 });
      return;
    }

    timerId = window.setTimeout(load, 180);
  };

  timerId = window.setTimeout(run, delay);

  return () => {
    cancelled = true;
    window.clearTimeout(timerId);
    if (idleId) window.cancelIdleCallback?.(idleId);
  };
};

const RefreshAfterMount = ({ rootRef }) => {
  useEffect(() => {
    refreshAfterFontsAndImages(rootRef?.current);
  }, [rootRef]);

  return null;
};

export const createLazyPageSection = ({
  loader,
  minHeight = 520,
  reserveHeight,
  rootMargin = "1400px",
  name = "LazyPageSection",
  preload = false,
  preloadDelay = 1600,
}) => {
  const ImportedComponent = lazy(loader);

  const LazyPageSection = (props) => {
    const sectionHeight = reserveHeight || minHeight;

    useEffect(() => {
      if (!preload) return undefined;
      return scheduleImport(loader, preloadDelay);
    }, []);

    return (
      <LazyOnVisible
        minHeight={sectionHeight}
        rootMargin={rootMargin}
        preserveSpace
      >
        {({ rootRef }) => (
          <Suspense
            fallback={
              <div
                aria-hidden="true"
                style={{ minHeight: sectionHeight, width: "100%" }}
              />
            }
          >
            <ImportedComponent {...props} />
            <RefreshAfterMount rootRef={rootRef} />
          </Suspense>
        )}
      </LazyOnVisible>
    );
  };

  LazyPageSection.displayName = name;

  return LazyPageSection;
};

export default createLazyPageSection;
