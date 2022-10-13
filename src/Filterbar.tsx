import { useState } from "react";
import style from  "./Filterbar.module.css"
import { PRICE_SLIDER_LABEL } from "./constants";
const Filterbar = () => {
  const [value, setValue] = useState(25);
  return (
    <div className={style.filterbar}>
      <input
        type="range"
        id="llabel"
        min="0"
        max="50"
        onChange={() => {
          var input = (document.getElementById("llabel") as HTMLInputElement).value ;
          setValue( parseInt(input) ) ;
        }}
      />
      <label htmlFor="llabel">{PRICE_SLIDER_LABEL} {value} </label>
      <br />
    </div>
  );
};

export default Filterbar;
