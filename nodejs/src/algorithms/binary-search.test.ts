import { expect } from 'chai';
import binarySearch from './binary-search';


describe('binarySearch', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { binarySearch({ value: 6 }); }).to.throw();
  });

  it('fails if the value param is not provided', () => {
    expect(() => { binarySearch({ items: [] }); }).to.throw();
  });

  it('returns the correct index', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch({ items, value: 6 })).to.eql(5);
  });
});