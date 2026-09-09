"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-process.module.css";

const STEP_DURATION = 1000;

export default function AboutProcess() {
  const { process } = AboutData;
  const steps = process.steps;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex(-1);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, STEP_DURATION);

    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="about-process-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{process.eyebrow}</p>
          <h2 id="about-process-heading" className={shared.heading}>
            {process.heading}
          </h2>
        </div>

        <div className={styles.peopleBand} aria-hidden="true">
          {process.images.map((image) => (
            <div key={image.label} className={styles.peopleShot}>
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.peopleImage}
              />
              <span className={styles.peopleLabel}>{image.label}</span>
            </div>
          ))}
        </div>

        <ol className={styles.timeline}>
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={step.number} className={styles.step}>
                <div className={styles.marker}>
                  <span
                    className={`${styles.number} ${
                      isActive ? styles.numberActive : ""
                    }`}
                  >
                    {step.number}
                  </span>
                  {index < steps.length - 1 ? (
                    <span
                      className={`${styles.line} ${
                        isActive ? styles.lineActive : ""
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <div className={styles.body}>
                  <h3
                    className={`${styles.title} ${
                      isActive ? styles.titleActive : ""
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
