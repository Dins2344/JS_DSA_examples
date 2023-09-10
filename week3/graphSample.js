class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + '-->'+[...this.adjacentList[vertex]])
        }
    }
    
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B')
graph.addEdges('A','C')
graph.display()
