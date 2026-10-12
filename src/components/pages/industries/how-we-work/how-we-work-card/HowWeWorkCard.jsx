import styles from "./how-we-work-card.module.css";

const HowWeWorkCard = ({ info }) => {
  return (
    <div className={`${styles.card} `}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h3>{info.title}</h3>
          <p className="description">{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkCard;
