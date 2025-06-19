import React from 'react';

// Props: cart, removeFromCart, navigateTo (for "Shop Now" and checkout)
const CartPage = ({ cart, removeFromCart, navigateTo }) => {
  if (!cart || cart.length === 0) {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">Your Shopping Cart is Empty</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button
          onClick={() => navigateTo('shop')} // Assuming navigateTo is passed from App.js
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          Shop Now
        </button>
      </div>
    );
  }

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => {
      // Assuming price is a string like "$19.99"
      const priceValue = parseFloat(item.price.replace('$', ''));
      return sum + priceValue * (item.quantity || 1); // Default quantity to 1 if not present
    }, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-cyan-400">Your Shopping Cart</h1>

        {/* Cart Items Display */}
        <div className="mb-8">
          {cart.map((item) => (
            <div
              key={item.id + (item.cartItemId || '')} // Ensure unique key if items can be duplicated
              className="bg-gray-800 p-4 rounded-lg mb-4 flex flex-col sm:flex-row items-center justify-between"
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-white" title={item.title}>{item.title}</h2>
                  <p className="text-cyan-400 text-md">{item.price}</p>
                  {/* Quantity display (static for now) */}
                  {/* <p className="text-gray-400 text-sm">Qty: {item.quantity || 1}</p> */}
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)} // Assuming removeFromCart takes product ID
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary Area */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
          <div className="flex justify-between mb-3 text-lg">
            <span className="text-gray-300">Subtotal:</span>
            <span className="text-white font-semibold">${calculateSubtotal()}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="coupon" className="block text-gray-300 mb-1">Coupon Code:</label>
            <div className="flex">
              <input
                type="text"
                id="coupon"
                placeholder="Enter coupon code"
                className="flex-grow p-2 rounded-l-md bg-gray-700 text-white border border-gray-600 focus:ring-cyan-500 focus:border-cyan-500"
              />
              <button
                disabled
                className="bg-gray-600 text-gray-400 p-2 rounded-r-md cursor-not-allowed"
              >
                Apply
              </button>
            </div>
          </div>
          {/* Other summary lines like Shipping, Tax can go here */}
        </div>

        {/* Checkout Options */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Proceed to Checkout</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => { alert('Checkout with PayPal not implemented'); navigateTo('thankyou'); }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
            >
              Checkout with PayPal
            </button>
            <button
              onClick={() => { alert('Checkout with Stripe not implemented'); navigateTo('thankyou'); }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
            >
              Checkout with Stripe
            </button>
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent("Hello! I'd like to complete my order from DigiKENZ. My cart subtotal is $" + calculateSubtotal())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full text-center block"
            >
              Pay via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
