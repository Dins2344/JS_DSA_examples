class Graph{
    constructor() {
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

    hasEdge(vertex1,vertex2){
        return(
            this.adjacentList[vertex1].has(vertex2)&&
            this.adjacentList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + '-->'+[...this.adjacentList[vertex]])
        }
    }
}
// const myGraph = new Graph()
// myGraph.addVertex('A')
// myGraph.addVertex('B')
// myGraph.addVertex('C')
// myGraph.addVertex('D')

// myGraph.addEdges('A','B')
// myGraph.addEdges('A','C')
// myGraph.addEdges('B','D')
// console.log(myGraph.hasEdge('A','D'))
// myGraph.display()

class GraphList{
    constructor(){
        this.adjacentList = {}
    }
    addVertex (vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=new Set()
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

    hasEdge(vertex1,vertex2){
        return(
            this.adjacentList[vertex1].has(vertex2)&&
            this.adjacentList[vertex2].has(vertex1)
        )
    }
    removeEdges(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacentList[vertex]){
            this.removeEdges(adjacentVertex,vertex)
        }
        delete this.adjacentList[vertex]
    }
    bfsOne(graph){
        let queue = []
        let visited = {}
        queue.push(graph)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr)
            let neighbors = graph[curr]
            for(let neighbor in neighbors){
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            }
        }
    }
    bfs(graph){
        let queue = []
        let visited = {}
        for(let vertex in graph){
            if(!visited[vertex]){
                queue.push(vertex)
                visited[vertex] = true

                while(queue.length){
                    let curr = queue.shift()
                    console.log(curr)
                    let adjacents = graph[curr]
                    for(let adjacent of adjacents){
                        if(!visited[adjacent]){
                            visited[adjacent] = true
                            queue.push(adjacent)
                        }
                    }
                }
            }
        }
    }

    dfsOne (graph){
        let visited = {}
        for(let vertex in graph){
            if(!visited[vertex]){
                this.dfsHelperOne(vertex,visited)
            }
        }
    }
    dfsHelperOne(vertex,visited){
        visited[vertex]=true
        console.log(vertex)
        const adjcents = this.adjacentList[vertex]
        for(let adjcent in adjcents){
            if(!visited[adjcent]){
                this.dfsHelperOne(adjcent,visited)
            }
        }
    }

    dfs(graph){
        let visited = {}
        for(let vertex in graph){
            if(!visited[vertex]){
                this.dfsHelper(vertex,visited)
            }}
    }
    dfsHelper(vertex,visited){
        visited[vertex] = true
        console.log(vertex)
        const adjacents = this.adjacentList[vertex]
        for(let adjcent in adjacents){
            if(!visited[adjcent]){
                this.dfsHelper(adjcent,visited)
            }
        }
    }
    

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + '-->'+ [...this.adjacentList[vertex]])
        }
    }

}

const myGraph = new GraphList()
myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('D')

myGraph.addEdges('A','B')
myGraph.addEdges('A','C')
myGraph.addEdges('B','D')
console.log(myGraph.hasEdge('A','D'))

myGraph.removeEdges('A','B')
myGraph.removeVertex('A')
myGraph.display()
myGraph.bfsOne(myGraph.adjacentList)