// @ts-check

import {
  missingParam,
  throwMissingParamError,
  swap,
} from '../helpers';

interface Payload {
  items?: Array<any>;
}

/**
 * Shuffles a given array
 * @param {Payload} payload - payload
 * @return {Array<any>} the sorted array
 */
const shuffle = (payload: Payload): Array<any> => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  const { items } = payload;
  const size = items.length;

  for (let i = 0; i < size; i++) {
    console.log(size - i - 1);
    swap(
      size - i - 1,
      Math.floor(Math.random() * (size - i)),
      items,
    );
  }

  return items;
};

export default shuffle;
