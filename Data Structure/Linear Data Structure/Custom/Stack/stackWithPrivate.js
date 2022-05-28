let Stack = (function () {
  return function Stack() {
    this.top = 0;
    this.items = [];

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
  };
})();


let stack = new Stack();

stack.push("Hello")
stack.push("world")

stack.print();






