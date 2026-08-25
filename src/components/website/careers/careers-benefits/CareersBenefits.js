import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import styles from "./careers-benefits.module.css";

export default function CareersBenefits() {
  const { benefits } = CareersData;

  return (
    <section
      className={`${shared.section} ${styles.section}`}
      aria-labelledby="careers-benefits-heading"
    >
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={shared.inner}>
        <div className={styles.layout}>
          <ul className={styles.grid}>
            {benefits.items.map((item, index) => (
              <li
                key={item.title}
                className={`${styles.card} ${
                  index === 0 ? styles.cardActive : ""
                }`}
              >
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </li>
            ))}
          </ul>

          <div className={styles.content}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowMark} aria-hidden="true" />
              <p className={styles.eyebrow}>{benefits.eyebrow}</p>
            </div>
            <h2 id="careers-benefits-heading" className={styles.heading}>
              {benefits.heading}
            </h2>
            <p className={styles.lead}>{benefits.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
