import Shoppingitems from "./Shoppingitems";
import Filterbar from "./Filterbar";
import style from "../Styles/Home.module.css";
import { useContext, useEffect, useState } from "react";
import { item } from "../Types";
import { AppContext } from "../Context/AppContext";
import { useSearchParams } from "react-router-dom";
import { HOME_PAGE_HEADER, IMAGE_NOT_FOUND } from "../constants";

const Home = () => {
  const context = useContext(AppContext);
  const [searchParams, setsearchparams] = useSearchParams();
  const { Items } = context;
  const [filtereditems, SetFilteredItems] = useState<item[]>([]);

  useEffect(() => {
    if (!searchParams.get("s")) SetFilteredItems(Items);
    else {
      SetFilteredItems(
        Items.filter((element) => element.type.includes(searchParams.get("s")!))
      );
    }
  }, [searchParams]);

  useEffect(() => {}, [filtereditems]);

  return (
    <div>
      <div className={style.mainheader}>
        <img src={HOME_PAGE_HEADER} alt={IMAGE_NOT_FOUND} />
      </div>

      <div className={style.main}>
        <Filterbar
          SetFilteredItems={(filtereditems) => SetFilteredItems(filtereditems)}
        />
        <Shoppingitems items={filtereditems} />
      </div>
    </div>
  );
};
export default Home;
