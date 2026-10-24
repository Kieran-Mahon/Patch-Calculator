"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export default function RemovePortPanel({ports, setRemovingPort, removePort}) {
  
  //Helper function for labels
  const comboBoxLabel = (item) => {
    return item.type + " - " + item.label + " (" + item.location + ")";
  }

  return (
    <div>
      <FieldGroup>
        <Field>
          <FieldLabel>Ports:</FieldLabel>
          <Combobox
            items={ports}
            onValueChange={(value) => {setRemovingPort(value)}}
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
          <Button type="button" onClick={(e) => removePort()}>
            DELETE PORT
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
