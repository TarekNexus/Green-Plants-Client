import React from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.avif";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.avif";
import c6 from "../assets/c6.avif";
import c7 from "../assets/c7.jpeg";
import { Users } from "lucide-react";

const Explore = () => {
  return (
    <section className="w-11/12 mx-auto px-6 py-16  text-center">
      <div className="mb-8">
        <p className="text-green-600 justify-center font-semibold flex items-center gap-2 mb-2">
          <Users className="w-5 h-5" /> Join With Us
        </p>
        <h3 className="text-4xl font-bold uppercase mb-2">Our Community</h3>
        <p className=" max-w-xl mx-auto">
          Join thousands of plant lovers who share tips, styles, and stories
          about their green spaces. Be inspired and connect with nature lovers
          like you!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center mx-auto">
        {/* Large image spans 2 cols and 2 rows on md+ */}
        <div className="md:col-span-2 md:row-span-2 rounded overflow-hidden h-[384px] md:h-[384px]">
          <img
            src={c1}
            alt="Gallery 1"
            className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* The rest of the images */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:col-span-3 gap-4">
          {[c2, c6, c4, c5, c3, c7].map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Gallery ${idx + 2}`}
              className="w-full h-40 sm:h-48 md:h-40 lg:h-48 object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
