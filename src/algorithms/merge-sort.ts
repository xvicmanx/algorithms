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

const merge = (
  first: Array<any>,
  second: Array<any>,
  comparer: Function,
): Array<any> => {
  const firstTotal = first.length;
  const secondTotal = second.length;
  let f = 0;
  let s = 0;
  const result = [];

  for (let i = 0; i < (firstTotal + secondTotal); i += 1) {
    let item;

    if (f >= firstTotal) {
      item = second[s++];
    } else if (s >= secondTotal) {
      item = first[f++];
    } else {
      item = isGreater(first[f], second[s], comparer) ?
        second[s++] : first[f++];
    }

    result[i] = item;
  }

  return result;
};

const internalMergeSort = (
  items: Array<any>,
  comparer: Function,
): Array<any> => {
  const total = items.length;

  if (total <= 1) {
    return items;
  }
  
  if (total === 2) {
    if (isGreater(items[0], items[1], comparer)) {
      swap(0, 1, items);
    }
      
    return items;
  }

  const middle = Math.floor(total / 2);

  return merge(
    internalMergeSort(items.slice(0, middle), comparer),
    internalMergeSort(items.slice(middle), comparer),
    comparer,
  );
};

/**
 * Sorts a given array using the merge sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<any>} the sorted array
 */
const mergeSort = (payload: Payload): Array<any> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  return internalMergeSort(
    payload.items,
    payload.comparer || DEFAULT_COMPARER,
  );
};

export default mergeSort;
