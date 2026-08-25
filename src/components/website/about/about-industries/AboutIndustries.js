import Link from "next/link";
import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-industries.module.css";

export default function AboutIndustries() {
  const { industries } = AboutData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="about-industries-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{industries.eyebrow}</p>
          <h2 id="about-industries-heading" className={shared.heading}>
            {industries.heading}
          </h2>
          <p className={shared.description}>{industries.description}</p>
        </div>

        <ul className={styles.grid}>
          {industries.items.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <Link href={item.cta.href} className={styles.cta}>
                <span>{item.cta.label}</span>
                <span className={styles.ctaIcon} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className={styles.note}>{industries.note}</p>
      </div>
    </section>
  );
}
