"use client";

import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
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
          <a
            href={cta.primaryCta.href}
            className={shared.primaryCta}
            onClick={scrollTo(cta.primaryCta.href)}
          >
            {cta.primaryCta.label}
          </a>
          <a
            href={cta.secondaryCta.href}
            className={`${shared.secondaryCta} ${shared.secondaryCtaOnDark}`}
            onClick={scrollTo(cta.secondaryCta.href)}
          >
            {cta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
