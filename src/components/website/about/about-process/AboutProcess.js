import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-process.module.css";

export default function AboutProcess() {
  const { process } = AboutData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="about-process-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{process.eyebrow}</p>
          <h2 id="about-process-heading" className={shared.heading}>
            {process.heading}
          </h2>
        </div>

        <ol className={styles.timeline}>
          {process.steps.map((step, index) => (
            <li key={step.number} className={styles.step}>
              <div className={styles.marker}>
                <span className={styles.number}>{step.number}</span>
                {index < process.steps.length - 1 ? (
                  <span className={styles.line} aria-hidden="true" />
                ) : null}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
