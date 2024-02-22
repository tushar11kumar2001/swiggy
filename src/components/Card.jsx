import { IMG_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Card = ({ restData, login }) => {
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, cloudinaryImageId, avgRatingString,sla } =
    restData.info;
  return (
    <div className="h-72 flex flex-col flex-wrap justify-evenly w-64 bg-white   font-Comforter hover:scale-95 shadow-sm rounded-lg ">
      <img className="h-1/2 rounded-lg w-full" alt="" src={IMG_URL + cloudinaryImageId} />
      <h1 className="text-lg font-semibold">{name}</h1>
      <h2 className="font-semibold"><i className="fa-solid fa-star text-green-700 "></i> {avgRatingString} ({sla?.deliveryTime}mins)</h2>
      <h2>{cuisines.join(", ")}</h2>
   
    </div>
  );
};

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div className="hover:scale-95">
        <div className="bg-red-500 absolute  z-40 ">Promoted</div>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
