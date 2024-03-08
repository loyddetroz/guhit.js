export interface Shape {
  renderToCanvas(context: CanvasRenderingContext2D): void;
}

export * from './square';
