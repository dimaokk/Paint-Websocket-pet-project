import React from "react";
import styles from "./ToolBar.module.scss";
import {
  IoBrushOutline,
  IoSquare,
  IoEllipseOutline,
  IoArrowBack,
  IoArrowForward,
  IoSaveOutline,
} from "react-icons/io5";
import { BsEraser, BsSlashLg } from "react-icons/bs";
export const ToolBar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.btnGroup}>
        <button className={styles.toolbar__btn}>
          <IoBrushOutline size={25} />
        </button>
        <button className={styles.toolbar__btn}>
          <IoSquare size={25} />
        </button>
        <button className={styles.toolbar__btn}>
          <IoEllipseOutline size={25} />
        </button>
        <button className={styles.toolbar__btn}>
          <BsEraser size={25} />
        </button>
        <button className={styles.toolbar__btn}>
          <BsSlashLg size={25} />
        </button>
        <input type="color" value="#0fcde6" />
      </div>
      <div className={styles.navigteGroup}>
        <button className={styles.toolbar__btn}>
          <IoArrowBack size={25} />
        </button>
        <button className={styles.toolbar__btn}>
          <IoArrowForward size={25} />
        </button>
        <button className={styles.toolbar__btn}>
          <IoSaveOutline size={25} />
        </button>
      </div>
    </div>
  );
};
