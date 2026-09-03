"use client";

import { useMemo, useState } from "react";
import {
  CareersData,
  getActiveJobs,
} from "@/data/pages/careers/CareersData";
import { PrimaryButton } from "@/utils/buttons";
import shared from "../careers-shared.module.css";
import styles from "./careers-jobs.module.css";

function formatPostedDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function CareersJobs() {
  const { jobsSection, categories } = CareersData;
  const jobs = getActiveJobs();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJobs = useMemo(() => {
    if (activeCategory === "All") return jobs;
    return jobs.filter((job) => job.department === activeCategory);
  }, [activeCategory, jobs]);

  const scrollToApplication = (event) => {
    event.preventDefault();
    document.getElementById("general-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id={jobsSection.id}
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="careers-jobs-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{jobsSection.eyebrow}</p>
          <h2 id="careers-jobs-heading" className={shared.heading}>
            {jobsSection.heading}
          </h2>
          {jobsSection.intro ? (
            <p className={shared.description}>{jobsSection.intro}</p>
          ) : null}
        </div>

        {jobs.length > 0 && categories?.length ? (
          <div className={styles.filters} role="tablist" aria-label="Job categories">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filter} ${isActive ? styles.filterActive : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        ) : null}

        {jobs.length === 0 ? (
          <div className={styles.empty} role="status">
            <h3 className={styles.emptyHeading}>{jobsSection.empty.heading}</h3>
            <p className={styles.emptyDescription}>
              {jobsSection.empty.description}
            </p>
            <PrimaryButton
              text={jobsSection.empty.cta.label}
              href={jobsSection.empty.cta.href}
              onClick={scrollToApplication}
            />
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className={styles.empty} role="status">
            <h3 className={styles.emptyHeading}>No roles in this category.</h3>
            <p className={styles.emptyDescription}>
              Try another category or send your profile for future openings.
            </p>
          </div>
        ) : (
          <ul className={styles.list}>
            {filteredJobs.map((job) => {
              const meta = [job.workMode, job.employmentType]
                .filter(Boolean)
                .join(" / ");
              const posted = formatPostedDate(job.postedDate);

              return (
                <li key={job.slug} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.title}>{job.title}</h3>
                      <p className={styles.department}>{job.department}</p>
                    </div>
                    {posted ? (
                      <time className={styles.posted} dateTime={job.postedDate}>
                        {posted}
                      </time>
                    ) : null}
                  </div>

                  <p className={styles.meta}>
                    {[job.location, meta, job.payRange]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>

                  {job.shortDescription ? (
                    <p className={styles.description}>{job.shortDescription}</p>
                  ) : null}

                  {Array.isArray(job.skills) && job.skills.length > 0 ? (
                    <ul className={styles.skills}>
                      {job.skills.map((skill) => (
                        <li key={skill} className={styles.skill}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <PrimaryButton
                    text="View Position"
                    href={`/careers/${job.slug}`}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
