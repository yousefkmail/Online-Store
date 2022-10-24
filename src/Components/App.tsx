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

function App() {
  const context = useContext(AppContext);
  const { Favorite, Cart } = context;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="favorite"
            element={
              Favorite.length > 0 ? (
                <Shoppingitems items={Favorite} />
              ) : (
                <Nocomponentfound />
              )
            }
          />
          <Route
            path="mycart"
            element={
              Cart.length > 0 ? (
                <Shoppingitems items={Cart} />
              ) : (
                <Nocomponentfound />
              )
            }
          />
          <Route path="item/:id" element={<Detaileditem />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
