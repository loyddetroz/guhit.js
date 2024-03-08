import {Shape} from '.';

export type SquareOptions = {
  x: number;
  y: number;
  size: number;
  isClear?: boolean;
  isStroke?: boolean;
  fillStyle?: string;
  strokeStyle?: string;
};

export class Square implements Shape {
  x: number;
  y: number;
  size: number;
  isClear?: boolean;
  isStroke?: boolean;
  fillStyle?: string;
  strokeStyle?: string;

  constructor(options: SquareOptions) {
    const {x, y, size, isClear, isStroke, fillStyle, strokeStyle} = options;

    this.x = x;
    this.y = y;
    this.size = size;
    this.isClear = isClear;
    this.isStroke = isStroke;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
  }

  public renderToCanvas(context: CanvasRenderingContext2D) {
    const {x, y, size, isClear, isStroke, fillStyle, strokeStyle} = this;

    if (fillStyle) context.fillStyle = fillStyle;
    if (strokeStyle) context.strokeStyle = strokeStyle;

    if (isClear) {
      context.clearRect(x, y, size, size);
      return;
    }

    if (isStroke) {
      context.clearRect(x, y, size, size);
      return;
    }

    context.fillRect(x, y, size, size);
  }
}
