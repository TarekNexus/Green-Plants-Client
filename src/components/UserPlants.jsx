import React from 'react';
import { Leaf } from 'lucide-react';
import image from '../assets/be-f.webp'; // Replace with relevant image

const UserPlants = () => {
  return (
    <section className="w-11/12 mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="relative flex-1">
        <img
          src={image}
          alt="Beginner Friendly Plants"
          className="w-full rounded-lg shadow-md object-cover h-[400px]"
        />
        {/* Optional floating badge */}
        <div className="absolute -top-6 left-6 bg-white rounded-full px-4 py-2 shadow flex items-center gap-2">
          <Leaf className="w-5 h-5 text-green-600" />
          <span className="text-sm font-semibold text-green-600">Newbie Pick</span>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="flex-1">
        <p className="text-green-600 font-semibold flex items-center gap-2 mb-2">
          <Leaf className="w-5 h-5" /> Why Start With Us
        </p>
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Beginner-Friendly <br /> Indoor Plants
        </h2>
        <p className="text-gray-700 mb-6">
          Discover a curated selection of low-maintenance houseplants perfect for beginners. These green companions are easy to care for, thrive in various environments, and bring life into any room — no green thumb required!
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Explore Plants
          </a>
          <div>
            <p className="text-sm text-gray-500">Need Help?</p>
            <p className="text-lg font-bold text-gray-900">(123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPlants;
