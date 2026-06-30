import React from "react";
import E_logo from "../assets/E-logo.webp";

const navItems = [
    "Home",
    "Products",
    "Categories",
    "About",
    "Contact",
    "Cart",
];

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-20 py-3 shadow-2xl cursor-pointer">
      <img className="w-15" src={E_logo} alt="E-Commerce Logo" />

      <nav>
        <ul className="flex gap-10 font-bold">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all duration-300 hover:text-blue-800"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;