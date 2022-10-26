import { NavLink } from "react-router-dom";

const Nocomponentfound = () => {
  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center" }}>
        You didnt add any items
      </h1>
      <h2 style={{ textAlign: "center" }}>
        <NavLink to={"/home"}>Start shopping </NavLink>
      </h2>
    </div>
  );
};

export default Nocomponentfound;
