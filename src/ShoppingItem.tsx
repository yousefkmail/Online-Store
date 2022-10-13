import style from "./Shoppingitem.module.css";
import { FAVORITE_ICON , INCART_ICON , ITEM_IMAGE} from "./constants";
const Shoppingitem = () => {
  return (
    <div className={style.item}>
      <img
    src={ITEM_IMAGE}     
     alt=""
      />

      <div className={style.buttons}>
        <i className={FAVORITE_ICON}></i>
        <i className={INCART_ICON}></i>
      </div>
    </div>
  );
};

export default Shoppingitem;
