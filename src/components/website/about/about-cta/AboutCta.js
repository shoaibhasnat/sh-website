import Link from "next/link";
import { AboutData } from "@/data/pages/about/AboutData";
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
            <Link href={cta.primaryCta.href} className={shared.primaryCta}>
              {cta.primaryCta.label}
            </Link>
            <Link href={cta.secondaryCta.href} className={shared.secondaryCta}>
              {cta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
