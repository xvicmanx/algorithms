// @ts-check

import { Stack } from '../data-structures';


interface Payload {
  text?: string;
}

/**
 * Reverse a given text string
 * @param {Payload} payload - payload
 * @return {string} the string reversed
 */
const reverseText = (payload: Payload): string => {
  const stack = new Stack();

  if (!payload.text) {
    throw new Error('Please, provide the "text" parameter');
  }

  for (const character of payload.text) {
    stack.push(character);
  }

  let result = '';

  while (!stack.empty()) {
    const character = stack.pop();
    result = `${result}${character}`;
  }

  return result;
};

export default reverseText;
