import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLeaf,
} from "react-icons/fa";
import logo from "../assets/f-logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
           <Link to='/'>
            <div className="flex items-center mb-4">
              <img className="w-12" src={logo} alt="" />
              <h2 className="text-2xl font-bold text-white">Green Plants</h2>
            </div></Link>
            <p className="text-white text-opacity-90 text-center md:text-left mb-4">
              Bringing nature's beauty into your home with our carefully curated
              plant collection.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Tarek5920"
                className="text-white text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/muh.ammadtarek/"
                className="text-white text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/muh.ammadtarek/"
                className="text-white text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white border-opacity-30 pb-2">
              Explore
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="/"
                  className="text-white text-opacity-90 hover:text-opacity-100 hover:underline transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/all-plants"
                  className="text-white text-opacity-90 hover:text-opacity-100 hover:underline transition duration-300"
                >
                  All Plants
                </a>
              </li>
              <li>
                <a
                  href="/Add-Plant"
                  className="text-white text-opacity-90 hover:text-opacity-100 hover:underline transition duration-300"
                >
                  Add Plant
                </a>
              </li>
              <li>
                <a
                  href="/my-plants"
                  className="text-white text-opacity-90 hover:text-opacity-100 hover:underline transition duration-300"
                >
                  My Plants
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white border-opacity-30 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-white text-opacity-90">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-white" />
                <a
                  href="mailto:info@greenplants.com"
                  className="hover:text-opacity-100 hover:underline transition duration-300"
                >
                  muhammadtarek5920@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-white" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-opacity-100 hover:underline transition duration-300"
                >
                  +8801778188448
                </a>
              </div>
              <p className="hover:text-opacity-100 transition duration-300">
                123 Garden Way
              </p>
              <p className="hover:text-opacity-100 transition duration-300">
                Greenville, GT 12345
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white border-opacity-30 pb-2">
              Plant Tips
            </h3>
            <p className="text-white text-opacity-90 text-center md:text-left mb-4">
              Call for plant care tips and exclusive offers!
            </p>
        
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-30 pt-6 text-center text-white text-opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Green Plants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
