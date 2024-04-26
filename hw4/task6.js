function deepCloneObject(obj) {
  const helper = function (obj, map = new Map()) {
    if (obj === null || typeof obj !== 'object')
      return obj;

    if (map.has(obj)) // check for circular reference
      return map.get(obj);

    if (obj instanceof Date)
      return new Date(obj);

    if (Array.isArray(obj)) {
      const clonedArray = [];
      map.set(obj, clonedArray);
      obj.forEach((item, index) => {
        clonedArray[index] = helper(item, map);
      });
      return clonedArray;
    }

    const clonedObject = {};
    map.set(obj, clonedObject);

    Object.keys(obj).forEach(key => {
      clonedObject[key] = helper(obj[key], map);
    });

    return clonedObject;
  }

  return helper(obj);
}

const original = {
  num: 1,
  str: 'hello',
  bool: false,
  nul: null,
  undef: undefined,
  date: new Date(),
  arr: [1, 2, 3],
  obj: {foo: 'bar'},
  func: function () {
    console.log('Hello world');
  }
};
original.circular = original;
const cloned = deepCloneObject(original);
const cloned2 = deepCloneObject(cloned);

console.log(cloned)
console.log(cloned2)
console.log('Og date: ', original.date, 'Cloned date: ', cloned.date);
console.log('Circular reference: ', cloned.circular === cloned);