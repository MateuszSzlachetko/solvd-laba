function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(chunkArray(arr1, 3));
console.log(chunkArray(arr1, 2));
console.log(chunkArray(arr1, 5));
console.log(chunkArray(arr2, 6));