import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import styles from "./careers-benefits.module.css";

export default function CareersBenefits() {
  const { benefits } = CareersData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="careers-benefits-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{benefits.eyebrow}</p>
          <h2 id="careers-benefits-heading" className={shared.heading}>
            {benefits.heading}
          </h2>
          <p className={shared.description}>{benefits.description}</p>
        </div>

        <ul className={styles.grid}>
          {benefits.items.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
