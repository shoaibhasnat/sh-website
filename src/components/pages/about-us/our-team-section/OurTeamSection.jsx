import { useLayoutEffect, useRef } from "react";
import styles from "./our-team-section.module.css";
import { initAnimation } from "./OurTeamSectionUtils";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import { Container } from "@mui/material";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";

export default function OurTeamSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  if (
    !AboutUsData?.ourTeamSection ||
    !Array.isArray(AboutUsData.ourTeamSection.members)
  ) {
    return null;
  }

  const { header, members } = AboutUsData.ourTeamSection;

  useLayoutEffect(() => {
    const cleanup = initAnimation({
      container: containerRef.current,
      track: trackRef.current,
      cards: cardRefs.current,
    });

    return cleanup;
  }, [members.length]);

  return (
    <section ref={containerRef} className={styles.wrapper}>
      <div className={styles.section}>
        <Container maxWidth="xl">
          <SectionIntro
            title={header?.title}
            description={header?.description}
            titleTag="h2"
            style={{ margin: "20px 0px" }}
          />
        </Container>

        <div ref={trackRef} className={styles.track}>
          {members?.map((member, index) => (
            <div
              key={member?.name ?? index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={styles.card}
            >
              <LazyImage
                src={member.profile}
                alt={member.name}
                className={styles.image}
                width={250}
                height={250}
              />
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.designation}>{member.role}</p>
            </div>
          ))}

          <div
            ref={(el) => (cardRefs.current[members.length] = el)}
            className={styles.card}
            aria-hidden="true"
            style={{ background: "transparent", border: "none" }}
          />
        </div>
      </div>
    </section>
  );
}
