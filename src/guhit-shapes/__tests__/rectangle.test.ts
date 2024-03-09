import * as guhit from '../../guhit-core';
import {Rectangle} from '../rectangle';
// eslint-disable-next-line node/no-unpublished-import
import {describe, expect, it, jest} from '@jest/globals';

describe('Canvas Rectangle rendering', () => {
  it('renders a rectangle shape', () => {
    const canvas = new guhit.Canvas();
    const {context} = canvas;
    const fillRectSpy = jest.spyOn(context, 'fillRect');

    const rectangle = new Rectangle({x: 0, y: 0, width: 8, length: 9});
    canvas.draw(rectangle);

    expect(fillRectSpy).toHaveBeenCalledWith(0, 0, 8, 9);
  });
});
