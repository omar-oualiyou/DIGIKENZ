import React from 'react';

// Placeholder product data - this would eventually come from props or fetched based on ID
const sampleProduct = {
  id: 'sampleProd1',
  name: 'Ultra Premium Digital Suite X',
  image: 'https://via.placeholder.com/800x600?text=Ultra+Premium+Suite', // Larger image
  fullDescription: {
    intro: "Experience the pinnacle of digital excellence with our Ultra Premium Suite. This all-in-one package provides everything you need to elevate your projects and workflow to professional standards.",
    whatsIncluded: [
      "Lifetime access to Pro Software X",
      "Exclusive library of 1000+ digital assets",
      "Advanced AI-powered productivity tools",
      "Priority 24/7 VIP support",
      "Monthly updates with new features and assets"
    ],
    validity: "Lifetime validity for all software components. Subscription items (if any) are clearly marked with their duration.",
    guarantees: [
      "100% genuine licenses and assets",
      "30-day money-back guarantee",
      "Secure and instant digital delivery",
      "99.9% uptime for cloud-based services"
    ]
  },
  price: '$199.99',
  originalPrice: '$299.99', // Optional: For showing a discount
  deliveryTime: 'Instant (Digital Download)',
  deliveryMethod: 'Secure Email & Dashboard Access',
  reviews: [
    { id: 'r1', author: 'Jane Doe', rating: 5, text: 'Absolutely transformed my workflow! The assets are top-quality and the software is incredibly powerful. Worth every penny.' },
    { id: 'r2', author: 'John Smith', rating: 4, text: 'Great suite of tools. Had a small hiccup with installation but support was super quick to help. Very satisfied overall.' },
    { id: 'r3', author: 'Alice Brown', rating: 5, text: 'The best investment I\'ve made for my business. The monthly updates are fantastic and keep adding value.' },
  ],
  faqs: [
    { id: 'f1', question: 'Is this a one-time purchase or a subscription?', answer: 'The core software suite is a one-time purchase with lifetime validity. Some optional add-on services or assets might be subscription-based, which will be clearly indicated.' },
    { id: 'f2', question: 'What kind of support can I expect?', answer: 'This suite comes with priority 24/7 VIP support via chat, email, and phone. We aim to resolve any issues within hours.' },
    { id: 'f3', question: 'Can I use the assets for commercial projects?', answer: 'Yes, all included digital assets come with a full commercial license, allowing you to use them in your client projects and for-profit work.' },
  ],
};

// Helper to render stars (can be imported or defined locally)
const renderStars = (rating) => {
  const numRating = parseInt(rating, 10);
  if (isNaN(numRating) || numRating < 0 || numRating > 5) return '☆☆☆☆☆';
  return '★'.repeat(numRating) + '☆'.repeat(5 - numRating);
};

// Accept addToCart prop, though it might not be fully used without proper product data from App.js
const ProductPage = ({ addToCart }) => {
  const product = sampleProduct; // Use the local sample product for now

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product); // This uses the local sampleProduct
      alert(`${product.name} added to cart!`);
    } else {
      alert('Add to cart functionality not available right now.');
    }
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${product.name} (not implemented yet)`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumbs (optional placeholder) */}
        {/* <nav className="text-sm text-gray-400 mb-4">Home &gt; Shop &gt; {product.name}</nav> */}

        <div className="md:flex md:space-x-8">
          {/* Left Column: Product Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="md:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-3">{product.name}</h1>
            {product.originalPrice && (
              <p className="text-xl text-gray-500 line-through mb-1">{product.originalPrice}</p>
            )}
            <p className="text-4xl lg:text-5xl font-semibold text-white mb-6">{product.price}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Quick Overview:</h3>
              <p className="text-gray-300 leading-relaxed">{product.fullDescription.intro}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Delivery Details:</h3>
              <p className="text-gray-300"><span className="font-semibold">Time:</span> {product.deliveryTime}</p>
              <p className="text-gray-300"><span className="font-semibold">Method:</span> {product.deliveryMethod}</p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleAddToCart}
                className="w-full sm:w-auto flex-grow bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full sm:w-auto flex-grow bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Full Description Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Product Details</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6"> {/* Using prose for basic styling */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">What's Included:</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                {product.fullDescription.whatsIncluded.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Validity:</h3>
              <p>{product.fullDescription.validity}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Our Guarantees:</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                {product.fullDescription.guarantees.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map(review => (
              <div key={review.id} className="bg-gray-800 p-6 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <h4 className="text-lg font-semibold text-white mr-3">{review.author}</h4>
                  <div className="text-yellow-400 text-lg">{renderStars(review.rating)}</div>
                </div>
                <p className="text-gray-300 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {product.faqs.map(faq => (
              <div key={faq.id} className="bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
