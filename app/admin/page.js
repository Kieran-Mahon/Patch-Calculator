"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminView from "./adminview";
import AdminModel from "./adminmodel";

export default function Home() {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState("");
  const [completedMessage, setCompletedMessage] = useState("");
  const [ports, setPorts] = useState([]);
  const [connections, setConnections] = useState([]);
  const [adminModel, setAdminModel] = useState(null);
  const [mode, setMode] = useState("ADD PORT");
  const [startPort, setStartPort] = useState(null);
  const [endPort, setEndPort] = useState(null);
  const [connection, setConnection] = useState(null);
  const [removingPort, setRemovingPort] = useState(null);
  const [distance, setDistance] = useState(0);
  const [type, setType] = useState(null);
  const [label, setLabel] = useState("");
  const [location, setLocation] = useState("");


  //Load graph data if there is any saved locally (this would be changed to a database in the future)
  useEffect(() => {
    const savedData = localStorage.getItem("graphData");
    const tempModel = new AdminModel(savedData);
    setAdminModel(tempModel);

    //Update the ports and connections
    setPorts(tempModel.getPorts());
    setConnections(tempModel.getEdges());

    //Save the graph data to local storage
    localStorage.setItem("graphData", JSON.stringify(tempModel.getGraphJSON()));
  }, []);
  

  //Top bar buttons
  const logout = () => {
    router.push('/');
  }

  const openSearch = () => {
    router.push('/calculator');
  }

  //Panel buttons
  const addConnection = () => {
    //Clear the error and completed messages
    setErrorMessage("");
    setCompletedMessage("");

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
    
    //Make sure there is a type
    if (!type) {
      setErrorMessage("Select a type!");
      return;
    }

    //Make sure there is positive distance
    if (distance <= 0) {
      setErrorMessage("Distance must be more than 0!");
      return;
    }
    
    //Check if the connection already exists
    const startPortEdges = startPort.getConnectedEdges();
    for (let i = 0; i < startPortEdges.length; i++) {
      if (startPortEdges[i].getOppositeNode(startPort) == endPort) {
        setErrorMessage("Connection already exists!");
        return;
      }
    }
    
    //Add the connection
    adminModel.addEdge(type, distance, startPort, endPort);
    
    //Let the user know that its added
    setCompletedMessage("Connection added!");

    //Save the graph
    saveGraphToLocal();
  }

  const removeConnection = () => {
    //Clear the error and completed messages
    setErrorMessage("");
    setCompletedMessage("");

    //Make sure a connection is selected
    if (!connection) {
      setErrorMessage("Select a connection!");
      return;
    }
    
    //Check if the connection exists
    var exists = false;
    for (let i = 0; i < connections.length; i++) {
      if (connection == connections[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      setErrorMessage("Connection does not exist!");
      return;
    }
    
    //Remove the connection
    adminModel.removeEdge(connection);
    
    //Let the user know that its added
    setCompletedMessage("Connection removed!");

    //Save the graph
    saveGraphToLocal();
  }

  const addPort = () => {
    //Clear the error and completed messages
    setErrorMessage("");
    setCompletedMessage("");

    //Make sure there is a label
    if (!label) {
      setErrorMessage("Label missing!");
      return;
    }

    //Make sure there is a type
    if (!type) {
      setErrorMessage("Type missing!");
      return;
    }

    //Make sure there is a location
    if (!location) {
      setErrorMessage("Location missing!");
      return;
    }
    
    //Add the new node
    adminModel.addPort(type, label, location);
    
    //Let the user know that its added
    setCompletedMessage("Node added!");

    //Save the graph
    saveGraphToLocal();
  }

  const removePort = () => {
    //Clear the error and completed messages
    setErrorMessage("");
    setCompletedMessage("");

    //Make sure a port is selected
    if (!removingPort) {
      setErrorMessage("Select a port!");
      return;
    }
    
    //Check if the port exists
    var exists = false;
    for (let i = 0; i < ports.length; i++) {
      if (removingPort == ports[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      setErrorMessage("Port does not exist!");
      return;
    }

    //Make sure the port has no remaining connections
    if (removingPort.getConnectedEdges().length > 0) {
      setErrorMessage("Remove all connections to this port first!");
      return;
    }
    
    //Remove the port
    adminModel.removePort(removingPort);
    
    //Let the user know that its added
    setCompletedMessage("Port removed!");

    //Save the graph
    saveGraphToLocal();
  }

  //Switch mode button
  const changeMode = (value) => {
    setMode(value);
    
    clearSharedVariables();
  }

  //Save graph to local storage
  const saveGraphToLocal = () => {
    localStorage.setItem("graphData", JSON.stringify(adminModel.getGraphJSON()));
  }

  //Clear shared variables
  const clearSharedVariables = () => {
    setErrorMessage("");
    setCompletedMessage("");
    setStartPort(null);
    setEndPort(null);
    setConnection(null);
    setDistance(0);
    setType(null);
    setLabel("");
    setLocation("");
  }

  return (
    <AdminView
      logout={logout}
      openSearch={openSearch}
      errorMessage={errorMessage}
      completedMessage={completedMessage}
      ports={ports}
      connections={connections}
      mode={mode}
      changeMode={changeMode}
      setStartPort={setStartPort}
      setEndPort={setEndPort}
      setConnection={setConnection}
      setRemovingPort={setRemovingPort}
      setDistance={setDistance}
      setType={setType}
      setLabel={setLabel}
      setLocation={setLocation}
      addConnection={addConnection}
      removeConnection={removeConnection}
      addPort={addPort}
      removePort={removePort}
    />
  );
}
