import style from "../Styles/Navbar.module.css";
import Navbutton from "./navbutton";
import style1 from "../Styles/Shoppingitem.module.css";

import { useState } from "react";
import {
  TOGGLEBUTTON,
  LINK_About,
  LINK_Contact,
  LINK_Home,
  WEBSITE_LOGO,
  INCART_ICON,
  INFAVORITE_ICON,
  IMAGE_NOT_FOUND,
} from "../constants";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isNavBarActive, setIsNavBarActive] = useState(true);

  function onToggle() {
    setIsNavBarActive(!isNavBarActive);
  }

  return (
    <nav className={style.navigationbar}>
      <img
        className={style.navimage}
        src={WEBSITE_LOGO}
        alt={IMAGE_NOT_FOUND}
      ></img>

      {!isNavBarActive && (
        <button className={style.togglebuttonalone} onClick={onToggle}>
          {TOGGLEBUTTON}
        </button>
      )}

      <div
        className={
          isNavBarActive ? style.navbuttonshowen : style.navbuttonshidden
        }
      >
        <button className={style.togglebutton} onClick={onToggle}>
          {TOGGLEBUTTON}
        </button>

        <Navbutton link={LINK_About} />
        <Navbutton link={LINK_Contact} />
        <Navbutton link={LINK_Home} />
      </div>
      <div className={style.cartfavoriteicons}>
        <NavLink to={"./mycart"}>
          <i className={INCART_ICON + " " + style1.icon}></i>
        </NavLink>
        <NavLink to={"./favorite"}>
          <i className={INFAVORITE_ICON + " " + style1.icon}></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
