'use client';

import { useState } from "react";
import LoginModel from "./loginmodel";
import { useRouter } from 'next/navigation'
import LoginView from "./loginview";

export default function Page() {
  const loginModel = new LoginModel();
  const router = useRouter()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const tryLogin = () => {
    //Check if username and password is correct
    if (username === loginModel.getUsername() && password === loginModel.getPassword()) {
      setLoginError("");

      //Switch to the calculator page
      router.push('/calculator')
      return true;
    }
    setLoginError("Invalid username or password!");
    return false;
  }

  return (
    <LoginView setUsername={setUsername} setPassword={setPassword} tryLogin={tryLogin} username={username} password={password} loginError={loginError} />
  );
}
