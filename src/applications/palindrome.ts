// @ts-check

import { Dequeue } from '../data-structures';


interface Payload {
  text?: string;
}

/**
 * Checks if a given text string is a palindrome
 * @param {Payload} payload - payload
 * @return {boolean} to indicate if it is a palindrome
 */
const isPalindrome = (payload: Payload): boolean => {
  const dequeue = new Dequeue();

  if (!payload.text) {
    throw new Error('Please, provide the "text" parameter');
  }

  for (const character of payload.text) {
    dequeue.pushBack(character);
  }

  const steps = [];

  while (!dequeue.empty()) {
    const characterAtFront = dequeue.popFront();
    const characterAtBack = dequeue.popBack();

    if (characterAtBack && characterAtFront !== characterAtBack) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
