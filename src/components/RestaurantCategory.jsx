import ItemCards from "./ItemCards";
import NestedCategory from "./NestedCategory";

const RestaurantCategory = ({ data, showItems , setShowIndex ,dummy}) => {
  // console.log("data" , data);

  const handleclick = () => {
     setShowIndex();//By this setShowIndex we can access the setShowIndex function which is present in RestaurantMenu component...(this functionality is known as "LIFTING STATE UP")
  };

  return (
    <>
      <div className="p-5 shadow-lg bg-slate-300 mt-5">
        {/* header */}
        {data?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
          <h1
            className="text-lg font-bold flex justify-between items-center p-2 cursor-pointer "
            onClick={handleclick}
          >
            {data.title} {"(" + data.itemCards.length + ")"}{" "}
            {!showItems && <i class="fa-solid fa-caret-down"></i>}
            {showItems && <i class="fa-solid fa-sort-up"></i>}
          </h1>
        ) : (
          <h1 className="text-lg font-bold  cursor-pointer ">{data.title}</h1>
        )}
      </div>
      {/**body */}

      {data?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
        showItems && <ItemCards itemsList={data?.itemCards} dummy = {dummy}/>
      ) : (
        data?.categories.map((cat)=>{
           return <NestedCategory key={cat.title}nestedCategories={cat} />
        })
        
      )}
    </>
  );
};

export default RestaurantCategory;
