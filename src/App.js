import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Forms from "./components/Forms";
// import { Route, Router, Routes } from "react-router-dom";
// import Routing from "./components/Routing";
import Tables from "./components/Tables";
import Stars from "./components/Stars";
import SmallToLarge from "./components/SmallToLarge";
import Vowels from "./components/Vowels"
import OddEven from "./components/OddEven"
import Power from "./components/Power"
import GreaterMultiply from "./components/GreaterMultiply"
import SumOfArray from "./components/SumOfArray"
import Counting from "./components/Counting"


function App() {
  return (
    <>
      <Tables />
      <Forms />
      <Stars />
      <SmallToLarge />
      <Vowels/>
      <OddEven/>
      <Power/>
      <GreaterMultiply/>
      <SumOfArray/>
      <Counting/>
    </>
  );
}

export default App;
