import React from 'react';

// Props: navigateTo (for "Continue Shopping")
const ThankYouPage = ({ navigateTo }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <svg className="w-24 h-24 text-green-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Thank You for Your Order!</h1>
      <p className="text-gray-300 mb-4 text-lg max-w-md">
        Your order has been successfully processed. You will receive an email confirmation shortly with your order details and any relevant digital access information.
      </p>
      <p className="text-gray-400 mb-8 text-md max-w-md">
        For digital products, please check your email inbox (and spam folder) for download links or access credentials. If you have any questions, feel free to contact our support.
      </p>
      <button
        onClick={() => navigateTo('shop')} // Assuming navigateTo is passed from App.js
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default ThankYouPage;
