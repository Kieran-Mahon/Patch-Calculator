'use client';

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export default function LoginView({setUsername, setPassword, tryLogin, username, password, loginError}) {

  const imagePath = `${process.env.NODE_ENV === "production" ? "/network-patch-finder" : ""}/tempimg.jpg`;

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">

      <h1>Patch Path Finder</h1>
      
      <Image
        className="h-[200px] w-[200px]"
        src={imagePath}
        alt='temp image'
        width={200}
        height={200}
        priority
      />

      <Card className="w-full max-w-sm">
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="um">Username</FieldLabel>
              <Input
                id="um"
                type="text"
                placeholder=". . ."
                onChange={(e) => setUsername(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pw">Password</FieldLabel>
              <Input
                id="pw"
                type="password"
                placeholder=". . ."
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
            <Field>
              <Button
                type="submit"
                className="w-full"
                onClick={(e) => tryLogin(username, password)}
              >
                SIGN IN
              </Button>
            </Field>
          </FieldGroup>
        </CardContent>
        {loginError && <CardFooter>
          <div className="flex flex-col center items-center w-full">
            <p className="text-red-500 text-sm">{loginError}</p>
          </div>
        </CardFooter>}
      </Card>
    </div>
  )
}
