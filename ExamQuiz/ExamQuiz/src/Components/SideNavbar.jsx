import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineQuiz } from "react-icons/md";
import King from '../assets/King.png'

import {
  RiDashboardLine,
  RiBookOpenLine,
  RiFolderOpenLine,
  RiFileList3Line,
  RiBookmarkLine,
  RiBarChartLine,
  RiTrophyLine,
  RiNewspaperLine,
  RiUser3Line,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

const navItems = [
  {
    title: "Dashboard",
    icon: <RiDashboardLine />,
  },
  {
    title: "Quizzes",
    icon: <MdOutlineQuiz />,
  },
  {
    title: "Categories",
    icon: <RiFolderOpenLine />,
  },
  {
    title: "Mock Tests",
    icon: <RiBookOpenLine />,
  },
  {
    title: "Previous Papers",
    icon: <RiFileList3Line />,
  },
  {
    title: "Current Affairs",
    icon: <RiNewspaperLine />,
  },
  {
    title: "Bookmarks",
    icon: <RiBookmarkLine />,
  },
  {
    title: "Results",
    icon: <RiBarChartLine />,
  },
  {
    title: "Leaderboard",
    icon: <RiTrophyLine />,
  },
  {
    title: "Profile",
    icon: <RiUser3Line />,
  },
  {
    title: "Settings",
    icon: <RiSettings3Line />,
  },
  {
    title: "Logout",
    icon: <RiLogoutBoxLine />,
  },
];

const SideNavbar = ({isOpen}) => {
  return (
    <aside className={`bg-white border-r border-slate-200 transition-all duration-300 overflow-hidden
        ${isOpen ? "w-72" : "w-20"}`}
    >

      {/* Logo */}
      {/* <div className="flex items-center gap-3 px-6 py-7 border-b border-slate-200">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
          <SlBookOpen className="text-2xl text-blue-600" />
        </div>

        <h1 className="text-2xl font-bold">
          <span className="text-slate-900">Exam</span>
          <span className="text-blue-600">Quiz</span>
        </h1>
      </div> */}

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">

          {navItems.map((item, index) => (
            <li key={item.title}>
              <a
                href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300
                ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>

                <span
                    className={`font-medium whitespace-nowrap transition-all duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    {item.title}
                  </span>
              </a>
            </li>
          ))}

        </ul>
      </nav>

      {/* Premium Card */}
      <div className={`overflow-hidden transition-all duration-300  flex flex-col justify-center items-center bg-blue-600 rounded-2xl p-5 m-3 ${
          isOpen ? "max-h-76 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}>
        <img src={King} alt="Png"  className="w-15 h-15"/>

        <h3 className="text-lg font-bold text-white">
          Upgrade to Premium 🚀
        </h3>

        <p className="mt-2 text-sm text-blue-100">
          Unlimited Mock Tests, Previous Papers & Detailed Analytics.
        </p>

        <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-blue-600 transition hover:scale-105">
          Upgrade Now
        </button>

      </div>

    </aside>
  );
};

export default SideNavbar;