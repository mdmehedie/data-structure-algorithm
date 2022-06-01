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
    let node = new Node(ele),
      current;

    if (head === null) {
      head = node;
    } else {
      current = next;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    length++;
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
