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