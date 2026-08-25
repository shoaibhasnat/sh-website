import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import styles from "./careers-process.module.css";

export default function CareersProcess() {
  const { process } = CareersData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="careers-process-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{process.eyebrow}</p>
          <h2 id="careers-process-heading" className={shared.heading}>
            {process.heading}
          </h2>
        </div>

        <ol className={styles.list}>
          {process.steps.map((step) => (
            <li key={step.number} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {step.number}
              </span>
              <div>
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
