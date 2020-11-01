import { expect } from 'chai';
import LinkedList from './linked-list';


describe('LinkedList', () => {
  let ds;

  beforeEach(() => {
    ds = new LinkedList();
  });

  describe('size', () => {
    it('defaults to the expected value', () => {
      expect(ds.size()).equal(0);
    });

    it('is equal to the number of elements present in the collection', () => {
      ['A', 'B', 'C', 'D', 'E'].forEach((item) => {
        ds.push(item);
      });
      expect(ds.size()).equal(5);

      ds.removeAt(ds.size() - 1);
      ds.removeAt(ds.size() - 1);

      expect(ds.size()).equal(3);
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

      ds.removeAt(ds.size() - 1);
      expect(ds.empty()).equal(false);
      
      ds.removeAt(ds.size() - 1);
      expect(ds.empty()).equal(true);
    });
  });

  describe('push', () => {
    it('can add elements to the collection', () => {
      ds.push('A');
      ds.push('B');
      expect(ds.size()).equal(2);
      expect(ds.getElementAt(ds.size() - 1)).equal('B');
      expect(ds.indexOf('B')).equal(ds.size() - 1);
    });
  });

  describe('indexOf', () => {
    let items = ['A', 'B', 'C', 'D', 'E'];
  
    beforeEach(() => {
      items.forEach((item) => {
        ds.push(item);
      });
    })

    it('returns the correct index for existing item', () => {
      items.forEach((item, i) => {
        expect(ds.indexOf(item)).equal(i);
      });
    });

    it('returns -1 when the item does not exist', () => {
      ['F', 'G', 'H', 'I'].forEach((item) => {
        expect(ds.indexOf(item)).equal(-1);
      });
    });
  });

  describe('remove', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.remove('foo')).equal(null);
    });

    it('removes element passed', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.push(item);
      });

      items.forEach((item, index) => {
        expect(ds.remove(item)).equal(item);
        expect(ds.size()).equal(items.length - index - 1);
      });

      items.forEach((item) => {
        ds.push(item);
      });

      items.reverse().forEach((item, index) => {
        expect(ds.remove(item)).equal(item);
        expect(ds.size()).equal(items.length - index - 1);
      });
    });
  });

  describe('removeAt', () => {
    it('returns nothing by default when there are no elements', () => {
      expect(ds.empty()).equal(true);
      expect(ds.removeAt(1)).equal(null);
    });

    it('removes elements at given positions', () => {
      const items = ['A', 'B', 'C', 'D', 'E'];
      items.forEach((item) => {
        ds.push(item);
      });

      items.reverse().forEach((item, index) => {
        expect(ds.removeAt(items.length - index - 1)).equal(item);
        expect(ds.size()).equal(items.length - index - 1);
      });

      items.forEach((item) => {
        ds.push(item);
      });

      items.forEach((item, index) => {
        expect(ds.removeAt(0)).equal(item);
        expect(ds.size()).equal(items.length - index - 1);
      });
    });
  });

  describe('getElementAt', () => {
    let items = ['A', 'B', 'C', 'D', 'E'];
  
    beforeEach(() => {
      items.forEach((item) => {
        ds.push(item);
      });
    })

    it('returns the correct item at each given position', () => {
      items.forEach((item, i) => {
        expect(ds.getElementAt(i)).equal(item);
      });
    });

    it('returns null passing a not valid position', () => {
      [5, 10, -1, -100].forEach((i) => {
        expect(ds.getElementAt(i)).equal(null);
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