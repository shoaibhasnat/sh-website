import { Container } from "@mui/material";
import { NotFoundData } from "../../../data/not-found/NotFoundData";
import LazyImage from "../../ui/lazy-image/LazyImage";
import styles from "./not-found.module.css";

const NotFoundMain = () => {
  const { title, description, image } = NotFoundData.hero;

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        {image && (
          <LazyImage
          src={image}
          alt="Not found illustration"
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

export default NotFoundMain;
