import ItemCards, { Qitems } from "./ItemCards";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartItems = () => {
 const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const QuantityItem =  Qitems(ItemCards);
  return (
    <div className="w-4/5  mx-auto bg-[rgb(245,245,220)] p-6">
      {cartItems.length == 0 ? (
        <h1>YOUR cart is Empty</h1>
      ) : (
        <div>
          <button onClick={() => dispatch(clearCart())} className="px-2 py-1 bg-black text-white rounded-lg">Clear Cart</button>
          {/* <ItemCards itemsList={cartItems} /> */}
          {cartItems.map((item)=>{
            return  <QuantityItem items={item} key={item?.card?.info?.id}/>
          })}
         
        </div>
      )}
    </div>
  );
};

export default CartItems;
