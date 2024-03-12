import {Shape} from './interfaces';
import {Position, ColorOptions} from './types';

export type CircleOptions = {
  radius: number;
} & Position &
  ColorOptions;

export class Circle implements Shape {
  private TAU = 2 * Math.PI;
  private STARTING_ANGLE = 0; // In radians.
  private IS_COUNTERCLOCKWISE = true;

  x: number;
  y: number;
  radius: number;
  fillStyle?: string;
  strokeStyle?: string;

  constructor(options: CircleOptions) {
    const {x, y, radius, fillStyle, strokeStyle} = options;

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
  }

  renderToCanvas(context: CanvasRenderingContext2D): void {
    const {
      x,
      y,
      radius,
      STARTING_ANGLE,
      TAU,
      fillStyle,
      strokeStyle,
      IS_COUNTERCLOCKWISE,
    } = this;

    context.beginPath();
    context.arc(x, y, radius, STARTING_ANGLE, TAU, !IS_COUNTERCLOCKWISE);

    if (strokeStyle) {
      context.strokeStyle = strokeStyle;
      context.stroke();
      return;
    }
    context.fillStyle = fillStyle ?? 'white';
    context.fill();
  }
}
