import style from "../Styles/Shoppingitem.module.css";
import {
  FAVORITE_ICON,
  INCART_ICON,
  IMAGE_NOT_FOUND,
  INFAVORITE_ICON,
  ADDTOCART_ICON,
} from "../constants";
import { item } from "../Types";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

interface myitem {
  item: item;
}

const Shoppingitem = ({ item }: myitem) => {
  const context = useContext(AppContext);
  const { Favorite, Cart, Addtofavorite, Addtocart } = context;

  let isAddedToFavorite = Favorite.includes(item);
  let isAddedToCart = Cart.includes(item);

  useEffect(() => {
    isAddedToFavorite = Favorite.includes(item);
    isAddedToCart = Cart.includes(item);
  }, [Favorite, Cart]);

  return (
    <div className={style.item}>
      <Link to={"/item/" + item.id}>
        <img src={item.url} alt={IMAGE_NOT_FOUND} />{" "}
      </Link>

      <div className={style.buttons}>
        <i
          onClick={() => Addtofavorite(item)}
          className={
            isAddedToFavorite
              ? INFAVORITE_ICON + " " + style.icon
              : FAVORITE_ICON + " " + style.icon
          }
        ></i>
        <i
          onClick={() => Addtocart(item)}
          className={
            isAddedToCart
              ? INCART_ICON + " " + style.icon
              : ADDTOCART_ICON + " " + style.icon
          }
        ></i>
      </div>
      <div className={style.desc}>
        <p>{item.Desc}</p>
      </div>
    </div>
  );
};

export default Shoppingitem;
