import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { item } from "../Types";
import style from "../Styles/Detaileditem.module.css";
import Shoppingitem from "./ShoppingItem";
import { useNavigate } from "react-router-dom";
import Shoppingitems from "./Shoppingitems";
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
      if (item[0] !== "url" && item[0] !== "id")
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
        <img src={item.url} alt="" />
        <div className={style.infowrapper}>
          <button onClick={() => Addtofavorite(item)}>
            {!Favorite.includes(item)
              ? "   Add to Favorite"
              : "Remove from favorite "}
          </button>
          <button onClick={() => Addtocart(item)}>
            {" "}
            {!Cart.includes(item) ? "   Add to Cart" : "Remove from Cart "}
          </button>

          {getitemdata()}
        </div>
      </div>
      <div>
        <h2>Related items </h2>
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
