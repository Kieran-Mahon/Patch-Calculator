import Node from "./Node.js";
import Edge from "./Edge.js";

class MapManager {
    
    nodes = [];
    edges = [];

    constructor(mapJSON) {
        
        this.loadMap(mapJSON);

        console.log(this.nodes.length + " nodes and " + this.edges.length + " edges.");
    }

    loadMap(mapJSON) {
        this.nodes = [];
        this.edges = [];

        //Load nodes
        mapJSON.nodes.forEach(node => {
            this.nodes.push(new Node(node.type, node.label, node.location));
        });

        //Load edges
        mapJSON.edges.forEach(edge => {
            const nodeA = this.nodes.find(n => n.label === edge.nodeA);
            const nodeB = this.nodes.find(n => n.label === edge.nodeB);

            this.edges.push(new Edge(edge.type, nodeA, nodeB));
        });
    }

    calculateShortestPath(startNode, endNode) {
        if (!startNode || !endNode) {
            return;
        }

        console.log("Calculating shortest path from " + startNode.label + " to " + endNode.label);
    }

    getNodes() {
        return this.nodes;
    }
}

export default MapManager;
