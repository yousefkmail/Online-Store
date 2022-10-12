import { useState } from "react";

const Filterbar = () => {
  const [value, setValue] = useState(25);
  return (
    <div style={{ minWidth: " 200px", border: "1px solid purple " }}>
      <input
        type="range"
        name=""
        id="llabel"
        min="0"
        max="50"
        onChange={() => {
          setValue(document.getElementById("llabel").value);
        }}
      />
      <label htmlFor="llabel">Pick your price {value} </label>
      <br />
      <label htmlFor="rate"> Rating </label>
      <input type="radio" id="" />
    </div>
  );
};

export default Filterbar;
