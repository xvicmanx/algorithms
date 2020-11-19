// @ts-check

import {
  missingParam,
  throwMissingParamError,
  isGreater,
  DEFAULT_COMPARER,
} from '../helpers';

interface Payload {
  items?: Array<any>;
  comparer?: Function,
}

/**
 * Sorts a given array using the insertion sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<any>} the sorted array
 */
const insertionSort = (payload: Payload): Array<any> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items, comparer } = payload;
  const cmp = comparer || DEFAULT_COMPARER;
  const size = items.length;

  for (let i = 1; i < size; i += 1) {
    let j = i;
    let temp = items[i];
    
    while (j > 0 && isGreater(items[j - 1], temp, cmp)) {
      items[j] = items[j - 1];
      j -= 1;
    }

    items[j] = temp;
  }

  return items;
};

export default insertionSort;
