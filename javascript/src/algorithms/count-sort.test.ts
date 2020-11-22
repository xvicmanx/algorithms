import { expect } from 'chai';
import countSort from './count-sort';


describe('countSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { countSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 5, 4, 2, 3, 3, 2, 5, 1, 1];
    expect(countSort({ items })).to.eql([1, 1, 2, 2, 3, 3, 4, 5, 5, 5]);
  });
});