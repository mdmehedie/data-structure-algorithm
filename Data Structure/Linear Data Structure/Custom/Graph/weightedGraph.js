function Edge(src, dest, weight){
    this.src = src;
    this.dest = dest;
    this.weight = weight;
}

function Node (value, weight){
    this.value = value;
    this.weight = weight;

    this.toString = function (){
        return this.value + "(" + this.weight + ")";
    }
}

const Graph = function () {
    let adj = new Map();

    this.addEdge = function(s, d, w){
        const {src, dest, weight} = new Edge(s, d, w);

        let node = new Node(dest, weight);
        if(adj.has(src)){
            adj.get(src).push(node);
        }else{
            adj.set(src, [node]);
        }

    }

    this.print = function(){

        for(let src of adj.keys()){
            let str = "";
            for(let edge of adj.get(src)){
                str += `( ${src} --> ${edge})`;
            }
            console.log(str);
        }
    }
}

const graph = new Graph();
graph.addEdge(0, 1, 5);
graph.addEdge(2, 0, 6);

graph.print();
