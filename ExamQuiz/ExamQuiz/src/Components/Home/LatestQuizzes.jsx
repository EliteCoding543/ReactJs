import React from "react";
import LatestsCard from "./LatestsCard";
import { FaTrainSubway } from "react-icons/fa6";
import { LuShipWheel } from "react-icons/lu";
import { RiGovernmentLine } from "react-icons/ri";
import { SiKnown } from "react-icons/si";
import { BsBank } from "react-icons/bs";

const latestQuizzes = [
  {
    title: "SSC CGL Reasoning Quiz",
    rating: 4.8,
    question: "25 Questions",
    duration: "20 mins",
    icon: <LuShipWheel />,
    bgColor: "bg-red-600",
  },

  {
    title: "RRB NTPC Maths Quiz",
    rating: 4.9,
    question: "25 Questions",
    duration: "30 mins",
    icon: <FaTrainSubway />,
    bgColor: "bg-green-800 ",
  },

  {
    title: "SSC CHSL GK Quiz",
    rating: 4.6,
    question: "25 Questions",
    duration: "20 mins",
    icon: <RiGovernmentLine />,
    bgColor: "bg-yellow-800",
  },
  {
    title: "Banking Quants Quiz",
    rating: 4.8,
    question: "25 Questions",
    duration: "20 mins",
    icon: <BsBank />,
    bgColor: "bg-green-700"
  },

  {
    title: "General Awareness Quiz",
    rating: 4.8,
    question: "25 Questions",
    duration: "20 mins",
    icon: <SiKnown />,
    bgColor: "bg-blue-700",
  },

];

const LatestQuizzes = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className=" font-bold text-slate-900">
          Latest Quizzes
        </h2>

        <a
          href="#"
          className="font-medium text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:underline"
        >
          View All
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-5">
        {latestQuizzes.map((item) => (
          <LatestsCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestQuizzes;