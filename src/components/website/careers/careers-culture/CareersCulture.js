"use client";

import { useEffect, useState } from "react";
import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import styles from "./careers-culture.module.css";

export default function CareersCulture() {
  const { culture } = CareersData;
  const items = culture.items;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setActiveIndex(-1);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <section
      className={`${shared.section} ${styles.section}`}
      aria-labelledby="careers-culture-heading"
    >
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={shared.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
            <p className={styles.eyebrow}>{culture.eyebrow}</p>
          </div>
          <h2 id="careers-culture-heading" className={styles.heading}>
            {culture.heading}
          </h2>
        </div>

        <ol className={styles.list}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const showAllActive = activeIndex === -1;

            return (
              <li
                key={item.title}
                className={`${styles.row} ${
                  isActive || showAllActive ? styles.rowActive : ""
                }`}
              >
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.rowBody}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
                <span className={styles.indicator} aria-hidden="true" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
