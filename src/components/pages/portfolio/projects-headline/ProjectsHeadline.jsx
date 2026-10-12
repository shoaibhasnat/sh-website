import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./projects-headline.module.css";
import IntroSection from "./intro-section/IntroSection";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { IndustryDetailsData } from "../../../../data/pages/industries/industry-details/IndustryDetailsData";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsHeadline() {
  const location = useLocation();

  const websiteContentRef = useRef(null);
  const headerFirstLettersRef = useRef(null);
  const headerLastLettersRef = useRef(null);
  const revealRef = useRef(null);

  // ---- Safe slug extraction
  const pathname = location?.pathname || "";
  const slug = pathname.split("/").filter(Boolean).pop() || "";

  // ---- Safe industry lookup
  const intros = Array.isArray(IndustryDetailsData?.intros)
    ? IndustryDetailsData.intros
    : [];

  const industry = intros.find((item) => item?.slug === slug) || null;

  // ---- Safe computed content
  const title = industry?.title
    ? `See what we’ve delivered to the ${industry.title} `
    : "See what we’ve delivered to our clients";

  const description = industry?.description || null;
  const chipLabel = industry?.chipLabel || null;

  useLayoutEffect(() => {
    const rootEl = websiteContentRef.current;
    const firstEl = headerFirstLettersRef.current;
    const lastEl = headerLastLettersRef.current;
    const revealEl = revealRef.current;

    // If anything critical is missing, skip animation
    if (!rootEl || !firstEl || !lastEl || !revealEl) return;

    const ctx = gsap.context(() => {
      gsap.set(revealEl, { scale: 0, autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      // PHASE 1 — Text flies out
      tl.to(
        firstEl,
        {
          x: () => -window.innerWidth * 3,
          scale: 10,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      );

      tl.to(
        lastEl,
        {
          x: () => window.innerWidth * 3,
          scale: 10,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      );

      // PHASE 2 — Reveal component comes in
      tl.to(
        revealEl,
        {
          scale: 1,
          autoAlpha: 1,
          ease: "power2.out",
          duration: 1,
        },
        0.2,
      );
    }, rootEl);

    return () => ctx.revert();
  }, [slug]);

  return (
    <div className={styles.websiteContent} ref={websiteContentRef}>
      <div className={styles.header}>
        <div style={{ width: "100%", display: "flex" }}>
          <div className={styles.letters} ref={headerFirstLettersRef}>
            <div>p</div>
            <div>o</div>
            <div>r</div>
            <div>t</div>
          </div>

          <div className={styles.letters} ref={headerLastLettersRef}>
            <div>f</div>
            <div>o</div>
            <div>l</div>
            <div>i</div>
            <div>o</div>
          </div>
        </div>
      </div>

      <div className={styles.reveal} ref={revealRef}>
        {industry ? (
          <SectionIntro
            title={title}
            description={description}
            chipLabel={chipLabel}
          />
        ) : (
          <IntroSection />
        )}
      </div>
    </div>
  );
}
