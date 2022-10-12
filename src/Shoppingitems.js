import Shoppingitem from "./ShoppingItem";
import style from "./Shoppingitem.module.css";
const Shoppingitems = () => {
  return (
    <div className={style.items}>
      <Shoppingitem />;
      <Shoppingitem />;
      <Shoppingitem />;
      <Shoppingitem />;
      <Shoppingitem />;
      <Shoppingitem />;
    </div>
  );
};

export default Shoppingitems;
