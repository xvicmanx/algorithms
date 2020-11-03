// @ts-check

interface Payload {
  n?: number;
}

/**
 * Calculates the factorial of a given number
 * @param {Payload} payload - payload
 * @return {number} the factorial of the given number
 */
const factorial = (payload: Payload): number => {
  if (payload.n === null || typeof payload.n === 'undefined') {
    throw new Error('Please, provide the "n" parameter');
  }

  if (payload.n < 0) {
    throw new Error('Please, provide a non negative number');
  }

  if (payload.n === 0 || payload.n === 1) {
    return 1;
  }

  return payload.n * factorial({ n: payload.n - 1 });
};

export default factorial;
