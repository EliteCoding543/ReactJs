import React from "react";

const ResultsCard = ({
  icon,
  title,
  date,
  score,
  scoreResult,
  bgColor,
  textColor,
}) => {
  return (
    <div className="items-center justify-between p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300">

      {/* Left */}
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`h-12 w-12 rounded-full flex items-center justify-center text-2xl ${bgColor} ${textColor}`}
        >
          {icon}
        </span>

        <div className="flex flex-col">
          <h2 className="font-semibold text-slate-700">
            {title}
          </h2>

          <p className="text-xs text-slate-500">
            {date}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="gap-4 mb-3">

        <div className="flex text-center">
            <p className="text-slate-700">
                <span className="text-xl font-bold">{score}</span>
                <span className="text-sm font-medium">/100</span>
            </p>
        </div>

        

        <div className="flex justify-between items-center">
            <p className="font-bold text-slate-500 text-sm">Score</p>
            <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${bgColor} ${textColor}`}
            >
            {scoreResult}
            </button>
        </div>

      </div>
    </div>
  );
};

export default ResultsCard;