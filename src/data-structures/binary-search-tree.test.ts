import { expect } from 'chai';
import BinarySearchTree from './binary-search-tree';

describe('BinarySearchTree', () => {
  let ds;
  let items;

  beforeEach(() => {
    ds = new BinarySearchTree();
    items = [5, 7, 4, 10, 1, 9, 3, 8, 2, 0, 6];

    items.forEach(item => {
      ds.insert(item);
    });
  });

  describe('search', () => {
    it('searches the items properly', () => {
      items.forEach(item => {
        expect(ds.search(item)).to.equal(true);
      });
    });
  });

  // describe('inOrderTraverse', () => {
  // });

  // describe('preOrderTraverse', () => {
  // });

  // describe('postOrderTraverse', () => {
  // });

  describe('min', () => {
    it('returns the correct minimum', () => {
      expect(ds.min()).to.equal(0);
    });
  });

  describe('max', () => {
    it('returns the correct maximum', () => {
      expect(ds.max()).to.equal(10);
    });
  });

  // describe('remove', () => {
  // });
});