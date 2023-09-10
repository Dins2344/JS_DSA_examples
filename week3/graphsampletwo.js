class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdges(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adVertex of this.adjacencyList[vertex]){
            this.removeEdges(vertex,adVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'-->'+ [...this.adjacencyList[vertex]])
        }
    }
    dfsHelperOne(vertex,visited){
        visited[vertex] = true
        console.log(vertex)
        const adjacents = this.adjacencyList[vertex]
        for (let adjacent in adjacents){
            if(!visited[adjacent]){
                this.dfsHelperOne(adjacent,visited)
            }
        }
    }

    dfsOne(graph){
        let visited = {}
        for (let vertex in graph){
            if(!visited[vertex]){
                this.dfsHelperOne(vertex,visited)
            }
        }
    }

    dfsHelper(vertex,visited){
        visited[vertex] = true
        console.log(vertex)
        const adjacents = this.adjacencyList[vertex]
        for(let i =0;i<adjacents.length ;i++){
                const adjacent = adjacents[i]
                if(!visited[adjacent]){
                    this.dfsHelper(adjacent,visited)
                }
        }
    }

    dfs(Graph){
        let visited = {}
        for (let vertex in Graph){
            if(!visited[vertex]){
                this.dfsHelper(vertex,visited)
            }
        }
    }
}


const myGraph = new Graph()
myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('D')

myGraph.addEdges('A','B')
myGraph.addEdges('B','C')
myGraph.addEdges('C','D')
// console.log(myGraph.hasEdge('A','D'))
myGraph.display()
// myGraph.removeEdges('A','B')
myGraph.removeVertex('A')
myGraph.display()
myGraph.dfsOne(myGraph.adjacencyList)