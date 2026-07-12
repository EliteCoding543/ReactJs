import React from "react";

const Cart = ({ cart, setCart }) => {

  // Total Quantity
  const totalItems = cart.reduce((acc, item) => acc + item.q, 0);

  // Grand Total
  const grandTotal = cart.reduce(
    (acc, item) => Math.floor(acc + item.price * item.q),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {cart.length === 0 ? (
        <h1 className="text-3xl text-center font-bold mt-20">
          🛒 Cart Empty!
        </h1>
      ) : (
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="md:col-span-2 space-y-5">
            {cart.map((item, index) => (
              <article
                key={item.id}
                className="bg-white shadow rounded-xl p-5 flex gap-5"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-green-600 font-bold text-lg mt-2">
                    ₹ {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4 rounded-lg w-fit px-3 py-2">
                  <button onClick={() => {
                    cart[index].q++
                    setCart([...cart])
                  }}
                  className="font-bold w-9 h-9 border text-black rounded-xl text-xl transition duration-200 flex items-center justify-center">
                    +
                  </button>  
                  <span className="font-bold h-9 w-9 border flex items-center justify-center rounded-xl">
                      {item.q}
                    
                  </span>
                  <button onClick={() => {
                    cart[index].q--
                    const newcart = cart.filter((item) => item.q >= 1)
                    setCart(newcart)
                  }}
                  className="w-9 h-9 border text-black rounded-xl text-xl font-bold transition duration-200">
                    -
                  </button>
                </div>

                  <p className="text-blue-600 font-bold mt-2">
                    Total : ₹ {item.price * item.q}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-xl p-6 h-fit sticky top-5">
            <h2 className="text-2xl font-bold border-b pb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mt-5 text-lg">
              <span>Total Items</span>
              <span className="font-semibold">{totalItems}</span>
            </div>

            <div className="flex justify-between mt-3 text-lg">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between mt-3 text-lg">
              <span>GST</span>
              <span>₹0</span>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Grand Total</span>
              <span>₹ {grandTotal}</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold">
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;