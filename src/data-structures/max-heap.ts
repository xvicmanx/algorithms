// @ts-check

import Heap, { DEFAULT_COMPARER } from './heap';

/**
 * A MaxHeap is a data structure that forms a kind of binary tree symbolically.
 * In it every parent node is greater than this corresponding children.
 * At the root of the tree the element is the greatest value.
 * */
class MaxHeap extends Heap {
  constructor(compareFunc: Function = DEFAULT_COMPARER) {
    super((a, b) => compareFunc(b, a));
  }
}

export default MaxHeap;
