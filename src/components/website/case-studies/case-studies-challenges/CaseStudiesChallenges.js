import { CaseStudiesData } from "@/data/pages/case-studies/CaseStudiesData";
import styles from "./case-studies-challenges.module.css";

export default function CaseStudiesChallenges() {
  const { challenges } = CaseStudiesData;

  return (
    <section
      className={styles.section}
      aria-labelledby="case-studies-challenges-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{challenges.eyebrow}</p>
          <h2 id="case-studies-challenges-heading" className={styles.heading}>
            {challenges.heading}
          </h2>
          <p className={styles.description}>{challenges.description}</p>
        </div>

        <ul className={styles.grid}>
          {challenges.items.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardCopy}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
