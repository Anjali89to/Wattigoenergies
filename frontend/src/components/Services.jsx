import React from "react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[300px] sm:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80')`,
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">Our Services</h1>
        <p className="text-base sm:text-lg opacity-90">
          Clean, Reliable, and Sustainable Energy Solutions
        </p>
      </div>

      {/* Services Grid */}
      <div className="p-6 sm:p-10 bg-gray-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4 sm:mb-6">
          What We Offer
        </h2>
        <p className="text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          From solar panel installation to battery backup systems, we provide end-to-end
          solutions tailored for homes and businesses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Solar Panel Installation",
              desc: "High-efficiency panels for rooftops or open areas to capture the most sunlight.",
              img: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
            },
            {
              title: "Inverter Systems",
              desc: "Smart inverter solutions to convert and manage your solar power effectively.",
              img: "https://cdn-icons-png.flaticon.com/512/2991/2991134.png",
            },
            {
              title: "Battery Storage",
              desc: "Store solar energy for backup power and nighttime use, ensuring 24/7 availability.",
              img: "https://cdn-icons-png.flaticon.com/512/2098/2098402.png",
            },
            {
              title: "System Maintenance",
              desc: "Regular inspections and tune-ups to keep your solar system running efficiently.",
              img: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
            },
            {
              title: "Free Consultation",
              desc: "Expert advice to help you design and implement the right solar solution.",
              img: "https://cdn-icons-png.flaticon.com/512/2702/2702151.png",
            },
            {
              title: "24/7 Monitoring",
              desc: "Real-time system performance tracking and alerts through smart apps.",
              img: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 sm:w-20 mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
