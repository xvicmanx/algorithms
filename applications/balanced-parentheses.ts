// @ts-check

import { Stack } from '../data-structures';


interface Payload {
  expression?: string;
}

const OPENING_PARENTHESES = ['(', '[', '{'];
const CLOSING_PARENTHESES = [')', ']', '}'];

/**
 * Checks if a given expression has parentheses balanced.
 * @param {Payload} payload - payload
 * @return {boolean} indicating if the expression has balanced parentheses
 */
const areParenthesesBalanced = (payload: Payload): boolean => {
  const stack = new Stack();

  if (!payload.expression) {
    throw new Error('Please, provide the expression parameter');
  }

  for (const character of payload.expression) {
    if (OPENING_PARENTHESES.includes(character)) {
      stack.push(character);
    }

    if (CLOSING_PARENTHESES.includes(character)) {
      const index = CLOSING_PARENTHESES.indexOf(character);
      const extractedChar = stack.pop();

      if (!extractedChar || extractedChar !== OPENING_PARENTHESES[index]) {
        return false;
      }
    }
  }

  return stack.empty();
};

export default areParenthesesBalanced;
