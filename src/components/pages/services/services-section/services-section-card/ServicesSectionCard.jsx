import styles from "./services-section-card.module.css";
import LazyImage from "../../../../ui/lazy-image/LazyImage";
import AppLink from "../../../../ui/app-link/AppLink";
const ServicesSectionCard = ({ service, index, isLeft, cardRef }) => {
  return (
    <AppLink href={service?.url} style={{ textDecoration: "none" }}>
      <div
        ref={cardRef}
        className={`${styles.card}  ${isLeft ? "card-left" : "card-right"}`}
      >
        {/* Top image */}
        <div className={styles.imageWrapper}>
          <LazyImage src={service?.bannerImage} alt={service?.title} />
        </div>

        <div className={styles.overlay} />

        {/* Bottom content */}
        <div className={styles.content}>
          <span className={styles.index}>{String(index).padStart(2, "0")}</span>
          <p className={styles.title}>{service?.title}</p>
          <p className={`${styles.description}`}>{service?.description}</p>
        </div>
      </div>
    </AppLink>
  );
};

export default ServicesSectionCard;
