import { Grid } from "@mui/material";
import styles from "./who-we-are-card.module.css";
import Divider from "@mui/material/Divider";

const WhoWeAreCard = ({ info, index, cardRefs }) => {
  return (
    <Grid
      container
      key={index}
      className={`${styles.cardWrapper} bgGlassWGlow`}
      ref={(el) => (cardRefs.current[index] = el)}
    >
      <Grid container>
        <Grid size={{ xs: 2, sm: 1, md: 3 }} className={styles.index}>
          0{index + 1}
        </Grid>
        <Grid size={{ xs: 10, sm: 11, md: 9 }}>
          <h6 className={styles.title}>{info.title}</h6>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 3 }} className={styles.index}></Grid>
        <Grid size={{ xs: 12, sm: 11, md: 9 }}>
          <div className={`${styles.card} `}>
            <div className={styles.info}>
              <div className={styles.infoText}>
                <p className={`description ${styles.description}`}>
                  {info.description}
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhoWeAreCard;
