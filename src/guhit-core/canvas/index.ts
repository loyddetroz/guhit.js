import {CanvasOptions} from '../common/types';

interface ICanvas {
  readonly element: HTMLCanvasElement;
  readonly window: Window;
  readonly document: Document;
  readonly width: number;
  readonly height: number;
}

export class Canvas implements ICanvas {
  element: HTMLCanvasElement;
  window: Window;
  document: Document;
  width: number;
  height: number;

  constructor(options?: CanvasOptions) {
    this.window = window;
    this.document = document;

    const {selector, isFullscreen, width, height} = options ?? {selector: null};
    if (!width && height && !isFullscreen) throw new Error('Missing width');
    if (width && !height && !isFullscreen) throw new Error('Missing height');
    if (width && height && !isFullscreen) {
      this.element = this.createCustomCanvas(width, height, selector);
    } else {
      this.element = this.createFullScreenCanvas(selector);
    }

    this.width = this.element.width;
    this.height = this.element.height;
  }

  private createFullScreenCanvas(selector?: string | null): HTMLCanvasElement {
    const {body} = document;
    body.setAttribute('margin', '0');
    body.setAttribute('width', '100%');
    body.setAttribute('height', '100%');

    const {innerWidth, innerHeight} = window;
    return this.createCustomCanvas(innerWidth, innerHeight, selector);
  }

  private createCustomCanvas(
    width: number,
    height: number,
    selector?: string | null
  ): HTMLCanvasElement {
    const canvas = this.createCanvas(selector);

    canvas.width = width;
    canvas.height = height;

    return canvas;
  }

  private createCanvas(selector?: string | null): HTMLCanvasElement {
    if (selector) return this.selectCanvas(selector);

    const {body} = document;
    const canvas = this.document.createElement('canvas');
    body.insertBefore(canvas, body.firstChild);

    return canvas;
  }

  private selectCanvas(selector: string): HTMLCanvasElement {
    const canvas = this.document.querySelector(selector);
    const isCanvasTag = canvas?.tagName === 'CANVAS';
    if (!canvas) throw new Error('Canvas does not exist!');
    if (!isCanvasTag)
      throw new Error('Specified selector does not refer to a Canvas element!');

    return canvas as HTMLCanvasElement;
  }
}
