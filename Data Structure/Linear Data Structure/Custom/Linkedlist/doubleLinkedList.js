function doubleLinkedList() {
  let Node = function (ele) {
    this.element = ele;
    this.prev = null;
    this.next = null;
  };

  this.head = null;
  this.tral = null;
  this.length = 0;

  //Appent new element
  this.append = (ele) => {
    let node = new Node(ele),
      current = this.head,
      prev;

    if (current === null) {
      this.head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    this.length++;
  };

  //Insert any posistion
  this.insert = (ele, pos) => {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(ele),
        current = this.head,
        index = 0,
        prev;

      if (pos === 0) {
        if (!current) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (pos === this.length) {
        tail.next = node;
        node.prev = tail;
        tail = node;
      } else {
        while (index++ < pos) {
          prev = current;
          current = current.next;
        }
        node.next = current;
        current.prev = node;
        prev.next = node;
        node.prev = prev;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  //Remove item at any position
  this.removeAt = (pos) => {
    if (pos >= 0 && pos < this.length) {
      let current = this.head,
        previous,
        index = 0;

      //Remove first item
      if (pos === 0) {
        head = current.next;

        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (pos === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--;
      return true;
    } else {
      return null;
    }
  };

  //Delete any position
  this.delete = (element) => {
    let current = this.head;

    while (current) {
      if (current.element === element) {
        let nextNode = current.next || current,
          prevNode = current.prev || current;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      current = current.next;
    }
    this.length--;
  };

  //Emplement list as Array
  this.toArray = () => {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  //Return list as string
  this.toString = () => {
    let current = this.head;

    let str = '';

    while (current) {
      str += current.element + (current.next ? '\n' : '');
      current = current.next;
    }

    return str;
  };

  //Linked list print
  this.print = () => {
    let current = this.head;

    while (current) {
      console.log(current.element);
      current = current.next;
    }
  };
}

let dl = new doubleLinkedList();

dl.append('A');
dl.append('B');
dl.append(11);
dl.append('D');
dl.append('E');

// console.log(dl.length);
// dl.insert("BB", 1)
dl.delete('A');
console.log(dl.toArray());
console.log(dl.length);
