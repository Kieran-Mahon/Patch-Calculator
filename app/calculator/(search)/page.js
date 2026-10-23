"use client"
import { useState } from "react";
import SearchView from "./searchview";
import { useRouter } from 'next/navigation'
import SearchModel from "./searchmodel";
import Edge from "@/lib/Edge";
import Node from "@/lib/Node";

export default function Home() {
  const router = useRouter()

  const searchModel = new SearchModel();

  const [ports, setPorts] = useState(searchModel.getPorts());
  const [startPort, setStartPort] = useState(null);
  const [endPort, setEndPort] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);
  const [pathFound, setPathFound] = useState(false);

  const logout = () => {
    router.push('/');
  }

  const openAdmin = () => {
    router.push('/admin');
  }

  const openResults = () => {
    //Turn the results into JSON
    const data = encodeURIComponent(JSON.stringify(PathDisplayCleanUp(results)));
    router.push('/calculator/result?data=' + data);
  }

  const calculateShortestPath = () => {
    //Clear the error message
    setErrorMessage("");

    //Make sure there are selected ports
    if (!startPort || !endPort) {
      setErrorMessage("Select a start and end port!");
      return;
    }

    //Make sure the start and end nodes aren't the same
    if (startPort == endPort) {
      setErrorMessage("The start and end ports cannot match!");
      return;
    }

    //Make sure the start and end ports are of the same type
    if (startPort.type != endPort.type) {
      setErrorMessage("The start and end ports must be of the same type!");
      return;
    }

    //Get references via the label
    const start = searchModel.getGraph().getNodes().find(n => n.id === startPort.id);
    const end = searchModel.getGraph().getNodes().find(n => n.id === endPort.id);

    //Simplify the graph so it only has all of the requested type
    var sortedNodes = [];
    searchModel.getGraph().getNodes().forEach(node => {
      if (node.type == startPort.type) {
        sortedNodes.push(node);
      }
    });


    //Find the 3 shortest paths
    const paths = YenKSP(sortedNodes, start, end, 3);
    setResults(paths);


    //Check if any paths were found
    if (paths.length == 0) {
      //None found
      setPathFound(false);
      setErrorMessage("No Path Found!");
    } else {
      //Path found
      setPathFound(true);
    }
  }

  //Yen's k shortest path
  const YenKSP = (nodes, start, end, K) => {
    if (start === end) {
      return [{
        path: [start],
        distance: 0
      }];
    }

    //Find shortest path
    const shortestPath = Dijkstra(nodes, start, end);

    if (shortestPath.path.length === 0) {
      return [];
    }

    //Accepted shortest paths
    const A = [shortestPath];
    //Comparing paths ordered by distance
    const B = [];

    //Store paths that have already been checked
    const candidateKeys = new Set();
    const acceptedKeys = new Set();

    //Function to make keys so the paths can be checked that they haven't be used before
    const pathKey = path => JSON.stringify(path.map(node => node.id));
    acceptedKeys.add(pathKey(shortestPath.path));

    //Function to find paths with the same location 3 times in a row
    const hasThreeConsecutiveLocations = (path) => {
      for (let i = 0; i < path.length - 2; i++) {
        if (path[i].location === path[i + 1].location && path[i + 1].location === path[i + 2].location) {
          return true;
        }
      }
      return false;
    };
    
    //Find the edge connecting two nodes
    const getEdgeBetween = (nodeA, nodeB) => {
      return nodeA.getConnectedEdges().find(edge => edge.getOppositeNode(nodeA) === nodeB);
    };

    //Calculate the distance of the path
    const getPathDistance = path => {
      let distance = 0;

      //Loop over the paths and find the total distance
      for (let i = 0; i < path.length - 1; i++) {
        const edge = getEdgeBetween(path[i], path[i + 1]);

        //If no edge then set to max number
        if (!edge) {
          return Number.MAX_SAFE_INTEGER;
        }

        //Add the distances
        distance += edge.getDistance();
      }

      return distance;
    };


    //Find k number paths
    for (let k = 1; k < K; k++) {
      const previousPath = A[k - 1].path;

      //Any node except the last node can be a spur node
      for (let i = 0; i < previousPath.length - 1; i++) {
        const rootPath = previousPath.slice(0, i + 1);
        const spurNode = rootPath[rootPath.length - 1];

        const excludedEdges = new Set();
        const excludedNodes = new Set();

        //Exclude the next edge of every accepted path that shares the current root path
        for (const accepted of A) {
          const acceptedPath = accepted.path;

          if (acceptedPath.length <= i) {
            continue;
          }

          const sameRoot = rootPath.every((node, index) => acceptedPath[index] === node);
          if (sameRoot && acceptedPath.length > i + 1) {
            
            const edge = getEdgeBetween(acceptedPath[i], acceptedPath[i + 1]);
            if (edge) {
              excludedEdges.add(edge);
            } 
          }
        }

        //Block the spur node visiting nodes in the root path
        for (let j = 0; j < rootPath.length - 1; j++) {
          excludedNodes.add(rootPath[j]);
        }

        //Find the shortest path on the spur
        const spurShortestPath = Dijkstra(nodes, spurNode, end, excludedNodes,excludedEdges);

        if (spurShortestPath.path.length === 0) continue;

        //Remove the last node in the root path then combine with the spur path
        var totalPath = rootPath.slice(0, -1);
        totalPath = totalPath.concat(spurShortestPath.path);

        //Check if the path has 3 consecutive nodes in the same location
        //A port only has one in/out at a location, not two, so this blocks that
        if (hasThreeConsecutiveLocations(totalPath)) {
          continue;
        }


        //Get key of the path
        const key = pathKey(totalPath);

        if (acceptedKeys.has(key) || candidateKeys.has(key)) {
          continue;
        }

        B.push({
          path: totalPath,
          distance: getPathDistance(totalPath)
        });

        candidateKeys.add(key);
      }

      //Stop when no more other paths exist
      if (B.length === 0) {
        break;
      }

      //Pick the candidate path with the lowest distance
      B.sort((a, b) => a.distance - b.distance);

      //Move the shorest path from the candidate list to the accepeted
      const nextPath = B.shift();
      candidateKeys.delete(pathKey(nextPath.path));
      A.push(nextPath);
      acceptedKeys.add(pathKey(nextPath.path));
    }

    //Add keys to the accepted list
    let keyedList = [];
    for (let i = 0; i < A.length; i++) {
      keyedList[i] = {
        key: 'Option ' + (i + 1),
        distance: A[i].distance,
        path: A[i].path
      };
    }

    return keyedList;
  };

  //Dijkstra's shortest path algorithm which is used to find the shortest path within the Yen algorithm
  const Dijkstra = (nodes, start, end, excludedNodes = new Set(), excludedEdges = new Set()) => {
    
    //Helper code for the yen algorithm, basically checks if the start or end nodes of the path are excluded from being checked
    if (excludedNodes.has(start) || excludedNodes.has(end)) {
      return {
        errorMessage: "Start or end node is excluded!",
        path: [],
        distance: Number.MAX_SAFE_INTEGER
      };
    }
    
    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set();
    
    //Intitalise the nodes
    nodes.forEach(node => {
      distances.set(node, Number.MAX_SAFE_INTEGER);
      previous.set(node, null);
      unvisited.add(node);
    });
    
    //Ensure start and end belong to the sub graph
    if (!unvisited.has(start) || !unvisited.has(end)){
      return {
        errorMessage: "Start or end missing!",
        path: [],
        distance: Number.MAX_SAFE_INTEGER
      };
    }

    //Set start distance to 0
    distances.set(start, 0);

    while (unvisited.size > 0) {

      //Find the unvisited node with the smallest distance
      let currentNode = null;
      let shortestDistance = Number.MAX_SAFE_INTEGER;

      unvisited.forEach(node => {
        if (distances.get(node) < shortestDistance) {
          shortestDistance = distances.get(node);
          currentNode = node;
        }
      });

      //No reachable nodes
      if (currentNode === null) {
        break;
      }

      //Found the end node
      if (currentNode === end) {
        break;
      }

      unvisited.delete(currentNode);

      //Explore connected edges
      for (const edge of currentNode.getConnectedEdges()) {
        //Ignore excluded edges
        if (excludedEdges.has(edge)) {
          continue;
        }

        const neighbourNode = edge.getOppositeNode(currentNode);

        //Ignore invalid, excluded, or already visited nodes
        if (!neighbourNode || excludedNodes.has(neighbourNode) || !unvisited.has(neighbourNode)) {
          continue;
        }

        //First the new distance and set it if it's higher
        const newDistance = distances.get(currentNode) + edge.getDistance();
        if (newDistance < distances.get(neighbourNode)) {
          distances.set(neighbourNode, newDistance);
          previous.set(neighbourNode, currentNode);
        }
      }
    }

    //See if any path is found
    const distance = distances.get(end);
    if (distance == null || distance === Number.MAX_SAFE_INTEGER) {
      return {
        errorMessage: "No path found!",
        path: [],
        distance: Number.MAX_SAFE_INTEGER
      };
    }

    //Reconstruct the path to find the start from the end
    let path = [];
    let current = end;

    while (current !== null) {
      path.unshift(current);
      current = previous.get(current);
    }

    //Check the rebuilt path starts with the start node
    if (path[0] !== start) {
      return {
        errorMessage: "No path found!",
        path: [],
        distance: Number.MAX_SAFE_INTEGER
      };
    }

    //No early breaks so the current path is the shortest
    return {
      path,
      distance
    };
  }

  const PathDisplayCleanUp = (options) => {
    const cleanedOptions = [];

    options.forEach(path => {
      const currentCleanOption = [];

      //Save the first node to the cleaned list as a dummy node
      var previousNode = path.path[0];
      const dummyNode = new Node(previousNode.id, previousNode.type, previousNode.label, previousNode.location);
      currentCleanOption.push(dummyNode);

      //Loop over the next nodes and add them to the list
      //While there add the edge between it and the last node
      //Add them as dummy versions to remove any linking between them as this is all display only
      for (let i = 1; i < path.path.length; i++) {
        const node = path.path[i];

        //Find the edge
        var edge = null
        node.getConnectedEdges().forEach(nodeEdge => {
          if (nodeEdge.getOppositeNode(node) == previousNode) {
            edge = nodeEdge;
          }
        });

        //Add the edge as a dummy edge, a edge without nodes
        if (edge != null) { //If statment shouldn't be needed but added in case
          const dummyEdge = new Edge(edge.type, edge.distance, null, null);
          currentCleanOption.push(dummyEdge);
        }

        //Add the node as a dummy node
        const dummyNode = new Node(node.id, node.type, node.label, node.location);
        currentCleanOption.push(dummyNode);

        //Set the new previous node
        previousNode = node;
      }

      //Add the current path to the all paths cleaned list
      cleanedOptions.push({
        key: path.key,
        path: currentCleanOption
      });
    });

    //Return the cleaned data
    return cleanedOptions;
  }
  
  return (
    <SearchView
      ports={ports}
      setStartPort={setStartPort}
      setEndPort={setEndPort}
      startPort={startPort}
      endPort={endPort}
      calculateShortestPath={calculateShortestPath}
      logout={logout}
      openAdmin={openAdmin}
      errorMessage={errorMessage}
      pathFound={pathFound}
      openResults={openResults}
    />
  )
}
