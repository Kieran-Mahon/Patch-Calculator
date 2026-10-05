import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input type="text" placeholder=". . ." />
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input type="password" placeholder=". . ." />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          SIGN IN
        </Button>
      </CardFooter>
    </Card>
  );
}
