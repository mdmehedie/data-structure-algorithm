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
    let current = this.head;
    if (current === null) {
      return null;
    } else {
      while (current) {
        let newCurrent = this.head;
        while (newCurrent) {
          let after = newCurrent.next;
          if (newCurrent.element > after.element) {
            [after.element, newCurrent.element] = [
              newCurrent.element,
              after.element,
            ];
          }
          if (after.next === null) {
            break;
          }
          newCurrent = newCurrent.next;
        }
        current = current.next;
      }
    }
  }

  selectionSort() {
    let current = this.head,
      min;
    if (current === null) {
      return null;
    } else {
      while (current) {
        min = current;
        let newCurrent = current.next;
        while (newCurrent) {
          if (newCurrent.element < min.element) {
            min = newCurrent;
          }
          newCurrent = newCurrent.next;
        }
        if (min !== current) {
          [min.element, current.element] = [current.element, min.element];
        }
        current = current.next;
      }
    }
  }

  findMid(head) {
    let slow = head,
      fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
  merge(left, right) {
    let result = null;
    if (left === null) {
      return right;
    }

    if (right === null) {
      return left;
    }

    if (left.element < right.element) {
      result = left;
      result.next = this.merge(left.next, right);
    } else {
      result = right;
      result.next = this.merge(left, right.next);
    }
    console.log(result);
    return result;
  }
  mergesort(head = this.head) {
    if (head === null || head.next === null) {
      return head;
    }
    let mid = this.findMid(head);
    let midNex = mid.next;
    mid.next = null;

    let left = this.mergesort(head);
    let right = this.mergesort(midNex);
    // console.log(left, right);


    return this.merge(left, right);
  }

  toArray() {
    let current = this.head,
      arr = [];
    while (current) {
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }

  toString() {
    let current = this.head,
      str = '';
    while (current) {
      str += current.element + ' ';
      current = current.next;
    }
  }
}

let node = new Linkedlist();
node.append(1);

// node.append('Hello');
node.append(5);
node.append(20);
node.append(3);
node.append(0);
// node.append(140);
// node.append(60);
node.append(2);
console.log(node.length);
console.log(node.toArray());

// node.bubbleSort();
// console.log(node.toArray());

// node.selectionSort();
// console.log(node.toArray());

node.mergesort();
console.log(node.toArray());
