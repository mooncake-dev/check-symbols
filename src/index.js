'use strict';

/**
 * Checks if a string of symbols contains a required symbol.
 *
 * @param {String} receivedSymbols - The symbols to check
 * @param {String} requiredSymbol - The required symbol
 *
 * @return {Bool} If the symbol was found
 */
function checkSymbols(receivedSymbols = '', requiredSymbol) {
  const hasSymbol = receivedSymbols.split(' ').includes(requiredSymbol);
  return hasSymbol;
}

module.exports = checkSymbols;
