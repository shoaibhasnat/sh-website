import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./proposed-solution.module.css";
import { Container, Grid } from "@mui/material";
import GradientScrollAnimation from "../../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import { CircleCheck } from "lucide-react";
import LazyImage from "../../../../ui/lazy-image/LazyImage";

const ProposedSolution = ({ project }) => {
  // Data absence checks
  if (!project || !project.proposedSolution || !project.proposedSolution.heading || !project.proposedSolution.leftSectionImage || !project.proposedSolution.description || !Array.isArray(project.proposedSolution.points)) {
    return null;
  }

  return (
    <>
      <SectionIntro
        title={project.proposedSolution.heading}
        maxWidth="700"
        titleTag={window.innerWidth < 768 ? "h3" : "h2"}
        style={{ marginBottom: "15px" }}
      />
      <Container maxWidth="xl" className={styles.container}>
        <div className={styles.main}>
          <Grid
            container
            spacing={5}
            justifyContent={"space-between"}
            alignItems="start"
          >
            <Grid size={{ sm: 12, md: 7, lg: 7 }}>
              <div className={styles.leftSection}>
                <LazyImage src={project.proposedSolution.leftSectionImage} alt={`${project.title || "Project"} proposed solution`} width={450} height={320} loading="lazy" decoding="async" />
                <GradientScrollAnimation>
                  <p className={` description ${styles.description}`}>
                    {project.proposedSolution.description}
                  </p>
                </GradientScrollAnimation>
              </div>
            </Grid>
            <Grid
              size={{ sm: 12, md: 5, lg: 5 }}
              display="flex"
              flexDirection={"column"}
              height="100%"
            >
              <ul className={styles.points}>
                {project.proposedSolution.points.map((point, index) => (
                  <li key={index} className={styles.point}>
                    <CircleCheck className={styles.pointIcon} />
                    <span className="description">{point}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.techs}>
                {project.proposedSolution.techStackUsed.map((tech, index) => (
                  <Tooltip key={index} title={tech.name} arrow placement="top">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      width={35}
                      height={35}
                      loading="lazy"
                      decoding="async"
                      onClick={() =>
                        tech.url && window.open(tech.url, "_blank")
                      }
                    />
                  </Tooltip>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ProposedSolution;
