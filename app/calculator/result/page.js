"use client"
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import ResultList from "./components/ResultList";
import { useState } from "react";

const options = [
  { label: "Option 1", path:
    [ "port a",
      "port b",
      "port c" ]
  },
  { label: "Option 2", path:
    [ "port d",
      "port b",
      "port a" ]
  },
  { label: "Option 3", path:
    [ "port a",
      "port b" ]
  }
]

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div>
       <Card>
        <CardHeader>
          <CardTitle>Options:</CardTitle>
          <CardAction>
            <Button>
              BACK
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <Combobox items={options} defaultValue={options[0]} onValueChange={(value) => {setSelectedOption(value)}}>
            <ComboboxInput placeholder=". . ." />
              <ComboboxContent>
                <ComboboxEmpty>No options found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.label} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
          </Combobox>
        </CardContent>
      </Card>

      <ResultList option={selectedOption} />
    </div>
  );
}
