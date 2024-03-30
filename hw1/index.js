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

const validateMinusArgs = (arg1, arg2) => {
  if (arg1.length > arg2.length)
    return;

  const error = new Error("First term must be greater than the second one");
  if (arg1.length === arg2.length) {
    for (let i = 0; i < arg1.length; ++i) {
      if (parseInt(arg1[i]) > parseInt(arg2[i]))
        return;
      if (parseInt(arg1[i]) === parseInt(arg2[i]))
        continue;
      if (parseInt(arg1[i]) < parseInt(arg2[i]))
        throw error;
    }
  }
  // Comment for >= constraint
  throw error;
}

String.prototype.minus = function (term) {
  let x = this, y = term;
  validateMinusArgs(x, y);

  let result = [], borrow = 0;
  for (let i = 0; i < x.length; i++) {
    let c = parseInt(x[x.length - 1 - i], 10) - borrow;
    if (i < y.length) c -= parseInt(y[y.length - 1 - i], 10);
    if (c < 0) {
      c += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    result.push(c)
  }
  return result.reverse().join('').replace(/^0+/, ''); // if "0" is acceptable, then approach needs to be changed
}

String.prototype.multiply = function (factor) {
  let x = this, y = factor, base = 10;
  if (x.length < y.length) {
    [x, y] = [y, x];
  }
  let product = [];
  product.length = x.length + y.length;
  product.fill(0);

  let i, j, carry;
  for (i = y.length - 1; i >= 0; i--) {
    carry = 0;
    for (j = x.length - 1; j >= 0; j--) {
      product[i + j + 1] += carry + parseInt(x[j], 10) * parseInt(y[i], 10);
      carry = Math.floor(product[i + j + 1] / base);
      product[i + j + 1] = product[i + j + 1] % base;
    }
    product[i] = carry;
  }
  return product.join('').replace(/^0+/, ''); // if "0" is acceptable, then approach needs to be changed
}

module.exports = {validateMinusArgs};
