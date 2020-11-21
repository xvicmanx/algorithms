import { expect } from 'chai';
import radixSort from './radix-sort';


describe('radixSort', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { radixSort({}); }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [
      31576,
      78342,
      16081,
      62027,
      39205,
      66574,
      77940,
      47349,
      66501,
      85070,
      9452,
      598,
      32,
      6,
      31575,
      85073,
      64501,
      39202,
    ];
    const expectedResult = [
      6,
      32,
      598,
      9452,
      16081,
      31575,
      31576,
      39202,
      39205,
      47349,
      62027,
      64501,
      66501,
      66574,
      77940,
      78342,
      85070,
      85073,
    ];
    expect(radixSort({ items })).to.eql(expectedResult);
  });
});