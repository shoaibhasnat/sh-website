import Link from "next/link";
import { OutlineButton, PrimaryButton } from "@/utils/buttons";
import shared from "../project-detail-shared.module.css";
import styles from "./detail-hero.module.css";

function resolveVideoDemoUrl(banner = {}) {
  const remote = String(banner.videoUrl || "").trim();
  if (remote) return remote;

  const local = String(
    banner.localVideo?.url || banner.localVideoUrl || "",
  ).trim();
  return local || "";
}

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
  const liveUrl = String(banner.url || "").trim();
  const videoDemoUrl = resolveVideoDemoUrl(banner);
  const categories = Array.isArray(raw.category) ? raw.category : [];
  const isExternalVideo = /^https?:\/\//i.test(videoDemoUrl);

  const primaryAction = liveUrl
    ? {
        label: "Visit Live Project",
        href: liveUrl,
        external: /^https?:\/\//i.test(liveUrl),
      }
    : videoDemoUrl
      ? {
          label: "Watch Demo",
          href: videoDemoUrl,
          external: isExternalVideo,
        }
      : {
          label: "Start a Similar Project",
          href: "/contact",
          external: false,
        };

  const showVideoAsSecondary = Boolean(videoDemoUrl && liveUrl);
  const showContactLink = Boolean(liveUrl || videoDemoUrl);

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
            <div className={styles.actionRow}>
              <PrimaryButton
                text={primaryAction.label}
                href={primaryAction.href}
                height={44}
                target={primaryAction.external ? "_blank" : undefined}
                rel={
                  primaryAction.external ? "noopener noreferrer" : undefined
                }
              />
              {showContactLink ? (
                <OutlineButton
                  text="Start a Similar Project"
                  href="/contact"
                  height={44}
                />
              ) : null}
            </div>

            {showVideoAsSecondary ? (
              <a
                href={videoDemoUrl}
                className={styles.secondaryLink}
                target={isExternalVideo ? "_blank" : undefined}
                rel={isExternalVideo ? "noopener noreferrer" : undefined}
              >
                Watch Demo
                <span aria-hidden="true"> →</span>
              </a>
            ) : null}
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
