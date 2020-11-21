// @ts-check

/**
 * A Stack is an ordered data structure which follows the LIFO (Last In First Out) strategy to access its internal items.
 * This means that the last element added to the collection is the first accessible and being able to taken out.
 * */
class Stack {
  // To store the items of the stack
  private _items: { [key: number]: any };
  // To keep track of the count of inserted items
  private _count: number;

  /**
   * Stack Constructor
   */
  constructor() {
    this._items = {};
    this._count = 0;
  }

  /**
   * Inserts an item to the top of the stack
   * @param {any} item - The item to be inserted
   */
  push(item: any) {
    this._items[this._count] = item;
    this._count += 1;
  }

  /**
   * Reads the element at the top of the stack without removing it.
   * @return {any} The element at the top.
   */
  peek() {
    return this._items[this._count - 1];
  }

  /**
   * Removes the element at the top of the stack and return it.
   * @return {any} The element at the top.
   */
  pop() {
    if (!this._count) {
      return undefined;
    }

    const value = this._items[this._count - 1];
    delete this._items[this._count - 1];
    this._count -= 1;
    return value;
  }

  /**
   * Returns the size of the Stack which is the number of elements inserted.
   * @return {number} The number of elements.
   */
  size(): number {
    return this._count;
  }

  /**
   * Returns whether the stack is empty or not.
   * @return {boolean} A flag indicating if the stack is empty.
   */
  empty(): boolean {
    return !this._count;
  }

  /**
   * Clears the stack.
   */
  clear() {
    this._items = {};
    this._count = 0;
  }

  /**
   * Returns the string representation of the stack
   * @return {string} the string representation of the stack.
   */
  toString(): string {
    return Object.values(this._items).join(',');
  }
}

export default Stack;
