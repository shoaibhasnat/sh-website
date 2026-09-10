"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HomeData } from "@/data/pages/home/HomeData";
import { PrimaryButton, SecondaryButton } from "@/utils/buttons";
import styles from "./home-hero.module.css";

export default function HomeHero() {
  const { hero } = HomeData;
  const media = hero.media || [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (media.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % media.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [media.length]);

  const activeMedia = media[activeIndex] || media[0];

  return (
    <section className={styles.hero} aria-labelledby="home-hero-heading">
      <div className={styles.split}>
        <div className={styles.copyPanel}>
          <div className={styles.copyInner}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowMark} aria-hidden="true" />
              <p className={styles.eyebrow}>{hero.eyebrow}</p>
            </div>

            <h1 id="home-hero-heading" className={styles.heading}>
              {hero.heading}
            </h1>

            <p className={styles.description}>{hero.description}</p>
            <p className={styles.supporting}>{hero.supporting}</p>

            {hero.proofPoints?.length ? (
              <ul className={styles.proofList}>
                {hero.proofPoints.map((point) => (
                  <li key={point} className={styles.proofItem}>
                    <span className={styles.proofDot} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className={styles.actions}>
              <PrimaryButton
                text={hero.primaryCta.label}
                href={hero.primaryCta.href}
                height={48}
              />
              <SecondaryButton
                text={hero.secondaryCta.label}
                href={hero.secondaryCta.href}
                height={48}
                className={styles.ctaPulse}
              />
            </div>
          </div>
        </div>

        <div className={styles.mediaPanel}>
          <div className={styles.diagonal} aria-hidden="true" />

          <div className={styles.mediaStage}>
            {media.map((item, index) => (
              <div
                key={item.src}
                className={`${styles.mediaSlide} ${
                  index === activeIndex ? styles.mediaSlideActive : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.mediaImage}
                />
              </div>
            ))}

            <div className={styles.mediaShade} aria-hidden="true" />
            <div className={styles.mediaGrain} aria-hidden="true" />

            <div className={styles.mediaCaption}>
              <span className={styles.mediaLive} aria-hidden="true" />
              <span>{activeMedia?.label}</span>
            </div>

            <div className={styles.mediaStats} aria-hidden="true">
              <div className={styles.statCard}>
                <span className={styles.statValue}>2x</span>
                <span className={styles.statLabel}>Faster follow-ups</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Agents that work</span>
              </div>
            </div>

            <div className={styles.mediaDots} aria-hidden="true">
              {media.map((item, index) => (
                <span
                  key={item.src}
                  className={`${styles.mediaDot} ${
                    index === activeIndex ? styles.mediaDotActive : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
