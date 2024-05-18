# Main File

## Initialization Functions

### `initBooks()`
Creates and initializes an array of book objects.

#### Returns
- An array of `Book` objects, including fiction, romance, and fantasy categories.

## Implementation

### Books Initialization
```js
const books = initBooks();
```
Initializes an array of books by calling the `initBooks` function.

### User Creation
```js
const user1 = new User("Mateusz","mateusz@gmail.com");
const user2 = new User("Alina","alina@gmail.com");
```
Creates two users, `user1` and `user2`, with specified names and email addresses.

### Cart Creation
```js
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);
const cart3 = new Cart(user2);
```
Creates three carts:
- `cart1` for `user1`
- `cart2` and `cart3` for `user2`

### Adding Books to Carts
```js
cart1.addBooks(books.slice(0, 3));
```
Adds the first three books from the `books` array to `cart1`.

### Order Creation and Finalization

#### Order 1
```js
const order1 = new Order(cart1);
order1.finalizeOrder();
```
- Creates an `Order` from `cart1`.
- Finalizes `order1`, which checks book availability and updates availability count.

#### Order 2
```js
cart2.addBooks([...books.slice(4, 5), ...books.slice(4, 5), ...books.slice(4, 5)]);
const order2 = new Order(cart2);
order2.finalizeOrder();
```
- Orders all of the available copies of one book.

#### Order 3 (Error scenario)
```js
cart3.addBooks(books.slice(4, 5));
const order3 = new Order(cart3);

try {
  order3.finalizeOrder();
} catch (error) {
  console.error(error);
}
```
- Adds a book to `cart3`.
- Creates `order3` from `cart3`.
- Attempts to finalize `order3` inside a `try-catch` block to handle the availability error.