import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services-slider.module.css";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import { initExpertiseAnimation } from "./ServicesSliderUtils";
import { Colors } from "../../../../../utils/global/Colors";
import { Container } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const getResponsiveTitleTag = () => {
  if (typeof window === "undefined") return "h3";
  return window.innerWidth < 576 ? "h4" : "h3";
};

const refreshScrollTriggerSafely = () => {
  if (typeof window === "undefined") return;

  const refresh = () => {
    try {
      ScrollTrigger.sort();
      ScrollTrigger.refresh(true);
    } catch {}
  };

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(refresh);
  });

  window.setTimeout(refresh, 250);
};

/**
 * ServicesSlider Component
 * ------------------------
 * Renders a horizontal slider of service cards with scroll-triggered animation.
 * Accepts a "service" prop with header info and cards data.
 */
export default function ServicesSlider({ service }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const cleanupRef = useRef(null);

  const { header = {}, cardsData = [] } = service?.servicesSliderSection ?? {};

  const cardsWithSpacing = useMemo(() => {
    const cards = Array.isArray(cardsData) ? cardsData : [];

    return [
      ...cards.map((card, index) => ({ ...card, type: "card", key: `card-${index}` })),
      { type: "spacer", key: "spacer-1" },
      { type: "spacer", key: "spacer-2" },
    ];
  }, [cardsData]);

  // If nothing to show, don’t render.
  if ((!header?.title && !header?.description) || cardsData?.length === 0) {
    return null;
  }

  // --------------------------
  // Initialize GSAP horizontal scroll & card animations.
  // Delayed by two RAFs so the previous lazy ProjectsSection can finish layout
  // before this section calculates its pin/start positions.
  // --------------------------
  useLayoutEffect(() => {
    let rafOne = 0;
    let rafTwo = 0;

    cardRefs.current = cardRefs.current.slice(0, cardsWithSpacing.length);

    const init = () => {
      cleanupRef.current?.();

      cleanupRef.current = initExpertiseAnimation({
        container: containerRef.current,
        track: trackRef.current,
        cards: cardRefs.current,
      });

      refreshScrollTriggerSafely();
    };

    rafOne = window.requestAnimationFrame(() => {
      rafTwo = window.requestAnimationFrame(init);
    });

    const handleResize = () => refreshScrollTriggerSafely();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.cancelAnimationFrame(rafTwo);
      window.removeEventListener("resize", handleResize);
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, [cardsWithSpacing.length]);

  return (
    <Container maxWidth="xl">
      <section ref={containerRef} className={styles.wrapper}>
        <div className={styles.section}>
          {/* Section header with title and description */}
          <SectionIntro
            title={header?.title}
            description={header?.description}
            titleTag={getResponsiveTitleTag()}
            style={{ margin: "20px 0px" }}
          />

          {/* Track containing all cards */}
          <div ref={trackRef} className={styles.track}>
            {cardsWithSpacing.map((card, index) => {
              if (card.type === "spacer") {
                return (
                  <div
                    key={card.key}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className={`${styles.card} ${styles.spacerCard}`}
                    aria-hidden="true"
                  />
                );
              }

              const Icon = card.icon;

              return (
                <div
                  key={card.key}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`${styles.card} bgGlassWGlow`}
                >
                  {Icon && <Icon height={64} width={42} color={Colors.primary()} />}
                  <p className={styles.title}>{card.title}</p>
                  <p className={`description ${styles.description}`}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
