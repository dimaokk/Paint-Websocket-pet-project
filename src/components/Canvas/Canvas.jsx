import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tool/Brush";
import styles from "./Canvas.module.scss";

export const Canvas = observer(() => {
  const ref = useRef();

  useEffect(() => {
    canvasState.setCanvas(ref.current);
    toolState.setTool(new Brush(ref.current));
  }, []);
  return (
    <div className={styles.canvas}>
      <canvas ref={ref} width={900} height={500}></canvas>
    </div>
  );
});
