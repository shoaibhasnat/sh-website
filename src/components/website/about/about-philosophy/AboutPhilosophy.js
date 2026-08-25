import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-philosophy.module.css";

export default function AboutPhilosophy() {
  const { philosophy } = AboutData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="about-philosophy-heading"
    >
      <div className={shared.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={shared.eyebrow}>{philosophy.eyebrow}</p>
            <h2 id="about-philosophy-heading" className={shared.heading}>
              {philosophy.heading}
            </h2>
            <p className={shared.description}>{philosophy.description}</p>
            <p className={shared.supporting}>{philosophy.supporting}</p>
          </div>

          <ol className={styles.workflow} aria-label="How we approach problems">
            {philosophy.workflow.map((step, index) => (
              <li key={step} className={styles.step}>
                <div
                  className={`${styles.node} ${
                    index === 0 || index === philosophy.workflow.length - 1
                      ? styles.nodeAccent
                      : ""
                  }`}
                >
                  <span className={styles.stepLabel}>{step}</span>
                </div>
                {index < philosophy.workflow.length - 1 ? (
                  <span className={styles.connector} aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
