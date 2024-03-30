require('./index.js')

describe('String.prototype.divide', () => {
  it('should divide small numbers', () => {
    expect('5'.divide('5')).toBe('1');
    expect('15'.divide('5')).toBe('3');
    expect('13'.divide('3')).toBe('4');
    expect('280'.divide('2')).toBe('140');
    expect('8615365'.divide('961')).toBe('8965');
  });

  it('should  divide BigInt arg', () => {
    const num = "3"
    const bigIntNum1 = "90999999999999999999999999099999999999999999999999"
    const bigIntNum2 = "272999999999999999999999997299999999999999999999997"

    expect(bigIntNum2.divide(bigIntNum1)).toBe('3');
  });
})