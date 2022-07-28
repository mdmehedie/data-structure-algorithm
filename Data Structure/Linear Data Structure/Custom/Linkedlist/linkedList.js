function linkedList() {
  //Node
  let Node = function (ele) {
    this.element = ele;
    this.next = null;
  };

  //To keep track the Size
  this.length = 0;

  //To keep track the list
  this.head = null;

  //Add item in linkedList
  this.append = (ele) => {
    let node = new Node(ele),
      current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  };

  //Remove item from any position
  this.removeAt = function (pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        prev,
        index = 0;

      if (pos === 0) {
        head = current.next;
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
  };

  //Add item at any position
  this.insert = function (ele, pos) {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(ele),
        current = head,
        prev,
        index = 0;

      if (pos === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < pos) {
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.length++;

      return true;
    } else {
      return false;
    }
  };

  //GEt index of the element
  this.indexOf = (ele) => {
    let current = this.head,
      index = -1;
    while (current) {
      if (current.element === ele) {
        return ++index;
      }

      index++;
      current = current.next;
    }

    return -1;
  };

  //Element present in list
  this.isPresent = (ele) => {
    let current = this.head;
    while (current) {
      if (current === ele) {
        return true;
      }
    }
    return false;
  };

  //Delete the first element
  this.deleteHead = () => {
    let current = this.head;

    if (current === null) {
      return true;
    }

    if (current.next) {
      head = current.next;
    } else {
      head = null;
    }
    return true;
  };
  //Return list as array
  this.toArray = () => {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  this.reverList = () =>{
    let current = this.head, prevNode = null, nextNode = this.head;
    
    while(nextNode != null){
        nextNode = nextNode.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    this.head = prevNode;
    
    return this.head;
  }

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

let ll = new linkedList();
ll.append('Hello');
ll.append(34);
ll.append(4);
ll.append(54);
ll.print();
console.log("\n");
ll.reverList();
ll.print();
