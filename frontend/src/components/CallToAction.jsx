import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="bg-[#F3F4F3] rounded-[30px] overflow-hidden px-4 py-8 sm:px-6 sm:py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
      
      {/* Image + Icon */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/cta-image.jpg"
          alt="Solar Technician"
          className="rounded-[30px] w-full h-auto object-cover"
        />

        {/* Phone Icon */}
        <div className="absolute right-4 top-4 md:-right-6 md:top-1/2 md:-translate-y-1/2 bg-[#93FF76] p-3 sm:p-4 rounded-full border-[5px] sm:border-[6px] border-white shadow-lg">
          <FaPhoneAlt className="text-white text-lg sm:text-2xl" />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2708] leading-snug">
          Have Questions? <br className="block sm:hidden" />
          <span className="text-[#93FF76]">Call Us</span> 800-001-658
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-3">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
