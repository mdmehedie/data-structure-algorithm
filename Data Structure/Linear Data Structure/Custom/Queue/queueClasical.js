function Queue() {
  //Initialization
  this.top = 0;
  this.rear = 0;
  this.count = 0;
  this.items = [];

  //Add Elements
  this.enqueue = (element) => {
    this.items[this.top++] = element;
    this.count++;
  };

  //remove element
  this.dequeue = () =>{
      let temp = this.items[this.rear];
      this.items[this.rear] = null;
      this.count --;
      this.rear ++;
      return temp; 
  }

  //Print the queue
  this.print = () => {
    console.log('Index    value');
    this.items.filter((e, i) => {
      console.log(`  ${i}   =>   ${e}`);
    });
    console.log(`
    Top = ${this.top}
    Rear = ${this.rear}
    Count = ${this.count}
    `);
  };
}

let queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('E');
queue.enqueue('F');

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
