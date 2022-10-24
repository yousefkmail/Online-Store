import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { COLLECTION_DATA_NAME, firebaseConfig_const } from "../constants";
import { item } from "../Types";

interface AppContextInterface {
  Addtofavorite: (item: item) => void;
  Addtocart: (item: item) => void;
  Items: item[];
  setItems: (item: item[]) => void;
  Favorite: item[];
  Cart: item[];
}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const AppContextProvider = ({ children }: any) => {
  const [favorite, addFavorite] = useState([] as item[]);
  const [cart, addCart] = useState([] as item[]);
  const [items, setItems] = useState([] as item[]);

  useEffect(() => {
    const firebaseConfig = firebaseConfig_const;
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, COLLECTION_DATA_NAME);
    getDocs(colRef).then((snapshot) => {
      let Items: any = [];
      snapshot.docs.forEach((doc) => {
        Items.push({ ...doc.data(), id: doc.id });
      });
      setItems(Items);
    });
  }, []);

  const handleAddFavorite = (item: item) => {
    addFavorite(AddElementToArray(item, favorite));
  };

  const handleAddCart = (item: item) => {
    addCart(AddElementToArray(item, cart));
  };

  const AddElementToArray = (item: item, array: item[]) => {
    if (array.includes(item)) {
      return array.filter((original) => item !== original);
    } else {
      return [...array, item];
    }
  };
  const values = {
    Addtofavorite: handleAddFavorite,
    Addtocart: handleAddCart,
    Items: items,
    setItems: setItems,
    Favorite: favorite,
    Cart: cart,
  };

  return <AppContext.Provider value={values}>{children} </AppContext.Provider>;
};
