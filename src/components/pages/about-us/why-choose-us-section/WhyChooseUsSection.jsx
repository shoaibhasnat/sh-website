// WhyChooseUsSection: displays the "Why Choose Us" section with animated cards
import { useLayoutEffect, useRef } from "react";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import GradientText from "../../../ui/gradient-text/GradientText";
import { Factory, Settings, Star, Shield } from "lucide-react";
import { initWhyChooseUsAnimation } from "./WhyChooseUsUtils";
import styles from "./why-choose-us-section.module.css";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";

const iconsMap = {
  faFactory: Factory,
  faGears: Settings,
  faStar: Star,
  faShieldHalved: Shield,
};

export default function WhyChooseUsSection() {
  const containerRef = useRef(null);
  const mainContentRef = useRef(null);
  const cardRefs = useRef([]);

  const intro = AboutUsData?.whyChooseUsSection?.intro;
  const reasons = AboutUsData?.whyChooseUsSection?.reasons;

  if (!intro && (!Array.isArray(reasons) || reasons.length === 0)) return null;

  useLayoutEffect(() => {
    if (!Array.isArray(reasons) || reasons.length === 0) return;

    const cleanup = initWhyChooseUsAnimation(
      cardRefs,
      containerRef,
      mainContentRef,
    );

    return cleanup;
  }, [reasons?.length]);

  return (
    <div ref={containerRef} className={styles.container}>
      <section className={styles.section}>
        {intro ? (
          <div ref={mainContentRef}>
            <SectionIntro
              chipLabel={intro?.chipLabel}
              title={intro?.title}
              titleTag="h2"
              description={intro?.description}
              maxWidth="650px"
            />
          </div>
        ) : null}

        {Array.isArray(reasons) && reasons.length > 0 ? (
          <div className={styles.cards}>
            {reasons.map((reason, index) => {
              if (!reason) return null;

              const IconComponent = iconsMap?.[reason?.icon];

              /*
                Last card on top:
                index 0 => z-index 1
                index 1 => z-index 2
                index 2 => z-index 3
                index 3 => z-index 4
              */
              return (
              <div
  key={reason?.id ?? `${index}`}
  ref={(el) => {
    cardRefs.current[index] = el;
  }}
  className={`${styles.card} bgGlassWGlow`}
>
                  <div className={styles.cardTitle}>
                    <span className={styles.cardIcon}>
                      {IconComponent ? <IconComponent size={48} /> : null}
                    </span>

                    {reason?.title ? (
                      <h3>
                        <GradientText>{reason.title}</GradientText>
                      </h3>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </section>
    </div>
  );
}