import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import noData from "../assets/nodata.json";
import { AuthContext } from '../Provider/AuthProvider';

const NoData = () => {
     const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-green-900 text-center px-4">
      {/* Animation */}
       <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
        <Lottie animationData={noData} loop={true} />
      </div>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold ">
         Not Data Found
      </h2>

      {/* Subtext */}
      <p className="mb-6 text-green-800 max-w-xs sm:max-w-md">
       This {user.email} dosen't added any plant data yet. 🌱
      </p>
    </div>
  );
};

export default NoData;
