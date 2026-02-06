"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} BagStore. All rights reserved.
        </p>

        {/* Right side - Your Name */}
        <p className="text-sm mt-2 md:mt-0">
          Designed & Developed by{" "}
          <span className="font-semibold text-blue-400">
            Ali Hasnain
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;