import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmar from "./Fackcard";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const restInfo = useRestaurantMenu(restId);

  const [showIndex, setShowIndex] = useState(null);


  const restaurantInfo = restInfo?.data?.cards.filter(
    (c) => c?.card?.card?.info
  );

  if (restInfo === null) return <Shimmar />;
  const { name, cuisines, avgRatingString, costForTwo } =
    restaurantInfo[0].card?.card?.info;

  const menuDetails = restInfo?.data?.cards.filter((c) => c?.groupedCard);

  const categories =
    menuDetails[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-full bg-slate-50 mx-auto  relative top-20 sm:w-4/5">
      <div className="flex justify-between  items-baseline border border-orange-300 p-5 ">
        <div>
          <h1 className="text-xl  font-bold sm-text-3xl">{name}</h1>
          <h2 className="">{cuisines.join(",")}</h2>
          <h2 className="">₹ {costForTwo/100} cost for two</h2>
        </div>
        <h2 className=" text-lg ">
          Rating : {avgRatingString}
          <i className="fa-solid fa-star text-sm text-lime-700"></i>
        </h2>
      </div>
      {categories.map((category, idx) => {
        return (
          //Controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={idx === showIndex ? true : false}
            setShowIndex={() => setShowIndex(idx != showIndex ? idx : null)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
