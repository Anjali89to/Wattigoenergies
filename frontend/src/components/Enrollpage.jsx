import React, { useState } from 'react';

const EnrollPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      {/* Enroll Button */}
      <button 
        onClick={toggleModal} 
        className="bg-[#001f3d] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
      >
        Enroll Now
      </button>

      {/* Modal */}
      {openModal && (
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div 
            className="bg-white p-8 rounded-lg w-10/12 md:w-3/4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Side - Form */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-[#001f3d] mb-6">Enrollment Form</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-lg text-gray-700" htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg text-gray-700" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg text-gray-700" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="text"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg text-gray-700" htmlFor="course">Select Course</label>
                    <select 
                      id="course"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    >
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="data-science">Data Science</option>
                      <option value="web-development">Web Development</option>
                    </select>
                  </div>
                </form>
              </div>

              {/* Right Side - Payment Options */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-[#001f3d] mb-6">Payment Options</h2>
                <div className="space-y-4">
                  <button className="w-full p-4 bg-[#ff9800] text-white rounded-md text-lg hover:bg-[#e68900]">
                    Pay with Cash
                  </button>
                  <button className="w-full p-4 bg-[#4caf50] text-white rounded-md text-lg hover:bg-[#45a049]">
                    Pay with UPI
                  </button>
                  <button className="w-full p-4 bg-[#2196f3] text-white rounded-md text-lg hover:bg-[#1976d2]">
                    Pay with Credit/Debit Card
                  </button>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-6 flex justify-end">
              <button 
                onClick={toggleModal}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollPage;
