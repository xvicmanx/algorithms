// @ts-check

import Heap, { DEFAULT_COMPARER } from './heap';

/**
 * Max Heap
 * */
class MaxHeap extends Heap {
  constructor(compareFunc: Function = DEFAULT_COMPARER) {
    super((a, b) => compareFunc(b, a));
  }
}

export default MaxHeap;
