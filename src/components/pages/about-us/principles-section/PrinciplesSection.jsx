import { useLayoutEffect, useRef } from "react";
import styles from "./principles-section.module.css";
import { initPrinciplesAnimation } from "./PrinciplesSectionUtils";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";
import { Container } from "@mui/material";

/**
 * PrinciplesSection Component
 * ----------------------------
 * Renders the Principles section on the About Us page.
 */
export default function PrinciplesSection() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const copyRefs = useRef([]);

  if (!AboutUsData?.principlesSection || !AboutUsData.principlesSection.title) {
    return null;
  }

  const { title, description, vision, mission, values } =
    AboutUsData.principlesSection;

  useLayoutEffect(() => {
    const cleanup = initPrinciplesAnimation({
      container: containerRef.current,
      hero: heroRef.current,
      copyBlocks: copyRefs.current,
    });

    return cleanup;
  }, []);

  const principlesData = [
    { title: "Vision", text: vision },
    { title: "Mission", text: mission },
    { title: "Values", text: values },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 576;

  return (
    <Container maxWidth="xl">
      <div ref={containerRef} className={styles.scrollContainer}>
        <section ref={heroRef} className={styles.hero}>
          <SectionIntro
            title={title}
            description={description}
            titleTag="h2"
            style={{ margin: isMobile ? "20px 0" : "50px 0" }}
          />

          <div className={styles.aboutCopy}>
            {principlesData.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => (copyRefs.current[index] = el)}
                className={`${styles.copyBlock} bgGlassWGlow`}
              >
                {isMobile ? <h4>{item.title}</h4> : <h3>{item.title}</h3>}
                <p className="description">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
