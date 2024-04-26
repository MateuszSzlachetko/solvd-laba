function observeObject(obj, callback) {
  const handler = {
    get(target, property, receiver) {
      callback(property, 'get');
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      callback(property, 'set');
      return Reflect.set(target, property, value, receiver);
    }
  };

  return new Proxy(obj, handler);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {street: "Kościuszki", city: "Warsaw"}
}

const proxyPerson = observeObject(person,
  (property, action) => console.log(`${property} - ${action}`))

console.log(proxyPerson.firstName);
proxyPerson.age = 31;
console.log(proxyPerson.age);