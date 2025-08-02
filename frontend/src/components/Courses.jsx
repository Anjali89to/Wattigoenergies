import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#001f3d] mb-12">Our Courses</h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Web Development Course */}
          <div className="bg-[#1d3c6b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-white flex flex-col justify-between">
            <h3 className="text-3xl font-semibold text-center mb-4">Web Development Course</h3>
            <p className="text-lg mb-4 flex-grow">
              Learn modern web development with HTML, CSS, JavaScript, React, Node.js, and more.
            </p>
            <Link to="/web">
              <button className="w-full py-3 bg-white text-[#1d3c6b] text-lg font-bold rounded-md hover:bg-gray-200 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Data Science Course */}
          <div className="bg-[#1d3c6b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-white flex flex-col justify-between">
            <h3 className="text-3xl font-semibold text-center mb-4">Data Science Course</h3>
            <p className="text-lg mb-4 flex-grow">
              Dive deep into data analysis, machine learning, and AI using Python, R, and other tools.
            </p>
            <Link to="/Data">
              <button className="w-full py-3 bg-white text-[#1d3c6b] text-lg font-bold rounded-md hover:bg-gray-200 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Digital Marketing Course */}
          <div className="bg-[#1d3c6b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-white flex flex-col justify-between">
            <h3 className="text-3xl font-semibold text-center mb-4">Digital Marketing Course</h3>
            <p className="text-lg mb-4 flex-grow">
              Master SEO, social media, PPC, email marketing, and analytics for business growth.
            </p>
            <Link to="/DigitalMarketing">
              <button className="w-full py-3 bg-white text-[#1d3c6b] text-lg font-bold rounded-md hover:bg-gray-200 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
