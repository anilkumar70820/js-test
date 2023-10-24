import React from "react";
import { useState } from "react";

const Forms = () => {
  const [name,setName]=useState({
    firstName:"",
    lastName:"",
    rollNo: 0,
    gender:""

  })
  function myform(){
    setName(name)
  }
  return (
    <div className="container">
      <h1 className="text-capitalize mb-5">
        Q.no.=2, create a form and save data in one state and data has seen on
        under the form.
      </h1>
      <form className="d-flex flex-column gap-3 mb-4">
        <div className="d-flex gap-2">
          <div className="d-flex gap-1">
            <h2>First Name</h2>
            <input type="text" placeholder="first Name" onChange={(e)=>setName({...name,firstName:e.target.value})}/>
          </div>
          <div className="d-flex gap-1">
            <h2>Last Name</h2>
            <input type="text" placeholder="Last Name" onChange={(e)=>setName({...name,lastName:e.target.value})}/>
          </div>
        </div>
        <div className="d-flex gap-2">
        <div className="d-flex gap-1">
          <h2>Roll No.</h2>
          <input type="text" placeholder="Roll No." onChange={(e)=>setName({...name,rollNo:e.target.value})}/>
        </div>
        <div className="d-flex gap-3">
          <h2>Gender :</h2>
          <div className="d-flex gap-2 align-items-center">
            <h3>Male</h3>
            <input type="radio" onChange={(e)=>setName({name,})}/>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <h3>Female</h3>
            <input type="radio" onChange={(e)=>setName({name,})}/>
          </div>
        </div>
        </div>
      </form>
      <button onClick={myform}>Submit</button>
      {/* <h2>{name}</h2> */}
    </div>
  );
};

export default Forms;
