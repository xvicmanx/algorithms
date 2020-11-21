// @ts-check

import algorightms from '../src/algorightms';

const minimist = require('minimist');


const args = minimist(process.argv.slice(2));

if (!args.name) {
  throw new Error('Please, provide the name of the algorightm to run');
}

const algorightm = algorightms[args.name];

if (!algorightm) {
  throw new Error(`Algorightm for name "${args.name}" does not exist`);
}

const { log } = console;

log(`Running algorightm "${args.name}"`);
log('  Params:');

Object.entries(args).forEach(entry => {
  if (['name', '_'].includes(entry[0])) {
    return;
  }

  log(`    ${entry[0]} = ${entry[1]}`);
});

const result = algorightm(args);

log(`  Result: ${result}`);

