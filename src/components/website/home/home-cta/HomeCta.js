import { HomeData } from "@/data/pages/home/HomeData";
import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./home-cta.module.css";

export default function HomeCta() {
  const { cta } = HomeData;

  return (
    <section className={styles.section} aria-labelledby="home-cta-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="home-cta-heading" className={styles.heading}>
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
