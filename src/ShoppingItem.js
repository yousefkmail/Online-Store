import style from "./Shoppingitem.module.css";
const Shoppingitem = (props) => {
  return <div className={style.item}>{props.content}</div>;
};

export default Shoppingitem;
