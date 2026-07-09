import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
// import ProductsCard  from "./Components/ProductsCard";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* <ProductsCard /> */}
    </>
  );
};

export default App;