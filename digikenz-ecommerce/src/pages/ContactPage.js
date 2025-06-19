import React from 'react';

// Reusable Social Icons (can be moved to a shared components folder later)
const InstagramIcon = () => <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.613C8.708.55 8.317.542 7.105.603c-3.71.18-6.175 2.64-6.355 6.356C.692 8.31.683 8.702.683 12s.009 3.69.067 4.948c.18 3.717 2.646 6.177 6.356 6.357 1.207.06 1.6.068 4.89.068 3.291 0 3.682-.009 4.89-.068 3.71-.18 6.175-2.64 6.355-6.357.058-1.257.067-1.646.067-4.947s-.009-3.69-.067-4.947c-.18-3.717-2.646-6.177-6.356-6.357C15.682.542 15.291.55 12 .55zm0 4.031c-2.318 0-4.209 1.891-4.209 4.209s1.891 4.209 4.209 4.209 4.209-1.891 4.209-4.209S14.318 4.584 12 4.584zm0 6.802c-1.321 0-2.392-1.071-2.392-2.392s1.071-2.392 2.392-2.392 2.392 1.071 2.392 2.392-1.071 2.392-2.392 2.392zm4.802-6.902c-.75 0-1.358.608-1.358 1.358s.608 1.358 1.358 1.358 1.358-.608 1.358-1.358-.608-1.358-1.358-1.358z"/></svg>;
const TikTokIcon = () => <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 0 .17.01.24.02.05.01.1.02.15.03.11.03.21.07.32.12a2.496 2.496 0 011.62 2.48c.02 1.48.03 2.96.02 4.44-.01 1.32-.02 2.63.02 3.95.03.93.22 1.79.81 2.52.48.59.98 1.15 1.42 1.77.1.14.21.28.3.42.07.11.13.22.18.33.06.12.1.24.11.37.01.11.02.23.02.34a2.498 2.498 0 01-2.07 2.55c-1.08.2-2.17.32-3.27.39-.94.06-1.88.07-2.82.02-1.13-.06-2.22-.19-3.31-.4a2.504 2.504 0 01-2.07-2.64c-.02-1.19-.03-2.38-.02-3.57.01-1.43.02-2.86-.02-4.28a2.496 2.496 0 011.6-2.49c.26-.09.52-.14.79-.18.82-.12 1.64-.19 2.47-.22.62-.02 1.23-.02 1.85-.02zm1.63 3.24c-.42.03-.83.06-1.25.09-.07 0-.14.01-.2.01-.22.02-.44.03-.66.05-.9.06-1.73.43-2.24 1.25-.23.37-.36.79-.42 1.23-.05.35-.07.7-.06 1.05.01.37.02.74.05 1.1.03.39.07.77.14 1.15.14.77.49 1.44 1.07 1.94.28.24.59.44.92.59.3.14.62.24.94.3.58.11 1.18.12 1.77.05.6-.06 1.13-.28 1.59-.64.45-.35.79-.79 1.01-1.31.14-.33.23-.68.28-1.03.05-.37.06-.74.06-1.11s-.01-.73-.04-1.09c-.04-.48-.15-.94-.34-1.37-.21-.49-.52-.9-.92-1.22-.28-.23-.59-.4-.92-.51-.27-.09-.55-.14-.83-.16-.28-.02-.56-.03-.84-.03z"/></svg>;
const YouTubeIcon = () => <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const WhatsAppIcon = () => <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.717-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>;


const ContactPage = () => {
  const yourPhoneNumber = "1234567890"; // Replace with actual number

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // For now, just log form data to console
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted (not really):", data);
    alert("Thank you for your message! (This is a demo, form not connected).");
    e.target.reset();
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-3xl">
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-300">
            We're here to help! Reach out to us through any of the channels below.
          </p>
        </header>

        {/* Quick Contact Options */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Chat on WhatsApp</h2>
            <p className="text-gray-400 mb-4">Fastest way to get a response for urgent queries.</p>
            <a
              href={`https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent("Hello DigiKENZ, I have a question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
            >
              <WhatsAppIcon /> Chat Now
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
            <p className="text-gray-400 mb-4">Stay updated with our latest products and offers.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="TikTok"><TikTokIcon /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="YouTube"><YouTubeIcon /></a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" name="name" id="name" required className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" name="email" id="email" required className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea name="message" id="message" rows="4" required className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Optional Google Map Placeholder */}
        {/* <section>
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Location</h2>
          <div className="bg-gray-800 h-64 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-500">[Google Map Placeholder]</p>
          </div>
        </section> */}

      </div>
    </div>
  );
};

export default ContactPage;
