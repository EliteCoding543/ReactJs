import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import Profile from '../assets/Profile.png'

const Navbar = () => {
  return (
    <header className="flex items-center justify-around bg-white px-6 py-4 border border-slate-200 shadow-sm">

      {/* Left Section */}
      <div className="flex items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 pr-6 border-r border-slate-200">
          <SlBookOpen className="text-3xl text-blue-600" />

          <h1 className="text-2xl font-bold">
            <span className="text-slate-900">Exam</span>
            <span className="text-blue-600">Quiz</span>
          </h1>
        </div>
      </div>
        {/* Menu */}
        <RiMenu2Fill className="ml-6 text-2xl text-slate-700 cursor-pointer hover:text-blue-600 transition" />

        {/* Search */}
        <div className="relative ml-6">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />

          <input
            type="text"
            placeholder="Search quizzes, tests, topics..."
            className="w-98 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>


      {/* Notification Section */}
      <div className="flex items-center gap-5 border-r border-slate-200 w-20 m-2">

        {/* Notification */}
        <div className="relative cursor-pointer pl-5">
          <IoMdNotificationsOutline className="text-3xl text-slate-700 hover:text-blue-600 transition" />

          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            3+
          </span>
        </div>
      </div>

      {/* Dark Light Button */}
      <div className="border-r border-slate-200 px-5">
          <div className="bg-slate-200 flex rounded-full  items-center p-2 gap-5 cursor-pointer">
          <CiDark  className='text-2xl'/>
          <MdOutlineLightMode className="text-2xl rounded-full bg-white text-blue-700 p-1"/>
        </div>
      </div>
      
      {/* Profile Section */}
       <div className="flex gap-3">
         <img className="w-12 h-12 bg-slate-300 rounded-full" src={Profile} alt="" />
          <div>
            <h5 className="font-medium">Shubham Kashyap</h5>
            <p className="text-xs">Premium member</p>
          </div>
       </div>
    </header>
  );
};

export default Navbar;