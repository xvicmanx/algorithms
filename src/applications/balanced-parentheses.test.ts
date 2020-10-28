import { expect } from 'chai';
import areParenthesesBalanced from './balanced-parentheses';


describe('areParenthesesBalanced', () => {
  it('fails if the expression param is not provided', () => {
    expect(() => {
      areParenthesesBalanced({});
    }).to.throw();
  });

  it('returns the correct results', () => {
    expect(areParenthesesBalanced({ expression: '()' })).to.equal(true);
    expect(areParenthesesBalanced({ expression: '[]' })).to.equal(true);
    expect(areParenthesesBalanced({ expression: '{}' })).to.equal(true);
    expect(areParenthesesBalanced({ expression: '(}' })).to.equal(false);
    expect(areParenthesesBalanced({ expression: '[}' })).to.equal(false);
    expect(areParenthesesBalanced({ expression: '{)' })).to.equal(false);
    expect(areParenthesesBalanced({ expression: '(a + b + [(c * a) + x]) + {y}' })).to.equal(true);
    expect(areParenthesesBalanced({ expression: '(a + b + [c * a) + x]) + {y}' })).to.equal(false);
  });
});