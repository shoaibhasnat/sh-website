import { PrimaryButton, GhostButton } from "@/utils/buttons";
import styles from "./not-found.module.css";

export default function NotFoundView() {
  return (
    <section className={styles.section} aria-labelledby="not-found-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <p className={styles.eyebrow}>Page not found</p>
        <h1 id="not-found-heading" className={styles.heading}>
          This page doesn&apos;t exist — or it moved.
        </h1>
        <p className={styles.description}>
          The link may be broken, outdated, or typed incorrectly. Head home, or
          explore our projects and case studies to see how System Heuristics
          builds AI automation and custom software.
        </p>

        <div className={styles.actions}>
          <PrimaryButton text="Back to Home" href="/" height={48} />
          <GhostButton text="View Projects" href="/projects" height={48} />
          <GhostButton text="Contact Us" href="/contact" height={48} />
        </div>
      </div>
    </section>
  );
}
