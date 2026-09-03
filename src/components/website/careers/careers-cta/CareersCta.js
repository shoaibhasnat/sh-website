"use client";

import { CareersData } from "@/data/pages/careers/CareersData";
import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./careers-cta.module.css";

export default function CareersCta() {
  const { cta } = CareersData;

  const scrollTo = (href) => (event) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={styles.section} aria-labelledby="careers-cta-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="careers-cta-heading" className={styles.heading}>
          {cta.heading}
        </h2>
        <p className={styles.description}>{cta.description}</p>
        <div className={styles.actions}>
          <PrimaryButton
            text={cta.primaryCta.label}
            href={cta.primaryCta.href}
            onClick={scrollTo(cta.primaryCta.href)}
          />
          <GhostButton
            text={cta.secondaryCta.label}
            href={cta.secondaryCta.href}
            onClick={scrollTo(cta.secondaryCta.href)}
          />
        </div>
      </div>
    </section>
  );
}
