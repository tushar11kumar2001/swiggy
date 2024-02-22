import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-4/5  mx-auto bg-[rgb(245,245,220)] p-6 relative top-20">
      {cartItems.length == 0 ? (
        <h1>YOUR cart is Empty</h1>
      ) : (
        <div>
          <button
            onClick={() => dispatch(clearCart())}
            className="px-2 py-1 bg-black text-white rounded-lg"
          >
            Clear Cart
          </button>

          {cartItems.map((item) => {
            return <CartItems items={item} key={item?.card?.info?.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
