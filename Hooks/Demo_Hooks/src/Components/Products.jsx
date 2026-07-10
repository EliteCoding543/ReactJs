import React, { useEffect, useState } from 'react'

const Products = () => {
    const[products, setproducts] = useState([]);

    useEffect(() => {
             fetch("https://dummyjson.com/products")
             .then((res) => res.json())
             .then((data) => {
                setproducts(data.products)
                console.log(data.products)
             })
    },[])
  return (
    <div className="mt-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {products.map((item) => (
    <div
      key={item.id}
      className="border border-blue-200 rounded-2xl p-6 flex flex-col items-center"
    >
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-40 h-40 object-cover"
      />

      <h2 className="text-xl font-bold text-blue-600 text-center mt-4">
        {item.title}
      </h2>

      <div className="flex justify-between w-full mt-4">
        <button className="font-bold">
          ₹ {item.price}
        </button>

        <button className="font-bold">
          ⭐ {item.rating}
        </button>
      </div>
    </div>
  ))}
</div>
  )
}

export default Products
