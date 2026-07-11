import React from "react";
import Rocket from "../assets/rocket.jpg";
import Right from "../assets/right.jpeg";

const Landing = () => {
  return (
    <section className="min-h-screen bg-linear-to-r from-slate-100 via-white to-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 items-center gap-14">

        {/* Left */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center bg-white shadow-md rounded-full px-4 py-2">
            <img
              className="w-5 h-5 mr-2"
              src={Rocket}
              alt="Rocket"
            />
            <span className="font-semibold text-blue-700">
              New Collection 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Your{" "}
            <span className="text-blue-600">
              Perfect
            </span>{" "}
            Shopping Experience
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 mt-6 leading-8 max-w-xl">
            Shop the latest fashion, electronics, accessories and much more.
            Premium quality products at unbeatable prices with fast delivery.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">

            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white rounded-xl font-semibold shadow-lg cursor-pointer">
              Shop Now
            </button>

            <button className="px-8 py-3 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition duration-300 rounded-xl font-semibold cursor-pointer">
              Explore
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                10K+
              </h2>
              <p className="text-slate-600 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                500+
              </h2>
              <p className="text-slate-600 mt-2">
                Premium Products
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                24/7
              </h2>
              <p className="text-slate-600 mt-2">
                Customer Support
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <img
            src={Right}
            alt="Shopping"
            className="w-full max-w-xl rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
};

export default Landing;