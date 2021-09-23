import { random } from '../../../utils';

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

export interface ISparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex?: number;
  };
}

export const generateSparkle = (color = DEFAULT_COLOR): ISparkle => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(10, 20),
    style: {
      // Pick a random spot in the available space
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    },
  };
};
