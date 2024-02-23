import React from "react";
import { useState } from "react";
import { IMG_URL, nonVegMark, vegMark } from "../utils/constant";
const CartItems = ({ items }) => {
  const [count, setcount] = useState(1);
  return (
    <div>
      <h1>quantitytushar {count}</h1>
      <button
        onClick={(e) => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <div>
        <div
          className={
            "flex justify-between p-2.5 m-2 border-b-2 border-gray-400 bg-slate-100 rounded-t"
          }
        >
          <div>
            {items?.card?.info?.isVeg ? (
              <img
                className="w-4"
                src={vegMark}
              />
            ) : (
              <img
                className="w-4"
                src={nonVegMark}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
