# Cart

## Class

### `Cart`
A class representing a shopping cart for a user.

#### Constructor
```js
new Cart(user)
```
- `user` (object): The user who owns the cart.

#### Properties
- `user` (object): The user who owns the cart.
- `books` (array): An array of books in the cart.

#### Methods

##### `addBooks(booksArray)`
Adds books to the cart.

- `booksArray` (array): An array of book objects to add to the cart.
- If the argument is not an array, an error message is logged.

##### `removeBooks(booksArray)`
Removes books from the cart.

- `booksArray` (array): An array of book objects to remove from the cart.
- If the argument is not an array, no action is taken.

##### `calculateTotalPrice()`
Calculates the total price of all books in the cart.

- Returns: The total price (number) of all books in the cart.