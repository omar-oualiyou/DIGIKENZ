import React from 'react';

const AboutUsPage = ({ navigateTo }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">About DigiKENZ</h1>
          <p className="text-xl sm:text-2xl text-gray-300">
            Unlock Digital Deals: Your Gateway to Affordable Excellence.
          </p>
        </header>

        <section className="mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center sm:text-left border-b-2 border-cyan-500 pb-3">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed indent-8">
            At DigiKENZ, our mission is simple yet profound: to make essential digital tools, educational resources, and entertainment accessible to everyone, especially the youth. We believe that in today's digital age, access to these resources should not be a luxury but a fundamental right. We strive to bridge the gap by providing legitimate, affordable, and instantly accessible digital products.
          </p>
        </section>

        <section className="mb-12 sm:mb-16 grid md:grid-cols-2 gap-8 items-center animate-slideIn" style={{animationDelay: '200ms'}}>
          <div className="md:order-2">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center sm:text-left border-b-2 border-cyan-500 pb-3">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4 indent-8">
              DigiKENZ was born from a vision to empower individuals, particularly students and young entrepreneurs in regions like the MENA an Africa where access to digital goods can be challenging. Starting from ground zero (0DH), we understood the hurdles of expensive software, limited payment options, and the risks of unofficial sources.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed indent-8">
              Our platform was built to directly address these challenges. We are committed to curating a collection of 100% legitimate products, ensuring secure and diverse payment methods (including local options where possible), and providing instant delivery so you can get started without delay.
            </p>
          </div>
          <div className="md:order-1 flex justify-center">
            {/* Placeholder for Team Image/Graphic */}
            <div className="w-full max-w-sm h-64 bg-gray-800 rounded-lg shadow-xl flex items-center justify-center">
              <svg className="w-24 h-24 text-cyan-500 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013-3c.29 0 .58.046.85.134zM12 12c1.657 0 3 .895 3 2v3h-6v-3c0-1.105 1.343-2 3-2z"></path></svg>
              {/* <p className="text-gray-500 text-lg">Our Team Graphic</p> */}
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 animate-slideIn" style={{animationDelay: '400ms'}}>
          <h2 className="text-3xl font-semibold text-white mb-6 text-center sm:text-left border-b-2 border-cyan-500 pb-3">Your Trust, Our Priority</h2>
          <p className="text-lg text-gray-300 leading-relaxed indent-8">
            We understand that trust is paramount when dealing with digital products. That's why we go the extra mile to ensure every product listed on DigiKENZ is sourced legitimately and functions as described. Our secure delivery systems guarantee you receive your purchase promptly and safely. We are building a community based on reliability and customer satisfaction, and your peace of mind is our top concern.
          </p>
        </section>

        <div className="text-center mt-12 animate-fadeInUp" style={{animationDelay: '600ms'}}>
            <button
                onClick={() => navigateTo('shop')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-10 rounded-lg transition-colors duration-300 text-xl shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105"
            >
                Explore Our Products
            </button>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
