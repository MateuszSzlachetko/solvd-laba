function customFilterUnique(array, callback) {
  const unique = new Set();
  return array.filter(item => {
    const value = callback(item);
    const identifier = JSON.stringify(value);
    if (value !== undefined && !unique.has(identifier)) {
      unique.add(identifier);
      return true;
    } else {
      return false;
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
let arrayOfObjects = [
  {a: 1, b: 2},
  {a: 1, b: 2},
  {c: 3, d: 4},
  {a: 5, b: 6},
  {e: 7, f: 8},
  {g: 9, h: 0}
];

const filterByPropertyA = (obj) => {
  if (!obj || typeof obj !== "object") throw new Error("pass an object as parameter")
  return Object.keys(obj).includes("a") ? obj : undefined
}

console.log(customFilterUnique(arrayOfObjects, filterByPropertyA))