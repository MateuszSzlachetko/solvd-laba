// Fisher-Yates shuffle
function customShuffle(array) {
  const result = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(customShuffle(arr1));
console.log(customShuffle(arr2));

const uniformRandomnessTest = Array.from({length: arr1.length}, () => Array(arr1.length).fill(0));
/*
* for every position in the array, count how many times each value appeared
* Each index should have each value more or less the same number of times
*/
for (let i = 0; i < 1000000; i++) {
  const shuffled = customShuffle(arr1);
  for (let j = 0; j < shuffled.length; j++) {
    uniformRandomnessTest[j][shuffled[j] - 1]++;
  }
}
console.log(uniformRandomnessTest)