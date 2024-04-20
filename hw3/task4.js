// Task 4
function calculateFactorial(n) {
  function inner(num, acc) {
    if (num < 2) {
      return acc;
    }
    return inner(num - 1, num * acc);
  }

  return inner(n, 1);
}

const a = calculateFactorial(0)
const b = calculateFactorial(1)
const c = calculateFactorial(5)
const d = calculateFactorial(50)
const e = calculateFactorial(1480)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

function power(base, exponent) {
  if (exponent === 0)
    return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2,4));
console.log(power(5,2));
console.log(power(25,120));
console.log(power(3,3));