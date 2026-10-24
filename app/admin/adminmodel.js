import Edge from "@/lib/Edge";
import GraphData from "@/lib/GraphData";
import GraphManager from "@/lib/GraphManager";
import Node from "@/lib/Node";

class AdminModel {

  graphManager = null;

  constructor(savedData) {
    if (savedData) {
      //Load graph with local saved graph
      savedData = JSON.parse(savedData);
      this.graphManager = new GraphManager(savedData);
    } else {
      //Load graph with default json data (only used when the calculator isn't opened first)
      this.graphManager = new GraphManager(new GraphData().getData());
    }
  }

  
  //Get ports
  getPorts() {
    return this.graphManager.getNodes();
  }

  //Get edges
  getEdges() {
    return this.graphManager.getEdges();
  }

  //Get whole graph
  getGraph() {
    return this.graphManager.getGraph();
  }

  //Get the JSON of the graph
  getGraphJSON() {
    return this.graphManager.getGraphJSON();
  }

  //Add a port
  addPort(type, label, location) {
    this.graphManager.addNode(type, label, location);
  }
  
  //Add a new Edge
  addEdge(type, distance, nodeA, nodeB) {
    this.graphManager.addEdge(type, distance, nodeA, nodeB);
  }

  removePort(node) {
    this.graphManager.removeNode(node);
  }

  removeEdge(edge) {
    this.graphManager.removeEdge(edge);
  }
}

export default AdminModel;
