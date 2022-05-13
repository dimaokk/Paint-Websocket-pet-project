import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tool/Brush";
import styles from "./Canvas.module.scss";
import { useParams } from "react-router-dom";
//bs
import { Modal, Button } from "react-bootstrap";
import Rectangle from "../../tool/Rectangle";

export const Canvas = observer(() => {
  const ref = useRef();
  const [show, setShow] = useState(true);
  const refName = useRef();
  const params = useParams();

  useEffect(() => {
    canvasState.setCanvas(ref.current);
  }, []);

  useEffect(() => {
    if (canvasState.username) {
      const socket = new WebSocket("ws://localhost:3001/");
      canvasState.setSoket(socket);
      canvasState.setSessionId(params.id);
      toolState.setTool(new Brush(ref.current, socket, params.id));
      socket.onopen = () => {
        console.log("connect");
        socket.send(
          JSON.stringify({
            id: params.id,
            username: canvasState.username,
            method: "connection",
          })
        );
      };
      socket.onmessage = (e) => {
        let msg = JSON.parse(e.data);
        switch (msg.method) {
          case "connection":
            console.log(`user ${msg.username} connect`);
            break;
          case "draw":
            drawHandler(msg);
            break;

          default:
            break;
        }
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasState.username]);

  const drawHandler = (msg) => {
    const figure = msg.figure;
    const ctx = ref.current.getContext("2d");
    switch (figure.type) {
      case "brush":
        Brush.draw(ctx, figure.x, figure.y);
        break;
      case "rect":
        Rectangle.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height);
        break;
      case "enddraw":
        ctx.beginPath();
        break;

      default:
        break;
    }
  };

  const mouseHandler = () => {
    canvasState.pushUndo(ref.current.toDataURL());
  };

  const connectionHandler = () => {
    let name = refName.current.value;
    canvasState.setUserName(name);
    if (name.length) setShow(false);
  };

  return (
    <div className={styles.canvas}>
      <Modal show={show} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>Введите имя пользователя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input required ref={refName} type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => connectionHandler()}>
            Рисовать!!!
          </Button>
        </Modal.Footer>
      </Modal>
      <canvas
        onMouseDown={() => mouseHandler()}
        ref={ref}
        width={1000}
        height={520}
      ></canvas>
    </div>
  );
});
