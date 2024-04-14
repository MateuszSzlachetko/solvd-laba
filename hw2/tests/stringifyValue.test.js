const { stringifyValue } = require('../library');

describe('stringifyValue', () => {
  test('should convert a number to a string', () => {
    expect(stringifyValue(123)).toBe("123");
  });

  test('should convert a boolean to a string', () => {
    expect(stringifyValue(true)).toBe("true");
    expect(stringifyValue(false)).toBe("false");
  });

  test('should convert null to a string', () => {
    expect(stringifyValue(null)).toBe("null");
  });

  test('should convert undefined to a string', () => {
    expect(stringifyValue(undefined)).toBe("undefined");
  });

  test('should serialize an array to a JSON string', () => {
    expect(stringifyValue([1, 2, 3])).toBe("[1,2,3]");
  });

  test('should serialize an object to a JSON string', () => {
    expect(stringifyValue({ a: 1, b: '2' })).toBe('{"a":1,"b":"2"}');
  });

  test('should convert a function to a string', () => {
    function exampleFunction() {
      return 'example';
    }
    expect(stringifyValue(exampleFunction)).toContain("function exampleFunction");
  });

  test('should convert a date object to a string', () => {
    const date = new Date("2023-01-01");
    expect(stringifyValue(date)).toBe(JSON.stringify(date));
  });

  test('should handle special characters in strings correctly', () => {
    expect(stringifyValue("Hello, world!")).toBe("Hello, world!");
  });
});