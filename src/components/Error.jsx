import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-7xl font-bold text-indigo-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! You're lost in space.
      </h2>
      <p className="mb-6 text-gray-300 max-w-md">
        The page you're looking for might have been moved, deleted, or never existed.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-gray-900"
        >
          Go Back
        </button>
      </div>
      <div className="mt-10 w-64 h-64 relative">
        <img
          src="/images/astronaut.png"
          alt="Lost astronaut"
          className="w-full h-full object-contain animate-float"
        />
      </div>
    </div>
  );
};

export default Error;
