class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  push = (element) => {
    this.items[this.top++] = element;
  };

  //Pop an item in the stack
  pop = () => {
    return this.items[--this.top];
  };

  //peek top item from the stack
  peek = () => {
    return this.items[--this.top];
  };

  //Check if stack is empty
  isEmpty = function () {
    return this.top === 0 || false;
  };

  //Clear the stack
  clear = function () {
    this.items = [];
    this.top = 0;
  };

  //Size of the stack
  size = function () {
    return this.top;
  };

  find = (element) => {};

  //Print all element in stack
  print = () => {
    console.log(this.items.join(', '));
  };
}

let stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');

stack.print();
