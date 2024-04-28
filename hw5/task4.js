function getArrayIntersection(array1, array2) {
  const set = new Set(array1);
  return array2.filter(item => set.has(item));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(getArrayIntersection(arr1, arr2));

function getArrayUnion(array1, array2) {
  const combined = [...array1, ...array2];
  return [...new Set(combined)];
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [4, 5, 6, 7, 8];
console.log(getArrayUnion(arr3, arr4));