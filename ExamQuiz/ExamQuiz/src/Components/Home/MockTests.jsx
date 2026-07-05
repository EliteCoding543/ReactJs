import React from 'react'
import { MdChevronRight } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import MockTestCard from './MockTestCard';

const mockTests = [
    {
        title: "SSC CGL Full Mock Test",
        questions: 100,
        duration: "60 mins",
        difficulty: "Easy",
        color: "bg-green-100 text-green-700",
        icons: <FaFileCircleCheck />,
        iconBgColor: "bg-blue-100",
        iconColor: "text-blue-600"
    },

    {
        title: "IBPS PO Prelims Mock",
        questions: 100,
        duration: "60 mins",
        difficulty: "Medium",
        color: "bg-yellow-100 text-yellow-700",
        icons: <FaBuildingColumns />,
        iconBgColor: "bg-pink-100",
        iconColor: "text-pink-600"
    },

    {
        title: "RRB NTPC Mock Tests",
        questions: 100,
        duration: "60 mins",
        difficulty: "Medium",
        color: "bg-yellow-100 text-yellow-700",
        icons: <FaTrainSubway  />,
        iconBgColor: "bg-purple-100",
        iconColor: "text-purple-700",
    },

    {
        title: "UPSC Prelims Mock",
        questions: 100,
        duration: "60 mins",
        difficulty : "Hard",
        color: "bg-red-100 text-red-700",
        icons: <AiOutlineFileProtect/>,
        iconColor: "text-green-700",
        iconBgColor: 'bg-green-100',
    },

];

const MockTests = () => {
  return (
    <div className='relative rounded-3xl border border-slate-200 bg-white p-6'>
        <MdChevronRight
            className="absolute right-1 bottom-22 h-8 w-8 rounded-full bg-white p-1 text-slate-700 shadow-md"
        />
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-slate-900'>
            Top Mock Tests
        </h2>
        <a href="#" className='text-blue-600 font-medium hover:underline flex gap-2 items-center transition-all duration-300 hover:-translate-y-1'>
            View All
            <MdChevronRight />
        </a>
      </div>

      {/* Mock Tests Card */}
        <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {mockTests.map((item) => {
              return (
                <MockTestCard
                key={item.title}
                {...item}
                />
              )

            })}
        </div>
    </div>
  )
}

export default MockTests
