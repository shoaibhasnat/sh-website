import Link from "next/link";
import { HomeData } from "@/data/pages/home/HomeData";
import { PrimaryButton } from "@/utils/buttons";
import shared from "../home-shared.module.css";
import styles from "./home-industries.module.css";

export default function HomeIndustries() {
  const { industries } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-industries-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{industries.eyebrow}</p>
          <h2 id="home-industries-heading" className={shared.heading}>
            {industries.heading}
          </h2>
          <p className={shared.description}>{industries.description}</p>
        </div>

        <ul className={styles.grid}>
          {industries.items.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardCopy}>{item.description}</p>
              <Link href={item.cta.href} className={styles.link}>
                {item.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.note}>
          <h3 className={styles.noteTitle}>{industries.noteTitle}</h3>
          <p className={styles.noteDescription}>{industries.noteDescription}</p>
          <PrimaryButton
            text={industries.noteCta.label}
            href={industries.noteCta.href}
            height={46}
          />
        </div>
      </div>
    </section>
  );
}
