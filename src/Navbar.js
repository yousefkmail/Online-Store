import style from "./Navbar.module.css";
import Navbutton from "./navbutton";
import { useState } from "react";
const Navbar = () => {
  const [isNavBarActive, setIsNavBarActive] = useState(true);

  function onToggle() {
    setIsNavBarActive(!isNavBarActive);
  }

  return (
    <div className={style.outer}>
      <nav className={style.navigationbar}>
        <img
          className={style.navimage}
          src={process.env.REACT_APP_WEBSITE_LOGO}
          alt="No  Found"
        ></img>

        <div style={{ padding: "20px" }}>
          <i class={process.env.REACT_APP_INCART_ICON}></i>
          <i class={process.env.REACT_APP_INFAVORITE_ICON}></i>
        </div>

        <div className={style.navbuttons}>
          <button className={style.togglebutton} onClick={onToggle}>
            toggleButtons
          </button>
          <div
            className={
              isNavBarActive ? style.navbuttonshowen : style.navbuttonhidden
            }
          >
            <Navbutton link={process.env.REACT_APP_LINK_ABOUT} />
            <Navbutton link={process.env.REACT_APP_LINK_CONTACT} />
            <Navbutton link={process.env.REACT_APP_LINK_HOME} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
