import { expect } from 'chai';
import minCoinChange from './min-coin-change';


describe('minCoinChange', () => {
  const amount = 26;
  const coins = [1, 5, 10];

  it('fails if the coins param is not provided', () => {
    expect(() => { minCoinChange({ amount }); }).to.throw();
  });

  it('fails if the amount param is not provided', () => {
    expect(() => { minCoinChange({ coins }); }).to.throw();
  });

  it('returns the expected results', () => {
    const results = [];
    const expectedResults = [{
      amount: 0,
      result: {
        value: Number.MAX_SAFE_INTEGER,
        coins: []
      }
    }, {
      amount: 1,
      result: {
        value: 1,
        coins: [1]
      }
    }, {
      amount: 2,
      result: {
        value: 2,
        coins: [1, 1]
      }
    }, {
      amount: 3,
      result: {
        value: 3,
        coins: [1, 1, 1]
      }
    }, {
      amount: 4,
      result: {
        value: 4,
        coins: [1, 1, 1, 1]
      }
    }, {
      amount: 5,
      result: {
        value: 1,
        coins: [5]
      }
    }, {
      amount: 6,
      result: {
        value: 2,
        coins: [5, 1]
      }
    }, {
      amount: 7,
      result: {
        value: 3,
        coins: [5, 1, 1]
      }
    }, {
      amount: 8,
      result: {
        value: 4,
        coins: [5, 1, 1, 1]
      }
    }, {
      amount: 9,
      result: {
        value: 5,
        coins: [5, 1, 1, 1, 1]
      }
    }, {
      amount: 10,
      result: {
        value: 1,
        coins: [10]
      }
    }, {
      amount: 11,
      result: {
        value: 2,
        coins: [10, 1]
      }
    }, {
      amount: 12,
      result: {
        value: 3,
        coins: [10, 1, 1]
      }
    }, {
      amount: 13,
      result: {
        value: 4,
        coins: [10, 1, 1, 1]
      }
    }, {
      amount: 14,
      result: {
        value: 5,
        coins: [10, 1, 1, 1, 1]
      }
    }, {
      amount: 15,
      result: {
        value: 2,
        coins: [10, 5]
      }
    }, {
      amount: 16,
      result: {
        value: 3,
        coins: [10, 5, 1]
      }
    }, {
      amount: 17,
      result: {
        value: 4,
        coins: [10, 5, 1, 1]
      }
    }, {
      amount: 18,
      result: {
        value: 5,
        coins: [10, 5, 1, 1, 1]
      }
    }, {
      amount: 19,
      result: {
        value: 6,
        coins: [10, 5, 1, 1, 1, 1]
      }
    }, {
      amount: 20,
      result: {
        value: 2,
        coins: [10, 10]
      }
    }, {
      amount: 21,
      result: {
        value: 3,
        coins: [10, 10, 1]
      }
    }, {
      amount: 22,
      result: {
        value: 4,
        coins: [10, 10, 1, 1]
      }
    }, {
      amount: 23,
      result: {
        value: 5,
        coins: [10, 10, 1, 1, 1]
      }
    }, {
      amount: 24,
      result: {
        value: 6,
        coins: [10, 10, 1, 1, 1, 1]
      }
    }, {
      amount: 25,
      result: {
        value: 3,
        coins: [10, 10, 5]
      }
    }, {
      amount: 26,
      result: {
        value: 4,
        coins: [10, 10, 5, 1]
      }
    }];

    for (let i = 0; i <= amount; i += 1) {
      results.push({
        amount: i,
        result: minCoinChange({ coins, amount: i }),
      });
    }
    
    expect(results).to.eql(expectedResults);
  });
});