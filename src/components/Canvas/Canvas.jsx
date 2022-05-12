import React from "react";
import styles from "./Canvas.module.scss";

export const Canvas = () => {
  return (
    <div className={styles.canvas}>
      <canvas width={900} height={500}></canvas>
    </div>
  );
};
