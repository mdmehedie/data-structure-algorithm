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

        if(adj.has(dest)){
            adj.get(dest).push(src);
        }else{
            adj.set(dest, [src]);
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


        let destList = adj.get(dest);

        destList = destList.filter(value => value !== src);

    
        if(destList.length === 0){
            adj.delete(dest);
        }else{
            adj.set(dest, srcList);
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
graph.addEdge(2,0);
graph.addEdge(2,1);
graph.addEdge(3,2);
graph.addEdge(4,5); 
graph.addEdge(5,4); 
graph.addEdge('c','d'); 

graph.print();

// graph.remove(2,3); 

// graph.print();