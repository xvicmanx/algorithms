// @ts-check

type TreeNode = {
  value: any,
  left: TreeNode | null,
  right: TreeNode | null,
};

const DEFAULT_COMPARER = (first: any, second: any): number => {
  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
};

type TreeBranchName = 'left' | 'right';

/**
 * A BinarySearchTree is a data structure that store items in a hierarchical order.
 * This structure has nodes which contain link/references to other nodes, a left node and right node.
 * The node to the left is less than the parent and the right is greater than the parent.
 * */
class BinarySearchTree {
  // The root of the tree structure
  private _root: TreeNode | null;
  // To compare item values
  private _itemComparer: Function;

  /**
   * BinarySearchTree Constructor
   */
  constructor(itemComparer: Function = DEFAULT_COMPARER) {
    this._root = null;
    this._itemComparer = itemComparer;
  }

  /**
   * Inserts an item to the tree
   * @param {any} item - The item to be inserted
   */
  insert(item: any) {
    if (!this._root) {
      this._root = this._createNode(item);
    } else {
      this._root = this._insertItem(this._root, item);
    }
  }

  /**
   * Search an item in the tree.
   * @param {any} item - The item to be searched
   * @return {boolean} To indicate whether the item was found or not
   */
  search(item: any): boolean {
    return this._searchItem(this._root, item);
  }

  /**
   * Go through the items in the tree in-order traverse strategy.
   * @return {any} The element at the top.
   */
  inOrderTraverse(callback = Function) {
    this._inOrderTraverseFromTreeNode(this._root, callback);
  }

  /**
   * Go through the items in the tree pre-order traverse strategy.
   * @return {any} The element at the top.
   */
  preOrderTraverse(callback = Function) {
    this._preOrderTraverseFromTreeNode(this._root, callback);
  }

  /**
   * Go through the items in the tree post-order traverse strategy.
   * @return {any} The element at the top.
   */
  postOrderTraverse(callback = Function) {
    this._postOrderTraverseFromTreeNode(this._root, callback);
  }

  /**
   * Returns the item with the minimum value
   * @return {any} The item with minimum value
   */
  min() {
    return this._minItemFromTreeNode(this._root);
  }

  /**
   * Returns the item with the maximum value
   * @return {any} The item with maximum value
   */
  max() {
    return this._maxItemFromTreeNode(this._root);
  }

  /**
   * Remove an item from the tree.
   */
  remove(item: any) {
    this._root = this._removeTreeNode(this._root, item);
  }

  private _removeTreeNode(node: TreeNode, item: any): TreeNode | null {
    if (!node) {
      return null;
    }

    const differenceSign = this._itemComparer(node.value, item);

    if (differenceSign) {
      const branchName = this._branchName(differenceSign);
      node[branchName] = this._removeTreeNode(node[branchName], item);

      return node;
    }

    if (!node.left && !node.right) {
      return null;
    } else if (node.left && !node.right) {
      return node.left;
    } else if (!node.left && node.right) {
      return node.right;
    }

    const minNode = this._minTreeNode(node.right);
    node.value = minNode.value;
    node.right = this._removeTreeNode(node.right, minNode.value);

    return node;
  }

  private _inOrderTraverseFromTreeNode(node: TreeNode, callback = Function) {
    if (!node) {
      return;
    }

    this._inOrderTraverseFromTreeNode(node.left, callback);
    callback(node.value);
    this._inOrderTraverseFromTreeNode(node.right, callback);
  }

  private _preOrderTraverseFromTreeNode(node: TreeNode, callback = Function) {
    if (!node) {
      return;
    }

    callback(node.value);
    this._preOrderTraverseFromTreeNode(node.left, callback);
    this._preOrderTraverseFromTreeNode(node.right, callback);
  }

  private _postOrderTraverseFromTreeNode(node: TreeNode, callback = Function) {
    if (!node) {
      return;
    }

    this._postOrderTraverseFromTreeNode(node.left, callback);
    this._postOrderTraverseFromTreeNode(node.right, callback);
    callback(node.value);
  }

  private _minTreeNode(node: TreeNode) {
    if (!node.left) {
      return node;
    }

    return this._minTreeNode(node.left);
  }

  private _minItemFromTreeNode(node: TreeNode) {
    if (!node) {
      return null;
    }

    if (!node.left) {
      return node.value;
    }

    return this._minItemFromTreeNode(node.left);
  }

  private _maxItemFromTreeNode(node: TreeNode) {
    if (!node) {
      return null;
    }

    if (!node.right) {
      return node.value;
    }

    return this._maxItemFromTreeNode(node.right);
  }

  private _searchItem(node: TreeNode, item: any) {
    if (!node) {
      return false;
    }

    const differenceSign = this._itemComparer(node.value, item);

    if (!differenceSign) {
      return true;
    }

    const branchName = this._branchName(differenceSign);
  
    return this._searchItem(node[branchName], item);
  }

  private _insertItem(node: TreeNode, item: any) {
    const differenceSign = this._itemComparer(node.value, item);
  
    if (!differenceSign) {
      return null;
    }
  
    const branchName = this._branchName(differenceSign);
  
    if (!node[branchName]) {
      node[branchName] = this._createNode(item);
    } else {
      node[branchName] = this._insertItem(node[branchName], item);
    }

    return node;
  }

  private _branchName(comparisonSign: number): TreeBranchName {
    return comparisonSign > 0 ? 'left' : 'right';
  }

  private _createNode(item: any): TreeNode {
    return {
      value: item,
      left: null,
      right: null,
    };
  }
}


export default BinarySearchTree;
