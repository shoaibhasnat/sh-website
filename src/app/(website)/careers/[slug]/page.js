import { notFound } from "next/navigation";
import {
  CareersData,
  getJobBySlug,
} from "@/data/pages/careers/CareersData";
import { OutlineButton, PrimaryButton } from "@/utils/buttons";
import shared from "@/components/website/careers/careers-shared.module.css";
import styles from "./job-detail.module.css";

export function generateStaticParams() {
  return (CareersData.jobs || [])
    .filter((job) => job.active !== false && job.slug)
    .map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Position Not Found" };
  }

  return {
    title: `${job.title} — Careers`,
    description:
      job.shortDescription || `Join System Heuristics as a ${job.title}.`,
  };
}

export default async function CareerJobPage({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const meta = [job.location, job.workMode, job.employmentType, job.payRange]
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

        {job.aboutUs ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>About us</h2>
            <p className={styles.copy}>{job.aboutUs}</p>
          </section>
        ) : null}

        {job.about ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>About the role</h2>
            <p className={styles.copy}>{job.about}</p>
          </section>
        ) : null}

        {job.responsibilities?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Key responsibilities</h2>
            <ul className={styles.list}>
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.requirements?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Qualifications required</h2>
            <ul className={styles.list}>
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.niceToHave?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Qualifications preferred</h2>
            <ul className={styles.list}>
              {job.niceToHave.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.personalAttributes ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Personal attributes</h2>
            <p className={styles.copy}>{job.personalAttributes}</p>
          </section>
        ) : null}

        {job.whatWeOffer?.length ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>What we offer</h2>
            <ul className={styles.list}>
              {job.whatWeOffer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {job.applicationInstructions ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>How to apply</h2>
            <p className={styles.copy}>{job.applicationInstructions}</p>
          </section>
        ) : null}

        {job.equalOpportunityStatement ? (
          <p className={styles.eoe}>{job.equalOpportunityStatement}</p>
        ) : null}

        <div className={styles.actions}>
          <PrimaryButton
            text="Apply for this role"
            href="/careers#general-application"
          />
          <OutlineButton
            text="Back to open positions"
            href="/careers#open-positions"
          />
        </div>
      </div>
    </main>
  );
}
