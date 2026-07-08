import React from "react";

const Landing = () => {
  return (
    <section className="min-h-screen bg-linear-to-r from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 items-center gap-12">

        {/* Left */}
        <div>
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            🔥 Flat 50% OFF
          </span>

          <h1 className="text-6xl font-bold text-slate-900 leading-tight mt-6">
            Discover Your
            <span className="text-blue-600"> Perfect Style</span>
          </h1>

          <p className="text-slate-600 text-lg mt-6 leading-8">
            Shop the latest fashion, electronics, shoes, accessories and
            lifestyle products at the best prices.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
              Shop Now
            </button>

            <button className="border border-slate-400 px-8 py-4 rounded-xl hover:bg-white transition">
              Explore
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-5 mt-12">
            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h2 className="text-3xl">🚚</h2>
              <p className="font-semibold mt-2">Free Shipping</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h2 className="text-3xl">💳</h2>
              <p className="font-semibold mt-2">Secure Payment</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h2 className="text-3xl">⭐</h2>
              <p className="font-semibold mt-2">Best Quality</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-105">

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
              alt="Shoes"
              className="rounded-2xl h-72 w-full object-cover"
            />

            <h2 className="text-2xl font-bold mt-5">
              Nike Air Max
            </h2>

            <p className="text-slate-500 mt-2">
              Premium Sneakers Collection
            </p>

            <div className="flex justify-between items-center mt-5">
              <h3 className="text-3xl font-bold text-blue-600">
                ₹4,999
              </h3>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                Buy Now
              </button>
            </div>

          </div>

          {/* Floating Offer */}
          <div className="absolute -top-6 -left-6 bg-red-500 text-white px-5 py-3 rounded-2xl shadow-xl font-bold">
            50% OFF
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white px-5 py-4 rounded-2xl shadow-xl">
            <h3 className="font-bold text-lg">⭐ 4.9 Rating</h3>
            <p className="text-slate-500 text-sm">20K+ Happy Customers</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Landing;