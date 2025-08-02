import React from "react";
import { FaSolarPanel, FaWind, FaBolt } from "react-icons/fa";

const offerData = [
  {
    title: "Solar PV Systems",
    description: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-3.jpg",
    icon: <FaSolarPanel className="text-white text-xl md:text-2xl" />,
  },
  {
    title: "Hybrid Energy",
    description: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-4.jpg",
    icon: <FaWind className="text-white text-xl md:text-2xl" />,
  },
  {
    title: "Renewable Energy",
    description: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-5.jpg",
    icon: <FaBolt className="text-white text-xl md:text-2xl" />,
  },
];

const BestOffer = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-900 mb-10 sm:mb-12">
        Best Offer For Renewable Energy
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {offerData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 sm:h-60 md:h-64 w-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-green-400 p-2 sm:p-3 rounded-full shadow-md">
              {item.icon}
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-b-3xl">
              <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestOffer;
