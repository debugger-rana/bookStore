import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdSearch } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaRegHeart, FaSlideshare } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownopen, setIsDropdownopen] = useState(false);
  const cartItems=useSelector(state => state.cart.cartItems);  //state.cartReducer.InitialState
  console.log(cartItems);

  let currentUser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3CenterLeft className="size-6" />
          </Link>

          {/* search bar */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <MdSearch className="absolute inline-block left-3 inset-y-2" />

            <input
              type="text"
              placeholder="search here..."
              className="bg-[#998888ef] w-full py-1 md:px-8 px-6 rounded-md
            focus:outline-none"
            />
          </div>
        </div>

        {/* users icon */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownopen(!isDropdownopen)}>
                  <img
                    src={avatarImg}
                    alt="user"
                    className={`size-7 rounded-full 
                  ${currentUser ? `ring-2 ring-blue-500` : ``} `}
                  />
                </button>
                {/* drop down */}
                {isDropdownopen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownopen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-1 text-sm
                             hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <CiUser className="size-7" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-5" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-1 flex items-center rounded-sm"
          >
            <MdOutlineShoppingCart className="" />
            {
              cartItems.length > 0  ? 
              <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>:
              <span className="text-sm font-semibold sm:ml-1">0</span>
            }
            
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
