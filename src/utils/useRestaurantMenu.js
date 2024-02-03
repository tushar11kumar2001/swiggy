import { useState, useEffect } from "react";
import { MenuAPI } from "./constant";
const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchURL();
  }, []);

  const fetchURL = async () => {
    const data = await fetch(MenuAPI + restId);
    const json = await data.json();
    // console.log("menu",json);
    setRestInfo(json);
  };
  return restInfo;
};

export default useRestaurantMenu;
