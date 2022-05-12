export default class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.destroyEvent();
  }

  destroyEvent() {
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
  }
}
