export class Order {
  constructor(cart) {
    this.user = cart.user;
    this.orderedBooks = cart.books;
    this.totalPrice = cart.calculateTotalPrice();
  }

  finalizeOrder() {
    // Validate availability
    this.orderedBooks.forEach((book) => {
      if (book.availability <= 0) {
        throw new Error(`At least one book is not available. First missing title - "${book.title}"`);
      }
    })

    this.orderedBooks.forEach((book) => book.availability -= 1); // update book availability through reference

    console.log("Successfully finalized order");
    console.log(this.orderedBooks);
  }
}