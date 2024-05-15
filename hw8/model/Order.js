export class Order {
  constructor(cart) {
    this.user = cart.user;
    this.orderedBooks = cart.books;
    this.totalPrice = cart.calculateTotalPrice();
  }
}