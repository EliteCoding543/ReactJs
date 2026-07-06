import React from "react";
import King from "../assets/King.png";
import { MdOutlineQuiz } from "react-icons/md";

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
  { title: "Dashboard", icon: <RiDashboardLine /> },
  { title: "Quizzes", icon: <MdOutlineQuiz /> },
  { title: "Categories", icon: <RiFolderOpenLine /> },
  { title: "Mock Tests", icon: <RiBookOpenLine /> },
  { title: "Previous Papers", icon: <RiFileList3Line /> },
  { title: "Current Affairs", icon: <RiNewspaperLine /> },
  { title: "Bookmarks", icon: <RiBookmarkLine /> },
  { title: "Results", icon: <RiBarChartLine /> },
  { title: "Leaderboard", icon: <RiTrophyLine /> },
  { title: "Profile", icon: <RiUser3Line /> },
  { title: "Settings", icon: <RiSettings3Line /> },
  { title: "Logout", icon: <RiLogoutBoxLine /> },
];

const SideNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`flex h-[calc(100vh-80px)] flex-col border-r border-slate-200 bg-white transition-all duration-300
      ${isOpen ? "w-72" : "w-20"}`}
    >
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={item.title}>
              <a
                href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group flex items-center rounded-xl px-4 py-3 transition-all duration-300 ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center text-xl">
                  {item.icon}
                </span>

                <span
                  className={`ml-4 whitespace-nowrap font-medium transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-3 pointer-events-none"
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
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-80 opacity-100 p-4"
            : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="rounded-2xl bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 p-5 text-center text-white shadow-xl">
          <img
            src={King}
            alt="Premium"
            className="mx-auto mb-3 h-16 w-16"
          />

          <h3 className="text-lg font-bold">
            Upgrade to Premium 🚀
          </h3>

          <p className="mt-2 text-sm leading-6 text-blue-100">
            Unlimited Mock Tests, Previous Papers &
            Detailed Analytics.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-blue-600 transition hover:scale-105">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideNavbar;