// @ts-check

import {
  missingParam,
  throwMissingParamError,
  findMaxNumber,
} from '../helpers';

interface Payload {
  items?: Array<number>;
}

const sortBySignificantDigit = (items: Array<number>, divider: number) => {
  const buckets = [];
  items.forEach((item) => {
    const index = Math.floor(item / divider) % 10;
    buckets[index] = buckets[index] || [];
    buckets[index].push(item);
  });

  let k = 0;
  for (let i = 0; i < 10; i++) {
    const itemsInBucket = buckets[i] || [];
    for (let j = 0; j < itemsInBucket.length; j++) {
      items[k] = itemsInBucket[j];
      k += 1;
    }
  }
};

/**
 * Sorts a given array of positive integer numbers using the radix sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<number>} the sorted array
 */
const radixSort = (payload: Payload): Array<number> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items } = payload;
  const size = items.length;

  if (size < 2) {
    return items;
  }

  let divider = 1;
  const maximum = findMaxNumber(items);

  while (Math.floor(maximum / divider) > 0) {
    sortBySignificantDigit(items, divider);
    divider *= 10;
  }

  return items;
};

export default radixSort;
