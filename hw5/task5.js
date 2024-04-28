function measureArrayPerformance(fun, array) {
  const start = performance.now();
  fun(array);
  const end = performance.now();
  return end - start;
}

const array = Array.from({length: 100000}, (_, i) => i);

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const mapPerformance = measureArrayPerformance(arr => arr.map(x => x * 2), array);
const mapPerformanceCustom = measureArrayPerformance(arr => customMap(arr, x => x * 2), array);
console.log("Map")
console.log(mapPerformance.toFixed(2))
console.log(mapPerformanceCustom.toFixed(2))

function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const filterPerformance = measureArrayPerformance(arr => arr.filter(x => x % 2), array);
const filterPerformanceCustom = measureArrayPerformance(arr => customFilter(arr, x => x % 2), array);
console.log("Filter")
console.log(filterPerformance.toFixed(2))
console.log(filterPerformanceCustom.toFixed(2))

function customReduce(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const reducePerformance = measureArrayPerformance(arr => arr.reduce((acc, x) => acc + x), array);
const reducePerformanceCustom = measureArrayPerformance(arr =>
    customReduce(arr, (acc, x) => acc + x),
  array);

console.log("Reduce")
console.log(reducePerformance.toFixed(2))
console.log(reducePerformanceCustom.toFixed(2))