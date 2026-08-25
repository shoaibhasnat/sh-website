"use client";

import Link from "next/link";
import {
  CareersData,
  getActiveJobs,
} from "@/data/pages/careers/CareersData";
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
  const { jobsSection } = CareersData;
  const jobs = getActiveJobs();

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
        </div>

        {jobs.length === 0 ? (
          <div className={styles.empty} role="status">
            <h3 className={styles.emptyHeading}>{jobsSection.empty.heading}</h3>
            <p className={styles.emptyDescription}>
              {jobsSection.empty.description}
            </p>
            <a
              href={jobsSection.empty.cta.href}
              className={shared.primaryCta}
              onClick={scrollToApplication}
            >
              {jobsSection.empty.cta.label}
            </a>
          </div>
        ) : (
          <ul className={styles.list}>
            {jobs.map((job) => {
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
                    {[job.location, meta].filter(Boolean).join(" · ")}
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

                  <Link
                    href={`/careers/${job.slug}`}
                    className={shared.primaryCta}
                  >
                    View Position
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
