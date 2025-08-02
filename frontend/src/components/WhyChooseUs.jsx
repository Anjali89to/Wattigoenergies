import React from "react";
import { FaSolarPanel, FaAward, FaThumbsUp, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaSolarPanel className="text-4xl sm:text-5xl text-green-400 mb-4" />,
    title: "Efficiency & Power",
    description:
      "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
  {
    icon: <FaAward className="text-4xl sm:text-5xl text-green-400 mb-4" />,
    title: "Trust & Warranty",
    description:
      "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
  {
    icon: <FaThumbsUp className="text-4xl sm:text-5xl text-green-400 mb-4" />,
    title: "High Quality Work",
    description:
      "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
  {
    icon: <FaHeadset className="text-4xl sm:text-5xl text-green-400 mb-4" />,
    title: "24*7 Support",
    description:
      "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f2f4f0] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-10 sm:mb-12">
        <div className="text-green-500 font-bold tracking-widest text-xs sm:text-sm uppercase">
          🔋 Why Choose Us
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
          Providing Solar Energy Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
