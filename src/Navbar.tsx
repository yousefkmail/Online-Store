import style from "./Navbar.module.css";
import Navbutton from "./navbutton";
import { useState } from "react";
import  {LINK_About , LINK_Contact  , LINK_Home , WEBSITE_LOGO , INCART_ICON , INFAVORITE_ICON} from "./constants"
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
          src={WEBSITE_LOGO}
          alt="No  Found"
        ></img>

        <div style={{ padding: "20px" }}>
          <i className={INCART_ICON}></i>
          <i className={INFAVORITE_ICON}></i>
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
            <Navbutton link={LINK_About} />
            <Navbutton link={LINK_Contact}/>
            <Navbutton link={LINK_Home} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
