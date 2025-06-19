import React from 'react';

const TestimonialCard = ({ name, role, testimonial, avatar, rating }) => {
  const renderStars = (rate) => {
    const numRating = parseInt(rate, 10);
    if (isNaN(numRating) || numRating < 0 || numRating > 5) {
      return '☆☆☆☆☆'; // Default to empty stars for invalid rating
    }
    return '★'.repeat(numRating) + '☆'.repeat(5 - numRating);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-shadow duration-300 min-w-[300px] max-w-[320px] flex-shrink-0 flex flex-col justify-between">
      <div>
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-500"
          />
        )}
        <h4 className="text-xl font-semibold text-white text-center mb-1">{name}</h4>
        <p className="text-sm text-cyan-400 text-center mb-3">{role}</p>
        <p className="text-gray-300 italic text-center mb-4 text-sm h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          "{testimonial}"
        </p>
      </div>
      <div className="text-yellow-400 text-center text-lg mt-auto">
        {renderStars(rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;
