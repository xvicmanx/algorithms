import { expect } from 'chai';
import fibonacci from './fibonacci';


describe('fibonacci', () => {
  it('fails if the n param is not provided', () => {
    expect(() => {
      fibonacci({});
    }).to.throw();
  });

  it('fails if the n param is a negative number', () => {
    expect(() => {
      fibonacci({ n: -10 });
    }).to.throw();
  });

  it('returns the correct results', () => {
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

    sequence.forEach((result, n) => {
      expect(fibonacci({ n })).to.equal(result);
    });
  });
});