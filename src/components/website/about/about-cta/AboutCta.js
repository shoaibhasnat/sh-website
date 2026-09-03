import { AboutData } from "@/data/pages/about/AboutData";
import { OutlineButton, PrimaryButton } from "@/utils/buttons";
import shared from "../about-shared.module.css";
import styles from "./about-cta.module.css";

export default function AboutCta() {
  const { cta } = AboutData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="about-cta-heading"
    >
      <div className={shared.inner}>
        <div className={styles.panel}>
          <p className={shared.eyebrow}>{cta.eyebrow}</p>
          <h2 id="about-cta-heading" className={styles.heading}>
            {cta.heading}
          </h2>
          <p className={styles.description}>{cta.description}</p>

          <div className={styles.actions}>
            <PrimaryButton text={cta.primaryCta.label} href={cta.primaryCta.href} />
            <OutlineButton
              text={cta.secondaryCta.label}
              href={cta.secondaryCta.href}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
