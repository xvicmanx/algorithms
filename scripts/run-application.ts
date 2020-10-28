// @ts-check

import applications from '../applications';

const minimist = require('minimist');


const args = minimist(process.argv.slice(2));

if (!args.name) {
  throw new Error('Please, provide the name of the application to run');
}

const application = applications[args.name];

if (!application) {
  throw new Error(`Application for name "${args.name}" does not exist`);
}

const { log } = console;

log(`Running application "${args.name}"`);
log('  Params:');

Object.entries(args).forEach(entry => {
  if (['name', '_'].includes(entry[0])) {
    return;
  }

  log(`    ${entry[0]} = ${entry[1]}`);
});

const result = application(args);

log(`  Result: ${result}`);

