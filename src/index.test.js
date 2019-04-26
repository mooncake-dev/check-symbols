'use strict';

const checkSymbols = require('./');

describe('checkSymbols(receivedSymbols, requiredSymbol)', () => {
  test('returns "false" with empty symbols', () => {
    const want = false;
    const got = checkSymbols();
    expect(got).toEqual(want);
  });

  test('returns "false" with empty received symbols', () => {
    const want = false;
    const got = checkSymbols('', 'a');
    expect(got).toEqual(want);
  });

  test('returns "false" when received symbols do not contain the required symbol', () => {
    const want = false;
    const got = checkSymbols('a b', 'c');
    expect(got).toEqual(want);
  });

  test('returns "true" when received symbols contain the required symbol', () => {
    const want = true;
    const got = checkSymbols('a b c', 'b');
    expect(got).toEqual(want);
  });
});
