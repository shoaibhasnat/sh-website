import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug } from "@/data/pages/careers/CareersData";
import shared from "@/components/website/careers/careers-shared.module.css";
import styles from "./job-detail.module.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Position Not Found" };
  }

  return {
    title: `${job.title} — Careers`,
    description: job.shortDescription || `Join System Heuristics as a ${job.title}.`,
  };
}

export default async function CareerJobPage({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const meta = [job.location, job.workMode, job.employmentType]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className={styles.page}>
      <div className={shared.inner}>
        <p className={shared.eyebrow}>{job.department}</p>
        <h1 className={styles.title}>{job.title}</h1>
        {meta ? <p className={styles.meta}>{meta}</p> : null}
        {job.shortDescription ? (
          <p className={styles.lead}>{job.shortDescription}</p>
        ) : null}

        {job.about ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>About the role</h2>
            <p className={styles.copy}>{job.about}</p>
          </section>
        ) : null}

        {job.responsibilities?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Responsibilities</h2>
            <ul className={styles.list}>
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.requirements?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Requirements</h2>
            <ul className={styles.list}>
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.niceToHave?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Nice to have</h2>
            <ul className={styles.list}>
              {job.niceToHave.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.whatYoullWorkOn?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>What you&apos;ll work on</h2>
            <ul className={styles.list}>
              {job.whatYoullWorkOn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className={styles.actions}>
          <Link href="/careers#general-application" className={shared.primaryCta}>
            Apply for this role
          </Link>
          <Link href="/careers#open-positions" className={shared.secondaryCta}>
            Back to open positions
          </Link>
        </div>
      </div>
    </main>
  );
}
