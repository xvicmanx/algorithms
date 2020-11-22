// @ts-check

import {
  missingParam,
  throwMissingParamError,
  DEFAULT_COMPARER,
  isSmaller,
  isEqual,
} from '../helpers';

interface Payload {
  items?: Array<any>;
  value?: any,
  comparer?: Function,
}

const internalBinarySearch = (
  items: Array<any>,
  value: any,
  start: number,
  end: number,
  comparer: Function,
): number => {
  const middle = Math.floor((start + end) / 2);

  if (isEqual(value, items[middle], comparer)) {
    return middle;
  }
  
  if (isSmaller(value, items[middle], comparer)) {
    return internalBinarySearch(
      items,
      value,
      start,
      middle - 1,
      comparer,
    );
  }

  return internalBinarySearch(
    items,
    value,
    middle + 1,
    end,
    comparer,
  );
};

/**
 * Searchs for an item in a sorted array using binary search
 * @param {Payload} payload - payload
 * @return number the position of the item
 */
const binarySearch = (payload: Payload): number => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  if (missingParam(payload, 'value')) {
    throwMissingParamError('value');
  }

  const { items, value, comparer } = payload;

  return internalBinarySearch(
    items,
    value,
    0,
    items.length - 1,
    comparer || DEFAULT_COMPARER,
  );
};

export default binarySearch;
