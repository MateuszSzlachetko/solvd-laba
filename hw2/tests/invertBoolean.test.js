const {invertBoolean} = require('../library');

describe('invertBoolean', () => {
  test('should return false when true is passed', () => {
    expect(invertBoolean(true)).toBe(false);
  });

  test('should return true when false is passed', () => {
    expect(invertBoolean(false)).toBe(true);
  });

  test('should not throw an error for boolean values', () => {
    expect(() => invertBoolean(true)).not.toThrow();
    expect(() => invertBoolean(false)).not.toThrow();
  });

  test('should throw an error if a non-boolean value is passed', () => {
    const nonBooleanValues = [null, undefined, 0, 1, '', 'true', [], {}, function () {}];
    nonBooleanValues.forEach(value => {
      expect(() => invertBoolean(value)).toThrow('invertBoolean requires a boolean argument');
    });
  });

  test('should correctly invert when non-boolean values are converted to boolean', () => {
    expect(invertBoolean(Boolean(1))).toBe(false);
    expect(invertBoolean(Boolean(0))).toBe(true);
    expect(invertBoolean(Boolean('false'))).toBe(false);
    expect(invertBoolean(Boolean(''))).toBe(true);
    expect(invertBoolean(Boolean([]))).toBe(false);
    expect(invertBoolean(Boolean({}))).toBe(false);
    expect(invertBoolean(Boolean(null))).toBe(true);
    expect(invertBoolean(Boolean(undefined))).toBe(true);
  });
});