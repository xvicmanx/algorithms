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
const isGreater = (a, b, comparer) => comparer(a, b) === 1;
const swap = (a, b, items) => {
  const temp = items[a];
  items[a] = items[b];
  items[b] = temp;
};

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
