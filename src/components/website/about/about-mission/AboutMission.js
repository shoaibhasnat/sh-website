import { AboutData } from "@/data/pages/about/AboutData";
import styles from "./about-mission.module.css";

export default function AboutMission() {
  const { mission } = AboutData;

  return (
    <section className={styles.section} aria-labelledby="about-mission-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{mission.eyebrow}</p>
        <h2 id="about-mission-heading" className={styles.heading}>
          {mission.heading}
        </h2>
        <p className={styles.description}>{mission.description}</p>
      </div>
    </section>
  );
}
