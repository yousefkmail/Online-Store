import Shoppingitems from "./Shoppingitems";
import Filterbar from "./Filterbar";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.main}>
      <Filterbar />
      <Shoppingitems />
    </div>
  );
};

export default Home;
