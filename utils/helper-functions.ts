/**
 * @EXPORTS
 */
export { generateRandomNumberInRange };

/**
 * Generates a random integer within a specified range.
 * @method generateRandomNumberInRange
 * @param  {number} min - lower boundary
 * @param  {number} max - upper boundary
 * @returns {number} - random number in range [min,max]
 */
const generateRandomNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
