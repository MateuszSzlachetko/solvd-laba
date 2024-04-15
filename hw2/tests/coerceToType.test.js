const { coerceToType } = require('../library');

describe('coerceToType', () => {
  test('should convert any value to a string', () => {
    expect(coerceToType(123, 'string')).toBe('123');
    expect(coerceToType(true, 'string')).toBe('true');
  });

  test('should convert any value to a number', () => {
    expect(coerceToType('123', 'number')).toBe(123);
    expect(() => coerceToType('abc', 'number'))
      .toThrow('Cannot convert string: \'abc\' to number');
  });

  test('should convert any value to a boolean', () => {
    expect(coerceToType(1, 'boolean')).toBe(true);
    expect(coerceToType(0, 'boolean')).toBe(false);
  });

  test('should convert a JSON string to an object', () => {
    expect(coerceToType('{"a":1}', 'object'))
      .toEqual({ a: 1 });
    expect(() => coerceToType('invalid JSON', 'object'))
      .toThrow('Cannot coerce \'invalid JSON\' to object');
  });

  test('should throw an error for unsupported types', () => {
    expect(() => coerceToType(123, 'undefined'))
      .toThrow('Unsupported type: undefined');
  });
});