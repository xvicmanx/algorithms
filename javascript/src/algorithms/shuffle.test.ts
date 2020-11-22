import { expect } from 'chai';
import shuffle from './shuffle';

describe('shuffle', () => {
  it('fails if the items param is not provided', () => {
    expect(() => { shuffle({}); }).to.throw();
  });

  it('shuffles the numbers', () => {
    const items = [5, 4, 3, 2, 1];
    const differences = [];

    for (let i = 0; i < 10; i++) {
      differences.push(JSON.stringify(shuffle({ items })) !== JSON.stringify([5, 4, 3, 2, 1]));
    }

    expect(differences.some(x => x)).to.eq(true);
  });
});