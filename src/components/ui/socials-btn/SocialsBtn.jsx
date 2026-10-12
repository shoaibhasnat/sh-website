import React from "react";
import styles from "./socials-btn.module.css";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Constants } from "../../../utils/global/Constants";

const SocialsBtn = () => {
  return (
    <div className={styles.card}>
      <div className={styles.background}></div>
      <div className={styles.logo}>Connect</div>

      <div
        className={`${styles.box} ${styles.box1}`}
        style={{zIndex:100}}
        onClick={() => window.open(Constants?.socials?.instagram, "_blank")}
      >
        <span className={styles.icon}>
          <Instagram color="#ff027c" />
        </span>
      </div>
      {/* Facebook */}
      <div
        className={`${styles.box} ${styles.box2}`}
        style={{zIndex:101}}
        onClick={() => window.open(Constants?.socials?.facebook, "_blank")}
      >
        <span className={styles.icon}>
          <Facebook color="#0289ff" />
        </span>
      </div>

      {/* Instagram */}

      {/* LinkedIn */}
      <div
        className={`${styles.box} ${styles.box3}`}
        style={{zIndex:102}}
        onClick={() => window.open(Constants?.socials?.linkedin, "_blank")}
      >
        <span className={styles.icon}>
          <Linkedin color="#003193" />
        </span>
      </div>
    </div>
  );
};

export default SocialsBtn;
