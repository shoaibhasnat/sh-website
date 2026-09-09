import Image from "next/image";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-reviews.module.css";

function ReviewCard({ review }) {
  return (
    <article className={styles.card}>
      <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
      <div className={styles.authorRow}>
        <div className={styles.avatar}>
          <Image
            src={review.avatar}
            alt=""
            width={44}
            height={44}
            className={styles.avatarImage}
          />
        </div>
        <div>
          <p className={styles.author}>{review.author}</p>
          <p className={styles.role}>{review.role}</p>
        </div>
      </div>
    </article>
  );
}

function ReviewColumn({ reviews, direction, duration }) {
  const trackClass =
    direction === "down" ? styles.trackDown : styles.trackUp;

  return (
    <div className={styles.column} aria-hidden="true">
      <div
        className={`${styles.track} ${trackClass}`}
        style={{ "--marquee-duration": duration }}
      >
        <div className={styles.stack}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.author}-${index}-a`}
              review={review}
            />
          ))}
        </div>
        <div className={styles.stack} aria-hidden="true">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.author}-${index}-b`}
              review={review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeReviews() {
  const { reviews } = HomeData;
  const ascending = reviews.items;
  const descending = [...reviews.items].reverse();

  const columns = [
    { reviews: ascending, direction: "down", duration: "70s" },
    { reviews: descending, direction: "up", duration: "78s" },
    { reviews: ascending, direction: "down", duration: "74s" },
    { reviews: descending, direction: "up", duration: "82s" },
  ];

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-reviews-heading"
    >
      <div className={shared.inner}>
        <div className={`${shared.header} ${shared.headerCenter}`}>
          <p className={shared.eyebrow}>{reviews.eyebrow}</p>
          <h2 id="home-reviews-heading" className={shared.heading}>
            {reviews.heading}
          </h2>
          <p className={shared.description}>{reviews.description}</p>
        </div>

        <div className={styles.board} role="presentation">
          {columns.map((column, index) => (
            <ReviewColumn
              key={`review-col-${index}`}
              reviews={column.reviews}
              direction={column.direction}
              duration={column.duration}
            />
          ))}
        </div>

        <ul className={styles.srOnly}>
          {reviews.items.map((review) => (
            <li key={`${review.author}-${review.role}`}>
              {review.author}, {review.role}: {review.quote}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
