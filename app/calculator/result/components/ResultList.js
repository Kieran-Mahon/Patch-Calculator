"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import Edge from "@/lib/Edge";
import { ArrowDownIcon, EthernetPortIcon, MoveHorizontalIcon, ShieldAlertIcon } from "lucide-react";

export default function ResultList({option}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{option.key}:</CardTitle>
      </CardHeader>

      <CardContent>
        <ItemGroup className="gap-1">
          {option.path.map((element, index) => (
            element.label ? (
              <Item variant="outline" key={index}>
                <ItemMedia variant="icon">
                  <ShieldAlertIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {element.type + " - " + element.label + " (" + element.location + ")"}
                  </ItemTitle>
                </ItemContent>
              </Item>
            ) : (
              <Item key={index}>
                <ItemContent className="flex items-center justify-center">
                  <ItemTitle className="text-center">
                    {element.type == Edge.types.TIELINE ? (
                      <ArrowDownIcon />
                    ) : (
                      <div className="flex flex-col items-center jusify-center">
                        <div className="flex items-center jusify-center">
                          <EthernetPortIcon />
                          <MoveHorizontalIcon />
                          <EthernetPortIcon />
                        </div>
                        <h1>Patch needed!</h1>
                      </div>
                    )}
                  </ItemTitle>
                </ItemContent>
              </Item>
            )
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
