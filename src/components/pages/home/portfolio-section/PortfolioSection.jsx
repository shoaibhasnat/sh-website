// PortfolioSection: Horizontal scrolling portfolio section for Home page
// Uses GSAP + ScrollTrigger for scroll-based animations

import { useLayoutEffect, useRef } from "react";
import {
  initPortfolioScroll,
  setPortfolioSizes,
} from "./PortfolioSectionUtils";
import styles from "./portfolio-section.module.css";
import { HomeData } from "../../../../data/pages/home/HomePageData";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import AppLink from "../../../ui/app-link/AppLink";

const PortfolioSection = () => {
  const stickyRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const slideRefs = useRef([]);
  const introSlideRef = useRef(null);

  const slides = HomeData?.portfolioSection?.slides || [];
  const slidesCount = slides?.length || 0;

  useLayoutEffect(() => {
    // if there is no data or no DOM refs yet, skip
    if (!slidesCount) return;
    if (!stickyRef.current || !sliderRef.current || !slidesContainerRef.current)
      return;

    const resizeHandler = () => {
      // guard again in case refs become null
      if (!sliderRef.current || !slidesContainerRef.current) return;

      setPortfolioSizes(
        sliderRef,
        slidesContainerRef,
        slideRefs,
        introSlideRef,
        slidesCount,
      );
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    const cleanup = initPortfolioScroll(
      stickyRef,
      sliderRef,
      slidesContainerRef,
      slideRefs,
      introSlideRef,
    );

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cleanup?.();
    };
  }, [slidesCount]);

  // Optional: If no slides, render nothing (or you can render a fallback UI)
  if (!slidesCount) return null;

  return (
    <section ref={stickyRef} className={styles.horizontalSlider}>
      <div ref={sliderRef} className={styles.slider}>
        <div ref={slidesContainerRef} className={styles.slides}>
          {slides?.map((slide, i) => {
            const id = slide?.id;
            const title = slide?.title || "";
            const image = slide?.image || "";

            // if critical values missing, skip that slide
            if (!id) return null;

            return (
              <AppLink
                key={id}
                href={`/case-study/${id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  ref={(el) => (slideRefs.current[i] = el)}
                  className={styles.slide}
                >
                  <div className={styles.img}>
                    <LazyImage src={image} alt={title || "Portfolio"} />
                  </div>

                  <div className={styles.title}>
                    <h1>
                      {(title || "")
                        .split("\n")
                        .filter(Boolean)
                        .map((line, idx, arr) => (
                          <span key={idx}>
                            {line}
                            {idx < arr.length - 1 && <br />}
                          </span>
                        ))}
                    </h1>
                  </div>
                </div>
              </AppLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
