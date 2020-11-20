// @ts-check

import {
  missingParam,
  throwMissingParamError,
  isGreater,
  isSmaller,
  DEFAULT_COMPARER,
  swap,
} from '../helpers';

interface Payload {
  items?: Array<any>;
  comparer?: Function,
}

const getPartitionIndex = (
  items: Array<any>,
  start: number,
  end: number,
  comparer: Function,
): number => {
  let i = start;
  let j = end;
  const pivotIndex = Math.floor((start + end) / 2);
  const pivot = items[pivotIndex];

  while (i <= j) {
    while (isGreater(items[j], pivot, comparer)) {
      j -= 1;
    }

    while (isSmaller(items[i], pivot, comparer)) {
      i += 1;
    }

    if (i <= j) {
      swap(i, j, items);
      i += 1;
      j -= 1;
    }
  }

  return i;
};

const internalQuickSort = (
  items: Array<any>,
  start: number,
  end: number,
  comparer: Function,
): Array<any> => {
  if (items.length <= 1) {
    return items;
  }
  
  const index = getPartitionIndex(
    items,
    start,
    end,
    comparer,
  );

  if (start < index - 1) {
    internalQuickSort(
      items,
      start,
      index - 1,
      comparer,
    );
  }

  if (index < end) {
    internalQuickSort(
      items,
      index,
      end,
      comparer,
    );
  }

  return items;
};

/**
 * Sorts a given array using the quick sort algorithm
 * @param {Payload} payload - payload
 * @return {Array<any>} the sorted array
 */
const quickSort = (payload: Payload): Array<any> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  return internalQuickSort(
    payload.items,
    0,
    payload.items.length - 1,
    payload.comparer || DEFAULT_COMPARER,
  );
};

export default quickSort;
