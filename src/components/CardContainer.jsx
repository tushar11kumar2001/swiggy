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
  const [btnName, setbtnName] = useState("LOGIN");
  const [copyList, setcopyList] = useState([]);
  const PromotedRestaurant = withPromotedLabel(Card);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    restaurantData();
  }, []);
  const restaurantData = async () => {
    const list = await restaurantList();

    if (list === "") return;
    setcardData2(list[0].card.card.gridElements.infoWithStyle.restaurants);
    setcopyList(list[0].card.card.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You're offline please check your internet connection</h1>;

  return cardData2.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="body">
      <div className="flex justify-between bg-[#e9c464] h-20 items-center ">
        <div className="flex ml-2.5 w-60 h-10 border border-black rounded-[20px] bg-white">
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
          <label>User : </label>
          <input
            type="text"
            id="user"
            placeholder="username"
            className="p-1 border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            onClick={() => {
              const filterlist = cardData2.filter(
                (rest) => rest.info.avgRatingString > 4.0
              );
              setcopyList(filterlist);
            }}
          >
            TOP RESTURANT
          </button>

          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            onClick={() => {
              btnName === "LOGIN" ? setbtnName("LOGOUT") : setbtnName("LOGIN");
            }}
          >
            {btnName}
          </button>
          <h3 className="text-end mr-2">
            {btnName === "LOGOUT" ? loggedInUser : ""}
          </h3>
        </div>
      </div>

      <div className="flex justify-between flex-wrap w-4/5  mx-auto bg-[rgb(245,245,220)] p-6  ">
        {copyList.map((resturant) => (
          <Link
            to={"/restaurants/" + resturant.info.id}
            key={resturant.info.id}
          >
            {resturant.info.avgRatingString > 4 ? (
              <PromotedRestaurant restData={resturant} login={btnName} />
            ) : (
              <Card restData={resturant} login={btnName} />
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
