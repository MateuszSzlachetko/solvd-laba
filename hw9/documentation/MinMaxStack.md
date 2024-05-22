# MinMaxStack Documentation

## Class

### `MinMaxStack`
Represents a stack data structure with a fixed size and keeps track of the minimum and maximum elements.

#### Constructor
```javascript
constructor(size)
```

- `size` (number): The maximum size of the stack.

#### Methods

##### `push`
Adds an element to the top of the stack if it is not full. Updates the minimum and maximum stacks accordingly.

```javascript
push(element)
```

- `element` (any): The element to add to the stack.

##### `pop`
Removes and returns the top element of the stack. Updates the minimum and maximum stacks accordingly.

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

##### `getMin`
Returns the minimum element in the stack.

```javascript
getMin()
```

- Returns: The minimum element in the stack, or `undefined` if the stack is empty.

##### `getMax`
Returns the maximum element in the stack.

```javascript
getMax()
```

- Returns: The maximum element in the stack, or `undefined` if the stack is empty.

## Example

```javascript
const stack = new MinMaxStack(5);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.getMin()); // 1
console.log(stack.getMax()); // 3
stack.pop();
console.log(stack.peek()); // 2
console.log(stack.getMin()); // 1
console.log(stack.getMax()); // 2
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6); // error
console.log(stack.getMin()); // 1
console.log(stack.getMax()); // 5
```