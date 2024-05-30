# Documentation

### Constructor
```javascript
constructor(size = 50)
```
Initializes a new hash table with a specified size (default is 50).

### Methods

#### `hash(key)`
```javascript
hash(key)
```
Converts the input string into a hash code using bitwise operations and ensures it fits within the table size.

#### `insert(key, value)`
```javascript
insert(key, value)
```
Adds a key-value pair to the hash table. If the key already exists, it updates the value. Handles collisions using separate chaining.

#### `get(key)`
```javascript
get(key)
```
Retrieves the value associated with the key. Returns `undefined` if the key is not found.

#### `delete(key)`
```javascript
delete(key)
```
Removes the key-value pair from the hash table. Returns `true` if the key was found and deleted, `false` otherwise.

## Performance Analysis
- **Insertion**: Average time complexity is \(O(1)\), but can degrade to \(O(n)\) in case of many collisions.
- **Getting**: Average time complexity is \(O(1)\), with the same worst-case scenario as insertion.
- **Deletion**: Average time complexity is \(O(1)\), with the same worst-case scenario as insertion.

