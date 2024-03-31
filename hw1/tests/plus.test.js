require('../index.js')

describe('String.prototype.plus', () => {
  it('should add small numbers', () => {
    expect('1'.plus('2')).toBe('3');
    expect('15'.plus('12')).toBe('27');
    expect('100'.plus('90')).toBe('190');
    expect('10012'.plus('9')).toBe('10021');
    expect('9'.plus('10012')).toBe('10021');
  });

  it('should handle 0 as arg', () => {
    expect('0'.plus('1')).toBe('1');
    expect('15'.plus('0')).toBe('15');
    expect('0'.plus('0')).toBe('0');
  });

  it('should handle BigInt args', () => {
    const bigIntNum = "1000111000111000111000"
    const bigIntNum2 = "90999999999999999999999999099999999999999999999999"

    expect(bigIntNum.plus('111')).toBe('1000111000111000111111');
    expect(bigIntNum.plus(bigIntNum)).toBe('2000222000222000222000');
    expect(bigIntNum.plus(bigIntNum2)).toBe('90999999999999999999999999101000111000111000110999');
    expect('1'.plus(bigIntNum2)).toBe('90999999999999999999999999100000000000000000000000');
  });
})