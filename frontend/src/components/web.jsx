import React, { useState } from 'react';

const Web = () => {
  const [showEnrollPage, setShowEnrollPage] = useState(false);

  const handleEnrollClick = () => {
    setShowEnrollPage(true);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 relative">
      {/* If enroll page is visible, show the form and payment sections */}
      {showEnrollPage ? (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Payment Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#001f3d] mb-6">Choose Your Payment Method</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" id="upi" />
                <label htmlFor="upi" className="text-lg text-gray-700">UPI Payment</label>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" id="cash" />
                <label htmlFor="cash" className="text-lg text-gray-700">Cash on Delivery</label>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" id="card" />
                <label htmlFor="card" className="text-lg text-gray-700">Credit/Debit Card</label>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" id="paypal" />
                <label htmlFor="paypal" className="text-lg text-gray-700">PayPal</label>
              </div>
            </div>
          </div>

          {/* Right Side - Enrollment Form */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#001f3d] mb-6">
              Web Development Course Enrollment
            </h1>
            <form>
              <div className="mb-4">
                <label className="block text-lg text-gray-700" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-700" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-700" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#001f3d] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#001f3d] mb-6">
              Web Development Course
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Learn how to build modern, responsive websites using HTML, CSS, JavaScript, React, Node.js, and more.
              Master front-end and back-end development, and become a full-stack developer.
            </p>
            <button
              className="bg-[#001f3d] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
              onClick={handleEnrollClick} // Trigger enrollment form and payment section
            >
              Enroll Now
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img
              src="web.jpg"
              alt="Web Development"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      )}

      {/* Certificate Section */}
      <div className="bg-gray-100 py-12 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001f3d] mb-6">
            Get Certified!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Upon successful completion of the course, you will receive a certificate to showcase your skills.
          </p>
          <div className="flex justify-center">
            <img
              src="certificate.jpg" // Replace with the actual certificate image URL
              alt="Certificate Example"
              className="w-64 rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700 mt-4">
            This certificate is a great addition to your resume, helping you stand out to potential employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Web;
