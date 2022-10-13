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
          var input = (document.getElementById("llabel") as HTMLInputElement).value ;
          setValue( parseInt(input) ) ;
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
