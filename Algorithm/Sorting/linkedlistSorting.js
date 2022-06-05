class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(ele) {
    let node = new Node(ele),
      current = this.head;

    if (current === null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    console.log(current);

    this.length++;
  }

  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        prev,
        index = 0;
      if (pos === 0) {
        this.head = current.next;
      } else {
        while (index++ < pos) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
        this.length--;
        return current.element;
      }
    } else {
      return null;
    }
  }

  bubbleSort() {
    let current = this.head,
      temp;
    if (current === null) {
      return null;
    } else {
      if (typeof current.element === 'String') {
      }
      while (current.next) {
        let newCurrent = current.next;
        while (newCurrent.next) {
          if (current.element > newCurrent.element) {
            temp = current.element;
            current.element = newCurrent.element;
            newCurrent.element = temp;
          }
          newCurrent = newCurrent.next;
        }

        current = current.next;
      }
    }
  }

  toArray () {
    let current = this.head,
      arr = [];
    while (current) {
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }

  toString () {
    let current = this.head;
  }
  
}

let node = new Linkedlist();
node.append(1);

node.append('Hello');
node.append(5);
node.append(6);
node.append(2);
node.append(3);
