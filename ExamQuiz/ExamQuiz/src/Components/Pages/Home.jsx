import React from "react";
import Hero from "../Home/Hero";
import Stats from "../Home/Stats";

import { MdMenuBook } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { LuTrophy } from "react-icons/lu";
import Categories from "../Home/Categories";
import { BsBank2 } from "react-icons/bs";
import MockTests from "../Home/MockTests";
import LatestQuizzes from "../Home/LatestQuizzes";
import Learning from "../Home/Learning";

const Home = () => {
  return (
    <div className="space-y-8">

      <Hero />
     {/* Stats Card  */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 bg-white border p-5 border-slate-200 rounded-2xl">

        <Stats
          icon={<MdMenuBook />}
          value="12,000+"
          title="Total Quizzes"
          bgColor="bg-blue-100"
          textColor="text-blue-600"
        />

        <Stats
          icon={<FaUsers />}
          value="1.5M+"
          title="Students"
          bgColor="bg-emerald-100"
          textColor="text-emerald-600"
        />

        <Stats
          icon={<CgNotes />}
          value="850+"
          title="Mock Tests"
          bgColor="bg-amber-100"
          textColor="text-amber-600"
        />

        <Stats
          icon={<LuTrophy />}
          value="98%"
          title="Success Rate"
          bgColor="bg-violet-100"
          textColor="text-violet-600"
        />

      </div>
     
     <Categories />

     <MockTests />
     <LatestQuizzes />
     <Learning />
    </div>
  );
};

export default Home;