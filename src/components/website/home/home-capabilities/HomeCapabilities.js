import Link from "next/link";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-capabilities.module.css";

export default function HomeCapabilities() {
  const { capabilities } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-capabilities-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{capabilities.eyebrow}</p>
          <h2 id="home-capabilities-heading" className={shared.heading}>
            {capabilities.heading}
          </h2>
        </div>

        <ul className={styles.grid}>
          {capabilities.items.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <ul className={styles.points}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={item.href} className={styles.link}>
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
