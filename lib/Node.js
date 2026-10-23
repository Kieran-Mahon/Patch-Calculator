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
  
  type = "";
  label = "";
  location = "";
  connectedEdges = [];

  constructor(type, label, location) {
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

}

export default Node;
