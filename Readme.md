
  
  ![Tests](https://github.com/xvicmanx/algorithms/workflows/tests/badge.svg)
  
# Run applications

## Reverse text
```
npm run application -- --name="reverse-text" --text="hola"
```

## Balanced Parentheses
```
npm run application -- --name="balanced-parentheses" --expression="([a+b] + x)"
```


## Installation

Clone the repository and run:

```sh
npm install
```

## Tests and coverage
To run the tests:
```sh
npm test
```

To generate the tests coverage report:
```sh
npm run coverage
```


## Dependencies

- [@types/node](https://ghub.io/@types/node): TypeScript definitions for Node.js
- [camelcase](https://ghub.io/camelcase): Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`
- [minimist](https://ghub.io/minimist): parse argument options
- [require-all](https://ghub.io/require-all): An easy way to require all files within a directory.

## Dev Dependencies

- [@types/chai](https://ghub.io/@types/chai): TypeScript definitions for chai
- [@types/mocha](https://ghub.io/@types/mocha): TypeScript definitions for mocha
- [chai](https://ghub.io/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [nyc](https://ghub.io/nyc): the Istanbul command line interface
- [ts-node](https://ghub.io/ts-node): TypeScript execution environment and REPL for node.js, with source map support
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development

## License

ISC