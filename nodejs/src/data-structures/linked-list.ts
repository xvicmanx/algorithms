// @ts-check

interface Item {
  value: any;
  next: Item | null;
}

const EQUALS_COMPARE_DEFAULT = (a, b) => a === b;

/**
 * A LinkedList is a data structure that stores its elements one linking to the other.
 * */
class LinkedList {
  // Reference to the first item
  private _head: Item | null;

  // Reference to the last item
  private _tail: Item | null;

  // To keep track of the count of inserted items
  private _count: number;

  private _areItemsEqual: Function;

  /**
   * LinkedList Constructor
   */
  constructor(areItemsEqual: Function = EQUALS_COMPARE_DEFAULT) {
    this._head = null;
    this._tail = null;
    this._count = 0;
    this._areItemsEqual = areItemsEqual;
  }

  /**
   * Inserts an item to the end of list
   * @param {any} value - The value of item to be inserted
   */
  push(value: any) {
    const item: Item = {
      value,
      next: null,
    };

    if (!this._tail) {
      this._head = item;
      this._tail = item;
    } else {
      this._tail.next = item;
      this._tail = item;
    }

    this._incrementCount();
  }

  /**
   * Inserts an item at a given position
   * @param {any} value - The value of item to be inserted
   * @param {number} position - The position to insert the item
   * @return {boolean} a flag indicating if the item was successfully added
   */
  insert(value: any, position: number) {
    if (!this._isPositionValid(position)) {
      return false;
    }

    const item = {
      value,
      next: null,
    };

    if (!position) {
      item.next = this._head;
      this._head = item;
    } else {
      const current = this._getItemAt(position - 1);
      item.next = current.next;
      current.next = item;
    }
  
    this._incrementCount();
  
    return true;
  }

  /**
   * Returns the position of a given item in the list.
   * Returns -1 if it does not exist in the list.
   * @param {any} value item to retrieve its position.
   * @return {number} the position of the item
   */
  indexOf(value: any) {
    let item = this._head;

    for (let i = 0; i < this.size() && item; i+= 1) {
      if (this._areItemsEqual(item.value, value)) {
        return i;
      }

      item = item.next;
    }
  
    return -1;
  }

  /**
   * Returns the value of an item at a given position in the list.
   * Returns null if it does not exist an item in the list at the position.
   * @param {number} position position of item to retrieve.
   * @return {any} the value of the item at the given position.
   */
  getElementAt(position: number) {
    const item = this._getItemAt(position);
    return item ? item.value : null;
  }

  /**
   * Removes an item from the list
   * @param {any} value item to be removed
   * @return {any} the removed item
   */
  remove(value: any) {
    const position = this.indexOf(value);

    if (!this._isPositionValid(position)) {
      return null;
    }

    return this.removeAt(position);
  }

  /**
   * Removes an item at a given position
   * @param {numper} position position of item to be removed
   * @return {any} the removed item
   */
  removeAt(position: number) {
    if (this.empty() || !this._isPositionValid(position)) {
      return null;
    }

    let itemValue = null;
    if (!position) {
      itemValue = this._head.value;
      this._head = this._head.next;
      this._tail = !this._head ? null : this._tail;
    } else {
      const previous = this._getItemAt(position - 1);
      const current = this._getItemAt(position);
      this._tail = this._isLastPosition(position) ? previous : this._tail;
      previous.next = current.next;
      itemValue = current.value;
    }

    this._decrementCount();

    return itemValue;
  }

  /**
   * Returns the counts of items in the list
   * @return {number} The number of items.
   */
  size(): number {
    return this._count;
  }

  /**
   * Returns whether the list is empty or not.
   * @return {boolean} A flag indicating if the list is empty.
   */
  empty(): boolean {
    return !this._count;
  }

  /**
   * Clears the list.
   */
  clear() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  /**
   * Returns the string representation of the list
   * @return {string} the string representation of the list.
   */
  toString(): string {
    let item = this._head;
    let result = '';
    
    while (item) {
      result = result ? `${result},${item.value}` : item.value;
      item = item.next;
    }

    return result;
  }

  _getItemAt(position: number) {
    if (this.empty() || !this._isPositionValid(position)) {
      return null;
    }

    if (this._isLastPosition(position)) {
      return this._tail;
    }

    let item = this._head;
    for (let i = 0; i < position && item; i+= 1) {
      item = item.next;
    }

    return item;
  }

  _isPositionValid(position: number): boolean {
    return position >= 0 && position < this._count;
  }

  _isLastPosition(position: number): boolean {
    return position === this._count - 1;
  }

  _incrementCount() {
    this._count += 1;
  }

  _decrementCount() {
    this._count -= 1;
  }
}

export default LinkedList;
