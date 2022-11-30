function Edge(src, dest){
    this.src = src;
    this.dest = dest;
}

const Graph = function(){
    let adj = new Map();

    this.addEdge = function(s, d){
        let {src, dest} = new Edge(s, d);
        if(adj.has(src)){
            adj.get(src).push(dest);
        }else{
            adj.set(src, [dest]);
        }
    }

    this.remove = function (s, d){
        let {src, dest} = new Edge(s, d);

        let srcList = adj.get(src);

        srcList = srcList.filter(value => value !== dest);

    
        if(srcList.length === 0){
            adj.delete(src);
        }else{
            adj.set(src, srcList);
        }

    }

    this.print = function (){
        let n = adj.size;

        for(let src of adj.keys()){
            let str = "";
            for(let dest of adj.get(src)){
                str += `(${src} -> ${dest})`;
            }
            console.log(str);
        }
    }

    this.getList = () => adj;
}


const graph = new Graph();
graph.addEdge(0,1);
graph.addEdge(1,2);
graph.addEdge(2,1);
graph.addEdge(2,0);
graph.addEdge(2,3); 

graph.print();

graph.remove(2,3); 

graph.print();