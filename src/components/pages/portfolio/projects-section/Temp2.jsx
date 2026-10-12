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
 * Temp2 Component
 * ----------------
 * Renders two portfolio projects side by side with scroll-triggered animation.
 * Animates differently on small and large screens.
 *
 * Props:
 *  - id1, id2: project IDs
 *  - direction: "ltr" (default) or "rtl"
 *  - attributes: optional inline styles
 */
export const Temp2 = ({ attributes, id1, id2, direction = "ltr" }) => {
  // Data absence checks
  if (!PortfolioData?.projectsSection || !Array.isArray(PortfolioData.projectsSection)) {
    return null;
  }

  const project1 = PortfolioData.projectsSection.find((item) => item.id == id1);
  const project2 = PortfolioData.projectsSection.find((item) => item.id == id2);

  // Check if at least project1 exists with required fields
  if (!project1 || !project1.projectName || !project1.banner || !project1.display) {
    return null;
  }

  // Project2 is optional for Temp2, but if provided, validate it
  if (project2 && (!project2.projectName || !project2.banner || !project2.display)) {
    return null;
  }

  const box1WrapperRef = useRef(null);
  const box2WrapperRef = useRef(null);

  // --------------------------
  // Scroll-triggered animations
  // --------------------------
  useLayoutEffect(() => {
    const isSmallScreen = window.innerWidth < 1050;

    if (isSmallScreen) {
      // Animate each box individually
      const triggers = [];

      if (box1WrapperRef.current) {
        triggers.push(
          gsap.fromTo(
            box1WrapperRef.current,
            { x: direction === "ltr" ? 60 : -60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: box1WrapperRef.current,
                start: "top 120%",
                end: "top 0%",
                scrub: true,
              },
            }
          )
        );
      }

      if (id2 && box2WrapperRef.current) {
        triggers.push(
          gsap.fromTo(
            box2WrapperRef.current,
            { x: direction === "ltr" ? -60 : 60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: box2WrapperRef.current,
                start: "top 120%",
                end: "top 0%",
                scrub: true,
              },
            }
          )
        );
      }

      return () => triggers.forEach((t) => t.scrollTrigger.kill());
    } else {
      // Animate available boxes together for large screens
      const elements = [box1WrapperRef.current, box2WrapperRef.current].filter(Boolean);
      const tl = gsap.fromTo(
        elements,
        { x: direction === "ltr" ? 60 : -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: box1WrapperRef.current,
            start: "top 120%",
            end: "top 0%",
            scrub: true,
          },
        }
      );
      return () => tl.scrollTrigger.kill();
    }
  }, [direction, id2]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.t2Inner} ${styles.temp2}`}>
        {/* Project 1 */}
        <div ref={box1WrapperRef} className={styles.t2b1BoxWrapper}>
          <div
            className={`${styles.box} ${styles.t2b1} ${styles[`box${id1}`]}`}
            style={{ ...attributes }}
          >
            <AppLink href={`/case-study/${id1}`}>
              <LazyImage src={project1?.banner?.bannerImage} alt="Banner Image" />
            </AppLink>
          </div>
          <GradientScrollAnimation>
            <h3 className={styles.t2b1name}>{project1?.projectName.toUpperCase()}</h3>
            <p className={`${styles.t2b1description} description`}>
              {project1?.display?.description}
            </p>
          </GradientScrollAnimation>
        </div>

        {/* Project 2 (optional) */}
        {id2 && (
          <div ref={box2WrapperRef} className={styles.t2b2BoxWrapper}>
            <div
              className={`${styles.box} ${styles.t2b2} ${styles[`box${id2}`]}`}
              style={{ ...attributes }}
            >
              <AppLink href={`/case-study/${id2}`}>
                <LazyImage src={project2?.banner?.bannerImage} alt="Banner Image" />
              </AppLink>
            </div>
            <GradientScrollAnimation>
              <h6 className={styles.t2b2name}>{project2?.projectName.toUpperCase()}</h6>
              <p className={`${styles.t2b2description} description`}>
                {project2?.display?.description}
              </p>
            </GradientScrollAnimation>
          </div>
        )}
      </div>
    </div>
  );
};
