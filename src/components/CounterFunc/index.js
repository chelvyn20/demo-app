import React, { useState, useEffect } from "react";

export function CounterFunc() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  // useEffect with null dep is executed only after the initial rendering
  useEffect(() => console.log("componentDidMount"), []);

  // useEffect without dep is executed after the initial rendering
  // as well as when the component re-renders
  useEffect(() => console.log("componentDidMount & componentDidUpdate"));

  // useEffect with dep is executed after the initial rendering
  // as well as when the provided values are changed.
  useEffect(() => {
    console.log("componentDidMount & componentDidUpdate (increment)");
  }, [increment]);

  useEffect(() => {
    console.log("componentDidMount & componentDidUpdate (decrement)");
  }, [decrement]);

  // useEffect with return is executed when the component is destroyed
  useEffect(() => {
    console.log("componentDidMount in useEffect with return");
    // The return will be executed when the component is destroyed
    return () => console.log("componentWillUnmount");
  }, []);

  const onIncrease = () => {
    setIncrement(increment + 1);
  };

  const onDecrease = () => {
    setDecrement(decrement + 1);
  };

  return (
    <div>
      <button onClick={onIncrease}>Increment</button>
      <h3>{increment}</h3>
      <button onClick={onDecrease}>Decrement</button>
      <h3>{decrement}</h3>
    </div>
  );
}
