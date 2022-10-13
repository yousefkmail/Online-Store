import style from "./Shoppingitem.module.css";

const Shoppingitem = () => {
  return (
    <div className={style.item}>
      <img
        src="https://media.istockphoto.com/vectors/blank-white-screen-laptop-isolated-vector-id1266659893?k=20&m=1266659893&s=612x612&w=0&h=TQ5qqyApqEQ8XlWKhfvuYUR5_Hcfi2P_h3ou6o5Us6g="
        alt=""
      />

      <div className={style.buttons}>
        <i className={process.env.REACT_APP_FAVORITE_ICON}></i>
        <i className={process.env.REACT_APP_ADDTOCART_ICON}></i>
      </div>
    </div>
  );
};

export default Shoppingitem;
