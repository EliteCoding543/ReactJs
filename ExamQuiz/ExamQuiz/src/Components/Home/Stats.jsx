import React from "react";

const Stats = ({ icon, value, title, bgColor, textColor}) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">

      <div className="flex items-center gap-5">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor}`}
        >
          <span className={`text-3xl ${textColor}`}>
            {icon}
          </span>
        </div>

        <div>
          <h2 className="text-1xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-1 text-base font-medium text-slate-500">
            {title}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Stats;