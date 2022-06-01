const binarySearchTree = function () {
    const Node = function (key){
        tihis.key = key;
        this.left = null;
        this.right = null;
    }

    let root = null;

    //Insert Node
    this.insertNode = (node, newNode) {
        if(newNode < node){
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                insertNode(node.right, newNode);
            }
        }
    }


    //Insert data
    this.insert = (key) => {
        let newNode = new Node(key);

        if(root === null){
            root = newNode;
        }else{
            this.insertNode(root, newNode);
        }
    }

    //Search Key
    this.search = (key, node = root) =>{
        if(node === null){
            return false;
        }

        if(key > node.key){
            return this.search(key, node.left);
        }else if(key < node.key){
            return this.search(key, node.right);
        }else{
            return true;
        }
    }
    
}