# Book

## Classes

### `Book`
A class representing a general, abstract book.

#### Constructor
```js
new Book(title, author, isbn, price, availability)
```
- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `isbn` (string): The ISBN number of the book.
- `price` (number): The price of the book.
- `availability` (number): Number of books available.

### `FictionBook`
A class representing a fiction book, inherits from `Book`.

#### Constructor
```js
new FictionBook(title, author, isbn, price, availability)
```
- Inherits all parameters from `Book` and sets `category` to 'fiction'.

### `FantasyBook`
A class representing a fantasy book, inherits from `Book`.

#### Constructor
```js
new FantasyBook(title, author, isbn, price, availability)
```
- Inherits all parameters from `Book` and sets `category` to 'fantasy'.

### `RomanceBook`
A class representing a romance book, inherits from `Book`.

#### Constructor
```js
new RomanceBook(title, author, isbn, price, availability)
```
- Inherits all parameters from `Book` and sets `category` to 'romance'.

### `BookFactory`
A class for creating book instances with random attributes.

#### Methods

##### `static getRandomPrice(min, max)`
Generates a random price between `min` and `max`.

- `min` (number): Minimum price.
- `max` (number): Maximum price.
- Returns: A random price (number).

##### `static getRandomISBN()`
Generates a random 13-digit ISBN number.

- Returns: A random ISBN (string).

##### `static createFictionBook(title, author, availability)`
Creates a `FictionBook` instance with a random price and ISBN.

- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `availability` (number): Number of books available.
- Returns: A `FictionBook` instance.

##### `static createFantasyBook(title, author, availability)`
Creates a `FantasyBook` instance with a random price and ISBN.

- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `availability` (number): Number of books available.
- Returns: A `FantasyBook` instance.

##### `static createRomanceBook(title, author, availability)`
Creates a `RomanceBook` instance with a random price and ISBN.

- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `availability` (number): Number of books available.
- Returns: A `RomanceBook` instance.