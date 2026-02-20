import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 'bs1', // Unique IDs for bestsellers
    image: 'https://via.placeholder.com/300x200?text=Digital+Art+Pack',
    title: 'Exclusive Digital Art Pack Vol. 1',
    shortDescription: 'A unique collection of 50 high-resolution digital art pieces for your projects. Commercial license included.',
    price: '$19.99',
    category: 'Art', // Added category for consistency, though not used for filtering here
  },
  {
    id: 'bs2',
    image: 'https://via.placeholder.com/300x200?text=Ebook%3A+Code+Mastery',
    title: 'Ebook: The Art of Code Mastery',
    shortDescription: 'Unlock the secrets to writing elegant and efficient code with this comprehensive guide for developers.',
    price: '$29.99',
    category: 'Courses',
  },
  {
    id: 'bs3',
    image: 'https://via.placeholder.com/300x200?text=Music+Production+Suite',
    title: 'Pro Music Production Suite (Lite)',
    shortDescription: 'Essential tools and samples for aspiring music producers. Create your next hit today!',
    price: '$49.99',
    category: 'Tools',
  },
  {
    id: 'bs4',
    image: 'https://via.placeholder.com/300x200?text=Fitness+Plan+PDF',
    title: '30-Day Fitness Challenge PDF',
    shortDescription: 'A complete 30-day workout and meal plan to kickstart your fitness journey. Results guaranteed.',
    price: '$9.99',
    category: 'Guides',
  },
  {
    id: 'bs5',
    image: 'https://via.placeholder.com/300x200?text=Stock+Video+Bundle',
    title: 'HD Stock Video Bundle - Nature',
    shortDescription: '25 breathtaking HD stock video clips of nature scenes. Perfect for your video projects.',
    price: '$39.99',
    category: 'Video',
  },
];

// Accept addToCart as a prop
const BestSellers = ({ addToCart }) => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Our Best Sellers
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-700">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product} // Pass the whole product object
                addToCart={addToCart} // Pass addToCart function
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
