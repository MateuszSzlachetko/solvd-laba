class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null)
      return this.head = new Node(value);

    const newNode = new Node(value); // create new node
    newNode.next = this.head; // point it to the current head node
    this.head = newNode; // set is as a head
  }

  delete(value) {
    if (this.head === null) // empty list
      return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode.next !== null) { // iterate through a list
      if(currentNode.value === value) {
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next; // override the reference of the current node
  }

  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  print() {
    let current = this.head;
    let listString = "";
    while (current !== null) {
      listString += current.value + " -> ";
      current = current.next;
    }
    listString += "null";
    console.log(listString);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.print(); // 1 -> 2 -> 3 -> null

const node = list.search(2);
console.log(node ? `Node found: ${node.value}` : "Node not found");

list.delete(2);
list.print(); // 1 -> 3 -> null

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
list.print();

list.delete(5);
list.print();

list.delete(1);
list.print();

list.delete(8);
list.print();