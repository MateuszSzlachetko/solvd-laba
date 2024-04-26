const person = {}

Object.defineProperties(person, {
  firstName: {value: 'John', writable: false},
  lastName: {value: 'Doe', writable: false},
  age: {value: 30, writable: false},
  email: {value: 'john.doe@example.com', writable: false}
});

person.updateInfo = function (info) {
  for (let key in info) {
    if (Object.hasOwn(this, key) && !Object.getOwnPropertyDescriptor(this, key).writable) {
      console.log(`Cannot update ${key} as it is read-only.`);
    } else {
      this[key] = info[key];
    }
  }
}

person.updateInfo({age: 20})
console.log(person.age)

Object.defineProperty(person, 'address', {
  value: {},
  enumerable: false,
  writable: true,
  configurable: false
});

console.log('Address property:', person.address);
for (let key in person) {
  console.log(key); // lists only updateInfo method
}
person.updateInfo({address: {street: "test", city: "test",}});
console.log('Address property:', person.address);
