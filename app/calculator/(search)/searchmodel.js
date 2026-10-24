import Edge from "@/lib/Edge";
import GraphManager from "@/lib/GraphManager";
import Node from "@/lib/Node";

class SearchModel {
  //Data used when none found
  mapJSON = {
    nodes: [
        {
            id: 1,
            type: Node.types.XLR,
            label: "R1-R2-A",
            location: "Room 1"
        },{
            id: 2,
            type: Node.types.XLR,
            label: "R1-R2-A",
            location: "Room 2"
        },{
            id: 3,
            type: Node.types.XLR,
            label: "R1-R2-B",
            location: "Room 1"
        },{
            id: 4,
            type: Node.types.XLR,
            label: "R1-R2-B",
            location: "Room 2"
        },{
            id: 5,
            type: Node.types.XLR,
            label: "R1-R3-A",
            location: "Room 1"
        },{
            id: 6,
            type: Node.types.XLR,
            label: "R1-R3-A",
            location: "Room 3"
        },{
            id: 7,
            type: Node.types.SDI,
            label: "R2-R3",
            location: "Room 2"
        },{
            id: 8,
            type: Node.types.SDI,
            label: "R2-R3",
            location: "Room 3"
        },{
            id: 9,
            type: Node.types.SDI,
            label: "R1-R3",
            location: "Room 1"
        },{
            id: 10,
            type: Node.types.SDI,
            label: "R1-R3",
            location: "Room 3"
        }
    ],
    edges: [
        {
            type: Edge.types.TIELINE,
            distance: 3,
            nodeA: 1,
            nodeB: 2
        },{
            type: Edge.types.TIELINE,
            distance: 3,
            nodeA: 3,
            nodeB: 4
        },{
            type: Edge.types.TIELINE,
            distance: 3,
            nodeA: 5,
            nodeB: 6
        },{
            type: Edge.types.TIELINE,
            distance: 3,
            nodeA: 7,
            nodeB: 8
        },{
            type: Edge.types.TIELINE,
            distance: 3,
            nodeA: 9,
            nodeB: 10
        },{
            type: Edge.types.PATCH,
            distance: 1,
            nodeA: 1,
            nodeB: 3
        },{
            type: Edge.types.PATCH,
            distance: 1,
            nodeA: 1,
            nodeB: 5
        },{
            type: Edge.types.PATCH,
            distance: 1,
            nodeA: 3,
            nodeB: 5
        },{
            type: Edge.types.PATCH,
            distance: 1,
            nodeA: 2,
            nodeB: 4
        },{
            type: Edge.types.PATCH,
            distance: 1,
            nodeA: 8,
            nodeB: 10
        },
    ]
  }

  graphManager = null;

  constructor(savedData) {
    if (savedData) {
      //Load graph with local saved graph
      savedData = JSON.parse(savedData);
      this.graphManager = new GraphManager(savedData);
    } else {
      //Load graph with default json data
      this.graphManager = new GraphManager(this.mapJSON);
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
