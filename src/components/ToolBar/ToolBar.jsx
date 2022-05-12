import React from "react";
import styles from "./ToolBar.module.scss";
import { IoBrushOutline } from "react-icons/io5";
export const ToolBar = () => {
  return (
    <div className={styles.toolbar}>
      <button className={styles.toolbarBtn}>
        <IoBrushOutline size={20} />
      </button>
    </div>
  );
};
