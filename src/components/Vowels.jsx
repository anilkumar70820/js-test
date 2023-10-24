import React from "react";
import { useState } from "react";

const Vowels = () => {
  const [vowel, setVowel] = useState("");
  function findvowel() {
    let v = 0;
    let c = 0;
    let value = vowel.split("").trim();
    for (let i = 0; i < value.length; i++) {
      let vowls = ["a", "e", "i", "o", "u"];
      if (value[i].tolowercase.include(vowls)) {
        v++;
      } else {
        c++;
      }
    }
  }
  return (
    <div className="container">
      <h1 className="text-capitalize mb-5">
        Q.no.=5, find how many vowels are present in this string 'palvi go to
        delhi'(in counting).
      </h1>
      <form className="d-flex gap-3 mb-4">
        <input type="text" onChange={(e) => setVowel(e.target.value)} />
      </form>
      <button onClick={findvowel}>Submit</button>
      <h2>{findvowel.c}</h2>
      <h2>{findvowel.v}</h2>
    </div>
  );
};

export default Vowels;
