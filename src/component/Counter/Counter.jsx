import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
  const [step, setStep] = useState(1);

  const plusFive = (msg) => {
    setCounter((prev) => prev + 5);
    console.log(msg);
  };
  const handleChageInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const setStepClick = () => {
    setStep(+input);
    console.log("step in change");
  };

  return (
    <div>
      <h2>{counter}</h2>
      <input type="text" onChange={handleChageInput} value={input} />
      <button onClick={setStepClick}>Set Step</button>
      <button onClick={() => setCounter((perv) => perv - step)}>
        Button -
      </button>
      <button onClick={() => setCounter((perv) => perv + step)}>
        Button +
      </button>
      <button onClick={() => plusFive("hello")}>Button +5</button>
    </div>
  );
};
