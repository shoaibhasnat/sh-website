import styles from "./industries-services-card.module.css";
import Divider from "@mui/material/Divider";

const IndustriesServicesSectionCard = ({ info }) => {
  return (
    <div className={`${styles.card} `}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h6>{info.title}</h6>
          <p className={`description ${styles.description}`}>
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServicesSectionCard;
