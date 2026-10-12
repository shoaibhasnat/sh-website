import { useEffect, useRef, useState } from "react";
import { refreshAfterFontsAndImages } from "../../../utils/gsap/scrollTriggerRefresh";

const LazyOnVisible = ({
  children,
  rootMargin = "1200px",
  minHeight = 420,
  className = "",
  preserveSpace = false,
}) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldRender(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin,
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  useEffect(() => {
    if (!shouldRender) return;
    refreshAfterFontsAndImages(ref.current);
  }, [shouldRender]);

  const style = preserveSpace || !shouldRender ? { minHeight } : undefined;

  return (
    <div
      ref={ref}
      className={className}
      data-lazy-section={shouldRender ? "rendered" : "reserved"}
      style={style}
    >
      {shouldRender
        ? typeof children === "function"
          ? children({ rootRef: ref })
          : children
        : null}
    </div>
  );
};

export default LazyOnVisible;
