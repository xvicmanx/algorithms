import { expect } from 'chai';
import factorial from './factorial';


describe('factorial', () => {
  it('fails if the n param is not provided', () => {
    expect(() => {
      factorial({});
    }).to.throw();
  });

  it('fails if the n param is a negative number', () => {
    expect(() => {
      factorial({ n: -10 });
    }).to.throw();
  });

  it('returns the correct results', () => {
    const items = [
      [0, 1],
      [1, 1],
      [2, 2],
      [3, 6],
      [4, 24],
      [5, 120],
      [10, 3628800],
      [15, 1307674368000]
    ];

    items.forEach(pair => {
      const [n, result] = pair;
      expect(factorial({ n })).to.equal(result);
    });
  });
});