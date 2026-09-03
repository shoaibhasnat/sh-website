import Link from "next/link";
import { OutlineButton, PrimaryButton } from "@/utils/buttons";
import shared from "../project-detail-shared.module.css";
import styles from "./detail-hero.module.css";

export default function ProjectDetailHero({ project }) {
  const raw = project.raw || {};
  const banner = raw.banner || {};
  const title = banner.heading || project.name;
  const description =
    banner.description ||
    raw.introSection?.summary?.description ||
    project.shortSolution;
  const image =
    banner.bannerImage ||
    project.image ||
    raw.proposedSolution?.leftSectionImage ||
    "";
  const liveUrl = banner.url || "";
  const categories = Array.isArray(raw.category) ? raw.category : [];

  return (
    <header className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`${shared.inner} ${styles.inner}`}>
        <div className={styles.content}>
          <Link href="/projects" className={styles.back}>
            ← Back to Projects
          </Link>

          <p className={styles.eyebrow}>{project.industryLabel}</p>
          <h1 className={styles.title}>{title}</h1>

          {description ? <p className={styles.lead}>{description}</p> : null}

          {categories.length ? (
            <ul className={styles.tags}>
              {categories.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <div className={styles.actions}>
            {liveUrl ? (
              <PrimaryButton
                text="Visit Live Project"
                href={liveUrl}
                height={44}
              />
            ) : null}
            <OutlineButton text="Start a Similar Project" href="/contact" height={44} />
          </div>
        </div>

        <div className={styles.mediaCol}>
          {image ? (
            <div className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={project.name} className={styles.image} />
            </div>
          ) : (
            <div className={styles.mediaPlaceholder} aria-hidden="true" />
          )}
        </div>
      </div>
    </header>
  );
}
