// @ts-check

const requireAll = require('require-all');
const camelCase = require('camelcase');


const applicationFiles = requireAll({
  dirname: __dirname,
  filter: (name) => (name === 'index.ts' || name.includes('test.ts')) ? null : name.replace('.ts', ''),
});

const applications = Object.keys(applicationFiles)
  .reduce((acc, key) => ({
    ...acc,
    [camelCase(key)]: applicationFiles[key].default,
  }), {});

export default applications;