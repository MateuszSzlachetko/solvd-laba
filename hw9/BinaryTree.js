class BinaryTree {
  constructor(nodes) {
    this.tree = nodes;
  }

  traverseInOrder(node = this.tree, result = []) {
    if (node !== null) {
      this.traverseInOrder(node.leftTree, result);
      result.push(node.value);
      this.traverseInOrder(node.rightTree, result);
    }
    return result;
  }

  traversePreOrder(node = this.tree, result = []) {
    if (node !== null) {
      result.push(node.value);
      this.traversePreOrder(node.leftTree, result);
      this.traversePreOrder(node.rightTree, result);
    }
    return result;
  }

  traversePostOrder(node = this.tree, result = []) {
    if (node !== null) {
      this.traversePostOrder(node.leftTree, result);
      this.traversePostOrder(node.rightTree, result);
      result.push(node.value);
    }
    return result;
  }

  searchForANodeValue(value, node = this.tree) {
    // exits for recursion
    if (node === null) return null;
    if (node.value === value) return node;

    // look for the value in the left part
    let leftResult = this.searchForANodeValue(value, node.leftTree);
    if (leftResult !== null) return leftResult;

    // not found in the left part so look in the right part
    return this.searchForANodeValue(value, node.rightTree);
  }
}

class Node {
  constructor(value, leftTree, rightTree) {
    this.value = value;
    this.leftTree = leftTree;
    this.rightTree = rightTree;
  }
}

// Tree:
//             1
//         /       \
//        2         5
//      /  \       /
//     8    5     3
//           \
//            3
const btree = new BinaryTree(new Node(1,
  new Node(2, new Node(8, null, null),
    new Node(5, null, new Node(3, null, null)))
  , new Node(5,
    new Node(3, null, null), null)))
console.log(btree)
console.log(btree.traverseInOrder()) // [8,2,5,3,1,3,5]
console.log(btree.traversePreOrder()) // [1,2,8,5,3,5,3]
console.log(btree.traversePostOrder()) // [8,3,5,2,3,5,1]
console.log(btree.searchForANodeValue(5))

console.log(isBST(btree.tree))
const bst1 = new BinaryTree(new Node(1, null, null))
const bst2 = new BinaryTree(new Node(5,
  new Node(3, new Node(1, null, null), new Node(4, null, null)),
  new Node(6, null, null)))

console.log(isBST(bst1.tree))
console.log(isBST(bst2.tree))


function isBST(tree, min = -Infinity, max = Infinity) {
  if (tree === null) {
    return true;
  }
  if (tree.value <= min || tree.value >= max) {
    return false;
  }
  return (
    isBST(tree.leftTree, min, tree.value) &&
    isBST(tree.rightTree, tree.value, max)
  );
}