import { expect } from 'chai';
import MaxHeap from './max-heap';


describe('MaxHeap', () => {
  let ds;

  beforeEach(() => {
    ds = new MaxHeap();
  });

  describe('size', () => {
    it('defaults to the expected value', () => {
      expect(ds.size()).equal(0);
    });

    it('is equal to the number of elements present in the collection', () => {
      [0, 1, 2].forEach((item) => {
        ds.insert(item);
      });
      expect(ds.size()).equal(3);

      ds.extract();
      ds.extract();

      expect(ds.size()).equal(1);
    }); 
  });

  describe('empty', () => {
    it('should be true by default', () => {
      expect(ds.empty()).equal(true);
    });

    it('is false if there is at least one element', () => {
      ds.insert(0);
      ds.insert(1);
      expect(ds.empty()).equal(false);

      ds.extract();
      expect(ds.empty()).equal(false);
      
      ds.extract();
      expect(ds.empty()).equal(true);
    });
  });

  describe('insert and peek', () => {
    it('can add elements to the collection as expected', () => {
      ds.insert(0);
      ds.insert(1)
      ds.insert(3);
      ds.insert(4);
      ds.insert(2);
      ds.insert(5);
      expect(ds.size()).equal(6);
      expect(ds.peek()).equal(5);
    });
  });

  describe('extract', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.extract()).equal(undefined);
    });

    it('removes the smallest element from the collection', () => {
      const items = [0, 2, 5, 1, 4, 3];
      items.forEach((item) => {
        ds.insert(item);
      });

      expect(ds.peek()).equal(5);

      items.sort().reverse().forEach((item) => {
        expect(ds.extract()).equal(item);
      });
    });
  });

  describe('clear', () => {
    it('removes all the elements from the collection', () => {
      const items = [0, 1, 3, 2, 5, 4];
      items.forEach((item) => {
        ds.insert(item);
      });

      ds.clear();

      expect(ds.empty()).equal(true);
      expect(ds.peek()).equal(undefined);
      expect(ds.size()).equal(0);
    });
  });

  describe('toString', () => {
    it('returns an empty string by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.toString()).equal('');
    });
  
    it('returns a string representation of the collection', () => {
      const items = [0, 1, 3, 2, 5, 4];
      items.forEach((item) => {
        ds.insert(item);
      });

      expect(ds.toString()).equal('5,3,4,0,2,1');
    });
  });
});