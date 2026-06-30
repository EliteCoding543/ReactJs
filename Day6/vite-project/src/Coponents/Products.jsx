import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';

const ApiKey = "https://dummyjson.com/products";

const Products = () => {
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    fetch(ApiKey)
      .then((res) => res.json())
      .then((d) => {
        setData(d.products);
      });
  }, []);

  return (
    <>
    <div className="grid grid-cols-4 gap-5 p-10">
      {
      data.length > 0 ?
       data.map((item) => (
        <div className="w-72 shadow-lg rounded-lg p-4 flex flex-col items-center text-center border cursor-pointer hover:-translate-y-3 hover:bg-sky-50  hover:transition ease-in duration-300" 
         key={item.id}>
          <h1 className="font-bold">{item.title}</h1>

          <img
            className="w-48 h-48 object-cover"
            src={item.images[0]}
            alt={item.title}
          />
          <p className='text-gray-500 text-sm h-12'>{item.description.slice(0, 60)}...</p>

          <div className='flex  gap-3  w-full justify-between'>
            <p className='font-bold text-fuchsia-500'>₹ {item.price}</p>
            <p className="flex items-center gap-1 text-amber-500 font-bold">
                <FaStar />
                {item.rating}
            </p>
          </div>
        </div>
      ))


      : <h1 className="text-center text-2xl font-bold mt-10">
        Please Wait Data Loading...
        </h1>
     
      
    }
    </div>
    </>
  );
};

export default Products;