import { expect } from 'chai';
import insertionSort from './insertion-sort';


describe('insertionSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { insertionSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 4, 3, 2, 1];
    expect(insertionSort({ items })).to.eql([1, 2, 3, 4, 5]);
  });
});