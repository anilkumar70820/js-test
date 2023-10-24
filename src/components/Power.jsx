import React, { useState } from "react";

const Power = () => {
  const [number, setNumber] = useState();
  const [power, setPower] = useState();
  const [result,setResult]= useState()
  function cube() {
    setResult(number ** power)
  }
  return (
    <div className="container">
      <h1 className="text-capitalize">
        Q. no. = 1, find a power of a value if power is 2(3) than the answer is
        8.
      </h1>
      <div className="d-flex gap-4">
        <input
          type="number"
          placeholder="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="power"
          onChange={(e) => setPower(e.target.value)}
        />
        <button onClick={cube}>Submit</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default Power;
