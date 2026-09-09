import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/utils/buttons";
import { CaseStudiesData } from "@/data/pages/case-studies/CaseStudiesData";
import styles from "./case-studies-hero.module.css";

export default function CaseStudiesHero() {
  const industries = CaseStudiesData.categories.items;

  return (
    <section className={styles.hero} aria-labelledby="case-studies-hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgLine} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>CASE STUDIES</p>
          <h1 id="case-studies-hero-heading" className={styles.heading}>
            Real Problems. Better Systems.{" "}
            <span className={styles.highlight}>Measurable Outcomes.</span>
          </h1>
          <p className={styles.description}>
            Explore how System Heuristics helps real teams — clinicians,
            engineers, and operators — improve sales, marketing and operations
            through AI agents, automation, integrations and custom software.
          </p>
          <p className={styles.supporting}>
            Browse our work across Healthcare and Construction to see how
            complex workflows are turned into connected, scalable systems.
          </p>

          <div className={styles.actions}>
            <PrimaryButton
              text="Explore Case Studies"
              href="#case-study-categories"
              height={46}
            />
            <SecondaryButton
              text="View All Projects"
              href="/projects"
              height={46}
            />
          </div>
        </div>

        <div
          className={styles.peopleMosaic}
          aria-label="People working in healthcare and construction"
        >
          <figure className={`${styles.mosaicCard} ${styles.mosaicPrimary}`}>
            <Image
              src={industries[0].image.src}
              alt={industries[0].image.alt}
              fill
              sizes="(max-width: 820px) 100vw, 55vw"
              className={styles.mosaicImage}
              priority
            />
            <figcaption className={styles.mosaicCaption}>
              <span className={styles.mosaicEyebrow}>01</span>
              <span className={styles.mosaicTitle}>{industries[0].name}</span>
              <span className={styles.mosaicSub}>{industries[0].caption}</span>
            </figcaption>
          </figure>

          <figure className={`${styles.mosaicCard} ${styles.mosaicSecondary}`}>
            <Image
              src={industries[1].image.src}
              alt={industries[1].image.alt}
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              className={styles.mosaicImage}
              priority
            />
            <figcaption className={styles.mosaicCaption}>
              <span className={styles.mosaicEyebrow}>02</span>
              <span className={styles.mosaicTitle}>{industries[1].name}</span>
              <span className={styles.mosaicSub}>{industries[1].caption}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
