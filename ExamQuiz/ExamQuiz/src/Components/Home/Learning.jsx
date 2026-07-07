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
        score: "12 / 20 Topic Compaleted",
        textColor: "text-pink-500",
    },
    {
        icon: <FiPercent />,
        title: "Percantage Basic",
        progress: 40,
        progressBg: "bg-yellow-500",
        score: "8 / 20 Topic Compaleted",
        textColor: "text-purple-600",
    },

    {
        icon: <FcOvertime />,
        title: "Time and Work",
        progress: 20,
        progressBg: "bg-red-600",
        score: "4 / 20 Topic Compaleted"
    },

    {
        icon: <LuChartNoAxesCombined />,
        title: "Ecconomics Fundamentals",
        progress: 80,
        progressBg: "bg-green-600",
        score: "16 / 20 Topic Compaleted",
        textColor: "text-[oklch(25.8% 0.092 26.042)]",
    },
];

const rightCard = [
    {
        serie: 1,
        name : "Shivi kashyap",
        imgSrc: user,
        score: 14560,
        textColor: "text-yellow-500",
    },

    {
        serie: 2,
        name : "Priya Singh",
        imgSrc: user5,
        score: 14320,
        textColor: "text-yellow-600",
    },

    {
        serie: 3,
        name : "Rohit Varma",
        imgSrc: user2,
        score: 13980,
        textColor: "text-yellow-700",
    },

    {
        serie: 4,
        name : "Neha Gupta",
        imgSrc: user4,
        score: 13450,
        textColor: "text-yellow-800",
    },

    {
        serie: 5,
        name : "Arjun Mehra",
        imgSrc: user3,
        score: 13050,
        textColor: "text-yellow-900",
    },
    
];

const Learning = () => {
  return (
    <div className='bg-white w-full h-[70vh] flex gap-3 p-6 rounded-2xl'>
      <div className='w-1/2  border border-slate-200 p-4 rounded-2xl flex flex-col justify-center'>
         <div className='flex justify-between'>
            <h2 className='font-bold text-slate-600'>Continue Learning</h2>
            <a className='text-blue-600 font-medium hover:underline flex gap-2 items-center transition-all duration-300 hover:-translate-y-1' href="#">View All</a>
         </div>

         <div>
            {leftCard.map((item) => 
             <LearningCard 
                key={item.title}
                {...item}
             />
            )}
         </div>

         <button className="self-center border border-blue-700 px-10 py-3 rounded-2xl text-blue-700 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white">
              Resume Learning
        </button>
      </div>

      {/* Leader Board Section  */}
      <div className='w-1/2  border border-slate-200 p-4 rounded-2xl flex flex-col justify-center'>
        <div className='flex justify-between'>
            <h2 className='font-bold text-slate-600'>Top Performers</h2>
            <a className='text-blue-600 font-medium hover:underline flex gap-2 items-center transition-all duration-300 hover:-translate-y-1' href="#">
                View Leaderboard
            </a>
         </div>

         <div className='mb-3'>
            {rightCard.map((item) => {
                return(
                    <LeaderboardCard 
                    key={item.serie}
                    {...item}
                    />
                )
            })}
         </div>

         <button className="self-center border border-blue-700 px-10 py-3 rounded-2xl text-blue-700 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white">
              View Leaderboard
        </button>
      </div>
    </div>
  )
}

export default Learning
