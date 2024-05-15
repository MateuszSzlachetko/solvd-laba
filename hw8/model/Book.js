export class Book {
  constructor(title, author, isbn, price, availability) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
}

export class FictionBook extends Book {
  constructor(title, author, isbn, price, availability) {
    super(title, author, isbn, price, availability);
    this.category = 'fiction';
  }
}

export class FantasyBook extends Book {
  constructor(title, author, isbn, price, availability) {
    super(title, author, isbn, price, availability);
    this.category = 'fantasy';
  }
}

export class RomanceBook extends Book {
  constructor(title, author, isbn, price, availability) {
    super(title, author, isbn, price, availability);
    this.category = 'romance';
  }
}

export class BookFactory {
  // method to generate random price for test instances
  static getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  // method to generate random isbn for test instances
  static getRandomISBN() {
    return Array.from({length: 13}, () => Math.floor(Math.random() * 10)).join('');
  }

  static createFictionBook(title, author, availability) {
    const price = this.getRandomPrice(10, 20);
    const isbn = this.getRandomISBN();
    return new FictionBook(title, author, isbn, price, availability);
  }

  static createFantasyBook(title, author, availability) {
    const price = this.getRandomPrice(15, 25);
    const isbn = this.getRandomISBN();
    return new FantasyBook(title, author, isbn, price, availability);
  }

  static createRomanceBook(title, author, availability) {
    const price = this.getRandomPrice(8, 18);
    const isbn = this.getRandomISBN();
    return new RomanceBook(title, author, isbn, price, availability);
  }
}