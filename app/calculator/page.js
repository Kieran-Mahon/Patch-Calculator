"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
    <Card>
      <CardHeader>
        <FieldGroup>
          <Field>
            <FieldLabel>Start Port</FieldLabel>
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
            <FieldLabel>End Port</FieldLabel>
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
