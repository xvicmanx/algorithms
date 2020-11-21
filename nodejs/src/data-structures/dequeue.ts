// @ts-check

/**
 * A Dequeue is an ordered data structure which follows the FIFO or LIFO (First In First Out or Last In First Out) strategy to access its internal items.
 * This means that the first or last element added to the collection can be accessible and taken out.
 * It can also add elements to the front or the back of the collection.
 * */
class Dequeue {
  // To store the items of the dequeue
  private _items: { [key: number]: any };
  // To point to the last element
  private _tail: number;
  // To point to the first element
  private _head: number;

  /**
   * Dequeue Constructor
   */
  constructor() {
    this._items = {};
    this._head = 0;
    this._tail = 0;
  }

  /**
   * Inserts an item to the first position of the dequeue
   * @param {any} item - The item to be inserted
   */
  pushFront(item: any) {
    this._head -= 1;
    this._items[this._head] = item;
  }

  /**
   * Inserts an item to the last position of the dequeue
   * @param {any} item - The item to be inserted
   */
  pushBack(item: any) {
    this._items[this._tail] = item;
    this._tail += 1;
  }

  /**
   * Reads the element at first position of the dequeue without removing it.
   * @return {any} The element at first position.
   */
  peekFront() {
    return this._items[this._head];
  }

  /**
   * Reads the element at first position of the dequeue without removing it.
   * @return {any} The element at first position.
   */
  peekBack() {
    return this._items[this._tail - 1];
  }

  /**
   * Removes the element at first position of the dequeue and return it.
   * @return {any} The element at first position.
   */
  popFront() {
    if (!this.size()) {
      return undefined;
    }

    const value = this._items[this._head];
    delete this._items[this._head];
    this._head += 1;
  
    return value;
  }

  /**
   * Removes the element at lat position of the dequeue and return it.
   * @return {any} The element at last position.
   */
  popBack() {
    if (!this.size()) {
      return undefined;
    }

    const value = this._items[this._tail - 1];
    delete this._items[this._tail - 1];
    this._tail -= 1;
  
    return value;
  }

  /**
   * Returns the size of the Dequeue which is the number of elements inserted.
   * @return {number} The number of elements.
   */
  size(): number {
    return this._tail - this._head;
  }

  /**
   * Returns whether the dequeue is empty or not.
   * @return {boolean} A flag indicating if the dequeue is empty.
   */
  empty(): boolean {
    return !this.size();
  }

  /**
   * Clears the dequeue.
   */
  clear() {
    this._items = {};
    this._head = 0;
    this._tail = 0;
  }

  /**
   * Returns the string representation of the dequeue
   * @return {string} the string representation of the dequeue.
   */
  toString(): string {
    return Object.values(this._items).join(',');
  }
}

export default Dequeue;
