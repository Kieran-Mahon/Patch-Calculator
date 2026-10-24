"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import AddConnectionPanel from "./components/addconnectionpanel";
import RemoveConnectionPanel from "./components/removeconnectionpanel";
import AddPortPanel from "./components/addportpanel";
import RemovePortPanel from "./components/removeportpanel";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon, CheckIcon } from "lucide-react";

export default function AdminView({logout, openSearch, errorMessage, completedMessage, ports, connections, mode, changeMode, setStartPort, setEndPort, setConnection, setRemovingPort, setDistance, setType, setLabel, setLocation, addConnection, removeConnection, addPort, removePort}) {
  
  var title = "";
  var content = "";
  switch (mode) {
    case "ADD CONNECTION":
      title = "Adding Connection:";
      content = <AddConnectionPanel ports={ports} setStartPort={setStartPort} setEndPort={setEndPort} setDistance={setDistance} setType={setType} makeConnection={addConnection} />
      break;
  
    case "REMOVE CONNECTION":
      title = "Removing Connection:";
      content = <RemoveConnectionPanel connections={connections} setConnection={setConnection} removeConnection={removeConnection}/>
      break;
  
    case "ADD PORT":
      title = "Adding Port:";
      content = <AddPortPanel setLabel={setLabel} setType={setType} setLocation={setLocation} addPort={addPort} />
      break;
  
    case "REMOVE PORT":
      title = "Removing Port:";
      content = <RemovePortPanel ports={ports} setRemovingPort={setRemovingPort} removePort={removePort} />
      break;
  
    default:
      break;
  }
  
  return (
    <div>
      <header className="flex items-center justify-between p-4 ">
        <Button type="button" onClick={(e) => logout()}>
          LOG OUT
        </Button>
        <h1>Admin</h1>
        <Button type="button" onClick={(e) => openSearch()}>
          PATH FIND
        </Button>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Edit Options:</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Button type="button" onClick={(e) => changeMode("ADD PORT")}>
            Add Port
          </Button>
          <Button type="button" onClick={(e) => changeMode("ADD CONNECTION")}>
            Add Connection
          </Button>
          <Button type="button" onClick={(e) => changeMode("REMOVE PORT")}>
            Remove Port
          </Button>
          <Button type="button" onClick={(e) => changeMode("REMOVE CONNECTION")}>
            Remove Connection
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent>
          {content}
        </CardContent>
        {errorMessage &&
          <CardFooter>
            <Alert variant="destructive">
              <AlertTriangleIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          </CardFooter>
        }
        {completedMessage &&
          <CardFooter>
            <Alert>
              <CheckIcon />
              <AlertTitle><b>{completedMessage}</b></AlertTitle>
            </Alert>
          </CardFooter>
        }
      </Card>
    </div>
  );
}
