import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { item } from "../Types";
import style from "../Styles/Detaileditem.module.css";
import Shoppingitem from "./ShoppingItem";
import { useNavigate } from "react-router-dom";
import Shoppingitems from "./Shoppingitems";

import {
  ADD_TO_CART,
  ADD_TO_FAVORITE,
  IMAGE_NOT_FOUND,
  RELATED_ITEMS,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITE,
  EXCEPTIONS_ARRAY,
} from "../constants";
const Detaileditem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const { Items, Addtocart, Addtofavorite, Favorite, Cart } = context;
  const [item, setItem] = useState<item>({} as item);

  useEffect(() => {
    let item: item = {} as item;
    Items.forEach((element) => {
      if (element.id === id) {
        setItem(element);
        item = element;
      }
    });
    if (Items.length > 0 && Object.keys(item).length === 0) navigate("/home");
  }, [Items, id]);

  function getitemdata() {
    const array: any = [];
    Object.entries(item).map((item) => {
      if (!EXCEPTIONS_ARRAY.includes(item[0]))
        array.push(
          <div key={item[0]} className={style.infodetail}>
            {item[0] + " : " + item[1]}
          </div>
        );
    });
    return array;
  }
  return (
    <div>
      <div className={style.detaileditem}>
        <img src={item.url} alt={IMAGE_NOT_FOUND} />
        <div className={style.infowrapper}>
          <button onClick={() => Addtofavorite(item)}>
            {!Favorite.includes(item) ? ADD_TO_FAVORITE : REMOVE_FROM_FAVORITE}
          </button>
          <button onClick={() => Addtocart(item)}>
            {!Cart.includes(item) ? ADD_TO_CART : REMOVE_FROM_CART}
          </button>

          {getitemdata()}
        </div>
      </div>
      <div>
        <h2>{RELATED_ITEMS}</h2>
      </div>
      <Shoppingitems
        items={Items.filter(
          (element) => element.type === item.type && element !== item
        )}
      />
    </div>
  );
};

export default Detaileditem;
