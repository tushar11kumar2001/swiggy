import { IMG_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Card = ({restData ,login}) => {

    const {loggedInUser} = useContext(UserContext);
    const {name , cuisines , cloudinaryImageId , avgRatingString , costForTwo} = restData.info;
    return (
      
      <div className="h-[450px] flex flex-col flex-wrap justify-evenly w-64 mb-10 border-2 border-black rounded-lg  p-2.5 bg-gray-200 text-xl font-bold font-Comforter hover:scale-95 hover:bg-gray-300">
        <img className="h-48"
          alt=""
          src={
         IMG_URL +
            cloudinaryImageId
          }
        />
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{costForTwo}</h2>
        <h2>Rating : {avgRatingString}</h2>
        <h5 className="text-sm font-normal">User : {login === "LOGOUT"?loggedInUser:"Default User"}</h5>
      </div>
    );
  };

//higher order component...
//take input (Card) and return new component
  export const withPromotedLabel = (Card)=>{
    return (props)=>{
      return(
        <div className="hover:scale-95">
        <div className="bg-red-500 absolute rounded-l z-50 ">Promoted</div>
        <Card {...props}/>
        </div>
      )
    }
  }

  export default Card;