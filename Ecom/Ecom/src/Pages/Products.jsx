import React from 'react'
import ProductsCard from "../Components/ProductsCard";

const Products = ({ cart, setCart }) => {
  return (
    <ProductsCard
      cart={cart}
      setCart={setCart}
    />
  );
};

export default Products;
