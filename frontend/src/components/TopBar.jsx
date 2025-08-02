import React from "react";

const TopBar = () => {
  return (
    <div className="bg-green-900 text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        {/* Email (Top Left on mobile, left on desktop) */}
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <i className="fas fa-envelope"></i>
          <a
            href="mailto:wattigoenergies@gmail.com"
            className="hover:underline"
          >
            info@wattigoenergies.com
          </a>
        </div>

        {/* Phone (Center on desktop, hidden on very small screens) */}
        <div className="flex items-center justify-center gap-2 sm:block hidden">
          <i className="fas fa-phone"></i>
          <a href="tel:+012482482481" className="hover:underline">
            +01 248 248 2481
          </a>
        </div>

        {/* Social Icons (Bottom on mobile, right on desktop) */}
        <div className="flex items-center justify-center sm:justify-end gap-4">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f hover:text-green-400"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter hover:text-green-400"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in hover:text-green-400"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram hover:text-green-400"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
