import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="relative">
        {/* Outer Glowing Ring */}
        <div className="w-20 h-20 border-4 border-gray-800 rounded-full animate-ping"></div>

        {/* Inner Spinning Ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>

        {/* Center Glowing Dot */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Loader;
