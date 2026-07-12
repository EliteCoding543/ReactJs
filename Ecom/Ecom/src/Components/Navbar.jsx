import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiGoogledataproc } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = ({cart}) => {
  console.log(cart)
  const[totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    let temp = 0;

    for(let item of cart){
        temp += item.q;
    }

    setTotalItems(temp);

  },[cart])

  return (
    <nav className="shadow-md px-10 py-4 flex justify-between bg-white border-b border-b-blue-100">
      <h1 className="text-2xl font-bold flex gap-2 items-center text-blue-600">
        <FaCode  className="text-blue-700"/>
        ShopEase
        </h1>

      <ul className="flex items-center gap-6 font-bold">
        {/* Home */}
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-200 px-4 py-2 rounded-xl transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FaHome />
                Home
              </div>
            )}
          </NavLink>
        </li>

        {/* Products */}
        <li>
          <NavLink to="/products">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-200 px-4 py-2 rounded-xl transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <SiGoogledataproc />
                Products
              </div>
            )}
          </NavLink>
        </li>

        {/* Contact */}
        <li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-200 px-4 py-2 rounded-xl transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <IoIosContact />
                Profile
              </div>
            )}
          </NavLink>
        </li>

        {/* Cart */}
        <li>
          <NavLink to="/cart">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-200 px-4 py-2 rounded-xl transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
              <div className="flex relative items-center gap-2">
                <FaCartShopping />
                Cart
                {totalItems > 0 && <span className="bg-red-500 h-7 w-7 flex items-center rounded-xl text-sm justify-center absolute -top-5 left-15 text-white">
                  {totalItems}
                  </span>}
              </div>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;