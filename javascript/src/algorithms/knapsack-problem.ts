// @ts-check

import {
  missingParam,
  throwMissingParamError,
  findMaxNumber,
  argMax,
  maximum,
} from '../helpers';

interface Item {
  weight: number;
  value: number;
}

interface Payload {
  items?: Array<Item>;
  capacity?: number;
}

interface Result {
  value: number;
  items: Array<Item>;
}

/**
 * Finds the weight for maximum value without exceeding sack capacity
 * @param {Payload} payload - payload
 * @return {Result} The optimal solution
 */
const knapsackProblem = (payload: Payload): Result => {
  if (missingParam(payload, 'items')) {
    throwMissingParamError('items');
  }

  if (missingParam(payload, 'capacity')) {
    throwMissingParamError('capacity');
  }

  const { items, capacity } = payload;
  const sackValue = [];
  const sackItems = [];
    
  // Initialization
  for (let i = 0; i <= capacity; i++) {
    sackValue[i] = 0;
    sackItems[i] = [];
  }

  // Filling up the table using bottom up approach
  for (let weight = 0; weight <= capacity; weight++) {
    let maximumValue = 0;
    let maximumItem = null;
    const validItems = items.filter(item => item && item.weight <= weight);
  
    if (validItems.length) {
      const fn = item => item.value + sackValue[weight - item.weight];
      maximumItem = argMax(fn).forItemsIn(validItems);
      maximumValue = maximum(fn).forItemsIn(validItems);
    }

    if (maximumItem) {
      sackValue[weight] = maximumValue;
      sackItems[weight] = [...sackItems[weight - maximumItem.weight], maximumItem];
    }
  }

  return {
    value: sackValue[capacity],
    items: sackItems[capacity],
  };
};

export default knapsackProblem;
