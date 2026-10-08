"use client"
import MapManager from "@/lib/MapManager";
import { useState } from "react";
import SearchView from "./searchview";
import { useRouter } from 'next/navigation'

const mapJSON = {
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
      }
  ],
  edges: [
      {
          type: "Tieline",
          nodeA: "A1",
          nodeB: "A2"
      },{
          type: "Tieline",
          nodeA: "A2",
          nodeB: "A3"
      },{
          type: "Tieline",
          nodeA: "A3",
          nodeB: "A1"
      },{
          type: "Tieline",
          nodeA: "A3",
          nodeB: "A4"
      }
  ]
}

const mapManager = new MapManager(mapJSON);
const ports = mapManager.getNodes();
ports.unshift(null);

export default function Home() {
  const router = useRouter()

  const [startPort, setStartPort] = useState(ports[0]);
  const [endPort, setEndPort] = useState(ports[0]);

  const logout = () => {
    console.log("home")
    router.push('/');
    return true;
  }

  return (
    <SearchView
      ports={ports}
      setStartPort={setStartPort}
      setEndPort={setEndPort}
      startPort={startPort}
      endPort={endPort}
      calculateShortestPath={mapManager.calculateShortestPath}
      logout={logout}
    />
  )
}
