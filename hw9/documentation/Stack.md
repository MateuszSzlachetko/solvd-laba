# Stack Documentation

## Class

### `Stack`
Represents a stack data structure with a fixed size.

#### Constructor
```javascript
constructor(size)
```

- `size` (number): The maximum size of the stack.

#### Methods

##### `push`
Adds an element to the top of the stack if it is not full.

```javascript
push(element)
```

- `element` (any): The element to add to the stack.

##### `pop`
Removes and returns the top element of the stack.

```javascript
pop()
```

- Returns: The top element of the stack, or `undefined` if the stack is empty.

##### `peek`
Returns the top element of the stack without removing it.

```javascript
peek()
```

- Returns: The top element of the stack, or `undefined` if the stack is empty.

## Example

```javascript
const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
stack.pop();
console.log(stack.peek()); // 2
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6); // error
```