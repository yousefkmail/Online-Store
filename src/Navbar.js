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
          src="http://cardwellchiropractic.com/static/media/cardwell-logo1.fb8cf282.png"
          alt="No  Found"
        ></img>
        <div className={style.navbuttons}>
          <button className={style.togglebutton} onClick={onToggle}>
            toggleButtons
          </button>
          <div className={isNavBarActive ? style.active : style.deactive}>
            <Navbutton link={"about"} />
            <Navbutton link={"contact"} />
            <Navbutton link={"home"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
