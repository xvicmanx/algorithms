
  
  ![Tests](https://github.com/xvicmanx/algorithms/workflows/tests/badge.svg)


  
# Algorithms and data structures
Algorithms and data structures implementations in javascript.

## Data structures

| Name | Description |
| ----------- | ------------ |
| [Queue](#Queue) | A Queue is an ordered data structure which follows the FIFO (First In First Out) strategy to access its internal items.This means that the first element added to the collection is the first accessible and being able to taken out. |
| [Stack](#Stack) | A Stack is an ordered data structure which follows the LIFO (Last In First Out) strategy to access its internal items. This means that the last element added to the collection is the first accessible and being able to taken out. |
| [Dequeue](#Dequeue) | A Dequeue is an ordered data structure which follows the FIFO or LIFO (First In First Out or Last In First Out) strategy to access its internal items. This means that the first or last element added to the collection can be accessible and taken out. It can also add elements to the front or the back of the collection. |
| [Linked List](#LinkedList) | A LinkedList is a data structure that stores its elements one linking to the other. |
| [Set](#Set) | A Set is an unordered data structure that contains only unique elements. It behaves similar to the matematical set {} |
| [Binary Search Tree](#BinarySearchTree) | A BinarySearchTree is a data structure that store items in a hierarchical order. This structure has nodes which contain link/references to other nodes, a left node and right node. The node to the left is less than the parent and the right is greater than the parent. |
| [Heap](#Heap) | A Heap is a data structure that forms a kind of binary tree symbolically. In it every parent node is greater (max heap) or smaller (min heap) than this corresponding children. At the root of the tree the element is the greatest (max heap) or smallest (min heap). |
| [Graph](#Graph) | A Graph is a non-linear data structure contains of nodes (vertices) and edges. The nodes are connected through the edges. |


<a name="Queue"></a>

### Queue

A Queue is an ordered data structure which follows the FIFO (First In First Out) strategy to access its internal items.This means that the first element added to the collection is the first accessible and being able to taken out.

| Method | Description |
| ----------- | ------------ |
| enqueue  | Inserts an item to the last position of the queue |
| peek     | Reads the element at first position of the queue without removing it |
| dequeue  | Removes the element at first position of the queue and return it |
| size     | Returns the size of the Queue which is the number of elements inserted |
| empty    | Returns whether the queue is empty or not |
| clear    | Clears the queue |
| toString |  Returns the string representation of the queue |

<a name="Stack"></a>

### Stack

A Stack is an ordered data structure which follows the LIFO (Last In First Out) strategy to access its internal items. This means that the last element added to the collection is the first accessible and being able to taken out.

| Method | Description |
| ----------- | ------------ |
| push  | Inserts an item to the top of the stack |
| peek  | Reads the element at the top of the stack without removing it |
| pop | Removes the element at the top of the stack and return it |
| size    | Returns the size of the Stack which is the number of elements inserted |
| empty | Returns whether the stack is empty or not |
| clear    | Clears the stack |
| toString |  Returns the string representation of the stack |

<a name="Dequeue"></a>

### Dequeue

A Dequeue is an ordered data structure which follows the FIFO or LIFO (First In First Out or Last In First Out) strategy to access its internal items. This means that the first or last element added to the collection can be accessible and taken out. It can also add elements to the front or the back of the collection.

| Method | Description |
| ----------- | ------------ |
| pushFront  | Inserts an item to the first position of the dequeue |
| pushBack  | Inserts an item to the last position of the dequeue |
| peekFront | Reads the element at first position of the dequeue without removing it |
| peekBack | Reads the element at last position of the dequeue without removing it |
| popFront | Removes the element at first position of the dequeue and return it |
| popBack | Removes the element at lat position of the dequeue and return it |
| size    | Returns the size of the dequeue which is the number of elements inserted |
| empty | Returns whether the dequeue is empty or not |
| clear    | Clears the dequeue |
| toString |  Returns the string representation of the dequeue |


<a name="LinkedList"></a>

### Linked List

A LinkedList is a data structure that stores its elements one linking to the other.

| Method | Description |
| ----------- | ------------ |
| push  | Inserts an item to the end of list |
| insert  | Inserts an item at a given position |
| indexOf | Returns the position of a given item in the list |
| getElementAt | Returns the value of an item at a given position in the list |
| remove | Removes an item from the list |
| removeAt | Removes an item at a given position |
| size    | Returns the size of the list which is the number of elements inserted |
| empty | Returns whether the list is empty or not |
| clear    | Clears the list |
| toString |  Returns the string representation of the list |


<a name="Set"></a>

### Set

A Set is an unordered data structure that contains only unique elements. It behaves similar to the matematical set {}

| Method | Description |
| ----------- | ------------ |
| add  | Adds a new item to the set |
| remove  | Removes an item from the set |
| has | Returns whether an item exists in the set |
| values | Returns an array of all the items in the set |
| union | Returns the union of the current set with another given set. An union of sets is a new set with the the items that are in a set or another |
| intersection | Returns the intersection of the current set with another given set. An intersection of sets is a new set with the the items that are in a set and another |
| difference | Returns the difference of the current set with another given set. A different of sets is a new set with the the items that are in the current set but not the other|
| empty | Returns whether the set is empty or not |
| clear | Clears the set |
| toString |  Returns the string representation of the set |


<a name="BinarySearchTree"></a>

### Binary Search Tree

A Binary Search Tree is a data structure that store items in a hierarchical order. This structure has nodes which contain link/references to other nodes, a left node and right node. The node to the left is less than the parent and the right is greater than the parent.

| Method | Description |
| ----------- | ------------ |
| insert  | Inserts an item to the tree |
| search  | Search an item from the tree |
| inOrderTraverse  | Go through the items in the tree in-order traverse strategy |
| preOrderTraverse | Go through the items in the tree pre-order traverse strategy |
| postOrderTraverse | Go through the items in the tree post-order traverse strategy |
| min | Returns the item with the minimum value |
| max | Returns the item with the maximum value |

<a name="Heap"></a>

### Heap

A Heap is a data structure that forms a kind of binary tree symbolically. In it every parent node is greater (max heap) or smaller (min heap) than this corresponding children. At the root of the tree the element is the greatest (max heap) or smallest (min heap).

| Method | Description |
| ----------- | ------------ |
| insert | Inserts an item to the top of the heap |
| peek  | Reads the element at the top of the heap without removing it |
| extract  | Removes the element at the top of the heap and return it |
| size  | Returns the size of the Heap which is the number of elements inserted |
| empty  | Returns whether the heap is empty or not |
| clear  | Clears the heap |
| toString | Returns the string representation of the heap |

<a name="Graph"></a>

### Graph

A Graph is a non-linear data structure contains of nodes (vertices) and edges. The nodes are connected through the edges.

| Method | Description |
| ----------- | ------------ |
| addVertice  | Adds a vertice to the graph |
| addEdge  | Adds an edge between vertices |
| getEdgeValue | Gets the value assigned to a given edge |
| vertices  | Returns graph vertices |
| adjacents | Returns the adjacents vertices of a given vertice |
| clear | Clears the graph |
| toString  | Returns the string representation of the graph |


## Playground
A playground console has been created to play around with algorithms and data structures.

To start the playground run:
```
npm run playground
```

### Example 1 Stack data structure
```
npm run playground
```
To start the playground

And then type
```
const stack = new structures.Stack();
stack.push('O');
stack.push('L');
stack.push('L');
stack.push('E');
stack.push('H');

while(!stack.empty()) {
  console.log(stack.pop());
}

```

### Example 2 Mergesort algorithm
```
npm run playground
```
To start the playground

And then type
```
const result = algorithms.mergeSort({
  items: [
    6,
    5,
    3,
    4,
    1,
    2,
  ],
});

console.log(result);
```

## Installation

Clone the repository and run:

```sh
npm install
```

## Tests and coverage
To run the tests:
```sh
npm test
```

To generate the tests coverage report:
```sh
npm run coverage
```


## Dependencies

- [@types/node](https://ghub.io/@types/node): TypeScript definitions for Node.js
- [camelcase](https://ghub.io/camelcase): Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`
- [minimist](https://ghub.io/minimist): parse argument options
- [require-all](https://ghub.io/require-all): An easy way to require all files within a directory.

## Dev Dependencies

- [@types/chai](https://ghub.io/@types/chai): TypeScript definitions for chai
- [@types/mocha](https://ghub.io/@types/mocha): TypeScript definitions for mocha
- [chai](https://ghub.io/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [nyc](https://ghub.io/nyc): the Istanbul command line interface
- [repl](https://ghub.io/repl): A simple fast template libray.
- [ts-node](https://ghub.io/ts-node): TypeScript execution environment and REPL for node.js, with source map support
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development