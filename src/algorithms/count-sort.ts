// @ts-check

import {
  missingParam,
  throwMissingParamError,
  findMaxNumber,
} from '../helpers';

interface Payload {
  items?: Array<number>;
}

/**
 * Sorts a given array of positive integer numbers using the count sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<number>} the sorted array
 */
const countSort = (payload: Payload): Array<number> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items } = payload;
  const size = items.length;

  if (size < 2) {
    return items;
  }

  const counts: Array<number> = [];
  items.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  const maximum = findMaxNumber(items);
  const result = [];
  let index = 0;
  
  for (let i = 0; i <= maximum; i++) {
    let count = counts[i] || 0;

    while (count) {
      result[index++] = i;
      count -= 1;
    }
  }

  return result;
};

export default countSort;
