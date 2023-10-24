import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
   <div>
    <div>
        <h1>Q. No.=1</h1>
        <button><Link to="/Table">Table</Link></button>
    </div>
   </div>
  )
}

export default Homepage