import { expect } from 'chai';
import reverseText from './reverse-text';


describe('reverseText', () => {
  it('fails if the text param is not provided', () => {
    expect(() => {
      reverseText({});
    }).to.throw();
  });

  it('returns the correct results', () => {
    expect(reverseText({ text: 'a' })).to.equal('a');
    expect(reverseText({ text: 'abcdefghi' })).to.equal('ihgfedcba');
  });
});