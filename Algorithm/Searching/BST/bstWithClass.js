class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(element) {
    let node = new Node(element);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.element < node.element) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  print() {
    if (this.root === null) {
      return null;
    } else {
      this.printNode(this.root);
    }
  }
  printNode(node) {
    if (node !== null) {
      this.printNode(node.left);
      console.log(node.element);
      this.printNode(node.right);
    } else {
      return null;
    }
  }
}

let BST = new BinarySearchTree();

BST.insert(11);
BST.insert(7);
BST.insert(15);
BST.insert(5);
BST.insert(3);
BST.insert(10)
BST.insert(1);
BST.insert(13);

BST.print();
