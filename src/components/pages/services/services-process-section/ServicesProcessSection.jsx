import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services-process-section.module.css";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import GradientRevealAnimation from "../../../ui/gradient-reveal-animation/GradientRevealAnimation";
import { Container, Grid } from "@mui/material";
import GradientText from "../../../ui/gradient-text/GradientText";
import { ServicesPageData } from "../../../../data/pages/services/ServicesPageData";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import { setupServicesScroll } from "./ServicesProcessSectionUtils";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesProcessSection() {
  const stickyRef = useRef(null);
  const progressRef = useRef(null);
  const currentCountRef = useRef(null);
  const servicesRef = useRef([]);
  const indicatorRef = useRef(null);

  const section = ServicesPageData?.servicesProcessSection ?? {};
  const intro = section?.intro ?? {};
  const services = Array.isArray(section?.services) ? section.services : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure we never index out of bounds
  const safeIndex = useMemo(() => {
    if (!services.length) return 0;
    return Math.min(Math.max(currentIndex, 0), services.length - 1);
  }, [currentIndex, services.length]);

  const currentService = services[safeIndex] ?? {};

  useLayoutEffect(() => {
    if (!services.length) return;

    return setupServicesScroll({
      styles,
      stickyRef,
      servicesRef,
      progressRef,
      indicatorRef,
      currentCountRef,
      services,
      setCurrentIndex,
    });
  }, [services.length]);

  // If nothing meaningful exists, don't render
  if (
    !intro?.titlePrefix &&
    !intro?.titleHighlight &&
    !intro?.titleSuffix &&
    !intro?.description &&
    !services.length
  ) {
    return null;
  }

  const titleNode = (
    <>
      {intro?.titlePrefix ?? ""}
      {!!intro?.titleHighlight && (
        <GradientText>{intro.titleHighlight}</GradientText>
      )}
      {intro?.titleSuffix ?? ""}
    </>
  );

  // SSR-safe: never touch window during render unless it exists
  const isMobile = typeof window !== "undefined" && window.innerWidth < 576;

  return (
    <Container maxWidth="xl">
      <section
        ref={stickyRef}
        className={`${styles.stickySection} bgGlassWGlow`}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 5 }}
          justifyContent="space-around"
          alignItems="center"
          className={styles.main}
        >
          {/* Intro */}
          <Grid item xs={12} className={styles.sectionIntro}>
            <div className={styles.header}>
              {isMobile ? <h4>{titleNode}</h4> : <h4>{titleNode}</h4>}
            </div>

            {!!intro?.description && (
              <GradientScrollAnimation>
                <p className={`${styles.animatedText} description`}>
                  {intro.description}
                </p>
              </GradientScrollAnimation>
            )}
          </Grid>

          <Grid
            container
            xs={12}
            direction={{ xs: "column-reverse", md: "row" }}
            alignItems="center"
          >
            {/* List */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <div className={styles.servicesWrapper}>
                {services.map((service, index) => (
                  <div
                    key={service?.id ?? service?.name ?? index}
                    ref={(el) => (servicesRef.current[index] = el)}
                    className={`${styles.service} ${
                      index === safeIndex ? styles.active : ""
                    }`}
                  >
                    <p>{service?.name ?? ""}</p>
                  </div>
                ))}

                {!!services.length && (
                  <div className={styles.progressBar}>
                    <div ref={progressRef} className={styles.progress} />
                  </div>
                )}
              </div>
            </Grid>

            {/* Copy */}
            <Grid item size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
              {!!services.length && (
                <div className={styles.serviceCopy}>
                  {!!currentService?.image && (
                    <LazyImage
                      src={currentService.image}
                      className={styles.serviceImg}
                      alt={currentService?.name ?? "Service"}
                    />
                  )}

                  {!!currentService?.copy && (
                    <GradientRevealAnimation key={safeIndex}>
                      <p className="description">{currentService.copy}</p>
                    </GradientRevealAnimation>
                  )}
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Index */}
        {!!services.length && (
          <div className={`${styles.index} bgGlassWGlow`}>
            <span ref={currentCountRef}>{safeIndex + 1}</span>
            <span className={styles.separator} />
            <span className={styles.totalCount}>{services.length}</span>
          </div>
        )}
      </section>
    </Container>
  );
}
