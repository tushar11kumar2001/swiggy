import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { Logo } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [move, setMove] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  function hidesideBar() {
    setMove(false);
  }
  function showsideBar() {
    setMove(true);
  }
  return (
    <div className="fixed w-screen bg-white shadow-2xl z-50">
      <div className="flex h-20  justify-between   items-center pl-32 pr-36 py-2 relative">
      <img
        className="h-5/6 hover:scale-110 cursor-pointer absolute  left-3  sm:relative"
        src={Logo}
        alt=""
      />

      <ul className=" gap-5 text-gray-600 font-medium text-xl hidden sm:flex ">
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
      
      <div className="right-5 absolute sm:hidden flex">
      <h3 className="hover:text-orange-600 relative text-gray-600 mr-14">
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
      <i
        className="fa-solid fa-bars  text-3xl text-gray-600 "
        onClick={showsideBar}
      ></i> 
      </div>
  

    {move &&   <ul
        className={
          "w-60 py-14 px-6 text-white font-medium text-xl absolute top-0  z-20 bg-black bg-opacity-80 sm:hidden right-0"
        }
      >
        <li className="cursor-pointer mb-4">
          <h3 className="hover:text-orange-600">
            <i className="fa-solid fa-xmark" onClick={hidesideBar}></i>
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
      
      </ul>}
    </div>
  </div>
  );
};

export default Header;
