import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbutton = ({ link }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? style.navbuttonactive : style.navbutton;
      }}
      to={"./" + link}
    >
      {link}
    </NavLink>
  );
};

export default Navbutton;
