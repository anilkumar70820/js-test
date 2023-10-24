import React from "react";

const GreaterMultiply = () => {
  function abc(n) {
   let value1 = n[0];
   let value2 = n[1];
    let first = n[0] * n[1];
    for (let g = 1; g < n.length - 1; g++) {
      let sum = n[g] * n[g + 1];
      if (sum > first) {
        first = sum;
        value1 = n[g];
        value2 = n[g + 1];
      }
    }
    console.log(value1, value2, first);
  }
  return (
    <div className="container">
      <h1 className="text-capitalize mb-5">
        Q.no.=8, find greater multiply of an array [2,3,9,-2,-8,6,2,4].
      </h1>
      <form className="d-flex gap-3 mb-4">
        <input type="text" placeholder="Start Point" />
      </form>
      <button onClick={abc}>Submit</button>
    </div>
  );
};

export default GreaterMultiply;
