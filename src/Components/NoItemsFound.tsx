import { NavLink } from "react-router-dom";
import style from "../Styles/Noitemspage.module.css";
import {
  NO_ITEMS_ADDED_LABEL,
  START_SHOPPING_LABEL,
  LINK_HOME,
} from "../constants";
const Nocomponentfound = () => {
  return (
    <div className={style.head}>
      <h1>{NO_ITEMS_ADDED_LABEL}</h1>
      <h2>
        <NavLink to={"/" + LINK_HOME}>{START_SHOPPING_LABEL} </NavLink>
      </h2>
    </div>
  );
};

export default Nocomponentfound;
