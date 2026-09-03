"use client";

import { useState } from "react";
import shared from "../project-detail-shared.module.css";
import styles from "./detail-faqs.module.css";

export default function ProjectDetailFaqs({ project }) {
  const faqs = project.raw?.faqs || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  return (
    <section
      className={`${shared.sectionPad} ${shared.softSurface} ${styles.section}`}
      aria-labelledby="project-faqs-heading"
    >
      <div className={shared.inner}>
        <div className={styles.header}>
          <p className={shared.eyebrow}>FAQ</p>
          <h2 id="project-faqs-heading" className={shared.sectionHeading}>
            Common Questions
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <h3 className={styles.question}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
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
                  className={styles.panel}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
