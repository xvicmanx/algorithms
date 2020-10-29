import { expect } from 'chai';
import Queue from './queue';


describe('Queue', () => {
  let ds;

  beforeEach(() => {
    ds = new Queue();
  });

  describe('size', () => {
    it('defaults to the expected value', () => {
      expect(ds.size()).equal(0);
    });

    it('is equal to the number of elements present in the collection', () => {
      ['A', 'B', 'C'].forEach((item) => {
        ds.enqueue(item);
      });
      expect(ds.size()).equal(3);

      ds.dequeue();
      ds.dequeue();

      expect(ds.size()).equal(1);
    }); 
  });

  describe('empty', () => {
    it('should be true by default', () => {
      expect(ds.empty()).equal(true);
    });

    it('is false if there is at least one element', () => {
      ds.enqueue('A');
      ds.enqueue('B');
      expect(ds.empty()).equal(false);

      ds.dequeue();
      expect(ds.empty()).equal(false);
      
      ds.dequeue();
      expect(ds.empty()).equal(true);
    });
  });

  describe('enqueue', () => {
    it('can add elements to the collection', () => {
      ds.enqueue('A');
      ds.enqueue('B');
      expect(ds.size()).equal(2);
      expect(ds.peek()).equal('A');
    });
  });

  describe('peek', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.peek()).equal(undefined);
    });

    it('can access the first element in the collection', () => {
      ['A', 'B', 'C', 'D', 'E'].forEach((item) => {
        ds.enqueue(item);
      });
      expect(ds.peek()).equal('A');
    });
  });

  describe('dequeue', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.dequeue()).equal(undefined);
    });

    it('removes the last element from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.enqueue(item);
      });

      items.forEach((item) => {
        expect(ds.dequeue()).equal(item);
      });
    });
  });

  describe('clear', () => {
    it('removes all the elements from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.enqueue(item);
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
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.enqueue(item);
      });

      expect(ds.toString()).equal(items.join(','));
    });
  });
});