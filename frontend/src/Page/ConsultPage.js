import React, { useState, useEffect } from "react";
import { Results } from "../Components/Result/results";
import { Input } from "../Components/Form/inputs";
export const ConsultPage = () => {
  const [inputs, setInputs] = useState({
    consult: "",
    topk: "",
  });
  const [result, setResult] = useState(undefined);

  const handleInputsChange = (newinput) => {
    setInputs(newinput);
  };

  const handleInputSubmit = (data) => {
    getLatestTodos(data);
  };

  const getLatestTodos = (data) => {
    setResult(data);
  };

  return (
    <>
      <Input
        onInputsChange={handleInputsChange}
        onInputsSubmit={handleInputSubmit}
        listofInputs={inputs}
      ></Input>
      <Results listofResult={result}></Results>
    </>
  );
};