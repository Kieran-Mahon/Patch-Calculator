"use client"
import { Button } from "@/components/ui/button";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Node from "@/lib/Node";

export default function AddPortPanel({setLabel, setType, setLocation, addPort}) {
  return (
    <div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="label">Label:</FieldLabel>
          <Input
            id="label"
            placeholder=". . ."
            onChange={(e) => setLabel(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel>Port Type:</FieldLabel>
          <Combobox
            items={Object.values(Node.types)}
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
          <FieldLabel htmlFor="location">Location:</FieldLabel>
          <Input
            id="location"
            placeholder=". . ."
            onChange={(e) => setLocation(e.target.value)}
          />
        </Field>

        <Field>
          <Button type="button" onClick={(e) => addPort()}>
            ADD PORT
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
