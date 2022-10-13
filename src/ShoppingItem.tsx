import style from "./Shoppingitem.module.css";
import { FAVORITE_ICON , INCART_ICON , ITEM_IMAGE ,IMAGE_NOT_FOUND} from "./constants";
const Shoppingitem = () => {
  return (
    <div className={style.item}>
      <img
    src={ITEM_IMAGE}     
     alt={IMAGE_NOT_FOUND}
      />

      <div className={style.buttons}>
        <i className={FAVORITE_ICON}></i>
        <i className={INCART_ICON}></i>
      </div>
    </div>
  );
};

export default Shoppingitem;
