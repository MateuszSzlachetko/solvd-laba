function createProduct(name, price) {
  return {
    name: name,
    price: price,
  }
}

const calculateDiscountedPrice = (products, discountPercentage) => {
  const applyDiscount = (price, discount) => price * (100 - discount) / 100;
  return products.map(product => ({
    name: product.name,
    price: applyDiscount(product.price, discountPercentage)
  }))
}

const products = [
  createProduct("p1", 100),
  createProduct("p2", 200),
  createProduct("p3", 99)];

console.log(products)
console.log(calculateDiscountedPrice(products, 50))
console.log(calculateDiscountedPrice(products, 25))
console.log(products)
