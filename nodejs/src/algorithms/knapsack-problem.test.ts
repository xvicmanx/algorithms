import { expect } from 'chai';
import knapsackProblem from './knapsack-problem';


describe('knapsackProblem', () => {
  const capacity = 5;
  const items = [
    {
      value: 3,
      weight: 2,
    },
    {
      value: 4,
      weight: 3,
    },
    {
      value: 5,
      weight: 4,
    },
  ];

  it('fails if the coins param is not provided', () => {
    expect(() => { knapsackProblem({ capacity }); }).to.throw();
  });

  it('fails if the amount param is not provided', () => {
    expect(() => { knapsackProblem({ items }); }).to.throw();
  });

  it('returns the expected results', () => {
    const results = [];
    const expectedResults = [{
      capacity: 0,
      result: {
        value: 0,
        items: []
      }
    }, {
      capacity: 1,
      result: {
        value: 0,
        items: []
      }
    }, {
      capacity: 2,
      result: {
        value: 3,
        items: [{
          value: 3,
          weight: 2
        }]
      }
    }, {
      capacity: 3,
      result: {
        value: 4,
        items: [{
          value: 4,
          weight: 3
        }]
      }
    }, {
      capacity: 4,
      result: {
        value: 6,
        items: [{
          value: 3,
          weight: 2
        }, {
          value: 3,
          weight: 2
        }]
      }
    }, {
      capacity: 5,
      result: {
        value: 7,
        items: [{
          value: 4,
          weight: 3
        }, {
          value: 3,
          weight: 2
        }]
      }
    }];

    for (let i = 0; i <= capacity; i += 1) {
      results.push({
        capacity: i,
        result: knapsackProblem({ items, capacity: i }),
      });
    }
    
    expect(results).to.eql(expectedResults);
  });
});