// @ts-check

type KeyGeneratorFunc = (item: any) => string;

const DEFAULT_KEY_GENERATOR: KeyGeneratorFunc = (item: any): string => item.toString();

/**
 * A ItemsSet is an unordered data structure that contains only unique elements.
 * It behaves similar to the matematical set {}
 */
class ItemsSet {
  // To store the items of the stack
  private _items: { [key: string]: any };
  private _keyGenerator: KeyGeneratorFunc;

  /**
   * ItemsSet Constructor
   */
  constructor(keyGenerator: KeyGeneratorFunc = DEFAULT_KEY_GENERATOR) {
    this._items = {};
    this._keyGenerator = keyGenerator;
  }

  /**
   * Adds a new item to the set
   * @param {any} item - The item to be added
   * @return {boolean} to indicate if the item was added
   */
  add(item: any) {
    if (this.has(item)) {
      return false;
    }
  
    this._items[this._keyGenerator(item)] = item;

    return true;
  }

  /**
   * Removes an item from the set
   * @return {boolean} if the item was successfully removed
   */
  remove(item: any) {
    if (!this.has(item)) {
      return false;
    }

    delete this._items[this._keyGenerator(item)];

    return true;
  }

  /**
   * Returns whether an item exists in the set
   * @return {boolean} A boolean value indicating if the item is present in the set
   */
  has(item: any): boolean {
    return typeof this._items[this._keyGenerator(item)] !== 'undefined';
  }

  /**
   * Returns an array of all the items in the set
   * @return {any[]} Array of all items
   */
  values(): any[] {
    return Object.values(this._items);
  }

  /**
   * Returns the size of the set.
   * @return {number} The number of items.
   */
  size(): number {
    return Object.keys(this._items).length;
  }

  /**
   * Returns whether the set is empty or not.
   * @return {boolean} A flag indicating if the set is empty.
   */
  empty(): boolean {
    return !this.size();
  }

  /**
   * Clears the set.
   */
  clear() {
    this._items = {};
  }

  /**
   * Returns the union of the current set with another given set.
   * An union of sets is a new set with the the items that are in a set or another
   * @param {ItemsSet} other the other set
   * @return {ItemsSet} A set resulting of the union of the sets.
   */
  union(other: ItemsSet): ItemsSet {
    const unionSet = new ItemsSet(this._keyGenerator);

    this.values().forEach(item => unionSet.add(item));
    other.values().forEach(item => unionSet.add(item));

    return unionSet;
  }

  /**
   * Returns the intersection of the current set with another given set.
   * An intersection of sets is a new set with the the items that are in a set and another
   * @param {ItemsSet} other the other set
   * @return {ItemsSet} A set resulting of the intersection of the sets.
   */
  intersection(other: ItemsSet): ItemsSet {
    const intersectionSet = new ItemsSet(this._keyGenerator);

    other.values().forEach(item => {
      if (this.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet;
  }

  /**
   * Returns the difference of the current set with another given set.
   * A different of sets is a new set with the the items that are in the current set but not the other
   * @param {ItemsSet} other the other set
   * @return {ItemsSet} A set resulting of the difference of the sets.
   */
  difference(other: ItemsSet): ItemsSet {
    const differenceSet = new ItemsSet(this._keyGenerator);

    this.values().forEach(item => {
      if (!other.has(item)) {
        differenceSet.add(item);
      }
    });

    return differenceSet;
  }

  /**
   * Returns the string representation of the set
   * @return {string} the string representation of the set.
   */
  toString(): string {
    return Object.values(this._items).join(',');
  }
}

export default ItemsSet;
