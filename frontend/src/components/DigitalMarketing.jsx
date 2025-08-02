import React, { useState } from 'react';

const DigitalMarketing = () => {
  const [showEnrollPage, setShowEnrollPage] = useState(false);

  const handleEnrollClick = () => {
    setShowEnrollPage(true);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 relative">
      {/* If enroll page is visible, show form and payment section */}
      {showEnrollPage ? (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Payment Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#001f3d] mb-6">Choose Your Payment Method</h2>
            <div className="space-y-6">
              {["UPI Payment", "Cash on Delivery", "Credit/Debit Card", "PayPal"].map((option, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <input type="radio" name="payment" id={`payment${index}`} />
                  <label htmlFor={`payment${index}`} className="text-lg text-gray-700">{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enrollment Form */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#001f3d] mb-6">
              Digital Marketing Enrollment
            </h1>
            <form>
              {[
                { label: 'Full Name', type: 'text', id: 'name' },
                { label: 'Email Address', type: 'email', id: 'email' },
                { label: 'Phone Number', type: 'text', id: 'phone' },
              ].map((field, index) => (
                <div className="mb-4" key={index}>
                  <label className="block text-lg text-gray-700" htmlFor={field.id}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="block text-lg text-gray-700" htmlFor="address">Address</label>
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
        // Original course content
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side - Text and Enroll Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#001f3d] mb-6">
              Digital Marketing Course
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Master the art of digital marketing with our comprehensive course. Learn SEO, PPC, social media strategies, email marketing, and more!
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our expert instructors will teach you how to craft successful campaigns that increase brand visibility and drive customer engagement.
            </p>
            <button
              className="bg-[#001f3d] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </button>
          </div>

          {/* Right Side - Course Image */}
          <div className="md:w-1/2">
            <img
              src="digital.jpg"
              alt="Digital Marketing"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      )}

      {/* Certificate Section */}
      <div className="bg-gray-100 py-12 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001f3d] mb-6">
            Get Certified in Digital Marketing!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Upon successful completion of the course, you will receive a certificate to validate your skills and enhance your career.
          </p>
          <div className="flex justify-center">
            <img
              src="certificate.jpg"
              alt="Certificate Example"
              className="w-64 rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700 mt-4">
            This certificate will be a valuable addition to your resume and help you stand out in the competitive field of digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
