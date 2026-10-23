import Graph from "./Graph";

class GraphManager {
    
  graph = null;

  constructor(mapJSON) {
    //Make new graph and load map from the JSON
    this.graph = new Graph();
    this.loadMap(mapJSON);
  }


  //Load map from JSON
  loadMap(mapJSON) {
    //Load nodes
    mapJSON.nodes.forEach(node => {
      this.graph.addNode(node.id, node.type, node.label, node.location);
    });

    //Load edges
    mapJSON.edges.forEach(edge => {
      const nodeA = this.graph.getNodes().find(n => n.id === edge.nodeA);
      const nodeB = this.graph.getNodes().find(n => n.id === edge.nodeB);

      this.graph.addEdge(edge.type, edge.distance, nodeA, nodeB);
    });
  }

  getNodes() {
    return this.graph.getNodes();
  }

  getEdges() {
    return this.graph.getEdges();
  }

  getGraph() {
    return this.graph;
  }

  getGraphClone(startGraph) {
    cloneGraph = new Graph();

    startGraph.getNodes.forEach(node => {
      cloneGraph.addNode(node.id, node.type, node.label, node.location);
    });

    startGraph.getEdges.forEach(edge => {
      cloneGraph.addEdge(edge.type, edge.distance, edge.nodeA.label, edge.nodeB.label);
    });

    return cloneGraph;
  }   
}

export default GraphManager;
