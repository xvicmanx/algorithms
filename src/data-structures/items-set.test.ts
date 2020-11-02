import { expect } from 'chai';
import ItemsSet from './items-set';


describe('ItemsSet', () => {
  let ds;

  beforeEach(() => {
    ds = new ItemsSet();
  });

  describe('size', () => {
    it('defaults to the expected value', () => {
      expect(ds.size()).equal(0);
    });

    it('is equal to the unique number of elements present in the collection', () => {
      ['A', 'B', 'C', 'A', 'B', 'B'].forEach((item) => {
        ds.add(item);
      });
      expect(ds.size()).equal(3);

      ds.remove('A');
      ds.remove('C');

      expect(ds.size()).equal(1);
    }); 
  });

  describe('empty', () => {
    it('should be true by default', () => {
      expect(ds.empty()).equal(true);
    });

    it('is false if there is at least one element', () => {
      ds.add('A');
      ds.add('B');
      expect(ds.empty()).equal(false);

      ds.remove('B');
      expect(ds.empty()).equal(false);
      
      ds.remove('A');
      expect(ds.empty()).equal(true);
    });
  });

  describe('add', () => {
    it('can add elements to the collection', () => {
      ds.add('A');
      ds.add('B');
      expect(ds.size()).equal(2);
      expect(ds.has('A')).equal(true);
      expect(ds.has('B')).equal(true);
    });
  });

  describe('has', () => {
    it('returns false by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.has('A')).equal(false);
    });

    it('returns whether an element exists or not in the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      
      items.forEach((item) => {
        ds.add(item);
      });

      items.forEach((item) => {
        expect(ds.has(item)).equal(true);
      });
      
      expect(ds.has('F')).equal(false);
    });
  });

  describe('remove', () => {
    it('returns false by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.remove('A')).equal(false);
    });

    it('can removes items from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.add(item);
      });

      ds.remove('C');
      ds.remove('E');

      expect(ds.has('A')).equal(true);
      expect(ds.has('B')).equal(true);
      expect(ds.has('C')).equal(false);
      expect(ds.has('D')).equal(true);
      expect(ds.has('E')).equal(false);
    });
  });

  describe('clear', () => {
    it('removes all the elements from the collection', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.add(item);
      });

      ds.clear();

      items.forEach((item) => {
        expect(ds.has(item)).equal(false);
      });

      expect(ds.empty()).equal(true);
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
        ds.add(item);
      });

      expect(ds.toString()).equal(items.join(','));
    });
  });

  describe('union', () => {
    it('returns the union of sets', () => {
      const first = ['A', 'B', 'C'];
      const second = ['C', 'D', 'E'];
      const otherDs = new ItemsSet();

      first.forEach((item) => {
        ds.add(item);
      });

      second.forEach((item) => {
        otherDs.add(item);
      });

      const unionSet = ds.union(otherDs);

      expect(unionSet.toString()).equal('A,B,C,D,E');
    });
  });

  describe('intersection', () => {
    it('returns the intersection of sets', () => {
      const first = ['A', 'B', 'C'];
      const second = ['C', 'D', 'E'];
      const otherDs = new ItemsSet();

      first.forEach((item) => {
        ds.add(item);
      });

      second.forEach((item) => {
        otherDs.add(item);
      });

      const intersectionSet = ds.intersection(otherDs);

      expect(intersectionSet.toString()).equal('C');
    });
  });

  describe('difference', () => {
    it('returns the difference of sets', () => {
      const first = ['A', 'B', 'C'];
      const second = ['C', 'D', 'E'];
      const otherDs = new ItemsSet();

      first.forEach((item) => {
        ds.add(item);
      });

      second.forEach((item) => {
        otherDs.add(item);
      });

      const differenceSet = ds.difference(otherDs);

      expect(differenceSet.toString()).equal('A,B');
    });
  });
});