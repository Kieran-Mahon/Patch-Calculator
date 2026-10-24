"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Edge from "@/lib/Edge";

export default function AddConnectionPanel({ports, setStartPort, setEndPort, setDistance, setType, makeConnection}) {

  //Helper function for labels
  const comboBoxLabel = (item) => {
    return item.type + " - " + item.label + " (" + item.location + ")";
  }

  console.log();
  return (
    <div>
      <FieldGroup>
        <Field>
          <FieldLabel>Start Port:</FieldLabel>
          <Combobox
            items={ports}
            onValueChange={(value) => {setStartPort(value)}}
            itemToStringValue={(item) => comboBoxLabel(item)}
          >
            <ComboboxInput placeholder=". . ." />
            <ComboboxContent>
              <ComboboxEmpty>No ports found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (item && (
                  <ComboboxItem key={item.id} value={item}>
                    {comboBoxLabel(item)}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
        
        <Field>
          <FieldLabel>End Port:</FieldLabel>
          <Combobox
            items={ports}
            onValueChange={(value) => {setEndPort(value)}}
            itemToStringValue={(item) => comboBoxLabel(item)}
          >
            <ComboboxInput placeholder=". . ." />
            <ComboboxContent>
              <ComboboxEmpty>No ports found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (item && (
                  <ComboboxItem key={item.id} value={item}>
                    {comboBoxLabel(item)}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>

        <Field>
          <FieldLabel>Connection Type:</FieldLabel>
          <Combobox
            items={Object.values(Edge.types)}
            onValueChange={(value) => {setType(value)}}
          >
            <ComboboxInput placeholder=". . ." />
            <ComboboxContent>
              <ComboboxEmpty>No types found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (item && (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>

        <Field>
          <FieldLabel htmlFor="distance">Distance:</FieldLabel>
          <Input
            id="distance"
            type="number"
            placeholder=". . ."
            onChange={(e) => setDistance(e.target.value)}
          />
        </Field>

        <Field>
          <Button type="button" onClick={(e) => makeConnection()}>
            ADD CONNECTION
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
