import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import "../Styles/App.css";
import Contact from "./Contact";
import About from "./About";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Shoppingitems from "./Shoppingitems";
import Detaileditem from "./DetailedItem";
import Footer from "./Footer";
import Nocomponentfound from "./NoItemsFound";
import Searchbar from "./SearchBar";
import {
  FAVORITE_LINK,
  LINK_ABOUT,
  LINK_CONTACT,
  LINK_HOME,
  MY_CART_LINK,
  LINK_ITEM,
} from "../constants";

function App() {
  const context = useContext(AppContext);
  const { Favorite, Cart } = context;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Searchbar /> */}
        <Routes>
          <Route path={LINK_HOME} element={<Home />} />
          <Route path={LINK_ABOUT} element={<About />} />
          <Route
            path={FAVORITE_LINK}
            element={
              Favorite.length > 0 ? (
                <Shoppingitems items={Favorite} />
              ) : (
                <Nocomponentfound />
              )
            }
          />
          <Route
            path={MY_CART_LINK}
            element={
              Cart.length > 0 ? (
                <Shoppingitems items={Cart} />
              ) : (
                <Nocomponentfound />
              )
            }
          />
          <Route path={LINK_ITEM + "/:id"} element={<Detaileditem />} />
          <Route path={LINK_CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
