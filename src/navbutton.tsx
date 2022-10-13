import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";


interface contact {
  link : string ;
}


const Navbutton = (props:contact) => (
  <NavLink
    className={({ isActive }) => {
      return isActive ? style.navbuttonactive : style.navbutton;
    }}
    to={"./" + props.link}
  >
    {props.link}
  </NavLink>
);

export default Navbutton;
