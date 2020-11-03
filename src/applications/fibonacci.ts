// @ts-check

interface Payload {
  n?: number;
}

// Recursive implementation of the fibonacci.
// Reducing the number of calls by using dynamic programming (memoization)
const auxFibonacci = (n: number, cache: Array<number>): number => {
  if (typeof cache[n] !== 'undefined') {
    return cache[n];
  }

  cache[n] = auxFibonacci(n - 1, cache) + auxFibonacci(n - 2, cache);

  return cache[n];
};


/**
 * Calculates the fibonacci of a given number
 * @param {Payload} payload - payload
 * @return {number} the fibonacci of the given number
 */
const fibonacci = (payload: Payload): number => {
  if (payload.n === null || typeof payload.n === 'undefined') {
    throw new Error('Please, provide the "n" parameter');
  }

  if (payload.n < 0) {
    throw new Error('Please, provide a non negative number');
  }

  const cache = [0, 1];

  return auxFibonacci(payload.n, cache);
};

export default fibonacci;
