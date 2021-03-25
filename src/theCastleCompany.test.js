/* eslint-env jest */
const theCastleCompany = require('./theCastleCompany');

describe('getCastleCount()', () => {
  test('Given the input [6, 1, 4], should return 3 castles.', () => {
    const input = [6, 1, 4];
    const expected = 3;
    const actual = theCastleCompany.getCastleCount(input);
    expect(actual).toBe(expected);
  });

  test('Given the input [2, 6, 6, 6, 3], should return 3 castles.', () => {
    const input = [2, 6, 6, 6, 3];
    const expected = 3;
    const actual = theCastleCompany.getCastleCount(input);
    expect(actual).toBe(expected);
  });

  test('Given the input [3, 2, 4, 2, 6, 6, 6, 6, 3, 4, 3], should return 8 castles.', () => {
    const input = [3, 2, 4, 2, 6, 6, 6, 6, 3, 4, 3];
    const expected = 8;
    const actual = theCastleCompany.getCastleCount(input);
    expect(actual).toBe(expected);
  });

  test('Given the input [1] with just 1 item, automatically should return 1 castle.', () => {
    const input = [1];
    const expected = 1;
    const actual = theCastleCompany.getCastleCount(input);
    expect(actual).toBe(expected);
  });

  test('Given the input [2, 1] with just 2 items, automatically should return 2 castle.', () => {
    const input = [2, 1];
    const expected = 2;
    const actual = theCastleCompany.getCastleCount(input);
    expect(actual).toBe(expected);
  });
});
