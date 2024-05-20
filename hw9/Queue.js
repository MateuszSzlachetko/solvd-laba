export class Queue {
  constructor(size) {
    this.size = size;
    this.array = [];
  }

  enqueue(element) {
    if (this.size > this.array.length) this.array.push(element)
    else console.error("Queue is full")
  }

  dequeue() {
    return this.array.shift();
  }

  peek() {
    return this.array[0];
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

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

// test()

