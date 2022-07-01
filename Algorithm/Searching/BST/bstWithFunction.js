function BinarySearchTree() {
  let Node = function (ele) {
    this.element = ele;
    this.left = null;
    this.right = null;
  };

  this.root = null;

  this.insert = function (ele) {
    let node = new Node(ele);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  };

  this.insertNode = function (node, newNode) {
    if (newNode.element <= node.element) {
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
  };

  
  this.print = function () {
    if (this.root === null) {
      return null;
    } else {
      this.printNode(this.root);
    }
  };
  this.printNode = function (node) {
    if (node !== null) {
      this.printNode(node.left);
      console.log(node.element);
      this.printNode(node.right);
    } else {
      return null;
    }
  };


  this.search = function (ele, node=this.root) {
    if (node === null) {
      console.log( `This data ${ele} is not in tree`);
    } else if (node.element < ele) {
      return this.search(ele, node.left);
    } else if (node.element > ele) {
      return search(ele, node.right);
    } else {
      console.log(`${ele} Data is found`);
    }
  };


}

let BST = new BinarySearchTree();

BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);
BST.insert(7);

BST.print();
