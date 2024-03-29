String.prototype.plus = function (term) {
  let x = this, y = term;
  if (x.length < y.length) {
    [x, y] = [y, x];
  }
  let carry = 0, result = [];
  for (let i = 0; i < x.length || carry; i++) {
    let sum = carry;
    if (i < x.length) sum += parseInt(x[x.length - 1 - i], 10);
    if (i < y.length) sum += parseInt(y[y.length - 1 - i], 10);
    const sumStr = sum.toString()

    if (sumStr.length > 1) {
      carry = parseInt(sumStr[0])
      result.push(sumStr[1]);
    } else {
      carry = 0;
      result.push(sumStr[0]);
    }
  }
  return result.reverse().join('');
}
