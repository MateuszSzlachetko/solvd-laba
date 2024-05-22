# Graph Documentation

## Classes

### `Graph`
Represents a graph using an adjacency matrix.

#### Constructor
```javascript
constructor(graphMatrix)
```

- `graphMatrix` (Array of Arrays): A 2D array representing the weights of edges between vertices. The indices represent the vertices, and the values are the weights of the edges.

#### Methods

##### `addVertex`
Adds a new vertex to the graph. The new vertex should specify its edges for every existing vertex.

```javascript
addVertex(vertex)
```

- `vertex` (Array): An array of edge weights for the new vertex.

##### `setEdge`
Sets the weight of an edge between two vertices.

```javascript
setEdge(xIndex, yIndex, weight)
```

- `xIndex` (number): The index of the first vertex.
- `yIndex` (number): The index of the second vertex.
- `weight` (number): The weight of the edge.

##### `depthFirstSearch`
Performs a depth-first search (DFS) starting from a given vertex index. Visits nodes by exploring as far as possible along each branch before backtracking.

```javascript
depthFirstSearch(vIndex)
```

- `vIndex` (number): The index of the starting vertex.

The DFS algorithm uses recursion to visit all vertices connected to the starting vertex. It starts at the given vertex, marks it as visited, and then recursively visits all unvisited adjacent vertices.

##### `breadthFirstSearch`
Performs a breadth-first search (BFS) starting from a given vertex index. Visits nodes level by level, using a queue to manage the nodes to be explored next.

```javascript
breadthFirstSearch(vIndex)
```

- `vIndex` (number): The index of the starting vertex.

The BFS algorithm uses a queue to explore vertices level by level. It starts at the given vertex, marks it as visited, and then enqueues all its unvisited adjacent vertices. It then dequeues a vertex, visits it, and enqueues all its unvisited adjacent vertices, repeating this process until all reachable vertices have been visited.

### Algorithmic Functions

#### `dijkstra`
Finds the shortest path from a source vertex to a destination vertex using Dijkstra's algorithm.

```javascript
function dijkstra(graph, sourceVertex, destinationVertex)
```

- `graph` (Graph): The graph object.
- `sourceVertex` (number): The index of the source vertex.
- `destinationVertex` (number): The index of the destination vertex.

Dijkstra's algorithm finds the shortest path from the source vertex to all other vertices in the graph by maintaining a set of unvisited vertices and repeatedly selecting the vertex with the smallest known distance.

#### `minDistance`
Finds the vertex with the minimum distance from the set of vertices that have not been visited yet.

```javascript
function minDistance(dist, visited)
```

- `dist` (Array): An array of distances from the source vertex.
- `visited` (Array): An array indicating whether each vertex has been visited.
- Returns: The index of the vertex with the minimum distance.

#### `bfsShortestPath`
Finds the shortest path from a source vertex to a destination vertex using a modified BFS.

```javascript
function bfsShortestPath(graph, sourceVertex, destinationVertex)
```

- `graph` (Graph): The graph object.
- `sourceVertex` (number): The index of the source vertex.
- `destinationVertex` (number): The index of the destination vertex.

This function uses BFS to find the shortest path in a graph.

## Example

```javascript
// The indices represent the vertices, and the values are weights of the edges
const adjMatrix = [
  [0, 0, 5, 3],
  [0, 0, 3, 0],
  [5, 3, 0, 0],
  [3, 0, 0, 0]
];

const graph = new Graph(adjMatrix);
graph.depthFirstSearch(3);
graph.breadthFirstSearch(0); 

dijkstra(graph, 0, 1); 
bfsShortestPath(graph, 0, 1);
```