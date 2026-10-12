import { useLayoutEffect, useRef } from "react";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { Quote, UserRound } from "lucide-react";
import { initTestimonialsScroll } from "./TestimonialsSectionUtils";
import styles from "./testimonials-section.module.css";
import { HomeData } from "../../../../data/pages/home/HomePageData";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import CustomRating from "../../../ui/custom-rating/CustomRating";
import { Colors } from "../../../../utils/global/Colors";

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const stepsRef = useRef(null);
  const cardsRef = useRef([]);

  // ✅ Safe extraction
  const testimonialsSection = HomeData?.testimonialsSection;
  const intro = testimonialsSection?.intro;
  const items = Array.isArray(testimonialsSection?.items)
    ? testimonialsSection.items
    : [];

  // ✅ Nothing to render → exit safely
  if (!intro && items.length === 0) return null;

  useLayoutEffect(() => {
    if (
      containerRef.current &&
      stepsRef.current &&
      Array.isArray(items) &&
      items.length > 0
    ) {
      return initTestimonialsScroll(containerRef, stepsRef, cardsRef);
    }
  }, [items]);

  return (
    <div ref={containerRef} className={styles.containerMain}>
      <section ref={stepsRef} className={styles.steps}>
        {/* Intro */}
        {intro?.title || intro?.description ? (
          <div className={styles.stepCounter}>
            <SectionIntro
              title={intro?.title}
              description={intro?.description}
              titleTag="h1"
            />
          </div>
        ) : null}

        {/* Cards */}
        <div className={styles.cardsWrapper}>
          {items.map((card, index) => {
            if (!card) return null;

            return (
              <div
                key={index}
                className={`${styles.card} bgGlassWGlow`}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <div>
                  {/* Header */}
                  <div className={styles.cardHeader}>
                    {card?.url ? (
                      <LazyImage
                        src={card.url}
                        alt="Testimonial image"
                        className={styles.cardUserImage}
                      />
                    ) : (
                      <UserRound size={40} className={styles.cardUserIcon} />
                    )}

                    <span>
                      {card?.name ? (
                        <div className={styles.cardName}>{card.name}</div>
                      ) : null}

                      {card?.relation ? (
                        <div className={styles.relation}>{card.relation}</div>
                      ) : null}
                    </span>
                  </div>

                  {/* Content */}
                  {card?.text ? (
                    <p className={styles.cardContent}>
                      <Quote
                        color={Colors?.text}
                        size={18}
                        style={{ transform: "scaleX(-1)" }}
                      />
                      {card.text}
                      <Quote
                        color={Colors?.text}
                        size={18}
                        style={{ marginLeft: "5px" }}
                      />
                    </p>
                  ) : null}
                </div>

                {/* Footer */}
                {typeof card?.rating === "number" ? (
                  <div className={styles.cardFooter}>
                    <CustomRating value={card.rating} />
                  </div>
                ) : null}
              </div>
            );
          })}

          {/* Spacer cards (always render for layout) */}
          <div className={`${styles.card} ${styles.empty}`} />
          <div className={`${styles.card} ${styles.empty}`} />
          <div className={`${styles.card} ${styles.empty}`} />
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
