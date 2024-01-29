import ItemCards from "./ItemCards";
import { useState } from "react";

const NestedCategory = ({ nestedCategories }) => {
  //   console.log("categories", nestedCategories);
  const [show, setShow] = useState(false);
  const showItems = () => {
    setShow(!show);
    //  console.log("showitems");
    // console.log(show);
  };

  return (
    <div className="  bg-slate-300 p-5 shadow-lg   ">
      {/* header */}
          <div key={nestedCategories?.title}>
            <h1
              className="flex justify-between items-center text-lg p-2    font-semibold   cursor-pointer "

              onClick={showItems}
            >
              {nestedCategories?.title} {"(" + nestedCategories.itemCards.length + ")"}
              {!show && <i class="fa-solid fa-caret-down"></i>}{" "}
              {show && <i class="fa-solid fa-sort-up"></i>}
            </h1>

            {show && <ItemCards itemsList={nestedCategories?.itemCards} />}
          </div>
 

      {/**body */}
    </div>
  );
};

export default NestedCategory;
