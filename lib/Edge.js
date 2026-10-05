class Edge {
    static types = {
        TIELINE: "Tieline",
        PATCH: "Patch",
    }

    type = "";
    nodeA = null;
    nodeB = null;

    constructor(type, nodeA, nodeB) {
        this.type = type;
        this.nodeA = nodeA;
        this.nodeB = nodeB;

        nodeA.connectEdge(this);
        nodeB.connectEdge(this);
    }
}

export default Edge;
