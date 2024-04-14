const { addValues } = require('../library');

describe('addValues', () => {
  test('should add two numbers', () => {
    expect(addValues(5, 3)).toBe(8);
    expect(addValues(5.33, 3)).toBe(8.33);
  });

  test('should concatenate two strings', () => {
    expect(addValues("hello", " world")).toBe("hello world");
  });

  test('should concatenate two arrays', () => {
    expect(addValues([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should add two bigint values', () => {
    expect(addValues(BigInt(10000000000000000000000), BigInt(20000000000000000000000)))
      .toBe(BigInt(30000000000000000000000));
  });

  test('should add two boolean values as numbers', () => {
    expect(addValues(true, false)).toBe(1);
    expect(addValues(true, true)).toBe(2);
    expect(addValues(false, false)).toBe(0);
  });

  test('should merge two objects', () => {
    expect(addValues({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
  });

  test('should throw an error when trying to add incompatible types', () => {
    expect(() => addValues("string", 5)).toThrow('Incompatible types for addition');
    expect(() => addValues({a: 1}, [1, 2])).toThrow('Incompatible types for addition');
    expect(() => addValues(null, undefined)).toThrow('Incompatible types for addition');
  });
});