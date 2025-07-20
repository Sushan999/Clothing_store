import React, { useState } from "react";

const Prac = () => {
  let [name, setname] = useState("");
  let [array, setArray] = useState([]);

  let display = () => {
    setArray([...array, name]);
    console.log(array);
  };
  return (
    <div>
      <input
        className="border"
        type="text"
        name=""
        id=""
        onChange={(e) => setname(e.target.value)}
      />
      <p>{name}</p>
      <button onClick={display}>click</button>
      {array.map((a, index) => (
        <p>{a}</p>
      ))}
    </div>
  );
};

export default Prac;
