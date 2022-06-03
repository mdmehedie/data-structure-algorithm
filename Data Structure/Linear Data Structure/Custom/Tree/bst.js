const binarySearchTree = function () {
  let Node = function (key) {
    this.data = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  //Insert Node in list
  this.insert = function (key) {
    let newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  //Searching  Node in list
  this.search = (key, node = root) => {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return search(key, node.left);
    } else if (key > node.key) {
      return search(key, node.right);
    } else {
      return true;
    }
  };

  //Return minimum value
  this.min = (node = root) => {
    if (node) {
      while (node && node.left != null) {
        node = node.left;
      }

      return node.key;
    }

    return null;
  };

  //Return maximum value
  this.max = (node = root) => {
    if (node) {
      while (node && node.right != null) {
        node = node.right;
      }

      return node.key;
    }

    return null;
  };

  //Remove Node in tree
  this.removeNode = (key, node) => {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = removeNode(key, node.left);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(key, node.right);
      return node;
    } else {
      //when a node is found with the given key
      //There are three diffrent case which to be

      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //Node with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //Node with two child
      let aux = this.min(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  this.remove = (key) => {
    root = removeNode(root, key);
  };
};

const tree = new BinarySearchTree();

tree.insert(11);
