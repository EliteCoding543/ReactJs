import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";

const ApiKey = "https://dummyjson.com/products";

const ProductsCard = ({info, setCart, cart}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(ApiKey)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((d) => {
        setData(d.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="text-xl font-semibold text-slate-600">
          Loading Products...
        </h2>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">
          {error}
        </h1>
      </div>
    );
  }

  // Success State
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
    {data.map((item) => {
      const existingItem = cart.find(
        (product) => product.id === item.id
      );

      return (
        <div
          key={item.id}
          className="w-72 shadow-lg rounded-xl p-4 flex flex-col items-center text-center border border-slate-300 cursor-pointer hover:-translate-y-3 hover:bg-sky-50 transition duration-300"
        >
          <h1 className="font-bold">{item.title}</h1>

          <img
            className="w-48 h-48 object-cover"
            src={item.images[0]}
            alt={item.title}
          />

          <p className="text-gray-500 text-sm h-12">
            {item.description.slice(0, 60)}...
          </p>

          <div className="flex justify-between w-full mt-3">
            <p className="font-bold text-slate-800 flex items-center">
              <BsCurrencyRupee />
              {item.price}
            </p>

            <p className="flex items-center gap-1 font-bold text-slate-800">
              <FaStar className="text-amber-500" />
              {item.rating}
            </p>
          </div>

          <button
            onClick={() => {
              if (existingItem) {
                const updatedCart = cart.map((product) =>
                  product.id === item.id
                    ? { ...product, q: product.q + 1 }
                    : product
                );

                setCart(updatedCart);
              } else {
                setCart([...cart, { ...item, q: 1 }]);
              }
            }}
            className="relative mt-4 border border-blue-600 px-6 py-2 rounded-2xl font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Add Cart
          </button>
        </div>
      );
    })}
  </div>
);
};

export default ProductsCard;