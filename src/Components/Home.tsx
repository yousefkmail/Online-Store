import Shoppingitems from "./Shoppingitems";
import Filterbar from "./Filterbar";
import style from "../Styles/Home.module.css";
import { useContext, useEffect, useState } from "react";
import { item } from "../Types";
import { AppContext } from "../Context/AppContext";
import { useSearchParams } from "react-router-dom";

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

  useEffect(() => {
    console.log(filtereditems);
  }, [filtereditems]);

  return (
    <div>
      <div className={style.mainheader}>
        <img
          src="https://i0.wp.com/watanimall.com/wp-content/uploads/2022/08/WATANI-SECURITY-PROGRAM-BANNER.png?fit=1920%2C675&ssl=1"
          alt=""
        />
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
