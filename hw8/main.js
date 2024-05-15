import {BookFactory} from './model/Book.js';
import {User} from "./model/User.js";
import {Cart} from "./model/Cart.js";

function initBooks() {
  let books = [];
  // Fiction books
  books.push(BookFactory.createFictionBook("The Brothers Karamazov", "Fyodor Dostoevsky", 9));
  books.push(BookFactory.createFictionBook("To Kill a Mockingbird", "Harper Lee", 10));
  books.push(BookFactory.createFictionBook("1984", "George Orwell", 5));
  books.push(BookFactory.createFictionBook("The Lord of the Rings", "J.R.R. Tolkien", 18));
  books.push(BookFactory.createFictionBook("The Da Vinci Code", "Dan Brown", 3));

  // Romance books
  books.push(BookFactory.createRomanceBook("Pride and Prejudice", "Jane Austen", 12));
  books.push(BookFactory.createRomanceBook("Outlander", "Diana Gabaldon", 8));
  books.push(BookFactory.createRomanceBook("The Notebook", "Nicholas Sparks", 4));
  books.push(BookFactory.createRomanceBook("Me Before You", "Jojo Moyes", 7));
  books.push(BookFactory.createRomanceBook("Bridgerton: The Duke and I", "Julia Quinn", 6));

  // Fantasy books
  books.push(BookFactory.createFantasyBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 11));
  books.push(BookFactory.createFantasyBook("A Game of Thrones", "George R.R. Martin", 17));
  books.push(BookFactory.createFantasyBook("The Name of the Wind", "Patrick Rothfuss", 14));
  books.push(BookFactory.createFantasyBook("Mistborn: The Final Empire", "Brandon Sanderson", 9));
  books.push(BookFactory.createFantasyBook("The Way of Kings", "Brandon Sanderson", 19));
  return books;
}

// Implementation
const books = initBooks();

const user1 = new User("Mateusz","mateusz@gmail.com")
const user2 = new User("Alina","alina@gmail.com")

const cart1 = new Cart(user1);

cart1.addBooks(books.slice(0,1));
