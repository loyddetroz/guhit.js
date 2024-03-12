import {Shape} from './interfaces';
import {ColorOptions, Position} from './types';

export type RectangleOptions = {
  width: number;
  length: number;
} & Position &
  ColorOptions;

export class Rectangle implements Shape {
  x: number;
  y: number;
  width: number;
  length: number;
  fillStyle?: string;
  strokeStyle?: string;

  constructor(options: RectangleOptions) {
    const {x, y, width, length, fillStyle, strokeStyle} = options;

    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
  }

  renderToCanvas(context: CanvasRenderingContext2D): void {
    const {x, y, width, length, fillStyle, strokeStyle} = this;

    if (strokeStyle) {
      context.strokeStyle = strokeStyle;
      context.strokeRect(x, y, width, length);
    } else {
      context.fillStyle = fillStyle ?? 'black';
      context.fillRect(x, y, width, length);
    }
  }
}
