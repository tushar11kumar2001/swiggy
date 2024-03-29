import Card, { withPromotedLabel } from "./Card";
import restaurantList from "../utils/restaurantList";
import { useState, useEffect, useContext } from "react";
import Shimmar from "./Fackcard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const CardContainer = () => {
  const [cardData2, setcardData2] = useState([]);
  const [searchText, setsearchText] = useState("");

  const [copyList, setcopyList] = useState([]);
  const PromotedRestaurant = withPromotedLabel(Card);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    restaurantList()
      .then((data) => {
        setcardData2(data[0]?.card.card.gridElements.infoWithStyle.restaurants);
        setcopyList(data[0]?.card.card.gridElements.infoWithStyle.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1 className="relative top-20 text-center pt-20 text-xl font-medium">You're offline please check your internet connection</h1>;

  return cardData2.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="body relative top-20">
      <div className="flex justify-between bg-[#e9c464] h-20 items-center relative">
        <div className="flex w-48 h-10 border border-black rounded-[20px] bg-white absolute left-3">
          <input
            type="text"
            className="h-full rounded-[20px] w-5/6 outline-none p-2"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            placeholder="Search your food"
          />
          <button
            className=" text-center grow h-full  text-2xl"
            onClick={() => {
              console.log(searchText);
              const filtersearch = cardData2.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setcopyList(filtersearch);
              // console.log("after filtersearch = ", cardData2);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div>
          <button
            type="button"
            className="absolute right-3 top-5 tracking-tighter focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 dark:focus:ring-yellow-900"
            onClick={() => {
              const filterlist = cardData2.filter(
                (rest) => rest.info.avgRatingString > 4.0
              );
              setcopyList(filterlist);
            }}
          >
            TOP RESTURANT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 w-1/2 justify-items-center mx-auto bg-white p-6 sm:grid sm:grid-cols-2  sm:w-4/5 md:grid-cols-2 lg:grid-cols-3 ">
        {copyList.map((resturant) => (
          <Link
            to={"/restaurants/" + resturant.info.id}
            key={resturant.info.id}
          >
            {resturant.info.avgRatingString > 4 ? (
              <PromotedRestaurant restData={resturant} />
            ) : (
              <Card restData={resturant} />
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
