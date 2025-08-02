import React from "react";
import { FaSearch, FaPencilAlt, FaSolarPanel } from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Project Planning",
    icon: <FaPencilAlt size={40} className="text-white" />,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "02",
    title: "Research & Analysis",
    icon: <FaSearch size={40} className="text-white" />,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "03",
    title: "Solar Installation",
    icon: <FaSolarPanel size={40} className="text-white" />,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-16 bg-white text-center px-4 sm:px-8 md:px-16">
      <h3 className="text-green-500 font-semibold uppercase tracking-wider text-sm">
        Our Latest Process
      </h3>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-10 sm:mb-12">
        Our Work Process
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative max-w-xs w-full mx-auto">
            {/* Green Box with Icon */}
            <div className="bg-lime-400 rounded-3xl p-10 shadow-xl inline-block">
              {step.icon}
            </div>

            {/* Step Number Circle */}
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-white shadow-md">
              {step.id}
            </div>

            {/* Title & Description */}
            <h4 className="text-lg sm:text-xl font-bold text-green-900 mt-6">
              {step.title}
            </h4>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">{step.desc}</p>

            {/* Dotted Arrow - only show on lg screens */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 right-[-110px]">
                <svg
                  width="120"
                  height="50"
                  fill="none"
                  stroke="#B2F2BB"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  aria-hidden="true"
                >
                  <path d="M0,25 C40,0 80,50 120,25" />
                  <polygon points="118,25 112,20 112,30" fill="#B2F2BB" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
