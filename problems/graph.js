
class Graph {
  constructor() {
    this.adjList = new Object()
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
    this.adjList[vertex] = new Array()
  }}

  addEdges(srcValue, destValue) {
  if (!this.adjList[srcValue]) this.addVertex(srcValue)
  if (!this.adjList[destValue]) this.addVertex(destValue)
  const val1Vertex = this.adjList[srcValue]
  const val2Vertex = this.adjList[destValue]

  val1Vertex.push(val2Vertex)
  val2Vertex.push(val1Vertex)
  }

  buildGraph(edges) {
    let g = new Graph()
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
