import style from "../Styles/Navbar.module.css";
import Navbutton from "./navbutton";
import style1 from "../Styles/Shoppingitem.module.css";

import { useState } from "react";
import {
  LINK_About,
  LINK_Contact,
  WEBSITE_LOGO,
  INCART_ICON,
  INFAVORITE_ICON,
  IMAGE_NOT_FOUND,
  MENU_LABEL,
  CLOSE_LABEL,
  MY_CART_LINK,
  FAVORITE_LINK,
  LINK_HOME,
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
          {MENU_LABEL}
        </button>
      )}

      <div
        className={
          isNavBarActive ? style.navbuttonshowen : style.navbuttonshidden
        }
      >
        <Navbutton link={LINK_About} />
        <Navbutton link={LINK_Contact} />
        <Navbutton link={LINK_HOME} />
        <button className={style.togglebutton} onClick={onToggle}>
          {CLOSE_LABEL}
        </button>
      </div>
      <div className={style.cartfavoriteicons}>
        <NavLink to={MY_CART_LINK}>
          <i className={INCART_ICON + " " + style1.icon}></i>
        </NavLink>
        <NavLink to={FAVORITE_LINK}>
          <i className={INFAVORITE_ICON + " " + style1.icon}></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
