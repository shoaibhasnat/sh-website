import { useLayoutEffect, useRef } from "react";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import { Container, Grid } from "@mui/material";
import { initJobCardsAnimation } from "./MainFeaturesUtils";
import { CircleCheck } from "lucide-react";
import styles from "./main-features.module.css";

const MainFeatures = ({ project }) => {
  // Data absence checks
  if (!project || !project.mainFeatures || !project.mainFeatures.features || !Array.isArray(project.mainFeatures.features)) {
    return null;
  }

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const cleanup = initJobCardsAnimation({
      containerRef,
      imageRef,
      cardRefs,
    });
    return cleanup;
  }, []);

  return (
    <Container maxWidth="xl">
      <SectionIntro
        title="Main Features of the Project"
        description={project.mainFeatures.description}
        maxWidth="600px"
      />

      <Grid container maxWidth="xl" justifyContent="space-around">
        <Grid size={{ xs: 12, sm: 10, md: 8 }}>
          <div ref={containerRef} className={styles.list}>
            {project.mainFeatures.features.map((feature, i) => (
              <div
                key={feature}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`${styles.card} description bgGlassWGlow`}
              >
                <CircleCheck className={styles.icon} />
                {feature}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainFeatures;
