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
  
  //Add a new node
  addNode(type, label, location) {
    //Make a new ID for the node that hasn't been used before
    var newID = 0;
    var found = false;
    const allNodes = this.graph.getNodes();

    //Loop until free id found
    while (!found) {
      var used = false;
      //Check all nodes for the id
      for (let i = 0; i < allNodes.length; i++) {
        if(allNodes[i].id == newID) {
          //Move to next ID and break the inner loop early
          newID++;
          used = true;
          break;
        }
      }
      
      //After looping all and it still isn't used then we can use the id
      if (used == false) {
        found = true;
      }
    }
    
    //Add the node with the new ID
    console.log(newID)
    this.graph.addNode(newID, type, label, location);
  }

  //Add a new Edge
  addEdge(type, distance, nodeA, nodeB) {
    this.graph.addEdge(type, distance, nodeA, nodeB);
  }

  //Remove node
  removeNode(node) {
    this.graph.removeNode(node);
  }

  //Remove edge
  removeEdge(edge) {
    this.graph.removeEdge(edge);
  }
}

export default GraphManager;
