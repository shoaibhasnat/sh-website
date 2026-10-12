import { useLayoutEffect, useRef } from "react";
import styles from "./challenges-faced.module.css";
import { initChallengesAnimation } from "./ChallengesFacedUtils";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import { Container } from "@mui/material";

export default function ChallengesFaced({ project }) {
  // Data absence checks
  if (!project || !project.challengesFaced || !Array.isArray(project.challengesFaced)) {
    return null;
  }

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const paragraphRefs = useRef([]);

  useLayoutEffect(() => {
    const cleanup = initChallengesAnimation({
      containerRef,
      heroRef,
      paragraphRefs,
    });

    return cleanup;
  }, []);

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <section ref={heroRef} className={styles.hero}>
        <SectionIntro
          chipLabel="CHALLENGES FACED"
          title="Overcoming Complexities in Project Execution"
          maxWidth="900px"
          style={{ margin: "0px 0px 15px 0px" }}
          description="The foundation of everything we do, our mission, vision, and values guide how we build technology, empower people, and shape the future."
        />

        <Container maxWidth="xl">
          <div className={styles.aboutCopy}>
            {project.challengesFaced.map((challenge, i) => (
              <div className={`${styles.copyBlock} bgGlassWGlow`} key={i}>
                {window.innerWidth < 576 ? (
                  <p className={styles.title}>{challenge.title}</p>
                ) : (
                  <h6>{challenge.title}</h6>
                )}
                <p
                  ref={(el) => {
                    if (el) paragraphRefs.current[i] = el;
                  }}
                  className="description"
                >
                  {challenge.description}
                </p>
            </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
