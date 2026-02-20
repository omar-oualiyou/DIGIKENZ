import React from 'react';

// Simple SVG placeholders - replace with actual SVGs or icon library if available
const InstagramIcon = () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.613C8.708.55 8.317.542 7.105.603c-3.71.18-6.175 2.64-6.355 6.356C.692 8.31.683 8.702.683 12s.009 3.69.067 4.948c.18 3.717 2.646 6.177 6.356 6.357 1.207.06 1.6.068 4.89.068 3.291 0 3.682-.009 4.89-.068 3.71-.18 6.175-2.64 6.355-6.357.058-1.257.067-1.646.067-4.947s-.009-3.69-.067-4.947c-.18-3.717-2.646-6.177-6.356-6.357C15.682.542 15.291.55 12 .55zm0 4.031c-2.318 0-4.209 1.891-4.209 4.209s1.891 4.209 4.209 4.209 4.209-1.891 4.209-4.209S14.318 4.584 12 4.584zm0 6.802c-1.321 0-2.392-1.071-2.392-2.392s1.071-2.392 2.392-2.392 2.392 1.071 2.392 2.392-1.071 2.392-2.392 2.392zm4.802-6.902c-.75 0-1.358.608-1.358 1.358s.608 1.358 1.358 1.358 1.358-.608 1.358-1.358-.608-1.358-1.358-1.358z"/></svg>;
const TikTokIcon = () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 0 .17.01.24.02.05.01.1.02.15.03.11.03.21.07.32.12a2.496 2.496 0 011.62 2.48c.02 1.48.03 2.96.02 4.44-.01 1.32-.02 2.63.02 3.95.03.93.22 1.79.81 2.52.48.59.98 1.15 1.42 1.77.1.14.21.28.3.42.07.11.13.22.18.33.06.12.1.24.11.37.01.11.02.23.02.34a2.498 2.498 0 01-2.07 2.55c-1.08.2-2.17.32-3.27.39-.94.06-1.88.07-2.82.02-1.13-.06-2.22-.19-3.31-.4a2.504 2.504 0 01-2.07-2.64c-.02-1.19-.03-2.38-.02-3.57.01-1.43.02-2.86-.02-4.28a2.496 2.496 0 011.6-2.49c.26-.09.52-.14.79-.18.82-.12 1.64-.19 2.47-.22.62-.02 1.23-.02 1.85-.02zm1.63 3.24c-.42.03-.83.06-1.25.09-.07 0-.14.01-.2.01-.22.02-.44.03-.66.05-.9.06-1.73.43-2.24 1.25-.23.37-.36.79-.42 1.23-.05.35-.07.7-.06 1.05.01.37.02.74.05 1.1.03.39.07.77.14 1.15.14.77.49 1.44 1.07 1.94.28.24.59.44.92.59.3.14.62.24.94.3.58.11 1.18.12 1.77.05.6-.06 1.13-.28 1.59-.64.45-.35.79-.79 1.01-1.31.14-.33.23-.68.28-1.03.05-.37.06-.74.06-1.11s-.01-.73-.04-1.09c-.04-.48-.15-.94-.34-1.37-.21-.49-.52-.9-.92-1.22-.28-.23-.59-.4-.92-.51-.27-.09-.55-.14-.83-.16-.28-.02-.56-.03-.84-.03z"/></svg>;
const YouTubeIcon = () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;

// Accept navigateTo prop
const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"> {/* Changed to 4 columns for more links */}
          {/* Quick Links Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('home')} className="hover:text-cyan-400 transition-colors duration-200">Home</button></li>
              <li><button onClick={() => navigateTo('shop')} className="hover:text-cyan-400 transition-colors duration-200">Shop</button></li>
              <li><button onClick={() => navigateTo('howitworks')} className="hover:text-cyan-400 transition-colors duration-200">How It Works</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-cyan-400 transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-cyan-400 transition-colors duration-200">Contact Us</button></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">We Accept</h4>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-gray-700 text-white px-3 py-1 rounded-md text-xs">PayPal</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-md text-xs">Stripe</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-md text-xs">Visa</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-md text-xs">Mastercard</span>
            </div>
          </div>

          {/* Legal Links Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('terms')} className="hover:text-cyan-400 transition-colors duration-200">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('privacy')} className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </button>
              </li>
              <li>
                {/* Placeholder for Refund Policy, can be made a page later */}
                <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-8 pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} DigiKENZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
