# Order

## Class

### `Order`
A class representing an order created from a shopping cart.

#### Constructor
```js
new Order(cart)
```
- `cart` (Cart): The shopping cart from which the order is created.

#### Properties
- `user` (object): The user who owns the cart and places the order.
- `orderedBooks` (array): An array of books in the order.
- `totalPrice` (number): The total price of the order, calculated from the cart.

#### Methods

##### `finalizeOrder()`
Finalizes the order by validating book availability and updating availability.

- Validates the availability of each book in the order. Throws an error if any book is not available.
- Decreases the availability count of each book by 1.
- Logs a success message and the list of ordered books.