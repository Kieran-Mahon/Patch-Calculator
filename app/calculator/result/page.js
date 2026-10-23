"use client"
import { useState } from "react";
import ResultView from "./resultview";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const router = useRouter()


//Pulls the result data from the page click
  const rawData = useSearchParams().get('data')
  var parsedData = [];
  if (rawData) {
    parsedData = JSON.parse(decodeURIComponent(rawData));
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [resultData, setResultData] = useState(parsedData);
  const [selectedOption, setSelectedOption] = useState(parsedData[0]);



  //Top bar buttons
  const logout = () => {
    router.push('/');
  }

  const openAdmin = () => {
    router.push('/admin');
  }

  const changeSelectedOption = (label) => {
    setSelectedOption(resultData.find(n => n.label === label));
  }

  return (
    <ResultView
      logout={logout}
      openAdmin={openAdmin}
      errorMessage={errorMessage}
      options={resultData}
      selectedOption={selectedOption}
      changeSelectedOption={changeSelectedOption}
    />
  );
}
