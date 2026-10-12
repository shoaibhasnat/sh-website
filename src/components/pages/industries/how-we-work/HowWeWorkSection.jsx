import { useLayoutEffect, useRef } from "react";
import { initJobCardsAnimation } from "./HowWeWorkUtils";
import styles from "./how-we-work-section.module.css";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import HowWeWorkCard from "./how-we-work-card/HowWeWorkCard";
import { IndustriesData } from "../../../../data/pages/industries/IndustriesData";
import { Container } from "@mui/material";
import LazyImage from "../../../ui/lazy-image/LazyImage";

const HowWeWorkSection = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const section = IndustriesData?.howWeWorkSection ?? {};
  const intro = section?.intro ?? {};
  const processSteps = Array.isArray(section?.processSteps) ? section.processSteps : [];

  useLayoutEffect(() => {
    // only init animation when there are cards
    if (!processSteps.length) return;

    // reset refs to match current list
    cardRefs.current = [];

    const cleanup = initJobCardsAnimation(containerRef, cardRefs);
    return cleanup;
  }, [processSteps.length]);

  // If nothing meaningful exists, don’t render
  if (!intro?.title && !intro?.description && !processSteps.length) {
    return null;
  }

  return (
    <Container maxWidth="xl">
      <div ref={containerRef} className={styles.container}>
        {(intro?.title || intro?.description) && (
          <SectionIntro
            title={intro?.title ?? ""}
            description={intro?.description ?? ""}
            titleTag="h1"
          />
        )}

        {!!processSteps.length && (
          <section className={styles.section}>
            {processSteps.map((info, index) => (
              <div
                key={info?.id ?? info?.title ?? index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`${styles.card} bgGlassWGlow`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.imgWrapper}>
                    {!!info?.img && (
                      <LazyImage src={info.img} alt={info?.title ?? `step-${index}`} />
                    )}
                  </div>
                  <div className={styles.infoWrapper}>
                    <HowWeWorkCard info={info} />
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </Container>
  );
};

export default HowWeWorkSection;
