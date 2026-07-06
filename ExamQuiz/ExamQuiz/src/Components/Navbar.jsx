import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { CiSearch, CiDark } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { GiFairyWings } from "react-icons/gi";
import Profile from "../assets/Profile.png";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <SlBookOpen className="text-3xl text-blue-600" />

            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-slate-900">Exam</span>
              <span className="text-blue-600">Quiz</span>
            </h1>
          </div>
        </div>

        {/* Search (Desktop) */}
        <div className="hidden lg:block flex-1 max-w-xl">
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />

            <input
              type="text"
              placeholder="Search quizzes, tests, topics..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Icon Mobile */}
          <CiSearch className="lg:hidden text-3xl cursor-pointer text-slate-700" />

          {/* Notification */}
          <div className="relative cursor-pointer">
            <IoMdNotificationsOutline className="text-3xl text-slate-700 hover:text-blue-600 transition" />

            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3+
            </span>
          </div>

          {/* Theme */}
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-slate-200 p-1">
            <CiDark className="cursor-pointer text-2xl rounded-full p-1 hover:bg-white transition" />

            <MdOutlineLightMode className="cursor-pointer rounded-full bg-white p-1 text-2xl text-blue-700 shadow-sm transition" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src={Profile}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
            />

            <div className="hidden md:block">
              <h5 className="font-medium text-slate-900">
                Shubham Kashyap
              </h5>

              <div className="flex items-center gap-1 text-xs text-slate-500">
                <GiFairyWings className="text-amber-500" />
                Premium Member
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 lg:hidden">
        <div className="relative">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />

          <input
            type="text"
            placeholder="Search quizzes..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;