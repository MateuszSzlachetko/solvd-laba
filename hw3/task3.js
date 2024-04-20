// Task 3
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter()
const counter2 = createCounter()

console.log(counter1() === 1)
console.log(counter1() === 2)
console.log(counter1() === 3)
console.log(counter1() === 4)
console.log(counter2() === 1)

// This implementation is prone to stackoverflow,
// below is the version which uses loops
function repeatFunctionRec(fun, numOfInvocations) {
  if (numOfInvocations !== 0) {
    fun();
    return repeatFunction(fun, numOfInvocations - 1);
  }
}

function repeatFunction(fun, numOfInvocations) {
  return function () {
    if (numOfInvocations < 0) {
      while (true) {
        fun();
      }
    } else {
      for (let i = 0; i < numOfInvocations; i++) {
        fun();
      }
    }
  }();
}

repeatFunction(() => console.log("abc"), 5)
repeatFunction(() => console.log("test"), -1)