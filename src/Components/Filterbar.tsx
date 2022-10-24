import style from "../Styles/Filterbar.module.css";
import { PRICE_SLIDER_LABEL } from "../constants";
import { item } from "../Types";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";

interface props {
  SetFilteredItems: (filtereditems: item[]) => void;
}
const Filterbar = ({ SetFilteredItems }: props) => {
  const [filters, setfilters] = useState("");
  const context = useContext(AppContext);
  const { Items } = context;
  const types: string[] = [];
  let filter = "";
  Items?.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });
  types.push("no filter");

  //SetFilteredItems(filteredarray);
  function getTypes() {
    const typess: any[] = [];

    types.forEach((element) => {
      typess.push(
        <div key={element} className={style.itemtype}>
          <label htmlFor={element}>{element}</label>
          <input
            onChange={(e) => changed(e)}
            type="radio"
            name="type"
            id={element}
          />
        </div>
      );
    });

    return typess;
  }
  useEffect(() => {
    const filteredarray: any = Items?.filter((element) =>
      filter === "" ? true : element.type === filter
    );
    SetFilteredItems(filteredarray);
  }, [Items]);

  function changed(e: FormEvent) {
    filter = (e.target as HTMLInputElement).id;
    setfilters(filter);

    const filteredarray: any = Items?.filter((element) =>
      filter === "" || filter === "no filter" ? true : element.type === filter
    );
    SetFilteredItems(filteredarray);
  }

  return (
    <div className={style.filterbar}>
      <input type="range" name="" id="" />

      {
        <form className={style.typeform} action="">
          {getTypes()}
        </form>
      }
    </div>
  );
};

export default Filterbar;
