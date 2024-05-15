export class Cart {
  constructor(user) {
    this.user = user;
    this.books = []
  }

  addBooks(booksArray) {
    if (Array.isArray(booksArray))
      this.books = booksArray;
    else
      console.error("The argument needs to be an array");
  }

  removeBooks(booksArray) {
    if (!Array.isArray(booksArray))
      return; // wrong argument -> no action | might be also an Exception

    booksArray.forEach(bookToRemove => {
      this.books = this.books.filter(book => bookToRemove.isbn === book.isbn);
    })
  }

  calculateTotalPrice() {
    return this.books.reduce((accumulator, book) => {
      return accumulator + book.price;
    })
  }
}