import React from "react";
import toolState from "../../store/toolState";
import styles from "./Setting.module.scss";

export const Settings = () => {
  return (
    <div className={styles.setting}>
      <div className={styles.setting_tool}>
        <label className={styles.lable} htmlFor="line-width">
          Толщина линии
        </label>
        <input
          onChange={(e) => toolState.setLineWidth(e.target.value)}
          className={styles.int}
          type="number"
          defaultValue={1}
          min={1}
          max={50}
          id="line-width"
        />
      </div>
      <div className={styles.setting_tool}>
        <label className={styles.lable} htmlFor="line-color">
          Цвет обводки
        </label>
        <input
          onChange={(e) => toolState.setStrokeColor(e.target.value)}
          className={styles.int}
          type="color"
          id="line-color"
        />
      </div>
    </div>
  );
};
