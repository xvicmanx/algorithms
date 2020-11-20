// @ts-check

import {
  missingParam,
  throwMissingParamError,
  isGreater,
  DEFAULT_COMPARER,
  swap,
  findMaxNumber,
  findMinNumber,
} from '../helpers';
import mergeSort from './merge-sort';

interface Payload {
  items?: Array<number>;
  bucketSize?: number
}

/**
 * Sorts a given array of positive integer numbers using the bucket sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<number>} the sorted array
 */
const bucketSort = (payload: Payload): Array<number> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items } = payload;
  let { bucketSize } = payload;
  const size = items.length;
  
  if (size < 2) {
    return items;
  }

  bucketSize = bucketSize || 2;
  const maximum = findMaxNumber(items);
  const minimum = findMinNumber(items);
  const numberOfBuckets = Math.floor((maximum - minimum) / bucketSize) + 1;
  const buckets = [];

  items.forEach((item) => {
    const index = Math.floor((item - minimum) / bucketSize);
    buckets[index] = buckets[index] || [];
    buckets[index].push(item);
  });

  let k = 0;
  for (let b = 0; b < buckets.length; b += 1) {
    buckets[b] = mergeSort({ items: buckets[b] });
    for (let i = 0; i < buckets[b].length; i += 1) {
      items[k++] = buckets[b][i];
    }
  }

  return items;
};

export default bucketSort;
