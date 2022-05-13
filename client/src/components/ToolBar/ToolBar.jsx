import React from "react";
import styles from "./ToolBar.module.scss";
//icons
import {
  IoBrushOutline,
  IoSquare,
  IoEllipseOutline,
  IoArrowBack,
  IoArrowForward,
  IoSaveOutline,
} from "react-icons/io5";
//mobx
import { BsEraser, BsSlashLg } from "react-icons/bs";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
//tool
import Brush from "../../tool/Brush";
import Rectangle from "../../tool/Rectangle";
import Circle from "../../tool/Circle";
import Eraser from "../../tool/Eraser";
import Line from "../../tool/Line";

export const ToolBar = () => {
  const cahgeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.btnGroup}>
        <button
          className={styles.toolbar__btn}
          onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
        >
          <IoBrushOutline size={25} />
        </button>

        <button
          className={styles.toolbar__btn}
          onClick={() => toolState.setTool(new Rectangle(canvasState.canvas))}
        >
          <IoSquare size={25} />
        </button>

        <button
          className={styles.toolbar__btn}
          onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
        >
          <IoEllipseOutline size={25} />
        </button>

        <button
          className={styles.toolbar__btn}
          onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
        >
          <BsEraser size={25} />
        </button>

        <button
          className={styles.toolbar__btn}
          onClick={() => toolState.setTool(new Line(canvasState.canvas))}
        >
          <BsSlashLg size={25} />
        </button>

        <input onChange={(e) => cahgeColor(e)} type="color" value="#0fcde6" />
      </div>
      <div className={styles.navigteGroup}>
        <button
          onClick={() => canvasState.undo()}
          className={styles.toolbar__btn}
        >
          <IoArrowBack size={25} />
        </button>

        <button
          onClick={() => canvasState.redo()}
          className={styles.toolbar__btn}
        >
          <IoArrowForward size={25} />
        </button>

        <button className={styles.toolbar__btn}>
          <IoSaveOutline size={25} />
        </button>
      </div>
    </div>
  );
};
