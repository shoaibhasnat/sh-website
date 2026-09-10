import { CaseStudiesData } from "@/data/pages/case-studies/CaseStudiesData";
import styles from "./case-studies-outcomes.module.css";

export default function CaseStudiesOutcomes() {
  const { outcomes } = CaseStudiesData;

  return (
    <section
      className={styles.section}
      aria-labelledby="case-studies-outcomes-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{outcomes.eyebrow}</p>
          <h2 id="case-studies-outcomes-heading" className={styles.heading}>
            {outcomes.heading}
          </h2>
          <p className={styles.description}>{outcomes.description}</p>
        </div>

        <ul className={styles.grid}>
          {outcomes.items.map((item, index) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardCopy}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
