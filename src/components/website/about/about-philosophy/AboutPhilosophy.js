"use client";

import { useEffect, useState } from "react";
import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-philosophy.module.css";

export default function AboutPhilosophy() {
  const { philosophy } = AboutData;
  const steps = philosophy.workflow;
  const [activeCount, setActiveCount] = useState(1);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setActiveCount(steps.length);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveCount((current) => (current >= steps.length ? 1 : current + 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="about-philosophy-heading"
    >
      <div className={shared.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={shared.eyebrow}>{philosophy.eyebrow}</p>
            <h2 id="about-philosophy-heading" className={shared.heading}>
              {philosophy.heading}
            </h2>
            <p className={shared.description}>{philosophy.description}</p>
            <p className={shared.supporting}>{philosophy.supporting}</p>
          </div>

          <ol className={styles.workflow} aria-label="How we approach problems">
            {steps.map((step, index) => {
              const isActive = index < activeCount;

              return (
                <li key={step} className={styles.step}>
                  <div
                    className={`${styles.node} ${isActive ? styles.nodeActive : ""}`}
                  >
                    <span className={styles.stepLabel}>{step}</span>
                  </div>
                  {index < steps.length - 1 ? (
                    <span
                      className={`${styles.connector} ${
                        index < activeCount - 1 ? styles.connectorActive : ""
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
