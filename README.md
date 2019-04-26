# Check Symbols

Checks if a string of space separated symbols includes a specific one or not.

- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Publish](#publish)

## Installation

```
npm i @mooncake-dev/check-symbols
```

## API

The module exposes a single function to check symbols.

### checkSymbols(receivedSymbols, requiredSymbol)

**Parameters:**

| Name            | Required | Type   | Description                                          |
| --------------- | -------- | ------ | ---------------------------------------------------- |
| receivedSymbols | Yes      | String | A string of space separated symbols, e.g. `"a b c"`. |
| requiredSymbol  | Yes      | String | The symbol to check for, e.g. `"b"`.                 |

**Returns:**

Boolean. If the required symbol was found or not.

## Usage

```js
const checkSymbols = require('@mooncake-dev/check-symbols');
checkSymbols('a b c', 'e'); // false
```

## Publish

For now we publish manually using:

```
npm publish --access public
```

Make sure:

- You increment the npm version after you make code changes with `npm version`.
- You're logged in.

More information can be found [here](https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package).
