import React from "react";
import { FaSolarPanel, FaHandsHelping, FaAward, FaThumbsUp } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  {
    icon: <FaSolarPanel className="text-white text-3xl sm:text-4xl" />,
    number: 1000,
    label: "Project Done",
  },
  {
    icon: <FaHandsHelping className="text-white text-3xl sm:text-4xl" />,
    number: 1200,
    label: "Happy Clients",
  },
  {
    icon: <FaAward className="text-white text-3xl sm:text-4xl" />,
    number: 850,
    label: "Award Winning",
  },
  {
    icon: <FaThumbsUp className="text-white text-3xl sm:text-4xl" />,
    number: 1100,
    label: "Rating Customer",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-green-900 py-8 px-4 sm:py-10 sm:px-6 text-center max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 bg-lime-500 rounded-2xl py-5 px-6 sm:py-6 sm:px-8"
        >
          <div className="bg-lime-600 p-3 sm:p-4 rounded-full flex justify-center items-center">
            {stat.icon}
          </div>
          <div className="text-2xl sm:text-3xl font-bold leading-none">
            <CountUp end={stat.number} duration={2} separator="," />+
          </div>
          <div className="text-base sm:text-lg text-green-950 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
