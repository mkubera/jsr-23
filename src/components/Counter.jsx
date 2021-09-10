import React, { useState } from "react";

const Counter = (props) => {
  const INITIAL_COUNT = 10;

  const [count, setCount] = useState(INITIAL_COUNT); // useState to naprawde: [number, function]

  return (
    <div>
      <button onClick={(e) => setCount(count + 5)}>+5</button>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <span> {count} </span>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
      <button onClick={(e) => setCount(INITIAL_COUNT)}>Reset</button>
    </div>
  );
};

export default Counter;
