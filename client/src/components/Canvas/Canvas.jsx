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

  const mouseHandler = () => {
    canvasState.pushUndo(ref.current.toDataURL());
  };
  return (
    <div className={styles.canvas}>
      <canvas
        onMouseDown={() => mouseHandler()}
        ref={ref}
        width={1000}
        height={520}
      ></canvas>
    </div>
  );
});
