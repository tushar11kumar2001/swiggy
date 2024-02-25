import React from "react";
import { useState } from "react";
import { IMG_URL, nonVegMark, vegMark } from "../utils/constant";
const CartItems = ({ items }) => {
  const [count, setcount] = useState(1);
  return (
    <div>
      <div className="flex flex-col justify-between p-2.5 m-2 border-b-2 border-gray-400 bg-slate-100 rounded ">
        <div className="flex justify-between ">
          <div>
            {items?.card?.info?.isVeg ? (
              <img className="w-4" src={vegMark} />
            ) : (
              <img className="w-4" src={nonVegMark} />
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
          <img
            src={IMG_URL + items?.card?.info?.imageId}
            className="w-36 h-28 rounded-lg  "
          />
        </div>

        <div className=" mt-2 pr-7">
          <h1 className="font-semibold text-end ">
            Quantity{" "}
            <button
              className="px-3 mr-2 text-2xl font-semibold text-white bg-red-600 text-center pb-1 rounded-lg"
              onClick={(e) => {
                setcount( count >= 2 ? count - 1 : 1);
              }}
            >
              -
            </button>
            <span className="text-xl">{count}</span>
            <button 
              className="px-2 ml-2 text-2xl font-semibold text-white bg-red-600 text-center pb-1 rounded-lg"
              onClick={(e) => {
                setcount(count + 1);
              }}
            >
              +
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
