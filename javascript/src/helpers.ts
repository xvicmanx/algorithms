// @ts-check

const itemsForRange = (a, b) => Array.from(
  { length: (b - a) + 1 },
  (_, x) => a + x,
);

const summationForItems = fn => (items) =>  items.reduce(
  (acc, item) => acc + fn(item),
  0,
);


const summationForRange = fn => (a, b) => summationForItems(fn)(itemsForRange(a, b));


const argMaxForItems = fn => (items) => {
  let arg = items[0];
  let maximumValue = fn(arg);
  
  items.forEach((item) => {
    const value = fn(item)
    if (value > maximumValue) {
      maximumValue = value;
      arg = item;
    }
  });
  
  return arg;
};

const argMinForItems = fn => (items) => {
  let arg = items[0];
  let minimumValue = fn(arg);
  
  items.forEach((item) => {
    const value = fn(item)
    if (value < minimumValue) {
      minimumValue = value;
      arg = item;
    }
  });
  
  return arg;
};


const maxForItems = fn => (items) => items.reduce(
  (max, item) => Math.max(fn(item), max),
  fn(items[0]),
);

const minForItems = fn => (items) => items.reduce(
  (min, item) => Math.min(fn(item), min),
  fn(items[0]),
);

const argMaxForRange = fn => (a, b) => argMaxForItems(fn)(itemsForRange(a, b));

const argMinForRange = fn => (a, b) => argMinForItems(fn)(itemsForRange(a, b));


const maxForRange = fn => (a, b) => maxForItems(fn)(itemsForRange(a, b));

const minForRange = fn => (a, b) => minForItems(fn)(itemsForRange(a, b));


const DEFAULT_FN = (i) => i;

export const argMax = (fn = DEFAULT_FN) => {
  return {
      forRange: argMaxForRange(fn),
      forItemsIn: argMaxForItems(fn),
  };
};


export const argMin = (fn = DEFAULT_FN) => {
  return {
      forRange: argMinForRange(fn),
      forItemsIn: argMinForItems(fn),
  };
};

export const maximum = (fn = DEFAULT_FN) => {
  return {
      forRange: maxForRange(fn),
      forItemsIn: maxForItems(fn),
  };
};

export const minimum = (fn = DEFAULT_FN) => {
  return {
      forRange: minForRange(fn),
      forItemsIn: minForItems(fn),
  };
};

export const summation = (fn = DEFAULT_FN) => {
  return {
      forRange: summationForRange(fn),
      forItemsIn: summationForItems(fn),
  };
};

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
export const isEqual = (a, b, comparer) => comparer(a, b) === 0;

export const swap = (a, b, items) => {
  const temp = items[a];
  items[a] = items[b];
  items[b] = temp;
};

export const findMaxNumber = (items: Array<number>) => items.reduce((maximum, item) => Math.max(maximum, item), items[0]);

export const findMinNumber = (items: Array<number>) => items.reduce((minimum, item) => Math.min(minimum, item), items[0]);

