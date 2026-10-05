"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import MapManager from "@/lib/MapManager";
import { useState } from "react";

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
  const [startPort, setStartPort] = useState(ports[0]);
  const [endPort, setEndPort] = useState(ports[0]);

  return (
    <Card>
      <CardHeader>
        <FieldGroup>
          <Field>
            <FieldLabel>Start Port:</FieldLabel>
            <Combobox items={ports} onValueChange={(value) => {setStartPort(value)}}>
              <ComboboxInput placeholder=". . ." />
                <ComboboxContent>
                  <ComboboxEmpty>No ports found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      item && (
                        <ComboboxItem key={item.label} value={item}>
                          {item.label}
                        </ComboboxItem>
                      )
                    )}
                  </ComboboxList>
                </ComboboxContent>
            </Combobox>
          </Field>
          
          <Field>
            <FieldLabel>End Port:</FieldLabel>
            <Combobox items={ports} onValueChange={(value) => {setEndPort(value)}}>
              <ComboboxInput placeholder=". . ." />
                <ComboboxContent>
                  <ComboboxEmpty>No ports found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      item && (
                      <ComboboxItem key={item.label} value={item}>
                        {item.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
            </Combobox>
          </Field>
          <Field>
            <Button type="button" onClick={() => {mapManager.calculateShortestPath(startPort, endPort)}}>
              CALCULATE
            </Button>
          </Field>
        </FieldGroup>
      </CardHeader>

      <CardContent>
        <h1>Result button area</h1>
      </CardContent>
    </Card>
  );
}
