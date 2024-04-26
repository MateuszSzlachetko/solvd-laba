const schema = {
  name: { type: 'string' },
  age: {
    type: 'number',
    additional: (value) => value >= 0 && value <= 120
  },
  email: {
    type: 'string',
    additional: (value) => value.includes('@')
  }
};

function validateObject(obj, schema) {
  for (const key in schema) {
    const property = schema[key];
    const value = obj[key];

    if (!obj.hasOwnProperty(key)) {
      return false;
    }

    if (typeof value !== property.type) {
      return false;
    }

    if (property.additional && !property.additional(value)) {
      return false;
    }
  }

  return true;
}

const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
}

const personInvalid1 = {
  name: 'John Doe',
  age: 30,
  email: 'john.doeexample.com',
}

const personInvalid2 = {
  name: 'John Doe',
  age: 150,
  email: 'john.doe@example.com',
}

console.log(validateObject(person, schema));
console.log(validateObject(personInvalid1, schema));
console.log(validateObject(personInvalid2, schema));