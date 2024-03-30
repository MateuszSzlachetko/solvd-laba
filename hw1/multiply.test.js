require('./index.js')

describe('String.prototype.multiply', () => {
  it('should multiply small numbers', () => {
    expect('5'.multiply('5')).toBe('25');
    expect('15'.multiply('12')).toBe('180');
    expect('100'.multiply('90')).toBe('9000');
    expect('252'.multiply('4')).toBe('1008');
    expect('4321'.multiply('123')).toBe('531483');
  });

  it('should  multiply BigInt arg', () => {
    const num = "3"
    const bigIntNum1 = "90999999999999999999999999099999999999999999999999"
    const bigIntNum2 = "123879321897982137982317"
    const bigIntNum3 = "213872137982139782139782313220"

    expect(bigIntNum1.multiply(num)).toBe('272999999999999999999999997299999999999999999999997');
    expect(bigIntNum2.multiply(bigIntNum3)).toBe('26494335426099146058615146414300682332303493715330740');
    expect(bigIntNum1.multiply(bigIntNum3)).toBe('19462364556374720174720190310535075816074196074195704229862017860217860217686780');
  });
})