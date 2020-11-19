// @ts-check

interface Payload {
  items?: Array<any>;
  comparer?: Function,
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

const DEFAULT_COMPARER = (a, b) => (a > b ? 1 : -1);
const inInverseOrder = (a, b, comparer) => comparer(a, b) === 1;
const swap = (a, b, items) => {
  const temp = items[a];
  items[a] = items[b];
  items[b] = temp;
};

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
      if (inInverseOrder(items[j], items[j + 1], cmp)) {
        swap(j, j + 1, items);
      }
    }
  }

  return items;
};

export default bubbleSort;
