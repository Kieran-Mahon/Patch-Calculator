"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";

const ports = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8"
]

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Options:</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Button type="button">
            Add Port
          </Button>
          <Button type="button">
            Add Connection
          </Button>
          <Button type="button">
            Remove Port
          </Button>
          <Button type="button">
            Remove Connection
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Adding Connection:</CardTitle>
        </CardHeader>

        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel>Start Port:</FieldLabel>
              <Combobox items={ports}>
                <ComboboxInput placeholder=". . ." />
                  <ComboboxContent>
                    <ComboboxEmpty>No ports found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
              </Combobox>
            </Field>
            
            <Field>
              <FieldLabel>End Port:</FieldLabel>
              <Combobox items={ports}>
                <ComboboxInput placeholder=". . ." />
                  <ComboboxContent>
                    <ComboboxEmpty>No ports found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
              </Combobox>
            </Field>
            <Field>
              <Button type="submit">
                MAKE CHANGE
              </Button>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
    </div>
  );
}
