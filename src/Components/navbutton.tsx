import { NavLink } from "react-router-dom";
import style from "../Styles/Navbar.module.css";

interface contact {
  link: string;
}

const Navbutton = (props: contact) => (
  <div className={style.mydiv}>
    <NavLink
      className={({ isActive }) => {
        return isActive ? style.navbuttonactive : style.navbutton;
      }}
      to={"./" + props.link}
    >
      {props.link}
    </NavLink>
  </div>
);

export default Navbutton;
