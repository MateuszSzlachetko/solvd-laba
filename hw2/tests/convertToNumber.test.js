const { convertToNumber } = require('../library');

describe('convertToNumber', () => {
  test('should convert strings to numbers', () => {
    expect(convertToNumber("123")).toBe(123);
    expect(convertToNumber("123.456")).toBe(123.456);
    expect(convertToNumber("0.56")).toBe(0.56);
    expect(convertToNumber("00012")).toBe(12);
    expect(() => convertToNumber("abc123"))
      .toThrow('Cannot convert string: \'abc123\' to number');
    expect(() => convertToNumber("NaN"))
      .toThrow('Cannot convert string: \'NaN\' to number');
  });

  test('should convert boolean values to numbers', () => {
    expect(convertToNumber(true)).toBe(1);
    expect(convertToNumber(false)).toBe(0);
  });

  test('should convert null, [] and undefined appropriately', () => {
    expect(convertToNumber(null)).toBe(0);
    expect(convertToNumber([])).toBe(0);
    expect(() => convertToNumber(undefined))
      .toThrow('Cannot convert undefined to number');
  });

  test('should handle number inputs', () => {
    expect(convertToNumber(88)).toBe(88);
    expect(convertToNumber(-45.67)).toBe(-45.67);
  });

  test('should throw an error for objects, arrays, and functions', () => {
    expect(() => convertToNumber({}))
      .toThrow('Cannot convert [object Object] to number');
    expect(() => convertToNumber(() => {}))
      .toThrow('Cannot convert () => {} to number');
  });
});