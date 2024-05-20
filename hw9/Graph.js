import {Queue} from "./Queue.js";

class Graph {
  constructor(graphMatrix) {
    const numOfVertices = graphMatrix.length;
    this.adjMatrix = Array.from(Array(numOfVertices), () => Array(numOfVertices).fill(0));

    // array copy
    for (let i = 0; i < numOfVertices; ++i) {
      for (let j = 0; j < numOfVertices; ++j) {
        const edgeWeight = graphMatrix[i][j];
        if (edgeWeight > 0) {
          this.adjMatrix[i][j] = edgeWeight;
          this.adjMatrix[j][i] = edgeWeight;
        }
      }
    }
  }

  addVertex(vertex) {
    const numOfVertices = this.adjMatrix.length;
    if (vertex.length - 1 !== numOfVertices)  // vertex.length = all edges + 1 (its own position)
      return console.error("The vertex needs to specify its edges for every other vertex")

    for (let i = 0; i < numOfVertices; ++i)
      this.adjMatrix[i][numOfVertices] = vertex[i] // extend each vertex

    this.adjMatrix.push(vertex);
  }

  setEdge(xIndex, yIndex, weight) {
    const numOfVertices = this.adjMatrix.length;
    if (xIndex > numOfVertices - 1 || yIndex > numOfVertices - 1 || xIndex === yIndex)
      return console.error("Vertices indexes are out of bound")

    this.adjMatrix[xIndex][yIndex] = weight;
    this.adjMatrix[yIndex][xIndex] = weight;
  }

  depthFirstSearch(vIndex) {
    let visited = Array(this.adjMatrix.length).fill(false);
    const inner = (vIndex, visited) => {
      visited[vIndex] = true;
      console.log(vIndex + ' ');
      let edges = this.adjMatrix[vIndex];
      edges.forEach((weight, index) => {
        if (!visited[index] && weight !== 0) {
          inner(index, visited)
        }
      })
    }
    inner(vIndex, visited);
  }

  breadthFirstSearch(vIndex) {
    let visited = Array(this.adjMatrix.length).fill(false);
    let queue = new Queue(this.adjMatrix.length);
    visited[vIndex] = true;
    queue.enqueue(vIndex);
    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      console.log(u + ' ')
      let edges = this.adjMatrix[u];
      edges.forEach((weight, index) => {
        if (!visited[index] && weight !== 0) {
          visited[index] = true;
          queue.enqueue(index)
        }
      })
    }
  }
}

// The indices represent the vertices, and the values are weights of the edges
const adjMatrix = [
  [0, 0, 5, 3],
  [0, 0, 3, 0],
  [1, 2, 0, 0],
  [1, 0, 0, 0]
];

const graph = new Graph(adjMatrix)
graph.depthFirstSearch(3);
graph.breadthFirstSearch(0);