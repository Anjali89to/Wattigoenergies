import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic to send the form data to your API/server
    setSuccessMessage('Your message has been successfully sent!');

    // Optionally, reset the form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Redirect the user to the 'partner' page after 2 seconds (or any page you want)
    setTimeout(() => {
      navigate('/partner'); // Redirects to the Partner page after the message is shown
    }, 2000); // Delay navigation to allow the user to see the success message
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="contactus.jpg" // Replace with your own image link
            alt="Contact Us"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#001f3d] mb-6">Contact Us</h2>
          {successMessage && (
            <div className="mb-4 text-green-600 font-semibold">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-[#001f3d] mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-[#001f3d] mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-[#001f3d] mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Write your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#1d3c6b] text-white font-bold rounded-md hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
