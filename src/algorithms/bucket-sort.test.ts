import { expect } from 'chai';
import bucketSort from './bucket-sort';


describe('bucketSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { bucketSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [5, 5, 4, 2, 3, 3, 2, 5, 1, 1];
    expect(bucketSort({ items })).to.eql([1, 1, 2, 2, 3, 3, 4, 5, 5, 5]);
  });
});