import { useState, useEffect } from "react";
import { MenuAPI } from "./constant";
const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchURL();
  }, []);

  const fetchURL = async () => {
    try{
      const data = await fetch(MenuAPI + restId);
      if(!data.ok) throw new Error("failed to fetch");
      const json = await data.json();
      // console.log("menu",json);
      setRestInfo(json);
    }
    catch(e){
     console.log(e.message);
    }
  }

  return restInfo;
 
};

export default useRestaurantMenu;
