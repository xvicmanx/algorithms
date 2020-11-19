import { expect } from 'chai';
import isPalindrome from './palindrome';


describe('isPalindrome', () => {
  it('fails if the text param is not provided', () => {
    expect(() => {
      isPalindrome({});
    }).to.throw();
  });

  it('returns the correct results', () => {
    expect(isPalindrome({ text: 'abcba' })).to.equal(true);
    expect(isPalindrome({ text: 'a' })).to.equal(true);
    expect(isPalindrome({ text: 'abcde' })).to.equal(false);
    expect(isPalindrome({ text: 'abc.ba' })).to.equal(false);
  });
});