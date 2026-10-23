class Node {
  static types = {
    XLR: "XLR",
    DMX: "DMX",
    SDI: "SDI",
    RJ45: "RJ45",
    SINGLEMODEFIBRE: "Single Mode Fibre",
    MULTIMODEFIBRE: "Multi Mode Fibre",
    EVENTSNETWORK: "Events Network"
  }
  
  id = "";
  type = "";
  label = "";
  location = "";
  connectedEdges = [];

  constructor(id, type, label, location) {
    this.id = id;
    this.type = type;
    this.label = label;
    this.location = location;
    this.connectedEdges = [];
  }

  connectEdge(edge) {
    this.connectedEdges.push(edge);
  }

  getConnectedEdges() {
    return this.connectedEdges;
  }

  getID() {
    return this.id;
  }
}

export default Node;
