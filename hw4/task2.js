const product = {};

Object.defineProperties(product, {
  name: { value: 'Laptop', enumerable: true, writable: true, configurable: false },
  price: { value: 1000, enumerable: false, writable: false, configurable: true },
  quantity: { value: 5, enumerable: false, writable: false, configurable: true }
});

function getTotalPrice(product) {
  const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price');
  const quantityDescriptor = Object.getOwnPropertyDescriptor(product, 'quantity');
  return priceDescriptor.value * quantityDescriptor.value;
}

function deleteNonConfigurable(obj, propName) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, propName);
  if (!descriptor) {
    console.log('Property does not exist.')
  } else if (!descriptor.configurable) {
    throw new Error(`Cannot delete non-configurable property: ${propName}`);
  } else {
    delete obj[propName];
  }
}

console.log('Total Price:', getTotalPrice(product));  // 5000

try {
  deleteNonConfigurable(product, 'price'); // succeed
} catch (error) {
  console.error(error.message);
}

try {
  deleteNonConfigurable(product, 'name');  // fail
} catch (error) {
  console.error(error.message);
}

console.log(product);