// TechsSection: displays tech stacks (frameworks, languages, platforms) with GSAP pin scroll and tab switching
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechsAnimation from "./TechsSectionUtils";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import styles from "./techs-section.module.css";
import { Container } from "@mui/material";
import { ServicesPageData } from "../../../../data/pages/services/ServicesPageData";

gsap.registerPlugin(ScrollTrigger);

export default function TechsSection() {
  const [activeTab, setActiveTab] = useState("frameworks");
  const sectionRef = useRef(null);

  const intro = ServicesPageData?.techsSection?.intro;
  const data = ServicesPageData?.techsSection?.data;

  const frameworks = data?.frameworks;
  const languages = data?.languages;
  const platforms = data?.platforms;

  const hasAnyItems =
    (Array.isArray(frameworks) && frameworks.length > 0) ||
    (Array.isArray(languages) && languages.length > 0) ||
    (Array.isArray(platforms) && platforms.length > 0);

  // If nothing exists, render nothing safely
  if (!intro && !hasAnyItems) return null;

  useLayoutEffect(() => {
    // Only pin if section exists AND there is actual content
    if (!sectionRef.current || !hasAnyItems) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=150%",
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
    });

    return () => {
      st?.kill?.();
    };
  }, [hasAnyItems]);

  // Tabs that actually have data (avoid empty tabs)
  const availableTabs = [
    { key: "frameworks", label: "Frameworks", items: frameworks },
    { key: "languages", label: "Languages", items: languages },
    { key: "platforms", label: "Platforms", items: platforms },
  ].filter((t) => Array.isArray(t.items) && t.items.length > 0);

  // If current active tab has no data, fall back to first available tab
  const active =
    availableTabs.find((t) => t.key === activeTab)?.key ||
    availableTabs?.[0]?.key;

  return (
    <div ref={sectionRef} className={styles.container}>
      <Container maxWidth="xl">
        {/* Section Intro */}
        {intro ? (
          <SectionIntro
            title={intro?.title}
            description={intro?.description}
            titleTag="h1"
            style={{ margin: "10px 0px" }}
          />
        ) : null}
      </Container>

      {/* Tabs + content only if there are items */}
      {availableTabs.length > 0 ? (
        <div>
          {/* Tabs navigation */}
          <div className={styles.tablist}>
            {availableTabs.map((tab) => (
              <button
                key={tab.key}
                className={`${styles.tab} bgGlassWGlow ${
                  active === tab.key ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
                aria-label={tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className={styles.tabContent}>
            {active === "frameworks" ? (
              <TechsAnimation items={frameworks} />
            ) : null}

            {active === "languages" ? (
              <TechsAnimation items={languages} />
            ) : null}

            {active === "platforms" ? (
              <TechsAnimation items={platforms} />
            ) : null}
          </div>

          {/* Gradient overlay */}
          <div className={styles.gradientBox}></div>
        </div>
      ) : null}
    </div>
  );
}
