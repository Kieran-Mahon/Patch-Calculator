"use client"
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import ResultList from "./components/ResultList";

export default function ResultView({logout, openAdmin, errorMessage, options, selectedOption, setSelectedOption}) {
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
