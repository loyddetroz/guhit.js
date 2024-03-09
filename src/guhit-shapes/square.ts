import {Rectangle} from './rectangle';
import {ColorOptions, Position} from './types';

export type SquareOptions = {
  size: number;
} & Position &
  ColorOptions;

export class Square extends Rectangle {
  constructor(options: SquareOptions) {
    const {x, y, size, fillStyle, strokeStyle} = options;
    super({x, y, width: size, length: size, fillStyle, strokeStyle});
  }

  public renderToCanvas(context: CanvasRenderingContext2D) {
    super.renderToCanvas(context);
  }
}
