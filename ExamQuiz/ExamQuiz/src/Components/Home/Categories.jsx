import React from 'react'
import { BsBank2 } from "react-icons/bs";
import { FaTrainSubway } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";

const Categories = () => {
  return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between">
            <h2 className=" font-bold text-slate-900">
            Popular Categories
            </h2>

            <a href="#" className="text-blue-600 font-medium hover:underline">
            View All
            </a>
        </div>

        {/* Category Cards */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">

            <div className="flex flex-col items-center justify-center rounded-2xl bg-blue-50 px-2 py-4 leading-8">
                <BsBank2 className="text-4xl text-blue-600" />
                <h5 className="mt-3 font-semibold">SSC</h5>
                <p className="text-sm text-slate-500">1250+ Quizzes</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-6 leading-8">
                <BsBank2 className="text-4xl text-green-500" />
                <h5 className="mt-3 font-semibold">Banking</h5>
                <p className="text-sm text-slate-500">980+ Quizzes</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-orange-50 p-6 leading-8">
                <FaTrainSubway className="text-4xl text-yellow-600" />
                <h5 className="mt-3 font-semibold">Railway</h5>
                <p className="text-sm text-slate-500">870+ Quizzes</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-purple-50 p-6 leading-8">
                <AiOutlineFileProtect className='text-green-800 text-4xl' />
                <h5 className="mt-3 font-semibold">UPSC</h5>
                <p className="text-sm text-slate-500">650+ Quizzes</p>
            </div>

        </div>

        </div>
  )
}

export default Categories