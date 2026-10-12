import { useLayoutEffect, useRef } from "react";
import styles from "./services.module.css";
import { initServicesAnimations } from "./ServicesSectionUtils";
import ServicesSectionCard from "./services-section-card/ServicesSectionCard";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { ServiceDetailsData } from "../../../../data/pages/services/service-details/ServiceDetailsData";

const ServicesSection = ({ parent }) => {
  // ---- Safe access ----
  const servicesSection = ServiceDetailsData?.servicesSection;
  const intro = servicesSection?.intro;
  const services = Array.isArray(servicesSection?.services)
    ? servicesSection.services
    : [];

  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const mainContentRef = useRef(null);
  const rowRefs = useRef([]);
  const cardRefs = useRef([]);

  // Decide how many cards to show (safe)
  const servicesToShow =
    parent === "home" ? services.slice(0, 6) : services;

  // Split services into rows of 2 (safe)
  const serviceRows = [];
  for (let i = 0; i < servicesToShow.length; i += 2) {
    serviceRows.push(servicesToShow.slice(i, i + 2));
  }

  useLayoutEffect(() => {
    // If there’s nothing to animate, skip
    if (!servicesToShow?.length) return;

    const ctx = initServicesAnimations({
      containerRef,
      mainRef,
      mainContentRef,
      rowRefs,
      cardRefs,
    });

    return () => ctx?.revert?.();
  }, [servicesToShow?.length]);

  // Optional: if no data, render nothing (or a fallback)
  if (!servicesSection) return null;

  return (
    <div
      ref={containerRef}
      className={styles.mainWrapper}
      id={parent === "service" ? "service-page-srv-section" : undefined}
    >
      <section ref={mainRef} className={styles.main}>
        {/* Intro at the top */}
        {intro ? (
          <div ref={mainContentRef} className={styles.mainContent}>
            <SectionIntro
              {...intro}
              titleTag="h4"
              animated={typeof window !== "undefined" && window.innerWidth <= 768}
            />
          </div>
        ) : null}

        {/* Render service rows */}
        <div>
          {serviceRows.map((row, rowIndex) => {
            if (!cardRefs.current[rowIndex]) {
              cardRefs.current[rowIndex] = { left: null, right: null };
            }

            return (
              <div
                key={rowIndex}
                ref={(el) => (rowRefs.current[rowIndex] = el)}
                className={styles.row}
              >
                {row?.map?.((service, index) => {
                  if (!service) return null;

                  const isLeft = index === 0;
                  const serviceIndex = rowIndex * 2 + index + 1;

                  return (
                    <ServicesSectionCard
                      key={service?.id ?? `${rowIndex}-${index}`}
                      service={service}
                      index={serviceIndex}
                      isLeft={isLeft}
                      cardRef={(el) => {
                        const slot = isLeft ? "left" : "right";
                        if (cardRefs.current[rowIndex]) {
                          cardRefs.current[rowIndex][slot] = el;
                        }
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
