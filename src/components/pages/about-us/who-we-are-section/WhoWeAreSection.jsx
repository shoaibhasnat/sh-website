import { useLayoutEffect, useRef } from "react";
import styles from "./who-we-are-section.module.css";
import { initWhoWeAreAnimation } from "./WhoWeAreSectionUtils";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";
import WhoWeAreCard from "./who-we-are-card/WhoWeAreCard";
import { Container, Grid } from "@mui/material";

/**
 * WhoWeAreSection Component
 * -------------------------
 * Renders the "Who We Are" section of the About Us page.
 * Includes section intro and team member cards with scroll animations.
 */
const WhoWeAreSection = () => {
  const containerRef = useRef(null); // ref for section container
  const cardRefs = useRef([]); // ref array to store team card elements

  // Data absence checks
  if (!AboutUsData?.whoWeAre || !Array.isArray(AboutUsData.whoWeAre.teamInfo)) {
    return null;
  }

  const { whoWeAre } = AboutUsData;

  // --------------------------
  // Initialize GSAP animations
  // --------------------------
  useLayoutEffect(() => {
    const cleanup = initWhoWeAreAnimation(cardRefs, containerRef); // animate cards
    return cleanup; // cleanup animations on unmount
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Section header */}
      <SectionIntro
        title={whoWeAre?.title}
        description={whoWeAre?.description}
        titleTag="h2"
        maxWidth="650px"
      />

      {/* Team cards grid */}
      <Container maxWidth="xl">
        <Grid container justifyContent={"center"}>
          <section className={styles.section}>
            {whoWeAre.teamInfo.map((info, index) => (
              <WhoWeAreCard
                info={info}           // team member data
                key={index}
                index={index}
                cardRefs={cardRefs}   // pass ref array for animation
              />
            ))}
          </section>
        </Grid>
      </Container>
    </div>
  );
};

export default WhoWeAreSection;
