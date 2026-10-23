import Node from "./Node.js";
import Edge from "./Edge.js";

class Graph {
    
  nodes = [];
  edges = [];

  constructor() {
    this.nodes = [];
    this.edges = [];
  }


  getNodes() {
    return this.nodes;
  }

  addNode(type, label, location) {
    this.nodes.push(new Node(type, label, location));
  }

  getEdges() {
    return this.edges;
  }

  addEdge(type, distance, nodeA, nodeB) {
    this.edges.push(new Edge(type, distance, nodeA, nodeB));
  }
}

export default Graph;
