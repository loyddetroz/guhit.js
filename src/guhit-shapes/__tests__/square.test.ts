import * as guhit from '../../guhit-core';
import {Square} from '../square';
// eslint-disable-next-line node/no-unpublished-import
import {describe, expect, it, jest} from '@jest/globals';

describe('Canvas Square rendering', () => {
  it('renders a square shape', () => {
    const canvas = new guhit.Canvas();
    const {context} = canvas;
    const fillRectSpy = jest.spyOn(context, 'fillRect');

    const square = new Square({x: 0, y: 0, size: 300});
    canvas.draw(square);

    expect(fillRectSpy).toHaveBeenCalledWith(0, 0, 300, 300);
  });
});
