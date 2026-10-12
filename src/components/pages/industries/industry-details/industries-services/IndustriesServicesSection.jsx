import { useLayoutEffect, useRef } from "react";
import { initJobCardsAnimation } from "./IndustriesServicesSectionUtils";

import styles from "./industries-services-section.module.css";
import { Container, Grid } from "@mui/material";
import IndustriesServicesSectionCard from "./industries-services-card/IndustriesServicesSectionCard";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";

const IndustriesServicesSection = ({ industry }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const section = industry?.industryServicesSection ?? {};
  const header = section?.header ?? {};
  const sliderCardsData = Array.isArray(section?.sliderCardsData)
    ? section.sliderCardsData
    : [];

  useLayoutEffect(() => {
    // Only init animation when there are cards
    if (!sliderCardsData.length) return;

    // Reset refs to match current render
    cardRefs.current = [];

    const cleanup = initJobCardsAnimation(containerRef, cardRefs);
    return cleanup;
  }, [sliderCardsData.length]);

  // If nothing meaningful exists, don’t render
  if (!header?.heading && !header?.description && !sliderCardsData.length) {
    return null;
  }

  return (
    <div ref={containerRef} className={styles.container}>
      {(header?.heading || header?.description) && (
        <SectionIntro
          title={header?.heading ?? ""}
          description={header?.description ?? ""}
          maxWidth="650px"
        />
      )}

      {!!sliderCardsData.length && (
        <Container maxWidth="xl">
          <Grid container justifyContent="center">
            <section className={styles.section}>
              {sliderCardsData.map((info, index) => (
                <Grid
                  container
                  key={info?.id ?? info?.title ?? index}
                  className={`${styles.card} bgGlassWGlow`}
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <Grid size={{ xs: 3 }} className={styles.cardIndex}>
                    0{index + 1}
                  </Grid>

                  <Grid size={{ xs: 9 }}>
                    <IndustriesServicesSectionCard info={info} />
                  </Grid>
                </Grid>
              ))}
            </section>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default IndustriesServicesSection;
