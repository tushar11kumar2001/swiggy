// import { useState,useEffect } from "react";


const restaurantList = async ()=>{


    try
    {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.705882&lng=77.2785876&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if(!data.ok) throw new Error("failed to fetch ");
       const json = await data.json();

       
       const list = json?.data?.cards.filter(
         (top) => top?.card?.card?.id === "restaurant_grid_listing" || 
                  top?.card?.card?.id === "top_brands_for_you"
       );
       return list;
    }
    catch(e){
      console.log("e.message");
      return "";
    }
       
          // console.log("latest list",list);
        


      
    
}

export default restaurantList;