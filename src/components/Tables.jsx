import React from "react";
import { useState } from "react";

const Tables = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [tableresult,setTableresult]= useState()
  function table() {
    for (let t = start; t <= end; t++) {
      for (let i = 1; i <= 10; i++) {
       setTableresult(t*i)
      }
    }
  }
  return (
    <div className="container">
      <h1 className="text-capitalize mb-5">
        Q.no.=1, print 2 to 25 tables using for loop.
      </h1>
      <form className="d-flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Start Point"
          onChange={(e) => setStart(e.target.value)}
        />
        <h2>to</h2>
        <input
          type="text"
          placeholder="End Point"
          onChange={(e) => setEnd(e.target.value)}
        />
      </form>
      <button onClick={table()}>Submit</button>
<h2>{tableresult}</h2>
    </div>
  );
};

export default Tables;
