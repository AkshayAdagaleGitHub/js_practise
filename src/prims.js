
function getMST(graph, V) {

  let selected = new Array(V).fill(false);
  let nofEdges = 0;
  selected[0] = true;

  let min, minIndex;
  let x = 0, y = 0;

  while(nofEdges < V){
    console.log(nofEdges);
    min = Infinity;
    minIndex = -1;

    for(let i = 0; i < V; i++){
      if(selected[i]){
        for(let j = 0; j < V; j++){
          if(!selected[j] && min > graph[i][j] && graph[i][j] !== 0){
              min = graph[i][j];
              minIndex = j;
              x = i;
              y = j;
          }
        }
      }
    }
    console.log("from " + x + "to" + minIndex + " weight " + min);
    selected[y] = true;
    nofEdges++;
  }
}

const graph = [[0,3,0,0,8], [3,0,4,2,0], [0,4,0,10,0], [0,2,10,11,0],[8,0,0,11,0]]

getMST(graph, graph.length)

