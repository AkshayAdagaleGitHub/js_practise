class Graph {

  constructor(noOfVertices) {
    this.V = noOfVertices;
    this.edges = [];
    this.visited = new Array(this.V).fill(false);
    this.result = [];

    for(let i =0; i < this.V; i++){
      this.edges.push([]);
    }
  }

  addEdge(u, v) {
    this.edges[u].push(v);
  }

  dfsTraversal(v) {
    this.visited[v] = true;
    this.result.push(v);
    for(let i = 0; i < this.edges[v].length; i++) {
      if(!this.visited[this.edges[v][i]]) {
        this.dfsTraversal(this.edges[v][i]);
      }
    }
  }

  printDFS() {
    for(let i = 0; i < this.V; i++) {
      if(!this.visited[i]) {
        this.dfsTraversal(i);
      }
    }
    console.log(this.result);
  }

  dfsIterative(v) {
      this.visited.fill(false);
      this.result = [];
      let stack = [v];

      while(stack.length > 0) {
        v = stack.pop();
        if(!this.visited[v]){
          this.result.push(v);
          this.visited[v] = true;
        }

        for(let i = 0; i < this.edges[v].length; i++) {
          if(!this.visited[this.edges[v][i]]) {
            stack.push(this.edges[v][i]);
          }
        }
      }
   }
}

var graph = new Graph(12);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 4);
graph.addEdge(1, 3);
graph.addEdge(1, 9);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(4, 1);
graph.addEdge(4, 7);
graph.addEdge(5, 8);
graph.addEdge(7, 10);
graph.addEdge(10, 11);

// graph.dfsTraversal(0);
graph.dfsIterative(0);
console.log(graph.result);