import React from "react";

const progressData = [
  { label: "Solar Panels", value: 95 },
  { label: "Hybrid Energy", value: 80 },
  { label: "Marketing", value: 70 },
];

const EnergyProgress = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 py-12 px-4 sm:px-6 lg:px-20 bg-white">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-green-500 font-semibold uppercase tracking-wide mb-2">
          Energy Progress
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
          Best Solution For Your Solar Energy
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        {progressData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-base sm:text-lg font-medium text-green-900">
                {item.label}
              </span>
              <span className="text-green-500 text-sm sm:text-base font-bold">
                {item.value}%
              </span>
            </div>
            <div className="w-full h-3 sm:h-4 bg-gray-200 rounded-full">
              <div
                className="h-3 sm:h-4 bg-lime-400 rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnergyProgress;
