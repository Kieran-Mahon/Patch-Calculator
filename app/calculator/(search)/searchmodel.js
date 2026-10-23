import GraphManager from "@/lib/GraphManager";

class SearchModel {
  mapJSON = {
    nodes: [
        {
            type: "XLR",
            label: "A1",
            location: "Room 1"
        },{
            type: "XLR",
            label: "A2",
            location: "Room 1"
        },{
            type: "XLR",
            label: "A3",
            location: "Room 1"
        },{
            type: "XLR",
            label: "A4",
            location: "Room 1"
        },{
            type: "XLR",
            label: "A5",
            location: "Room 1"
        }
    ],
    edges: [
        {
            type: "Tieline",
            distance: 1,
            nodeA: "A1",
            nodeB: "A2"
        },{
            type: "Tieline",
            distance: 1,
            nodeA: "A2",
            nodeB: "A3"
        },{
            type: "Tieline",
            distance: 4,
            nodeA: "A3",
            nodeB: "A1"
        },{
            type: "Tieline",
            distance: 1,
            nodeA: "A3",
            nodeB: "A4"
        },{
            type: "Tieline",
            distance: 3,
            nodeA: "A1",
            nodeB: "A4"
        }
    ]
  }

  graphManager = new GraphManager(this.mapJSON);
  
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
}

export default SearchModel;
