import React from 'react'

const OddEven = () => {
  return (
    <div className="container">
    <h1 className="text-capitalize mb-5">
      Q.no.=6, array [9,11,12,13,14,15,18] find how many odd and even number are in this array.
    </h1>
    <form className="d-flex gap-3 mb-4">
      <input type="text" placeholder="Start Point" />
      <p>to</p>
      <input type="text" placeholder="End Point" />
    </form>
    <button>Submit</button>
  </div>
  )
}

export default OddEven