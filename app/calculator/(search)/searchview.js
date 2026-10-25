"use client"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { AlertTriangleIcon, MapPin } from "lucide-react";

export default function SearchView({ports, setStartPort, setEndPort, startPort, endPort, calculateShortestPath, logout, openAdmin, errorMessage, pathFound, openResults}) {
  return (
    <div>
      <header className="flex items-center justify-between p-4 ">
        <Button type="button" onClick={(e) => logout()}>
          LOG OUT
        </Button>
        <p className="text-lg">Path Calculator</p>
        <Button type="button" onClick={(e) => openAdmin()}>
          ADMIN
        </Button>
      </header>
      <Card>
        <CardHeader>
          <FieldGroup>
            <Field>
              <FieldLabel>Start Port:</FieldLabel>
              <Combobox
                items={ports}
                onValueChange={(value) => {setStartPort(value)}}
                itemToStringValue={(item) => item.type + " - " + item.label + " (" + item.location + ")"}
              >
                <ComboboxInput placeholder=". . ." />
                <ComboboxContent>
                  <ComboboxEmpty>No ports found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (item && (
                      <ComboboxItem key={item.id} value={item}>
                        {item.type + " - " + item.label + " (" + item.location + ")"}
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
                itemToStringValue={(item) => item.type + " - " + item.label + " (" + item.location + ")"}
              >
                <ComboboxInput placeholder=". . ." />
                <ComboboxContent>
                  <ComboboxEmpty>No ports found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (item && (
                      <ComboboxItem key={item.id} value={item}>
                        {item.type + " - " + item.label + " (" + item.location + ")"}
                      </ComboboxItem>
                    ))}
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
            <Alert variant="destructive">
              <AlertTriangleIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          }
          {pathFound == true &&
            <Alert>
              <MapPin />
              <AlertTitle><b>Path Found!</b></AlertTitle>
              <AlertDescription>
                <Button type="button" onClick={() => {openResults()}}>
                  View Options
                </Button>
              </AlertDescription>
            </Alert>
          }
        </CardContent>
      </Card>
    </div>
  );
}
