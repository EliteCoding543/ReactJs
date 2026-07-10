import React from "react";

const ProductsCard = ({ name, image, price, rating, onSale }) => {
  return (
    <div className="border border-blue-200 rounded-2xl flex flex-col justify-center items-center p-5">
      <img
        className="object-cover"
        src={image}
        alt={name}
      />

      <h2 className="font-bold mt-3 text-blue-600 p-2">{name}</h2>

      <div className="flex justify-between items-center px-6 w-full mt-5">
        <p className="font-bold">₹ {price}</p>
        <p className="font-bold">⭐ {rating}</p>
      </div>

      <div className="mt-5">
        {
            onSale ?
            <button className="font-bold bg-green-800 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300">
                On Sale
            </button>
            :
            <button className="font-bold bg-yellow-700 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-amber-300 hover:text-black transition duration-300">
               Out of Stock
            </button>
        }
      </div>
    </div>
  );
};

export default ProductsCard;