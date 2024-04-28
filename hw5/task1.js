function customFilterUnique(array, callback) {
  const unique = new Set();
  return array.filter(item => {
    const value = callback(item);
    if (unique.has(value)) {
      return false;
    } else {
      unique.add(value);
      return true;
    }
  });
}

const data = [
  {id: 1, name: "A"},
  {id: 2, name: "B"},
  {id: 3, name: "C"},
  {id: 4, name: "B"},
  {id: 5, name: "C"},
  {id: 6, name: "D"},
];

const uniqueByName = customFilterUnique(data, item => item.name);
console.log(uniqueByName);
