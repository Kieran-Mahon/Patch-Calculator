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

  addNode(id, type, label, location) {
    this.nodes.push(new Node(id, type, label, location));
  }

  getEdges() {
    return this.edges;
  }

  addEdge(type, distance, nodeA, nodeB) {
    this.edges.push(new Edge(type, distance, nodeA, nodeB));
  }
  
  //Remove node from the array (THIS WILL LEAVE EMPTY EDGES, REMOVE THEM FIRST)
  removeNode(node) {
    const index = this.nodes.indexOf(node);
    if (index !== -1) {
      this.nodes.splice(index, 1);
    }
  }

  //Remove edge
  removeEdge(edge) {
    //Remove the edge reference from the two connected nodes
    edge.nodeA.disconnectEdge(edge);
    edge.nodeB.disconnectEdge(edge);

    //Remove the edge
    const index = this.edges.indexOf(edge);
    if (index !== -1) {
      this.edges.splice(index, 1);
    }
  }
}

export default Graph;
