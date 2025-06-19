import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => { // Accept full product object and addToCart
  const { id, image, title, shortDescription, price } = product; // Destructure product
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyNowClick = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); // Reset button text after 2 seconds
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 flex flex-col justify-between min-w-[280px] max-w-[300px] w-full flex-shrink-0 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-shadow duration-300">
      {/* Link wrapper for image and title (placeholder) */}
      <a href={`#product-page-placeholder-${id}`} className="block group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4 group-hover:opacity-80 transition-opacity"
        />
        <h3 className="text-lg font-bold text-white mb-2 truncate group-hover:text-cyan-300 transition-colors" title={title}>{title}</h3>
      </a>
      <div>
        <p className="text-sm text-gray-300 mb-3 h-16 overflow-hidden text-ellipsis">
          {shortDescription}
        </p>
        <p className="text-xl font-semibold text-cyan-400 mb-4">{price}</p>
        <button
          onClick={handleBuyNowClick}
          disabled={isAdded} // Disable button briefly after adding
          className={`w-full text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
            isAdded
              ? 'bg-green-500 cursor-not-allowed focus:ring-green-400'
              : 'bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-400'
          }`}
        >
          {isAdded ? 'Added to Cart!' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
