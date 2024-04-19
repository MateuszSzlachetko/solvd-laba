// Task 1
function createProduct(name, price) {
  return {
    name: name,
    price: price,
  }
}

const products = [
  createProduct("p1", 100),
  createProduct("p2", 200),
  createProduct("p3", 99)];

const calculateDiscountedPrice = (products, discountPercentage) => {
  const applyDiscount = (price, discount) => price * (100 - discount) / 100;
  return products.map(product => ({
    name: product.name,
    price: applyDiscount(product.price, discountPercentage)
  }))
}

console.log(products)
console.log(calculateDiscountedPrice(products, 50))
console.log(calculateDiscountedPrice(products, 25))
console.log(products)

// Recursive implementation
const calculateTotalPriceRec = products => {
  return products.length > 0 ?
    products[0].price + calculateTotalPrice(products.slice(1)) :
    0;
}

// Tail recursion implementation
const calculateTotalPriceTailRec = products => {
  const helper = (products, accumulator) => {
    if (products.length > 0)
      return helper(products.slice(1), accumulator + products[0].price);
    else
      return accumulator;
  }
  return helper(products, 0);
}

// To prevent stack overflow on big arrays of products
const calculateTotalPrice = products => {
  let sum = 0;
  products.forEach(product => sum += product.price)
  return sum;
}

console.log(products)
console.log(calculateTotalPriceRec(products))
console.log(calculateTotalPriceTailRec(products))
console.log(calculateTotalPrice(products))
console.log(products)