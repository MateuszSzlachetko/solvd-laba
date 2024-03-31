require('../index.js')

describe('String.prototype.divide', () => {
  it('should divide small numbers', () => {
    expect('5'.divide('5')).toBe('1');
    expect('15'.divide('5')).toBe('3');
    expect('13'.divide('3')).toBe('4');
    expect('280'.divide('2')).toBe('140');
    expect('8615365'.divide('961')).toBe('8965');
  });

  it('should  divide BigInt arg', () => {
    const bigIntNum1 = "272999999999999999999999997299999999999999999999997"
    const bigIntNum2 = "90999999999999999999999999099999999999999999999999"
    const bigIntNum3 = "21312333333335323252352235532346325352352352352"
    const bigIntNum4 = "57831233122312312331222222222221332121323232"

    expect(bigIntNum1.divide(bigIntNum2)).toBe('3');
    expect(bigIntNum3.divide(bigIntNum4)).toBe('368');
  });
})