import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiGoogledataproc } from "react-icons/si";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="shadow-md px-10 py-4 flex justify-between bg-white">
      <h1 className="text-2xl font-bold">Logo</h1>

      <ul className="flex items-center gap-6 font-bold">
        {/* Home */}
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-xl transition duration-300 ${
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

        {/* Cart */}
        <li>
          <NavLink to="/about">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-xl transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FaCartShopping />
                Cart
              </div>
            )}
          </NavLink>
        </li>

        {/* Products */}
        <li>
          <NavLink to="/products">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-xl transition duration-300 ${
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
                className={`flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-xl transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <IoIosContact />
                Contact
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;