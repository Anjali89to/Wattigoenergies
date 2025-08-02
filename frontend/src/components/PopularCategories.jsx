import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Radiance Solar Kit",
    image: "/battery.jpg",
    path: "/category/radiance-solar-kit",
  },
  {
    title: "Solar Module",
    image: "/radiance.jpg",
    path: "/category/solar-module",
  },
  {
    title: "Solar Inverter",
    image: "/solar inverter.jpg",
    path: "/category/solar-inverter",
  },
  {
    title: "Lithium ion Battery",
    image: "/solar module.jpg",
    path: "/category/lithium-ion-battery",
  },
];

const PopularCategories = () => {
  return (
    <section className="text-center py-8 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-green-800 mb-6">
        POPULAR CATEGORIES
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-3 sm:px-6 md:px-12">
        {categories.map((cat, index) => (
          <Link
            to={cat.path}
            key={index}
            className="hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-[#f0f0f0] rounded-xl p-3 shadow hover:shadow-lg duration-200">
              <img
                src={cat.image}
                alt={cat.title}
                className="rounded-lg mx-auto mb-2 h-28 sm:h-36 w-full object-cover"
              />
              <h3 className="text-sm sm:text-base font-medium text-gray-800">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
