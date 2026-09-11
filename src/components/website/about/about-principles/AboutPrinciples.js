import Image from "next/image";
import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-principles.module.css";

export default function AboutPrinciples() {
  const { principles } = AboutData;

  return (
    <section
      className={`${shared.section} ${styles.section}`}
      aria-labelledby="about-principles-heading"
    >
      <div className={shared.inner}>
        <div className={styles.stage}>
          <div className={styles.visual}>
            <Image
              src={principles.image.src}
              alt={principles.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 70vw"
              className={styles.visualImage}
            />
            <div className={styles.visualShade} aria-hidden="true" />
            <p className={styles.visualTag}>
              <span className={styles.visualDot} aria-hidden="true" />
              Real decisions. Better systems.
            </p>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <p className={styles.eyebrow}>{principles.eyebrow}</p>
              <h2 id="about-principles-heading" className={styles.heading}>
                {principles.heading}
              </h2>
            </div>

            <ol className={styles.list}>
              {principles.items.map((item, index) => (
                <li key={item.title} className={styles.item}>
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.copy}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
