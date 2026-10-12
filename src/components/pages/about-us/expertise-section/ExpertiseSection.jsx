import { useLayoutEffect, useRef } from "react";
import styles from "./expertise-section.module.css";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { initExpertiseAnimation } from "./ExpertiseSectionUtils";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";
import { Colors } from "../../../../utils/global/Colors";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";

export default function ExpertiseSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const windowWidth = useWindowWidth();
  // Data absence checks
  if (
    !AboutUsData?.expertiseSection ||
    !Array.isArray(AboutUsData.expertiseSection.cardsData)
  ) {
    return null;
  }

  const { title, description, cardsData } = AboutUsData.expertiseSection;

  useLayoutEffect(() => {
    const cleanup = initExpertiseAnimation({
      container: containerRef.current,
      track: trackRef.current,
      cards: cardRefs.current,
    });
    return cleanup;
  }, [windowWidth, cardsData.length]);

  /** -------------------------
   * Filler cards logic
   * ------------------------- */
  const fillers = [];

  if (windowWidth > 576 && cardsData.length > 2) {
    fillers.push(1, 3); // one filler card for desktop
  } else if (windowWidth <= 576 && cardsData.length > 1) {
    fillers.push(1, 2); // two filler cards for mobile
  }

  return (
    <section ref={containerRef} className={styles.wrapper}>
      <div className={styles.section}>
        <SectionIntro
          title={title}
          description={description}
          style={{ margin: "20px 0px" }}
          titleTag="h2"
        />

        <div ref={trackRef} className={styles.track}>
          {cardsData?.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`${styles.card} bgGlassWGlow`}
              >
                <Icon height={64} width={42} color={Colors.primary()} />
                <p className={styles.title}>{card.title}</p>
                <p className={`description ${styles.description}`}>
                  {card.description}
                </p>
              </div>
            );
          })}

          {/* Filler cards */}
          {fillers.map((_, i) => (
            <div
              key={`filler-${i}`}
              ref={(el) => (cardRefs.current[cardsData.length + i] = el)}
              className={styles.card}
              style={{ background: "transparent", border: "none" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
