import { AboutData } from "@/data/pages/about/AboutData";
import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./about-mission.module.css";

export default function AboutMission() {
  const { cta } = AboutData;

  return (
    <section className={styles.section} aria-labelledby="about-mission-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="about-mission-heading" className={styles.heading}>
          {cta.heading}
        </h2>
        <p className={styles.description}>{cta.description}</p>
        <div className={styles.actions}>
          <PrimaryButton text={cta.primaryCta.label} href={cta.primaryCta.href} />
          <GhostButton
            text={cta.secondaryCta.label}
            href={cta.secondaryCta.href}
          />
        </div>
      </div>
    </section>
  );
}
