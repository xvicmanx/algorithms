// @ts-check

export const missingParam = (payload: Object, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';

export const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

export const DEFAULT_COMPARER = (a, b) => {
  if (a === b) {
    return 0;
  }
  return (a > b ? 1 : -1);
};

export const isGreater = (a, b, comparer) => comparer(a, b) === 1;
export const isSmaller = (a, b, comparer) => comparer(a, b) === -1;

export const swap = (a, b, items) => {
  const temp = items[a];
  items[a] = items[b];
  items[b] = temp;
};
