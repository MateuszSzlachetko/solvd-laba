const {validateMinusArgs} = require('./index');

describe('validateMinusArgs', () => {
  it('should not throw on correct args', () => {
    expect(() => validateMinusArgs("1234", "234")).not.toThrow()
    expect(() => validateMinusArgs("65824", "5234")).not.toThrow()
    expect(() => validateMinusArgs("65824", "65823")).not.toThrow()
    expect(() => validateMinusArgs("123", "122")).not.toThrow()
    expect(() => validateMinusArgs("2", "1")).not.toThrow()
  });

  it('should throw on incorrect args', () => {
    expect(() => validateMinusArgs("10", "11")).toThrow()
    expect(() => validateMinusArgs("8", "9")).toThrow()
    expect(() => validateMinusArgs("123", "1234")).toThrow()
    expect(() => validateMinusArgs("65824", "65824")).toThrow()
    expect(() => validateMinusArgs("1000", "1000000000")).toThrow()
  });
})

describe('String.prototype.minus', () => {
  it('should subtract small numbers', () => {
    expect('10'.minus('5')).toBe('5');
    expect('157829'.minus('829')).toBe('157000');
    expect('1234'.minus('345')).toBe('889');
    expect('12'.minus('11')).toBe('1');
    expect('89999998'.minus('79999999')).toBe('9999999');
    expect('80000008'.minus('70000009')).toBe('9999999');
  });

  it('should accurately subtract very large numbers', () => {
    const bigIntNum1 = '987654321987654321987654321';
    const bigIntNum2 = '123456789123456789123456789';
    const bigIntNum3 = "90999999999999999999999999099999999999999999999999"
    const bigIntNum4 = "99999999999999999999999"
    expect(bigIntNum1.minus(bigIntNum2)).toBe('864197532864197532864197532');
    expect(bigIntNum3.minus(bigIntNum4)).toBe('90999999999999999999999999000000000000000000000000');
  });
})