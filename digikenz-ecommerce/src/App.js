import React, { useState, Fragment } from 'react';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import BestSellers from './components/BestSellers';
import CustomerTestimonials from './components/CustomerTestimonials';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';         // New import
import PrivacyPage from './pages/PrivacyPage';       // New import

function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'shop', ..., 'terms', 'privacy'

  const addToCart = (product) => {
    setCart(prevCart => {
      console.log('Added to cart:', product);
      alert(`${product.title} added to cart!`);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productIdToRemove) => {
    setCart(prevCart => {
      const indexToRemove = prevCart.findIndex(item => item.id === productIdToRemove);
      if (indexToRemove > -1) {
        const newCart = [...prevCart];
        newCart.splice(indexToRemove, 1);
        console.log('Removed product with ID:', productIdToRemove);
        alert(`Item removed from cart.`);
        return newCart;
      }
      return prevCart;
    });
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // commonPageProps could be used if many pages need same set of props, e.g. navigateTo
  // const commonPageProps = { navigateTo };

  return (
    <Fragment>
      <nav className="bg-gray-900 text-white p-4 flex flex-wrap justify-center items-center space-x-3 sm:space-x-4 sticky top-0 z-40 shadow-md text-xs sm:text-sm">
        <button onClick={() => navigateTo('home')} className={`hover:text-cyan-400 transition-colors pb-1 ${currentPage === 'home' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Home</button>
        <button onClick={() => navigateTo('shop')} className={`hover:text-cyan-400 transition-colors pb-1 ${currentPage === 'shop' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Shop</button>
        <button onClick={() => navigateTo('howitworks')} className={`hover:text-cyan-400 transition-colors pb-1 ${currentPage === 'howitworks' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>How It Works</button>
        <button onClick={() => navigateTo('about')} className={`hover:text-cyan-400 transition-colors pb-1 ${currentPage === 'about' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>About Us</button>
        <button onClick={() => navigateTo('contact')} className={`hover:text-cyan-400 transition-colors pb-1 ${currentPage === 'contact' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Contact</button>
        <button onClick={() => navigateTo('cart')} className={`hover:text-cyan-400 transition-colors pb-1 relative ${currentPage === 'cart' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </nav>

      {currentPage === 'home' && (
        <Fragment>
          <Hero />
          <KeyFeatures />
          <BestSellers addToCart={addToCart} />
          <CustomerTestimonials />
          <TrustBadges />
          <Footer navigateTo={navigateTo} /> {/* Pass navigateTo to Footer */}
        </Fragment>
      )}

      {currentPage === 'shop' && <ShopPage cart={cart} addToCart={addToCart} />}
      {currentPage === 'product' && <ProductPage addToCart={addToCart} product={null} />}
      {currentPage === 'cart' && <CartPage cart={cart} removeFromCart={removeFromCart} navigateTo={navigateTo} />}
      {currentPage === 'thankyou' && <ThankYouPage navigateTo={navigateTo} />}
      {currentPage === 'howitworks' && <HowItWorksPage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutUsPage navigateTo={navigateTo} />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'terms' && <TermsPage navigateTo={navigateTo} />} {/* New Page */}
      {currentPage === 'privacy' && <PrivacyPage navigateTo={navigateTo} />} {/* New Page */}

      <WhatsAppButton />
    </Fragment>
  );
}

export default App;
