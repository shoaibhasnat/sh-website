import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import styles from "./careers-areas.module.css";

export default function CareersAreas() {
  const { areas } = CareersData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="careers-areas-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{areas.eyebrow}</p>
          <h2 id="careers-areas-heading" className={shared.heading}>
            {areas.heading}
          </h2>
        </div>

        <ul className={styles.grid}>
          {areas.items.map((item) => (
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
