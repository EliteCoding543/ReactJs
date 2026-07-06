import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch, CiDark } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { GiFairyWings } from "react-icons/gi";
import Profile from "../assets/Profile.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm px-4 sm:px-6 py-4">

      <div className="flex items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <SlBookOpen className="text-3xl text-blue-600" />

            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-slate-900">Exam</span>
              <span className="text-blue-600">Quiz</span>
            </h1>
          </div>

          {/* Sidebar Menu */}
          <RiMenu2Fill
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl cursor-pointer hover:text-blue-600"
          />
        </div>

        {/* Search (Desktop) */}
        <div className="hidden lg:block flex-1 max-w-xl">
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />

            <input
              type="text"
              placeholder="Search quizzes, tests, topics..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Search Icon Mobile */}
          <CiSearch className="lg:hidden text-3xl cursor-pointer text-slate-700" />

          {/* Notification */}
          <div className="relative cursor-pointer">
            <IoMdNotificationsOutline className="text-3xl text-slate-700 hover:text-blue-600" />

            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3+
            </span>
          </div>

          {/* Theme Button */}
          <div className="hidden sm:flex bg-slate-200 rounded-full p-1 gap-2 items-center">
            <CiDark className="text-2xl cursor-pointer" />

            <MdOutlineLightMode className="text-2xl bg-white rounded-full p-1 text-blue-700 cursor-pointer" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src={Profile}
              alt="Profile"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
            />

            <div className="hidden md:block">
              <h5 className="font-medium">Shubham Kashyap</h5>

              <div className="flex items-center gap-1 text-xs text-slate-500">
                <GiFairyWings className="text-amber-500" />
                Premium Member
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Search Bar Tablet & Mobile */}
      <div className="mt-4 lg:hidden">
        <div className="relative">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />

          <input
            type="text"
            placeholder="Search quizzes..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

    </header>
  );
};

export default Navbar;