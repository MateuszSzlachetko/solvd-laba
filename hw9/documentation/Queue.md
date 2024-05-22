# Queue Documentation

## Class

### `Queue`
Represents a queue data structure with a fixed size.

#### Constructor
```javascript
constructor(size)
```

- `size` (number): The maximum size of the queue.

#### Methods

##### `enqueue`
Adds an element to the end of the queue if it is not full.

```javascript
enqueue(element)
```

- `element` (any): The element to add to the queue.

##### `dequeue`
Removes and returns the front element of the queue.

```javascript
dequeue()
```

- Returns: The front element of the queue, or `undefined` if the queue is empty.

##### `peek`
Returns the front element of the queue without removing it.

```javascript
peek()
```

- Returns: The front element of the queue, or `undefined` if the queue is empty.

##### `isEmpty`
Checks if the queue is empty.

```javascript
isEmpty()
```

- Returns: `true` if the queue is empty, `false` otherwise.

## Example

```javascript
function test() {
  const queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue()); // 1
  console.log(queue.dequeue()); // 2
  console.log(queue.dequeue()); // 3
  queue.enqueue(4);
  console.log(queue.peek()); // 4
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  queue.enqueue(9); // error
}

test();
```