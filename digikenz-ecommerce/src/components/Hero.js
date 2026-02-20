import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl lg:text-6xl font-bold text-cyan-400 mb-8 filter drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] text-center">
        Unlock Digital Deals: Your Gateway to Affordable Excellence
      </h1>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.8)] focus:outline-none focus:ring-4 focus:ring-cyan-300">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
