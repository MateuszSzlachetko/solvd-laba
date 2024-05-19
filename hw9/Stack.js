class Stack {
  constructor(size) {
    this.size = size;
    this.array = [];
  }

  push(element) {
    if (this.size > this.array.length) this.array.push(element)
    else console.error("Stack is full")
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

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

