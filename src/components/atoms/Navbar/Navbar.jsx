import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/logo/Logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="flex justify-center items-center text-white p-4 w-full h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg fixed top-0 left-0 z-20">
        <div className="flex items-center w-full max-w-6xl text-black text-lg font-navbar font-light px-4">
          {/* Clickable Logo */}
          <div className="flex-shrink-0">
            <Link to="/home#home">
              <img src={logo} alt="Logo" className="w-36 h-28 object-contain" />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden ml-auto">
            <button onClick={toggleMenu} className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex ml-10 space-x-8 justify-end items-center flex-grow">
            <Link to="/home#home" className="hover:text-gray-700 py-2">
              Home
            </Link>
            <Link to="/home#portfolio" className="hover:text-gray-700 py-2">
              Portfolio
            </Link>
            <Link to="/home#aboutUs" className="hover:text-gray-700 py-2">
              About
            </Link>
            <Link to="/home#services" className="hover:text-gray-700 py-2">
              Services
            </Link>
            <Link to="/home#contact" className="hover:text-gray-700 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Background Overlay for Vertical Menu with Low Opacity */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"
        />
      )}

      {/* Vertical Menu (Toggles from the Right with Low Opacity) */}
      <div
        className={`${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } fixed top-0 right-0 bg-black bg-opacity-70 w-4/5 h-full z-20 lg:hidden transition-transform duration-300 ease-in-out flex flex-col items-center space-y-6 pt-20`}
      >
        {/* Close Button */}
        <button onClick={closeMenu} className="absolute top-4 left-4 text-white text-3xl">
          &times;
        </button>

        <Link to="/home#home" onClick={closeMenu} className="text-white hover:text-red-600 py-2 text-xl">
          Home
        </Link>
        <Link to="/home#portfolio" onClick={closeMenu} className="text-white hover:text-red-600 py-2 text-xl">
          Portfolio
        </Link>
        <Link to="/home#aboutUs" onClick={closeMenu} className="text-white hover:text-red-600 py-2 text-xl">
          About
        </Link>
        <Link to="/home#services" onClick={closeMenu} className="text-white hover:text-red-600 py-2 text-xl">
          Services
        </Link>
        <Link to="/home#contact" onClick={closeMenu} className="text-white hover:text-red-600 py-2 text-xl">
          Contact
        </Link>
      </div>
    </div>
  );
};
