"use client"
import { useState } from "react";
import ResultView from "./resultview";

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
  const [errorMessage, setErrorMessage] = useState("");

  const logout = () => {
    router.push('/');
  }

  const openAdmin = () => {
    router.push('/admin');
  }

  return (
    <ResultView
      logout={logout}
      openAdmin={openAdmin}
      errorMessage={errorMessage}
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
}
