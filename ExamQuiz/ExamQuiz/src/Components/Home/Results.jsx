import React from "react";
import ResultsCard from "./ResultsCard";
import { GiTempleGate } from "react-icons/gi";

const resultCards = [
  {
    id: 1,
    icon: <GiTempleGate />,
    title: "SSC CGL Mock Test 1",
    date: "May 28, 2026",
    score: "85",
    scoreResult: "Qualified",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: 2,
    icon: <GiTempleGate />,
    title: "SSC CGL Mock Test 2",
    date: "May 30, 2026",
    score: "85",
    scoreResult: "Qualified",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: 3,
    icon: <GiTempleGate />,
    title: "RRB NTPC Mock Test",
    date: "June 02, 2026",
    score: "68",
    scoreResult: "Average",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    id: 4,
    icon: <GiTempleGate />,
    title: "SSC CHSL Mock Test",
    date: "June 05, 2026",
    score: "92",
    scoreResult: "Excellent",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    id: 5,
    icon: <GiTempleGate />,
    title: "SSC CGL Mock Test 3",
    date: "June 10, 2026",
    score: "81",
    scoreResult: "Qualified",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
];

const Results = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-700">
          Recent Results
        </h2>

        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All
        </a>
      </div>

      <div className="flex  gap-4">
        {resultCards.map((item) => (
          <ResultsCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;