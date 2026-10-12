import React from "react";
import styles from "./chip.module.css";
const Chip = ({ children, style }) => {
  return (
    <div className={`${styles.chip} description`} style={style}>
      {children}
    </div>
  );
};

export default Chip;
