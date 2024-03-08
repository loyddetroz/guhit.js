import * as guhit from '../../../canvas';
// eslint-disable-next-line node/no-unpublished-import
import {describe, expect, it} from '@jest/globals';
import {CanvasOptions} from '../../../common/types';

describe('Canvas Creation', () => {
  it('creates a canvas as the first child of the HTML body', () => {
    new guhit.Canvas();

    const {
      body: {firstChild},
    } = document;
    expect(firstChild?.nodeName).toBe('CANVAS');
  });

  it('uses the specified canvas through the selector', () => {
    const domCanvas = document.createElement('canvas');
    domCanvas.id = 'test';
    document.body.appendChild(domCanvas);
    const options = {selector: '#test'};

    const canvas = new guhit.Canvas(options);
    expect(canvas.element.id).toBe('test');
  });

  it('throws an error if the selected element is not a canvas tag', () => {
    const div = document.createElement('div');
    div.id = 'divTest';
    document.body.appendChild(div);
    const options = {selector: '#divTest'};

    expect(() => new guhit.Canvas(options)).toThrowError();
  });
});

describe('Is set to fill the entire screen', () => {
  it('sets the width equal to the innerWidth of the window.', () => {
    const options: CanvasOptions = {
      isFullscreen: true,
    };

    const canvas = new guhit.Canvas(options);
    expect(canvas.width).toBe(window.innerWidth);
  });

  it('sets the height equal to the innerHeight of the window.', () => {
    const options: CanvasOptions = {
      isFullscreen: true,
    };

    const canvas = new guhit.Canvas(options);
    expect(canvas.height).toBe(window.innerHeight);
  });

  it('sets the width attribute to be equal to 100%', () => {
    const options: CanvasOptions = {
      isFullscreen: true,
    };

    const canvas = new guhit.Canvas(options);
    const canvasWidth = canvas.element.width;
    const windowWidth = window.innerWidth;
    const percentage = (windowWidth / canvasWidth) * 100;

    expect(percentage).toBe(100);
  });

  it('sets the height attribute to be equal to 100%', () => {
    const options: CanvasOptions = {
      isFullscreen: true,
    };

    const canvas = new guhit.Canvas(options);
    const canvasHeight = canvas.element.height;
    const windowHeight = window.innerHeight;
    const percentage = (windowHeight / canvasHeight) * 100;

    expect(percentage).toBe(100);
  });

  it('sets the body to have a margin of 0', () => {
    const options: CanvasOptions = {
      isFullscreen: true,
    };

    new guhit.Canvas(options);
    const {body} = document;

    expect(body.getAttribute('margin')).toBe('0');
  });
});

describe('Is given custom dimensions', () => {
  it('sets the width equal to the given custom width', () => {
    const options: CanvasOptions = {
      width: 800,
      height: 900,
    };

    const canvas = new guhit.Canvas(options);
    expect(canvas.width).toBe(800);
    expect(canvas.element.width).toBe(800);
  });

  it('sets the height equal to the given custom height', () => {
    const options: CanvasOptions = {
      width: 800,
      height: 900,
    };

    const canvas = new guhit.Canvas(options);
    expect(canvas.height).toBe(900);
    expect(canvas.element.height).toBe(900);
  });
});
