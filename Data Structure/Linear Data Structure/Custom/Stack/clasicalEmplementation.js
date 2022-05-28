function Stack() {
  this.items = [];
  this.top = 0;

  //Push an item in the stack
  this.push = (element) => {
    this.items[this.top++] = element;
  };

  //Pop an item in the stack
  this.pop = () => {
    return this.items[--this.top];
  };

  //peek top item from the stack
  this.peek = () => {
    return this.items[--this.top];
  };

  //Check if stack is empty
  this.isEmpty = function () {
    return this.top === 0 || false;
  };

  //Clear the stack
  this.clear = function () {
    this.items = [];
    this.top = 0;
  };

  //Size of the stack
  this.size = function () {
    return this.top;
  };

  this.find = (element) => {};

  //Print all element in stack
  this.print = () => {
    console.log(this.items.join(', '));
  };
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(5);
console.log(stack.isEmpty());
stack.print();

