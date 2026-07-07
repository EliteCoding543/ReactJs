import React from 'react'
import { FiPercent } from "react-icons/fi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FcOvertime } from "react-icons/fc";
import { TbTopologyStar3 } from "react-icons/tb";
import LearningCard from './LearningCard';
import LeaderboardCard from './LeaderboardCard';
import user from '../../assets/user.avif';
import user2 from '../../assets/user2.avif';
import user3 from '../../assets/user3.avif';
import user4 from '../../assets/user4.avif';
import user5 from '../../assets/user5.avif';

const leftCard = [
  {
    icon: <TbTopologyStar3 />,
    title: "Indian Polity Basic",
    progress: 65,
    progressBg: "bg-green-600",
    score: "12 / 20 Topic Completed",
    textColor: "text-pink-500",
  },
  {
    icon: <FiPercent />,
    title: "Percentage Basic",
    progress: 40,
    progressBg: "bg-yellow-500",
    score: "8 / 20 Topic Completed",
    textColor: "text-purple-600",
  },
  {
    icon: <FcOvertime />,
    title: "Time and Work",
    progress: 20,
    progressBg: "bg-red-600",
    score: "4 / 20 Topic Completed",
  },
  {
    icon: <LuChartNoAxesCombined />,
    title: "Economics Fundamentals",
    progress: 80,
    progressBg: "bg-green-600",
    score: "16 / 20 Topic Completed",
    textColor: "text-[oklch(25.8%_0.092_26.042)]",
  },
];

const rightCard = [
  {
    serie: 1,
    name: "Shivi Kashyap",
    imgSrc: user,
    score: 14560,
    textColor: "text-yellow-500",
  },
  {
    serie: 2,
    name: "Priya Singh",
    imgSrc: user5,
    score: 14320,
    textColor: "text-yellow-600",
  },
  {
    serie: 3,
    name: "Rohit Varma",
    imgSrc: user2,
    score: 13980,
    textColor: "text-yellow-700",
  },
  {
    serie: 4,
    name: "Neha Gupta",
    imgSrc: user4,
    score: 13450,
    textColor: "text-yellow-800",
  },
  {
    serie: 5,
    name: "Arjun Mehra",
    imgSrc: user3,
    score: 13050,
    textColor: "text-yellow-900",
  },
];

const Learning = () => {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row gap-6 p-6 rounded-2xl">

      {/* Continue Learning */}
      <div className="w-full lg:w-1/2 border border-slate-200 p-4 rounded-2xl flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-slate-600">
            Continue Learning
          </h2>

          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
          >
            View All
          </a>
        </div>

        <div className="space-y-3 flex-1">
          {leftCard.map((item) => (
            <LearningCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        <button className="mt-5 self-center border border-blue-700 px-8 py-3 rounded-xl text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition">
          Resume Learning
        </button>
      </div>

      {/* Leaderboard */}
      <div className="w-full lg:w-1/2 border border-slate-200 p-4 rounded-2xl flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-slate-600">
            Top Performers
          </h2>

          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
          >
            View Leaderboard
          </a>
        </div>

        <div className="space-y-3 flex-1">
          {rightCard.map((item) => (
            <LeaderboardCard
              key={item.serie}
              {...item}
            />
          ))}
        </div>

        <button className="mt-5 self-center border border-blue-700 px-8 py-3 rounded-xl text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition">
          View Leaderboard
        </button>
      </div>

    </div>
  );
};

export default Learning;