import React from 'react'

const SumOfArray = () => {
  function sum(n) {
    let total = 0;
    for (let g = 0; g < n.length; g++) {
      total += n[g];
    }
    // console.log(total);
  }
  return (
    <div className="container">
    <h1 className="text-capitalize mb-5">
      Q.no.=9, find sum of an array [9,23,6,-8,4,10,6].
    </h1>
    <form className="d-flex gap-3 mb-4">
      <input type="text" placeholder="Start Point" />
    </form>
    <button>Submit</button>
    <h2>{sum.total}</h2>
  </div>
  )
}

export default SumOfArray