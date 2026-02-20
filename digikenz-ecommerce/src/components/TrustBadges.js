import React from 'react';

const Badge = ({ iconText, label }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-shadow duration-300 min-w-[100px] sm:min-w-[120px]">
      <div className="text-cyan-400 text-3xl mb-2">
        {/* Placeholder for icon, e.g., an actual SVG component or an icon font */}
        {iconText === "SSL" && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
        {iconText === "FAST" && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        {iconText === "SUPPORT" && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 0A4.996 4.996 0 0112 9.5c-2.21 0-4-1.79-4-4 0-.347.042-.686.121-1.007M14.828 11.172a4.996 4.996 0 015.657 0A4.996 4.996 0 0112 21.5c-2.21 0-4-1.79-4-4 0-.347.042-.686.121-1.007M9.172 14.828a4.996 4.996 0 010-5.657M6.343 17.657l3.536-3.536" /><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" /></svg>}
      </div>
      <p className="text-white text-sm font-medium text-center">{label}</p>
    </div>
  );
};

const TrustBadges = () => {
  return (
    <section className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-8">
        <Badge iconText="SSL" label="SSL Secure Checkout" />
        <Badge iconText="FAST" label="Instant Digital Delivery" />
        <Badge iconText="SUPPORT" label="24/7 Customer Support" />
      </div>
    </section>
  );
};

export default TrustBadges;
