import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./industry-challenges.module.css";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import { initExpertiseAnimation } from "./IndustryChallengesUtils";
import { Colors } from "../../../../../utils/global/Colors";
import { Container } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryChallenges({ industry }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const { header, challenges } = industry.industryChallengesSection;

  useLayoutEffect(() => {
    const cleanup = initExpertiseAnimation({
      container: containerRef.current,
      track: trackRef.current,
      cards: cardRefs.current,
    });
    return cleanup;
  }, []);

  /** -------------------------
   * Filler cards logic
   * ------------------------- */
  const fillers = [];
  const width = window.innerWidth;

  if (width > 576 && challenges.length > 2) {
    fillers.push(1, 3); // one filler card for desktop
  } else if (width <= 576 && challenges.length > 1) {
    fillers.push(1, 2); // two filler cards for mobile
  }

  return (
    <Container maxWidth="xl">
      
      <section ref={containerRef} className={styles.wrapper}>
        <div className={styles.section}>
          <SectionIntro
            title={header?.heading}
            description={header?.description}
            style={{ margin: "20px 0px" }}
          />

          <div ref={trackRef} className={styles.track}>
            {challenges.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`${styles.card} bgGlassWGlow`}
                >
                  <Icon height={42} width={42} color={Colors.primary()} />
                  <p className={styles.title}>{card.frontText}</p>
                  <p className={`description ${styles.description}`}>
                    {card.backText}
                  </p>
                </div>
              );
            })}

            {/* Filler cards */}
            {fillers.map((_, i) => (
              <div
                key={`filler-${i}`}
                ref={(el) => (cardRefs.current[challenges.length + i] = el)}
                className={styles.card}
                style={{ background: "transparent", border: "none" }}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
