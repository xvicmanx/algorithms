import { expect } from 'chai';
import selectionSort from './selection-sort';


describe('selectionSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { selectionSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 4, 3, 2, 1];
    expect(selectionSort({ items })).to.eql([1, 2, 3, 4, 5]);
  });
});