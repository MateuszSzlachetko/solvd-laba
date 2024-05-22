class MinMaxStack {
  constructor(size) {
    this.size = size;
    this.array = [];
    this.minStack = [];
    this.maxStack = [];
  }

  push(element) {
    if (!(this.size > this.array.length)) {
      console.error("Stack is full");
      return;
    }
    this.array.push(element);
    if (this.minStack.length === 0 || element <= this.getMin()) {
      this.minStack.push(element);
    }
    if (this.maxStack.length === 0 || element >= this.getMax()) {
      this.maxStack.push(element);
    }
  }

  pop() {
    if (this.array.length === 0) {
      console.error("Stack is empty");
      return;
    }
    const poppedElement = this.array.pop();
    if (poppedElement === this.getMin()) {
      this.minStack.pop();
    }
    if (poppedElement === this.getMax()) {
      this.maxStack.pop();
    }
    return poppedElement;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  getMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
}

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
