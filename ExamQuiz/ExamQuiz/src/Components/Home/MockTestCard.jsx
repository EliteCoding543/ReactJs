import React from "react";

const MockTestCard = ({
  icons,
  title,
  questions,
  duration,
  difficulty,
  color,
  iconBgColor,
  iconColor,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Icon */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBgColor}  text-2xl ${iconColor}`}>
        {icons}
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-slate-900">
        {title}
      </h4>

      {/* Questions */}
      <p className="text-sm text-slate-500 bg">
        {questions} Questions • {duration}
      </p>

      {/* Difficulty */}
      <span
        className={`inline-flex w-fit rounded-xl px-3 py-2 text-sm font-semibold ${color}`}
      >
        {difficulty}
      </span>

      {/* Button */}
      <button className="mt-auto rounded-xl border border-slate-200 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white cursor-pointer">
        Start Test
      </button>

    </div>
  );
};

export default MockTestCard;