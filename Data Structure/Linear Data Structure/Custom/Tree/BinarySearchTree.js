const BinarySearchTree = function (){
    const Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    let root = null;

    let insertNode = (node, newNode) =>{

        if(newNode.data < node.data){
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


    this.insert = (data) =>{
        let newNode = new Node(data);
        if(root === null){
            root = newNode;
        }else{
            insertNode(root, newNode);
        }
    }

    this.search = (value, node = root) =>{

        if(node === null){
            return `${value} Not Found`;
        }

        if(value < node.data){
            this.search(value, node.left);
        }else if(value > node.data){
            this.search(value, node.right);
        }else{
            return "Data Found";
        }

    }

    this.min = (node = this.root) =>{

        if(node){
            while(node && node.left !== null){
                node = node.left;
            }

            return node.data;
        }

        return null;
    }

    this.remove = (key) =>{
        root = removeNode(root, key);
    }

    const removeNode = (node, key) =>{
        if(node === null){
            return node;
        }

        if(key < node.data){
            node.left = removeNode(node.left, key);
            return node;
        }else if(key > node.data){
            node.right = removeNode(node.right, key);
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
        }else if(node.right === null){
            node = node.left;
            return node;
        }


        let temp = this.min(node.right);
        node.key = temp.key;
        node.right = removeNode(node.right);

        return node;

    }



    this.printTree = (order) =>{
        
        if(order === "in"){
            let data = [];
            const inOrder = function (node = root){
                if(node === null){
                    return;
                }

                data.push(node.data);
                inOrder(node.left);
                inOrder(node.right);
            }

            inOrder();
            console.log(data.toString());

        }else if(order === "pre"){
            let data = [];
            const preOrder = function (node = root){
                if(node === null){
                    return;
                }

                preOrder(node.left);
                data.push(node.data);
                preOrder(node.right);
            }

            preOrder();
            console.log(data.toString());

        }else if(order === "pos"){
            let data = [];
            const postOrder = function (node = root){
                if(node === null){
                    return;
                }

                postOrder(node.left);
                postOrder(node.right);
                data.push(node.data);
            }
            postOrder()
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


tree.remove(14);