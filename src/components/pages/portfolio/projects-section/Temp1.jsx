import React, { useRef, useLayoutEffect } from "react";
import styles from "./template-styles.module.css";
import { PortfolioData } from "../../../../data/pages/portfolio/PortfolioData";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import AppLink from "../../../ui/app-link/AppLink";

gsap.registerPlugin(ScrollTrigger);

/**
 * Temp1 Component
 * ----------------
 * Renders a single portfolio project with scroll-triggered animation.
 *
 * Props:
 *  - id: project ID
 *  - direction: animation direction, "ltr" (default) or "rtl"
 *  - attributes: optional inline styles for box
 */
export const Temp1 = ({ attributes, id, direction = "ltr" }) => {
  // Data absence checks
  if (!PortfolioData?.projectsSection || !Array.isArray(PortfolioData.projectsSection)) {
    return null;
  }

  const project = PortfolioData.projectsSection.find(
    (item) => item.id == id,
  );

  // Check if project exists with required fields
  if (!project || !project.projectName || !project.banner || !project.display) {
    return null;
  }

  const { projectName, banner, display } = project;

  const boxWrapperRef = useRef(null);

  // --------------------------
  // Scroll-triggered animation
  // --------------------------
  useLayoutEffect(() => {
    gsap.fromTo(
      boxWrapperRef.current,
      { x: direction === "ltr" ? 60 : -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxWrapperRef.current,
          start: "top 120%",
          end: "top 0%",
          scrub: true,
        },
      },
    );
  }, [direction]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.t1Inner} ${styles.temp1}`}>
        <div ref={boxWrapperRef} className={styles.t1b1BoxWrapper}>
          {/* Project banner */}
          <div
            className={`${styles.box} ${styles.t1b1} ${styles[`box${id}`]}`}
            style={{ ...attributes }}
          >
            <AppLink href={`/case-study/${id}`}>
              <LazyImage src={banner?.bannerImage} alt="Banner Image" />
            </AppLink>
          </div>

          {/* Project title */}
          <GradientScrollAnimation>
            <h4 className={styles.t1b1name}>{projectName.toUpperCase()}</h4>
          </GradientScrollAnimation>

          {/* Project description */}
          <GradientScrollAnimation>
            <p className={`${styles.t1b1description} description`}>
              {display?.description}
            </p>
          </GradientScrollAnimation>
        </div>
      </div>
    </div>
  );
};
