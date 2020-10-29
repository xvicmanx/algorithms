import { expect } from 'chai';
import Dequeue from './dequeue';


describe('Dequeue', () => {
  let ds;

  beforeEach(() => {
    ds = new Dequeue();
  });

  describe('size', () => {
    it('defaults to the expected value', () => {
      expect(ds.size()).equal(0);
    });

    it('is equal to the number of elements present in the collection', () => {
      ['A', 'B', 'C'].forEach((item) => {
        ds.pushFront(item);
      });
      expect(ds.size()).equal(3);

      ds.popBack();
      ds.popFront();

      expect(ds.size()).equal(1);
    }); 
  });

  describe('empty', () => {
    it('should be true by default', () => {
      expect(ds.empty()).equal(true);
    });

    it('is false if there is at least one element', () => {
      ds.pushBack('A');
      ds.pushBack('B');
      expect(ds.empty()).equal(false);

      ds.popFront();
      expect(ds.empty()).equal(false);
      
      ds.popBack();
      expect(ds.empty()).equal(true);
    });
  });

  describe('push', () => {
    it('can add elements to the collection', () => {
      ds.pushBack('A');
      ds.pushFront('B');
      expect(ds.size()).equal(2);
      expect(ds.peekFront()).equal('B');
      expect(ds.peekBack()).equal('A');
    });
  });

  describe('peek', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.peekFront()).equal(undefined);
      expect(ds.peekBack()).equal(undefined);
    });

    it('can access the first and last elements in the collection', () => {
      ['A', 'B', 'C', 'D', 'E'].forEach((item) => {
        ds.pushBack(item);
      });
      expect(ds.peekFront()).equal('A');
      expect(ds.peekBack()).equal('E');
    });
  });

  describe('pop', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.popFront()).equal(undefined);
      expect(ds.popBack()).equal(undefined);
    });

    it('removes the last element from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.pushBack(item);
      });

      items.forEach((item) => {
        expect(ds.popFront()).equal(item);
      });
    });
  });

  describe('clear', () => {
    it('removes all the elements from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.pushFront(item);
      });

      ds.clear();

      expect(ds.empty()).equal(true);
      expect(ds.peekFront()).equal(undefined);
      expect(ds.peekBack()).equal(undefined);
      expect(ds.size()).equal(0);
    });
  });

  describe('toString', () => {
    it('returns an empty string by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.toString()).equal('');
    });
  
    it('returns a string representation of the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.pushBack(item);
      });

      expect(ds.toString()).equal(items.join(','));
    });
  });
});