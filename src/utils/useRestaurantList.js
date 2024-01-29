import { useState,useEffect } from "react";


const useRestaurantList = ()=>{
    const [restaurantList,setrestaurantList] = useState([]);
    useEffect(()=>{
        fetchURLlist()
    }, [])

    const fetchURLlist = async ()=>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.705882&lng=77.2785876&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
        //   console.log("in userestaurant list",json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
          setrestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

          
    
}

      
    return restaurantList;
}

export default useRestaurantList;