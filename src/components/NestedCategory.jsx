import ItemCards from "./ItemCards";
import { useState } from "react";

const NestedCategory = ({ nestedCategories }) => {
  const [show, setShow] = useState(false);
  const showItems = () => {
    setShow(!show);
  };

  return (
    <div className="  bg-slate-300 p-5 shadow-lg   ">
      <div key={nestedCategories?.title}>
        <h1
          className="flex justify-between items-center text-lg p-2    font-semibold   cursor-pointer "
          onClick={showItems}
        >
          {nestedCategories?.title}{" "}
          {"(" + nestedCategories.itemCards.length + ")"}
          {!show && <i className="fa-solid fa-caret-down"></i>}{" "}
          {show && <i className="fa-solid fa-sort-up"></i>}
        </h1>

        {show && <ItemCards itemsList={nestedCategories?.itemCards} />}
      </div>
    </div>
  );
};

export default NestedCategory;
