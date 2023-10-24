import React from 'react'

const Stars = () => {
  return (
    <div className="container">
    <h1 className="text-capitalize mb-5">
      Q.no.=3, print stars if n = 3 using for loop.
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

export default Stars