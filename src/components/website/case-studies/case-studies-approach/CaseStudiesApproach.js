import Image from "next/image";
import { CaseStudiesData } from "@/data/pages/case-studies/CaseStudiesData";
import styles from "./case-studies-approach.module.css";

export default function CaseStudiesApproach() {
  const { approach } = CaseStudiesData;

  return (
    <section
      className={styles.section}
      aria-labelledby="case-studies-approach-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>{approach.eyebrow}</p>
            <h2 id="case-studies-approach-heading" className={styles.heading}>
              {approach.heading}
            </h2>
            <p className={styles.description}>{approach.description}</p>
          </div>

          <div className={styles.photo}>
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.photoImage}
            />
          </div>
        </div>

        <ol className={styles.grid}>
          {approach.steps.map((step) => (
            <li key={step.number} className={styles.card}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardCopy}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
