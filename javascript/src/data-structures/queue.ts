// @ts-check

/**
 * A Queue is an ordered data structure which follows the FIFO (First In First Out) strategy to access its internal items.
 * This means that the first element added to the collection is the first accessible and being able to taken out.
 * */
class Queue {
  // To store the items of the queue
  private _items: { [key: number]: any };
  // To point to the last element
  private _tail: number;
  // To point to the first element
  private _head: number;

  /**
   * Queue Constructor
   */
  constructor() {
    this._items = {};
    this._head = 0;
    this._tail = 0;
  }

  /**
   * Inserts an item to the last position of the queue
   * @param {any} item - The item to be inserted
   */
  enqueue(item: any) {
    this._items[this._tail] = item;
    this._tail += 1;
  }

  /**
   * Reads the element at first position of the queue without removing it.
   * @return {any} The element at first position.
   */
  peek() {
    return this._items[this._head];
  }

  /**
   * Removes the element at first position of the queue and return it.
   * @return {any} The element at first position.
   */
  dequeue() {
    if (!this.size()) {
      return undefined;
    }

    const value = this._items[this._head];
    delete this._items[this._head];
    this._head += 1;
    return value;
  }

  /**
   * Returns the size of the Queue which is the number of elements inserted.
   * @return {number} The number of elements.
   */
  size(): number {
    return this._tail - this._head;
  }

  /**
   * Returns whether the queue is empty or not.
   * @return {boolean} A flag indicating if the queue is empty.
   */
  empty(): boolean {
    return !this.size();
  }

  /**
   * Clears the queue.
   */
  clear() {
    this._items = {};
    this._head = 0;
    this._tail = 0;
  }

  /**
   * Returns the string representation of the queue
   * @return {string} the string representation of the queue.
   */
  toString(): string {
    return Object.values(this._items).join(',');
  }
}

export default Queue;
