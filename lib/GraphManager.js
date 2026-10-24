import Graph from "./Graph";

class GraphManager {
    
  graph = null;

  constructor(graphJSON) {
    //Make new graph and load the graph from the JSON into it
    this.graph = new Graph();
    this.loadGraph(graphJSON);
  }


  //Load graph from JSON
  loadGraph(graphJSON) {
    //Load nodes
    graphJSON.nodes.forEach(node => {
      this.graph.addNode(node.id, node.type, node.label, node.location);
    });

    //Load edges
    graphJSON.edges.forEach(edge => {
      const nodeA = this.graph.getNodes().find(n => n.id === edge.nodeA);
      const nodeB = this.graph.getNodes().find(n => n.id === edge.nodeB);

      this.graph.addEdge(edge.type, edge.distance, nodeA, nodeB);
    });
  }

  
  getGraphJSON() {
    //Grab data from all the nodes
    const nodeJSON = [];
    this.graph.getNodes().forEach(node => {
      nodeJSON.push({
        id: node.id,
        type: node.type,
        label: node.label,
        location: node.location
      });
    });

    //Grab data from all the edges
    const edgeJSON = [];
    this.graph.getEdges().forEach(edge => {
      edgeJSON.push({
        type: edge.type,
        distance: edge.distance,
        nodeA: edge.nodeA.id,
        nodeB: edge.nodeB.id
      });
    });

    //Return the combined JSON
    return {
      nodes: nodeJSON,
      edges: edgeJSON
    };
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
