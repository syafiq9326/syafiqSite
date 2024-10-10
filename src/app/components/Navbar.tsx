import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png" // Placeholder for the logo image
          alt="Logo"
          className="w-20 h-20 rounded-full object-cover"
        />
        <span className="ml-3 font-bold text-xl">SY</span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://medium.com/@syafiq9326/nus-computing-journey-the-transformative-first-two-years-1bf982d2540c"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaMedium size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/syafiqakmal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/syafiq9326"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={30} />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
