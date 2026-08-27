"use client";

import Link from "next/link";
import {
  CareersData,
  getActiveJobs,
} from "@/data/pages/careers/CareersData";
import styles from "./careers-hero.module.css";

const PREVIEW_LIMIT = 4;

export default function CareersHero() {
  const { hero, jobsSection } = CareersData;
  const jobs = getActiveJobs();
  const previewJobs = jobs.slice(0, PREVIEW_LIMIT);

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
      <div className={styles.bgDots} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

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

          <ul className={styles.disciplines}>
            {hero.nodes.map((label) => (
              <li key={label} className={styles.discipline}>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.panel} aria-label="Open positions preview">
          <div className={styles.panelHeader}>
            <p className={styles.panelTitle}>{jobsSection.eyebrow}</p>
            <span className={styles.panelCount}>
              <span className={styles.panelDot} aria-hidden="true" />
              {jobs.length} open
            </span>
          </div>

          {previewJobs.length > 0 ? (
            <ul className={styles.roles}>
              {previewJobs.map((job) => (
                <li key={job.slug}>
                  <Link href={`/careers/${job.slug}`} className={styles.role}>
                    <span className={styles.roleBody}>
                      <span className={styles.roleTitle}>{job.title}</span>
                      <span className={styles.roleMeta}>
                        {[job.department, job.workMode, job.employmentType]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    </span>
                    <span className={styles.roleArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.panelEmpty}>{jobsSection.empty.heading}</p>
          )}

          <a
            href={hero.primaryCta.href}
            className={styles.panelLink}
            onClick={scrollTo(hero.primaryCta.href)}
          >
            {hero.primaryCta.label}
          </a>
        </aside>
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
