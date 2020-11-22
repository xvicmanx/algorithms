// @ts-check

export const DEFAULT_COMPARER = (first: any, second: any): number => {
  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
};

/**
 * A Heap is a data structure that forms a kind of binary tree symbolically.
 * In it every parent node is greater (max heap) or smaller (min heap) than this corresponding children.
 * At the root of the tree the element is the greatest (max heap) or smallest (min heap).
 * */
class Heap {
  // To store the items of the heap
  private _items: { [key: number]: any };
  // To keep track of the count of inserted items
  private _count: number;
  // To compare items 
  private _compareItem: Function;

  /**
   * Heap Constructor
   */
  constructor(compareItem: Function = DEFAULT_COMPARER) {
    this._items = {};
    this._count = 0;
    this._compareItem = compareItem;
  }

  /**
   * Inserts an item to the top of the heap
   * @param {any} item - The item to be inserted
   * @return {boolean} To indicate if the item was successfully added
   */
  insert(item: any): boolean {
    if (item === null) {
      return false;
    }

    this._items[this._count] = item;
    this._count += 1;

    if (this._count > 1) {
      this._heapifyUp(this._count - 1);
    }

    return true;
  }

  /**
   * Reads the element at the top of the heap without removing it.
   * @return {any} The element at the top.
   */
  peek() {
    return this._items[0];
  }

  /**
   * Removes the element at the top of the heap and return it.
   * @return {any} The element at the top.
   */
  extract() {
    if (!this._count) {
      return undefined;
    }
    
    const value = this._items[0];

    if (this._count === 1) {
      delete this._items[0];
      this._count -= 1;
      return value;
    }

    this._swap(0, this._count - 1);
    delete this._items[this._count - 1];
    this._count -= 1;
    this._heapifyDown(0);

    return value;
  }

  /**
   * Returns the size of the Heap which is the number of elements inserted.
   * @return {number} The number of elements.
   */
  size(): number {
    return this._count;
  }

  /**
   * Returns whether the heap is empty or not.
   * @return {boolean} A flag indicating if the heap is empty.
   */
  empty(): boolean {
    return !this._count;
  }

  /**
   * Clears the heap.
   */
  clear() {
    this._items = {};
    this._count = 0;
  }

  /**
   * Returns the string representation of the heap
   * @return {string} the string representation of the heap.
   */
  toString(): string {
    return Object.values(this._items).join(',');
  }

  private _leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private _rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private _parentIndex(index: number): number | undefined {
    if (!index) {
      return undefined;
    }

    return Math.floor((index - 1) / 2);
  }

  private _swap(index: number, otherIndex: number) {
    return [this._items[otherIndex], this._items[index]] = [this._items[index], this._items[otherIndex]];
  }

  private _heapifyUp(index: number) {
    const parentIndex = this._parentIndex(index);

    if (index && this._compareItem(this._items[parentIndex], this._items[index]) > 0) {
      this._swap(index, parentIndex);
      this._heapifyUp(parentIndex);
    }
  }

  private _heapifyDown(index: number) {
    const leftIndex = this._leftChildIndex(index);
    const rightIndex = this._rightChildIndex(index);
    let swapIndex = index;

    if (leftIndex < this.size() && this._compareItem(this._items[swapIndex], this._items[leftIndex]) > 0) {
      swapIndex = leftIndex;
    }

    if (rightIndex < this.size() && this._compareItem(this._items[swapIndex], this._items[rightIndex]) > 0) {
      swapIndex = rightIndex;
    }

    if (swapIndex !== index) {
      this._swap(index, swapIndex);
      this._heapifyDown(swapIndex);
    }
  }
}

export default Heap;
