function createImmutableObject(obj) {
  const isObject = x => x && typeof x === 'object';
  const helper = function (obj) {
    const immutableObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      let value = obj[key];

      if (isObject(value)) {
        value = helper(value);  // rec for nested objects
      }
      Object.defineProperty(immutableObject, key, {
        value: value,
        writable: false,
        configurable: false
      });
    }

    return immutableObject;
  }

  return helper(obj);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {street: "Kościuszki", city: "Warsaw"}
}
const immutablePerson = createImmutableObject(person);

console.log(immutablePerson.firstName)
immutablePerson.firstName = 123
console.log(immutablePerson.firstName)

console.log(immutablePerson.age)
immutablePerson.firstName = '300'
console.log(immutablePerson.age)

console.log(immutablePerson.address.street)
console.log(immutablePerson.address.city)
immutablePerson.address.street = [123, 321]
immutablePerson.address.city = "newName"
console.log(immutablePerson.address.street)
console.log(immutablePerson.address.city)