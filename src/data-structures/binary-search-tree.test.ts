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

  describe('inOrderTraverse', () => {
    it('it goes through tree nodes in in-order traverse strategy', () => {
      const result = [];
      ds.inOrderTraverse((item) => {
        result.push(item);
      });

      expect(result.toString()).to.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].toString());
    });
  });

  describe('preOrderTraverse', () => {
    it('it goes through tree nodes in pre-order traverse strategy', () => {
      const result = [];
      ds.preOrderTraverse((item) => {
        result.push(item);
      });

      expect(result.toString()).to.equal([5, 4, 1, 0, 3, 2, 7, 6, 10, 9, 8].toString());
    });
  });

  describe('postOrderTraverse', () => {
    it('it goes through tree nodes in post-order traverse strategy', () => {
      const result = [];
      ds.postOrderTraverse((item) => {
        result.push(item);
      });

      expect(result.toString()).to.equal([0, 2, 3, 1, 4, 6, 8, 9, 10, 7, 5].toString());
    });
  });

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

  describe('remove', () => {
    it('can remove items', () => {
      expect(ds.max()).to.equal(10);
      expect(ds.min()).to.equal(0);

      ds.remove(10);
      ds.remove(0);

      expect(ds.search(0)).to.equal(false);
      expect(ds.search(10)).to.equal(false);

      expect(ds.max()).to.equal(9);
      expect(ds.min()).to.equal(1);

      ds.remove(1);
      expect(ds.search(1)).to.equal(false);
      expect(ds.min()).to.equal(2);

      ds.remove(7);
      expect(ds.search(7)).to.equal(false);
      expect(ds.max()).to.equal(9);
      expect(ds.min()).to.equal(2);
    });
  });
});