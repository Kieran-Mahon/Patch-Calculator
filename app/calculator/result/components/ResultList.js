"use client"
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";

const ports = [
  "Option 1",
  "Option 2",
  "Option 3"
]

export default function ResultList({option}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{option.label}:</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {option.path.map((port, index) => (
            <li key={index}>{port}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
