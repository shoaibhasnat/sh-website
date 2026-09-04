import { CaseStudiesData } from "@/data/pages/case-studies/CaseStudiesData";
import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./case-studies-cta.module.css";

export default function CaseStudiesCta() {
  const { cta } = CaseStudiesData;

  return (
    <section className={styles.section} aria-labelledby="case-studies-cta-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="case-studies-cta-heading" className={styles.heading}>
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
