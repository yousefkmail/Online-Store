import Shoppingitem from "./ShoppingItem";
import style from "../Styles/Shoppingitem.module.css";
import { item } from "../Types";
import { useEffect, useState } from "react";
import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from "../constants";

interface props {
  items: item[];
}

const Shoppingitems = ({ items }: props) => {
  const [numberofitems, setnumberofitems] = useState<number>(8);
  const [firstitem, setfirstitem] = useState<number>(0);
  const [lastitem, setlastitem] = useState<number>(numberofitems);
  const [Nextdisabled, setnextdisabled] = useState<boolean>();
  const [Prevdisabled, setprevdisabled] = useState<boolean>();

  useEffect(() => {
    handleButtonsenabled();
  }, [items, firstitem, lastitem]);

  useEffect(() => {
    setfirstitem(0);
    setlastitem(numberofitems);
  }, [items]);

  function handleButtonsenabled() {
    setprevdisabled(firstitem <= 0 ? true : false);
    setnextdisabled(lastitem >= items.length ? true : false);
  }

  function handleNext() {
    setfirstitem(firstitem + numberofitems);
    setlastitem(lastitem + numberofitems);
  }
  function handlePrev() {
    setfirstitem(firstitem - numberofitems);
    setlastitem(lastitem - numberofitems);
  }

  return (
    <div>
      <div className={style.items}>
        {items.slice(firstitem, lastitem).map((item) => (
          <Shoppingitem key={item.id} item={item} />
        ))}
        <div className={style.controllingbuttons}>
          {items.length > 0 && (
            <button disabled={Prevdisabled} onClick={handlePrev}>
              <i className={ARROW_LEFT_ICON + style.icon}></i>
            </button>
          )}
          {items.length > 0 && (
            <button disabled={Nextdisabled} onClick={handleNext}>
              <i className={ARROW_RIGHT_ICON + style.icon}></i>
            </button>
          )}
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};
export default Shoppingitems;
