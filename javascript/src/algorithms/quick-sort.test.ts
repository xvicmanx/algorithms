import { expect } from 'chai';
import quickSort from './quick-sort';


describe('quickSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { quickSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 4, 3, 2, 1];
    expect(quickSort({ items })).to.eql([1, 2, 3, 4, 5]);
  });
});