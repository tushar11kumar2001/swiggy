import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { add, removeItems } from "../redux/cartSlice";
import { useState } from "react";

const ItemCards = ({ items }) => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const handleItems = (item) => {
    setFlag(!flag);
    if (flag) dispatch(removeItems(item));
    else dispatch(add(item));
  };

  return (
    <div>
      <div
        className={
          "flex justify-between p-2.5 m-2 border-b-2 border-gray-400 bg-slate-100 rounded-lg"
        }
      >
        <div>
          {items?.card?.info?.isVeg ? (
            <img
              className="w-4"
              src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
            />
          ) : (
            <img
              className="w-4"
              src="data:image/png;base64,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"
            />
          )}
          <h2 className="font-bold text-base ">{items?.card?.info?.name}</h2>
          <p>
            ₹{" "}
            {items?.card?.info?.price
              ? items?.card?.info?.price / 100
              : "200(default price)"}
          </p>
          <p className="text-gray-900 text-xs">
            {items?.card?.info?.description}
          </p>
        </div>
        <div className="relative">
          <img
            src={IMG_URL + items?.card?.info?.imageId}
            className="w-36 h-28 rounded-lg  "
          />
          <button
            className="absolute left-2/4 bottom-0 translate-x-[-50%] px-5 py-1 border border-gray-500 rounded-lg text-green-500 text-center font-bold bg-white"
            onClick={() => handleItems(items)}
          >
            {flag ? "Remove" : "ADD+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
