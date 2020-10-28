import { expect } from 'chai';
import Stack from './stack';


describe('Stack', () => {
  let ds;

  beforeEach(() => {
    ds = new Stack();
  });

  describe('size', () => {
    it('defaults to the expected value', () => {
      expect(ds.size()).equal(0);
    });

    it('is equal to the number of elements present in the collection', () => {
      ['A', 'B', 'C'].forEach((item) => {
        ds.push(item);
      });
      expect(ds.size()).equal(3);

      ds.pop();
      ds.pop();

      expect(ds.size()).equal(1);
    }); 
  });

  describe('empty', () => {
    it('should be true by default', () => {
      expect(ds.empty()).equal(true);
    });

    it('is false if there is at least one element', () => {
      ds.push('A');
      ds.push('B');
      expect(ds.empty()).equal(false);

      ds.pop();
      expect(ds.empty()).equal(false);
      
      ds.pop();
      expect(ds.empty()).equal(true);
    });
  });

  describe('push', () => {
    it('can add elements to the collection', () => {
      ds.push('A');
      ds.push('B');
      expect(ds.size()).equal(2);
      expect(ds.peek()).equal('B');
    });
  });

  describe('peek', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.peek()).equal(undefined);
    });

    it('can access the last element in the collection', () => {
      ['A', 'B', 'C', 'D', 'E'].forEach((item) => {
        ds.push(item);
      });
      expect(ds.peek()).equal('E');
    });
  });

  describe('pop', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.pop()).equal(undefined);
    });

    it('removes the last element from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.push(item);
      });

      items.reverse().forEach((item) => {
        expect(ds.pop()).equal(item);
      });
    });
  });

  describe('clear', () => {
    it('removes all the elements from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.push(item);
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
        ds.push(item);
      });

      expect(ds.toString()).equal(items.join(','));
    });
  });
});