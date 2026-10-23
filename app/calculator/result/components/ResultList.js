"use client"
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";

export default function ResultList({option}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{option.label}:</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {option.path.map((element, index) => (
            <li key={index}>{element.type}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
