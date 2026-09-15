"use client";

import { useEffect, useRef, useState } from "react";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-stats.module.css";

const DURATION_MS = 1600;

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(target, active) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return undefined;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setDisplay(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [active, target]);

  return display;
}

function StatCard({ item, active }) {
  const value = useCountUp(item.value, active);

  return (
    <li className={styles.card}>
      <div className={styles.statRow}>
        <span className={styles.value}>
          {value}
          {item.suffix}
        </span>
        {item.unit ? <span className={styles.unit}>{item.unit}</span> : null}
      </div>
      <p className={styles.body}>{item.body}</p>
      <p className={styles.footer}>{item.footer}</p>
    </li>
  );
}

export default function HomeStats() {
  const { stats } = HomeData;
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${shared.section} ${styles.section}`}
      aria-labelledby="home-stats-heading"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={shared.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{stats.eyebrow}</p>
          <h2 id="home-stats-heading" className={styles.heading}>
            {stats.heading}
          </h2>
          <p className={styles.description}>{stats.description}</p>
        </div>

        <ul className={styles.grid}>
          {stats.items.map((item) => (
            <StatCard key={item.footer} item={item} active={active} />
          ))}
        </ul>
      </div>
    </section>
  );
}
