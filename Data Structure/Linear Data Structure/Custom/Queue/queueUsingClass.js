class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(ele) {
    this.queue[this.rear] = ele;
    this.rear++;
  }
  dequeue() {
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }
  get length() {
    return this.rear - this.front;
  }
  display() {
    for (let i = this.front; i < this.rear; i++) {
      console.log(this.queue[i]);
    }

    console.log(`Front = ${this.front}, Rear = ${this.rear}\n`);
  }
}

let q = new Queue();

for (let i = 1; i <= 10; i++) {
  q.enqueue(Math.floor(Math.random() * 99));
}
q.display();

q.dequeue();
q.dequeue();
q.dequeue();
q.display();
