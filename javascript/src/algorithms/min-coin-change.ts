// @ts-check

import {
  missingParam,
  throwMissingParamError,
  findMaxNumber,
  argMin,
  minimum,
} from '../helpers';

interface Payload {
  coins?: Array<number>;
  amount?: number;
}

interface Result {
  value: number;
  coins: Array<number>;
}

/**
 * Finds the minimum number of coins necessary to give change of a certain amoung
 * @param {Payload} payload - payload
 * @return {Result} The optimal solution
 */
const minCoinChange = (payload: Payload): Result => {
  if (missingParam(payload, 'coins')) {
    throwMissingParamError('coins');
  }

  if (missingParam(payload, 'amount')) {
    throwMissingParamError('amount');
  }

  const INF = Number.MAX_SAFE_INTEGER;
  const { coins, amount } = payload;
  const numberOfCoins = [];
  const changeCoins = [];
    
  // Initialization
  for (let i = 0; i <= amount; i++) {
    numberOfCoins[i] = INF;
    changeCoins[i] = [];
  }

  // Filling up the table using bottom up approach
  for (let m = 0; m <= amount; m++) {
    if (coins.includes(m)) {
      numberOfCoins[m] = 1;
      changeCoins[m] = [m];
    } else {
      let minimumValue = INF;
      let minCoin = -1;
      const validCoins = coins.filter(coin => coin <= m);

      if (validCoins.length) {
        const fn = coin => numberOfCoins[m - coin] || 0;
        minCoin = argMin(fn).forItemsIn(validCoins);
        minimumValue = minimum(fn).forItemsIn(validCoins);
      }

      if (minCoin > 0) {
        numberOfCoins[m] = 1 + minimumValue;
        changeCoins[m] = [...changeCoins[m - minCoin], minCoin];
      }
    } 
  }

  return {
    value: numberOfCoins[amount],
    coins: changeCoins[amount],
  };
};

export default minCoinChange;
