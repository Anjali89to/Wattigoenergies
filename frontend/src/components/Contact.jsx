import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div
        className="h-[450px] bg-cover bg-center flex flex-col justify-center items-start px-10"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        <h1 className="text-white text-5xl font-bold mb-2">Contact us</h1>
        <p className="text-white text-lg">
          <span className="opacity-80">Home</span> /{" "}
          <span className="font-semibold">Contact us</span>
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-4">Send Us a Message</h2>
        <p className="text-gray-700 text-center mb-8">
          We'd love to hear from you. Fill out the form below and we’ll get back to you shortly!
        </p>

        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-md">
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your email"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Subject"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Detailed Contact Boxes Section */}
      <div className="p-10 bg-white text-center font-sans">
        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Happy to Answer All Your Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-left">
            <div className="flex items-center mb-4 text-green-600 text-2xl">
              <FaMapMarkerAlt className="mr-3" />
              <h3 className="font-semibold text-xl">Our Addresses:</h3>
            </div>
            <p className="text-gray-700">
              123, Lorem Ipsum, Street no, City, Country 123456
            </p>
          </div>

          {/* Email */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-left">
            <div className="flex items-center mb-4 text-green-600 text-2xl">
              <FaEnvelope className="mr-3" />
              <h3 className="font-semibold text-xl">Emails:</h3>
            </div>
            <p className="text-gray-700">Wattigoenergies@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-left">
            <div className="flex items-center mb-4 text-green-600 text-2xl">
              <FaPhoneAlt className="mr-3" />
              <h3 className="font-semibold text-xl">Phones:</h3>
            </div>
            <p className="text-gray-700">9821625193</p>
          </div>

          {/* Social */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-left">
            <h3 className="flex items-center text-green-600 text-2xl font-semibold mb-4">
              Follow Us:
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-green-600 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-600 text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-green-600 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
