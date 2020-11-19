import { expect } from 'chai';
import bubbleSort from './bubble-sort';


describe('bubbleSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { bubbleSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 4, 3, 2, 1];
    expect(bubbleSort({ items })).to.eql([1, 2, 3, 4, 5]);
  });
});