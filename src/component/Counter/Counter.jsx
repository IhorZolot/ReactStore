import React, { useEffect, useRef, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (counter === 3) {
      console.log("hello");
    }
    if (counter === 5) {
      setStep(11);
    }
    if (counter >= 100) {
      resetCounter();
    }
  }, [counter]);

  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    console.log(inputRef.current);
    inputRef.current.focus();
  }, [step]);

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

  const resetCounter = () => {
    setCounter(0);
    setStep(1);
    setInput(1);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <input
        type="text"
        onChange={handleChageInput}
        value={input}
        ref={inputRef}
      />
      <button onClick={setStepClick}>Set Step</button>
      <button onClick={() => setCounter((perv) => perv - step)}>
        Button -
      </button>
      <button onClick={() => setCounter((perv) => perv + step)}>
        Button +
      </button>
      <button onClick={() => plusFive("hello")}>Button +5</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};
