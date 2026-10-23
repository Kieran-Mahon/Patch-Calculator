"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";

export default function SearchView({ports, setStartPort, setEndPort, startPort, endPort, calculateShortestPath, logout, openAdmin, errorMessage}) {
  return (
    <div>
      <header className="flex items-center justify-between p-4 ">
        <Button type="button" onClick={(e) => logout()}>
          LOG OUT
        </Button>
        <h1>Path Calculator</h1>
        <Button type="button" onClick={(e) => openAdmin()}>
          ADMIN
        </Button>
      </header>
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
                    {(item) => (item && (
                      <ComboboxItem key={item.label} value={item.label}>
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
                    {(item) => (item && (
                      <ComboboxItem key={item.label} value={item.label}>
                        {item.label}
                      </ComboboxItem>
                    )
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            </Field>
            <Field>
                <Button type="button" onClick={() => {calculateShortestPath()}}>
                CALCULATE
                </Button>
            </Field>
          </FieldGroup>
        </CardHeader>

        <CardContent>
          {errorMessage != "" && 
            <p className="text-red-500 text-sm">{errorMessage}</p>
          }
          <h1>Result button area</h1>
        </CardContent>
      </Card>
    </div>
  );
}
