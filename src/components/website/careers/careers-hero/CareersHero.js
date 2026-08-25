"use client";

import Link from "next/link";
import { CareersData } from "@/data/pages/careers/CareersData";
import styles from "./careers-hero.module.css";

export default function CareersHero() {
  const { hero } = CareersData;

  const scrollTo = (href) => (event) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const headingParts = splitHeading(hero.heading);

  return (
    <section className={styles.hero} aria-labelledby="careers-hero-heading">
      <div className={styles.bgBase} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgOrbit} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
          </div>

          <h1 id="careers-hero-heading" className={styles.heading}>
            {headingParts.before}
            {headingParts.highlight ? (
              <span className={styles.highlight}>{headingParts.highlight}</span>
            ) : null}
            {headingParts.after}
          </h1>

          <p className={styles.description}>{hero.description}</p>
          <p className={styles.supporting}>{hero.supporting}</p>

          <div className={styles.actions}>
            <a
              href={hero.primaryCta.href}
              className={styles.primaryCta}
              onClick={scrollTo(hero.primaryCta.href)}
            >
              {hero.primaryCta.label}
            </a>
            <Link href={hero.secondaryCta.href} className={styles.secondaryCta}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.stage}>
            <div className={styles.ring} />
            <div className={`${styles.ring} ${styles.ringMid}`} />
            <div className={`${styles.ring} ${styles.ringOuter}`} />

            <svg className={styles.beams} viewBox="0 0 440 440" fill="none">
              <path d="M220 220 L220 54" />
              <path d="M220 220 L352 118" />
              <path d="M220 220 L352 322" />
              <path d="M220 220 L88 322" />
              <path d="M220 220 L88 118" />
            </svg>

            <div className={styles.core}>
              <span className={styles.coreEyebrow}>Mission</span>
              <span className={styles.coreLabel}>Build systems</span>
              <span className={styles.coreSub}>that businesses use</span>
            </div>

            {hero.nodes.map((label, index) => (
              <div
                key={label}
                className={`${styles.signal} ${styles[`signal${index}`]}`}
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <span className={styles.signalDot} />
                <span className={styles.signalLabel}>{label}</span>
              </div>
            ))}

            <div className={styles.frameTL} />
            <div className={styles.frameBR} />
          </div>
        </div>
      </div>
    </section>
  );
}

function splitHeading(heading) {
  const target = "Actually Use";
  const index = heading.indexOf(target);

  if (index === -1) {
    return { before: heading, highlight: "", after: "" };
  }

  return {
    before: heading.slice(0, index),
    highlight: target,
    after: heading.slice(index + target.length),
  };
}
