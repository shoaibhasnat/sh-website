import { Container } from "@mui/material";
import { UnderMaintenanceData } from "../../../data/under-maintenance/UnderMaintenanceData";
import LazyImage from "../../ui/lazy-image/LazyImage";
import styles from "./under-maintenance.module.css";

const UnderMaintenanceMain = () => {
  const { title, description, image, logo } = UnderMaintenanceData.hero;

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <span className={styles.logo}>
          <LazyImage src={logo} alt="System Heuristics logo" width={100} height={100} />
          <p> System Heuristics</p>
        </span>
        {image && (
          <LazyImage
            src={image}
            alt="Maintenance illustration"
            width={720}
            height={520}
            className={styles.image}
          />
        )}
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </Container>
  );
};

export default UnderMaintenanceMain;
