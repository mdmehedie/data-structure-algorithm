class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append = (ele) => {
    
  };

  toString = () => {
    let str, current;
    while (current.next) {
      str += current.element + (current.next === null ? '\n' : '');
      current = current.next;
    }
  };
}

let ll = new Linkedlist();
ll.append(34);
ll.append('A');
ll.append(20);
ll.append('C');

ll.toString();
