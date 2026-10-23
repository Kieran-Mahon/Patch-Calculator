class Edge {
  static types = {
    TIELINE: "Tieline",
    PATCH: "Patch",
  }

  type = "";
  distance = 0;
  nodeA = null;
  nodeB = null;

  constructor(type, distance, nodeA, nodeB) {
    this.type = type;
    this.distance = distance;
    this.nodeA = nodeA;
    this.nodeB = nodeB;

    nodeA.connectEdge(this);
    nodeB.connectEdge(this);
  }

  getOppositeNode(node) {
    if (node == this.nodeA) {
      return this.nodeB;
    }
    if (node == this.nodeB) {
      return this.nodeA;
    }
    return null;
  }

  getDistance() {
    return this.distance;
  }
}

export default Edge;
