"use client";

import { useId, useState } from "react";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-faq.module.css";

export default function HomeFaq() {
  const { faq } = HomeData;
  const baseId = useId();
  const [openKey, setOpenKey] = useState("0");

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-faq-heading"
    >
      <div className={shared.inner}>
        <div className={`${shared.header} ${shared.headerCenter}`}>
          <p className={shared.eyebrow}>{faq.eyebrow}</p>
          <h2 id="home-faq-heading" className={shared.heading}>
            {faq.heading}
          </h2>
        </div>

        <div className={styles.panel}>
          <div className={styles.list}>
            {faq.items.map((item, index) => {
              const key = String(index);
              const isOpen = openKey === key;
              const buttonId = `${baseId}-btn-${key}`;
              const panelId = `${baseId}-panel-${key}`;

              return (
                <div key={item.question} className={styles.item}>
                  <h3 className={styles.itemHeading}>
                    <button
                      type="button"
                      id={buttonId}
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenKey(isOpen ? "" : key)}
                    >
                      <span>{item.question}</span>
                      <span className={styles.icon} aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={styles.panelBody}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
