import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { Logo } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const[move,setMove] = useState("-240px");
   const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  function hidesideBar(){
    setMove("-240px");
  }
  function showsideBar(){
    setMove("0px");
  }
  return (
    <div className="flex h-20  justify-between  border-b-2 border-slate-300 items-center pl-32 pr-36 py-2 relative">
      <img
        className="h-5/6 hover:scale-110 cursor-pointer absolute  left-3  sm:relative"
        src={Logo}
      />

      <ul className="flex gap-5 text-gray-600 font-medium text-xl hidden sm:flex ">
        <li className="cursor-pointer ">
          <h3 className="hover:text-orange-600">
            ONLINE STATUS {onlineStatus ? "❤" : "😝"}
          </h3>
        </li>
        <li className="">
          <h3 className="hover:text-orange-600">
            <Link to="/">Home</Link>
          </h3>
        </li>
        <li>
          <h3 className="hover:text-orange-600">
            <Link to="/about">About</Link>
          </h3>
        </li>
        <li>
          <h3 className="hover:text-orange-600">
            <Link to="/contact">contact us</Link>
          </h3>{" "}
        </li>
        <li>
          <h3 className="hover:text-orange-600 relative">
            <Link to="/cart" className="absolute text-3xl">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            {cartItems.length && (
              <p className="absolute left-5 top-[-3px] bg-red-600 text-sm w-5 rounded-full text-center text-white">
                {" "}
                {cartItems.length}
              </p>
            )}
          </h3>
        </li>
      </ul>

      <i className="fa-solid fa-bars sm:hidden text-3xl text-gray-600 right-5 absolute" onClick={showsideBar}></i>

      <ul className={"w-60 py-14 px-6 text-white font-medium text-xl absolute top-0  z-20 bg-black bg-opacity-80 sm:hidden right-["+move+"]"}>
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600">
            <i class="fa-solid fa-xmark" onClick={hidesideBar}></i>
          </h3>
        </li>
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600">
            ONLINE STATUS {onlineStatus ? "❤" : "😝"}
          </h3>
        </li>
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600">
            <Link to="/">Home</Link>
          </h3>
        </li>
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600">
            <Link to="/about">About</Link>
          </h3>
        </li>
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600">
            <Link to="/contact">contact us</Link>
          </h3>{" "}
        </li>
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600 relative">
            <Link to="/cart" className="absolute text-3xl">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            {cartItems.length && (
              <p className="absolute left-5 top-[-3px] bg-red-600 text-sm w-5 rounded-full text-center text-white">
                {" "}
                {cartItems.length}
              </p>
            )}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Header;
