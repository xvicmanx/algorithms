import { expect } from 'chai';
import mergeSort from './merge-sort';


describe('mergeSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { mergeSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 4, 3, 2, 1];
    expect(mergeSort({ items })).to.eql([1, 2, 3, 4, 5]);
  });
});