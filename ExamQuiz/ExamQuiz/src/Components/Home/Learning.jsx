import React from 'react'
import { FiPercent } from "react-icons/fi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FcOvertime } from "react-icons/fc";
import { TbTopologyStar3 } from "react-icons/tb";
import LearningCard from './LearningCard';


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

const Learning = () => {
  return (
    <div className='bg-white w-full h-[70vh] flex gap-3 p-6 rounded-2xl'>
      <div className='w-1/2  border border-slate-200 p-4 rounded-2xl flex flex-col justify-center ic'>
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
      <div className='w-1/2  border border-slate-200 p-4 rounded-2xl'>
        <div className='flex justify-between'>
            <h2 className='font-bold text-slate-600'>Top Performers</h2>
            <a className='text-blue-600 font-medium hover:underline flex gap-2 items-center transition-all duration-300 hover:-translate-y-1' href="#">
                View Leaderboard
            </a>
         </div>
      </div>
    </div>
  )
}

export default Learning
