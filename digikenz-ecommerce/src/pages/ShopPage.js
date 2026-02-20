import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

const allProductsData = [ // Renamed to avoid conflict if products prop comes from App.js
  { id: 'sp1', image: 'https://via.placeholder.com/300x200?text=Premium+Account', title: 'Premium Streaming Account', shortDescription: '12-months access to exclusive content.', price: '$49.99', category: 'Accounts' },
  { id: 'sp2', image: 'https://via.placeholder.com/300x200?text=Web+Dev+Course', title: 'Ultimate Web Dev Course', shortDescription: 'Master full-stack development.', price: '$99.99', category: 'Courses' },
  { id: 'sp3', image: 'https://via.placeholder.com/300x200?text=Software+Key', title: 'Pro Software License Key', shortDescription: 'Lifetime key for professional software.', price: '$79.99', category: 'Keys' },
  { id: 'sp4', image: 'https://via.placeholder.com/300x200?text=Design+Tool', title: 'Advanced Design Tool Suite', shortDescription: 'Unlock all premium design features.', price: '$129.99', category: 'Tools' },
  { id: 'sp5', image: 'https://via.placeholder.com/300x200?text=VPN+Subscription', title: 'Secure VPN Subscription (1yr)', shortDescription: 'Browse securely and anonymously.', price: '$39.99', category: 'Accounts' },
  { id: 'sp6', image: 'https://via.placeholder.com/300x200?text=Data+Science+Course', title: 'Data Science Bootcamp', shortDescription: 'From beginner to pro in 6 months.', price: '$149.99', category: 'Courses' },
  { id: 'sp7', image: 'https://via.placeholder.com/300x200?text=OS+License+Key', title: 'Operating System Pro Key', shortDescription: 'Genuine OS Pro license key.', price: '$59.99', category: 'Keys' },
  { id: 'sp8', image: 'https://via.placeholder.com/300x200?text=SEO+Toolkit', title: 'Complete SEO Toolkit', shortDescription: 'Boost your website rankings.', price: '$89.99', category: 'Tools' },
  { id: 'sp9', image: 'https://via.placeholder.com/300x200?text=Cloud+Storage', title: '1TB Cloud Storage Plan', shortDescription: 'Securely store your files online.', price: '$19.99', category: 'Accounts' },
  { id: 'sp10', image: 'https://via.placeholder.com/300x200?text=Language+Learning', title: 'Language Learning Masterclass', shortDescription: 'Become fluent in a new language.', price: '$69.99', category: 'Courses' },
  { id: 'sp11', image: 'https://via.placeholder.com/300x200?text=Antivirus+Key', title: 'Antivirus Security Key (1yr)', shortDescription: 'Protect your devices from threats.', price: '$29.99', category: 'Keys' },
  { id: 'sp12', image: 'https://via.placeholder.com/300x200?text=Productivity+Suite', title: 'Office Productivity Suite', shortDescription: 'All essential office applications.', price: '$119.99', category: 'Tools' },
];

const categories = ["All", "Accounts", "Courses", "Keys", "Tools"];

const ShopPage = ({ cart, addToCart }) => { // Accept cart and addToCart as props
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return allProductsData;
    }
    return allProductsData.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-cyan-400">Explore Our Products</h1>

        <div className="text-right mb-6 text-lg">
          Cart Items: <span className="font-bold text-cyan-400">{cart.length}</span>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors duration-200 mb-2 ${
                activeCategory === category
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-gray-700 hover:bg-cyan-500 text-gray-200 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product} // Pass the whole product object
                addToCart={addToCart} // Pass addToCart function
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
