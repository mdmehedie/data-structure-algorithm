class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insertNode = (node, newNode) => {
        if (node.data > newNode.data) {
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


    insert = (value) => {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }


    search = (value, node = this.root) => {
        if (node === null) {
            return "No data found";
        }

        if (node.data > value) {
            return this.search(value, node.left);
        } else if (node.data < value) {
            return this.search(value, node.right);
        } else {
            console.log(`${value} Data Found`);
        }
    }


    min = () => {
        let node = this.root;

        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.data;
        }

        return null;
    }

    max = () => {
        let node = this.root;

        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.data;
        }

        return null;
    }


    remove = (key) =>{
        root = removeNode(root, key);
    }

    removeNode = (node, key) =>{
        if(node === null){
            return null;
        }

        if(key < node.key){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(key > node.key){
            node.right = this.removeNode(node.right, key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
        }

        if(node.left === null){
            node = node.right;
            return node;
        }else if( node.left === null){
            node = node.left;
            return node;
        }

        let temp = this.min(node.right, key);
        node.key = temp.key;
        node.right = this.removeNode(node.right, temp.key);
        return node;
    }

    printTree = (order) => {
        if (order === "in") {
            let data = [];
            function inOrder(node) {
                if (node === null) {
                    return;
                }

                data.push(node.data);
                inOrder(node.left);
                inOrder(node.right);
            }
            inOrder(this.root);

            console.log(data.toString());
        }else if (order === "pre") {
            let data = [];
            function preOrder(node) {
                if (node === null) {
                    return;
                }

                preOrder(node.left);
                data.push(node.data);
                preOrder(node.right);
            }
            preOrder(this.root);

            console.log(data.toString());
        }else if (order === "pos") {
            let data = [];
            function posOrder(node) {
                if (node === null) {
                    return;
                }

                posOrder(node.left);
                posOrder(node.right);
                data.push(node.data);
            }
            posOrder(this.root);

            console.log(data.toString());
        }
    }

}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.printTree("in");
tree.printTree("pre");
tree.printTree("pos");