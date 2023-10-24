import React from "react";
import { Route, Routes } from "react-router-dom";
// import Homepage from './Homepage'
import Vowels from "./Vowels";

const Routing = () => {
  return (
    <Routes>
      <Route path="/Table" Component={<Vowels />} />
    </Routes>
  );
};

export default Routing;
