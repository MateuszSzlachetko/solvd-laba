class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null)
      return this.head = new Node(value);

    const newNode = new Node(value); // create new node
    newNode.next = this.head; // point it to the current head node
    return this.head = newNode; // set is as a head
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
      console.log(listString);
      current = current.next;
    }
    listString += "null";
    console.log(listString);
  }
}

class Node {
  constructor(value,next=null) {
    this.value = value;
    this.next = next;
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

function hasCycle(listHead) {
  let slow = listHead
  let fast = listHead

  while(fast !== null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const list2 = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

list2.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
console.log(hasCycle(list2.head))
node5.next = node2
console.log(hasCycle(list2.head))
