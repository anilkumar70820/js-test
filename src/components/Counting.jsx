import React from 'react'

const Counting = () => {
  return (
    <div className="container">
    <h1 className="text-capitalize mb-5">
      Q.no.=10, print a counting 1 to 100 or given value.
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

export default Counting