// Task 5

function lazyMap(array, mappingFunction) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        const value = mappingFunction(array[index]);
        index++;
        return  {value: value, done: false};
      } else {
        return {done: true};
      }
    }
  };
}

const numbers = [1, 2, 3, 4];
const squaredNumbers = lazyMap(numbers, x => x * x);

console.log(squaredNumbers.next());
console.log(squaredNumbers.next());
console.log(squaredNumbers.next());
console.log(squaredNumbers.next());
console.log(squaredNumbers.next());

function fibonacciGenerator() {
  let [a, b] = [0, 1];
  return {
    next: function () {
      let current = a;
      [a, b] = [b, a + b];
      return {value: current, done: false};
    }
  };
}

const fib = fibonacciGenerator();

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());