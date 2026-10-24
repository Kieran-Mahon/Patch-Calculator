"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export default function RemoveConnectionPanel({connections, setConnection, removeConnection}) {
  
  //Helper function for labels
  const comboBoxLabel = (item) => {
    return item.nodeA.type + " " + item.type + " - " + item.nodeA.label + " (" + item.nodeA.location + ") --> " + item.nodeB.label + " (" + item.nodeB.location + ")";
  }

  //To stop the stupid combobox bug
  var connectionMap = [];
  for (let i = 0; i < connections.length; i++) {
    connectionMap.push({
      id: connections[i].nodeA.id + "-" + connections[i].nodeB.id,
      label: comboBoxLabel(connections[i]),
      connection: connections[i]
    });
  }

  //Decodes the map to just the connection
  const decodeMap = (value) => {
    for (let i = 0; i < connectionMap.length; i++) {
      if (connectionMap[i].label == value) {
        setConnection(connectionMap[i].connection);
        return;
      }
    }
  }

  return (
    <div>
      <FieldGroup>
        <Field>
          <FieldLabel>Connections:</FieldLabel>
          <Combobox
            items={connectionMap}
            onValueChange={(value) => {decodeMap(value)}}
          >
            <ComboboxInput placeholder=". . ." />
            <ComboboxContent>
              <ComboboxEmpty>No ports found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (item && (
                  <ComboboxItem key={item.id} value={item.label}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
        
        <Field>
          <Button type="button" onClick={(e) => removeConnection()}>
            DELETE CONNECTION
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
