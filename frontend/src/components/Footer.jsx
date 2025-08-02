import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-lime-400">WattigO Energies</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Your trusted partner in sustainable energy solutions. We specialize in high-quality solar panels,
            inverters, and batteries to power your world—cleanly and efficiently.
          </p>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            Let’s build a brighter, greener future together.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We aim to revolutionize energy consumption by making solar power accessible, affordable, and reliable
            for everyone. From residential setups to commercial solutions, we’re committed to reducing carbon
            footprints and promoting environmental responsibility.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-lime-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-lime-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-lime-400 transition">Our Services</a></li>
            <li><a href="#" className="hover:text-lime-400 transition">Why Solar?</a></li>
            <li><a href="#" className="hover:text-lime-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-lime-400 transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} WattigO Energies. All rights reserved. | Designed with care for a sustainable planet.
      </div>
    </footer>
  );
};

export default Footer;
