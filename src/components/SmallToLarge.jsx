import React from 'react'

const SmallToLarge = () => {
  return (
    <div className="container">
      <h1 className="text-capitalize mb-5">
        Q.no.=4, find small to large words from this array ["Muskan","Neha","Palvi",Keshav].
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

export default SmallToLarge