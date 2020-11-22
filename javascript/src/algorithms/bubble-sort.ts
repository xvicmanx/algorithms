// @ts-check

import {
  missingParam,
  throwMissingParamError,
  isGreater,
  DEFAULT_COMPARER,
  swap,
} from '../helpers';

interface Payload {
  items?: Array<any>;
  comparer?: Function,
}

/**
 * Sorts a given array using the bubble sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<any>} the sorted array
 */
const bubbleSort = (payload: Payload): Array<any> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items, comparer } = payload;
  const cmp = comparer || DEFAULT_COMPARER;
  const size = items.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (isGreater(items[j], items[j + 1], cmp)) {
        swap(j, j + 1, items);
      }
    }
  }

  return items;
};

export default bubbleSort;
