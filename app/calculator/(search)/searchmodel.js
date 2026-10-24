import Edge from "@/lib/Edge";
import GraphData from "@/lib/GraphData";
import GraphManager from "@/lib/GraphManager";
import Node from "@/lib/Node";

class SearchModel {
  graphManager = null;
  constructor(savedData) {
    if (savedData) {
      //Load graph with local saved graph
      savedData = JSON.parse(savedData);
      this.graphManager = new GraphManager(savedData);
    } else {
      //Load graph with default json data
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

  getGraphJSON() {
    return this.graphManager.getGraphJSON();
  }
}

export default SearchModel;
