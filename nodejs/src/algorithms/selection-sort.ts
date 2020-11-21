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
 * Sorts a given array using the selection sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<any>} the sorted array
 */
const selectionSort = (payload: Payload): Array<any> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items, comparer } = payload;
  const cmp = comparer || DEFAULT_COMPARER;
  const size = items.length;

  for (let i = 0; i < size; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < size; j++) {
      if (isGreater(items[minimumIndex], items[j], cmp)) {
        minimumIndex = j;
      }
    }
    swap(i, minimumIndex, items);
  }

  return items;
};

export default selectionSort;
