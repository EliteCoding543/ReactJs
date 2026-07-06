import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuBookText } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";

const LatestsCard = ({
  title,
  rating,
  question,
  duration,
  icon,
  bgColor,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center">

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${bgColor} text-slate-50`}
      >
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900 text-center">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-1">
        <GoStarFill className="text-amber-500" />
        <span className="font-semibold text-slate-700">
          {rating}
        </span>
      </div>

      <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
        <LuBookText />
        {question}
      </p>

      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <AiOutlineClockCircle />
        {duration}
      </p>

      <button className="mt-6 w-full rounded-xl border border-blue-600 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
        Start Quiz
      </button>
    </div>
  );
};

export default LatestsCard;