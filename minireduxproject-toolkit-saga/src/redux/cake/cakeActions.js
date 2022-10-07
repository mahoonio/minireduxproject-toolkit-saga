import { BUY_CAKE } from './cakeTypes';
export const buyCake = (number = 1) => {
  return { type: BUY_CAKE, payload: isNaN(number) ? 0 : parseInt(number) };
};
