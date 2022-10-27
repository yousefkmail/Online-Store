import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  firebaseConfig_const,
  COLLECTION_SERVICES_NAME,
  SERVICE_TICK_ICON,
} from "../constants";
import style from "../Styles/About.module.css";
interface service {
  Description: string;
  id: string;
}

const Services = () => {
  const [services, setServices] = useState<service[]>([]);

  useEffect(() => {
    const firebaseConfig = firebaseConfig_const;
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, COLLECTION_SERVICES_NAME);
    getDocs(colRef).then((snapshot) => {
      let Items: any = [];
      snapshot.docs.forEach((doc) => {
        Items.push({ ...doc.data(), id: doc.id });
      });
      setServices(Items);
    });
  }, []);

  return (
    <div className={style.services}>
      {services.map((item) => (
        <div className={style.service} key={item.id}>
          <i className={{ SERVICE_TICK_ICON } + " " + style.icon}> </i>
          <p> {item.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
