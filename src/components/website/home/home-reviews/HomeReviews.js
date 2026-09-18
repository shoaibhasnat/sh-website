"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LinkedinFilled } from "@ant-design/icons";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-reviews.module.css";

function StarRating({ rating }) {
  return (
    <p className={styles.stars}>
      <span className={styles.srOnly}>{rating} out of 5 stars</span>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating;
        return (
          <svg
            key={index}
            className={`${styles.star} ${filled ? styles.starFilled : ""}`}
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M10 1.6l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 13.7l-4.7 2.46.9-5.24-3.8-3.7 5.25-.76L10 1.6z" />
          </svg>
        );
      })}
    </p>
  );
}

export default function HomeReviews() {
  const { testimonialsSection } = HomeData;
  const items = testimonialsSection.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return undefined;
      }
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  const getOffset = (index) => {
    let offset = index - activeIndex;
    const half = Math.floor(items.length / 2);

    if (offset > half) offset -= items.length;
    if (offset < -half) offset += items.length;

    return offset;
  };

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-reviews-heading"
    >
      <div className={shared.inner}>
        <div className={`${shared.header} ${shared.headerCenter}`}>
          <p className={shared.eyebrow}>{testimonialsSection.intro.title}</p>
          <h2 id="home-reviews-heading" className={shared.heading}>
            Trusted by Teams Who Ship Real Work.
          </h2>
          <p className={shared.description}>
            {testimonialsSection.intro.description}
          </p>
        </div>

        <div className={styles.slider} aria-live="polite">
          <div
            className={styles.stage}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {items.map((review, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;
              const abs = Math.abs(offset);
              const visible = abs <= 2;

              return (
                <article
                  key={review.name}
                  className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                  style={{
                    "--offset": offset,
                    "--abs": abs,
                    opacity: visible ? 1 - abs * 0.22 : 0,
                    pointerEvents: visible ? "auto" : "none",
                    zIndex: 10 - abs,
                  }}
                  {...(!isActive ? { "aria-hidden": true, inert: true } : {})}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      “
                    </span>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className={styles.quote}>{review.text}</p>
                  <div className={styles.authorRow}>
                    <div className={styles.authorIdentity}>
                      <div className={styles.avatar}>
                        <Image
                          src={review.url}
                          alt=""
                          width={48}
                          height={48}
                          className={styles.avatarImage}
                        />
                      </div>
                      <p className={styles.author}>{review.name}</p>
                    </div>
                    {isActive && review.linkedin ? (
                      <a
                        href={review.linkedin}
                        className={styles.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${review.name} on LinkedIn`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <LinkedinFilled className={styles.linkedinIcon} />
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Previous review"
              onClick={() =>
                setActiveIndex(
                  (current) => (current - 1 + items.length) % items.length,
                )
              }
            >
              <svg
                className={styles.navIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14.5 6.5 9 12l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className={styles.counter}>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Next review"
              onClick={() =>
                setActiveIndex((current) => (current + 1) % items.length)
              }
            >
              <svg
                className={styles.navIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9.5 6.5 15 12l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
