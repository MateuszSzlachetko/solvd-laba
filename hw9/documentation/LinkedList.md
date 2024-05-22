# LinkedList Documentation

## Classes

### `LinkedList`
Represents a singly linked list data structure.

#### Constructor
```javascript
constructor()
```

- Initializes an empty linked list with `head` set to `null`.

#### Methods

##### `insert`
Inserts a new value at the beginning of the list.

```javascript
insert(value)
```

- `value` (any): The value to insert.
- Returns: The new head of the list.

##### `delete`
Deletes the first occurrence of the specified value from the list.

```javascript
delete(value)
```

- `value` (any): The value to delete.

##### `search`
Searches for the first node containing the specified value.

```javascript
search(value)
```

- `value` (any): The value to search for.
- Returns: The node containing the value, or `null` if not found.

##### `print`
Prints the linked list to the console

```javascript
print()
```

- Prints: The linked list elements in the format `value -> value -> ... -> null`.

### `Node`
Represents a node in the linked list.

#### Constructor
```javascript
constructor(value, next = null)
```

- `value` (any): The value of the node.
- `next` (Node, optional): The next node in the list. Default is `null`.

## Utility Function

### `hasCycle`
Checks if the linked list contains a cycle.

```javascript
function hasCycle(listHead)
```

- `listHead` (Node): The head of the linked list.
- Returns: `true` if the list contains a cycle, `false` otherwise.

## Example

```javascript
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.print(); // 3 -> 2 -> 1 -> null

const node = list.search(2);
console.log(node ? `Node found: ${node.value}` : "Node not found");

list.delete(2);
list.print(); // 3 -> 1 -> null

list.delete(1);
list.print(); // 3 -> null

list.delete(3);
list.print(); // null

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.print(); // 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null

list.delete(5);
list.print(); // 8 -> 7 -> 6 -> 4 -> 3 -> 2 -> 1 -> null

list.delete(1);
list.print(); // 8 -> 7 -> 6 -> 4 -> 3 -> 2 -> null

list.delete(8);
list.print(); // 7 -> 6 -> 4 -> 3 -> 2 -> null

const list2 = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

list2.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(hasCycle(list2.head)); // false

node5.next = node2;
console.log(hasCycle(list2.head)); // true
```