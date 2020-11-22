// @ts-check

import algorithms from '../src/algorithms';
import * as structures from '../src/data-structures';

const repl = require('repl');

(async () => {
  const { log, time, timeEnd } = console;

  log('Playground started');

  (global as any).structures = structures;

  (global as any).algorithms = algorithms;

  (global as any).reportTime = async (label, cb) => {
    time(label);
    await cb();
    timeEnd(label);
  };

  Object.defineProperty(global, 'quit', {
    get() {
      return process.exit(0);
    },
  });

  Object.defineProperty(global, 'exit', {
    get() {
      return process.exit(0);
    },
  });

  repl.start({ prompt: 'playground > ' });
})();
