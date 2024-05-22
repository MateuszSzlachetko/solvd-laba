# BinaryTree Documentation

## Classes

### `Node`
Represents a node in the binary tree.

#### Constructor
```javascript
constructor(value, leftTree = null, rightTree = null)
```

- `value` (any): The value of the node.
- `leftTree` (Node, optional): The left child node. Default is `null`.
- `rightTree` (Node, optional): The right child node. Default is `null`.

### `BinaryTree`
Represents the binary tree.

#### Constructor
```javascript
constructor(nodes)
```

- `nodes` (Node): The root node of the binary tree.

#### Methods

##### `traverseInOrder`
Traverses the tree in in-order (left, root, right).

```javascript
traverseInOrder(node = this.tree, result = [])
```

- `node` (Node, optional): The current node being traversed. Default is the root node.
- `result` (Array, optional): The array to store the traversal result. Default is an empty array.
- Returns: An array of node values in in-order traversal.

##### `traversePreOrder`
Traverses the tree in pre-order (root, left, right).

```javascript
traversePreOrder(node = this.tree, result = [])
```

- `node` (Node, optional): The current node being traversed. Default is the root node.
- `result` (Array, optional): The array to store the traversal result. Default is an empty array.
- Returns: An array of node values in pre-order traversal.

##### `traversePostOrder`
Traverses the tree in post-order (left, right, root).

```javascript
traversePostOrder(node = this.tree, result = [])
```

- `node` (Node, optional): The current node being traversed. Default is the root node.
- `result` (Array, optional): The array to store the traversal result. Default is an empty array.
- Returns: An array of node values in post-order traversal.

##### `searchForANodeValue`
Searches for a node with a specific value in the tree.

```javascript
searchForANodeValue(value, node = this.tree)
```

- `value` (any): The value to search for.
- `node` (Node, optional): The current node being searched. Default is the root node.
- Returns: The node with the specified value, or `null` if not found.

## Utility Function

### `isBST`
Checks if the tree is a binary search tree (BST).

```javascript
function isBST(tree, min = -Infinity, max = Infinity)
```

- `tree` (Node): The root node of the binary tree.
- `min` (number, optional): The minimum value constraint. Default is `-Infinity`.
- `max` (number, optional): The maximum value constraint. Default is `Infinity`.
- Returns: `true` if the tree is a BST, `false` otherwise.

## Example

```javascript
const btree = new BinaryTree(new Node(1,
  new Node(2, new Node(8, null, null),
    new Node(5, null, new Node(3, null, null))),
  new Node(5,
    new Node(3, null, null), null)));

console.log(btree.traverseInOrder()); // [8, 2, 5, 3, 1, 3, 5]
console.log(btree.traversePreOrder()); // [1, 2, 8, 5, 3, 5, 3]
console.log(btree.traversePostOrder()); // [8, 3, 5, 2, 3, 5, 1]
console.log(btree.searchForANodeValue(5)); // Node { value: 5, leftTree: null, rightTree: Node { value: 3, leftTree: null, rightTree: null } }

console.log(isBST(btree.tree)); // false

const bst1 = new BinaryTree(new Node(1, null, null));
const bst2 = new BinaryTree(new Node(5,
  new Node(3, new Node(1, null, null), new Node(4, null, null)),
  new Node(6, null, null)));

console.log(isBST(bst1.tree)); // true
console.log(isBST(bst2.tree)); // true
```