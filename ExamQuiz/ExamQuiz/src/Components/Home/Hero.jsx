import React from "react";
import HomeBg from "../../assets/HomeBg.webp";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="bg-linear-to-r from-[#312EBA] via-[#4338CA] to-[#4F46E5] rounded-3xl min-h-125 flex flex-col-reverse xl:flex-row items-center justify-between px-6 sm:px-10 lg:px-14 py-10 gap-10 overflow-hidden">

        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-xl text-center xl:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Prepare Smart, Score{" "}
            <span className="text-amber-400">Better</span>
          </h1>

          <p className="text-white/90 text-base sm:text-lg leading-8">
            Practice unlimited quizzes, take mock tests, and crack your dream
            government exam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
            <button className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-semibold shadow-xl hover:scale-105 transition duration-300">
              Start Quiz
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/40 text-white hover:bg-white/10 transition duration-300">
              Mock Test
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full xl:w-1/2">
          <img
            src={HomeBg}
            alt="Government Exam Preparation"
            className="w-65 sm:w-90 md:w-112.5 lg:w-130 xl:w-145 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;