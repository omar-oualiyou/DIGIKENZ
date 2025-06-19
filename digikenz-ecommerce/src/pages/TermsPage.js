import React from 'react';

const TermsPage = ({ navigateTo }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-3xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">Terms & Conditions</h1>
        </header>
        <section className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>Welcome to DigiKENZ ("Company", "we", "our", "us")! These Terms and Conditions ("Terms") govern your use of our website located at [Your Website URL] (together or individually "Service") operated by DigiKENZ.</p>
          <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here [Link to Privacy Policy Page - will be updated once routing is set up].</p>
          <p>Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.</p>
          <p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at [Your Support Email] so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>

          <h2>2. Purchases</h2>
          <p>If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
          <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete. We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.</p>

          <h2>3. Digital Product Delivery</h2>
          <p>All digital products are delivered electronically, typically via email and/or made available for download through your account dashboard on our website. Delivery is considered complete when the digital product has been sent to the email address provided by you or made accessible via your account.</p>
          <p>We aim for instant delivery upon successful payment confirmation. However, delays may occasionally occur due to technical issues or payment processing verification. We are not liable for any loss or damage arising from such delays.</p>

          <h2>4. Refunds</h2>
          <p>Due to the nature of digital products, all sales are generally final. However, we may consider refunds on a case-by-case basis under specific circumstances, such as:
            <ul>
              <li>The product is proven to be defective or not as described.</li>
              <li>You have not downloaded or accessed the product.</li>
              <li>A duplicate order was made in error.</li>
            </ul>
          Please contact our support within [e.g., 7 days] of purchase with your order details to request a refund. We reserve the right to refuse a refund if we determine that our refund policy is being abused.</p>

          <h2>5. Intellectual Property</h2>
          <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of DigiKENZ and its licensors. The Service is protected by copyright, trademark, and other laws of both [Your Country] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DigiKENZ.</p>

          <h2>6. Changes To Service</h2>
          <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>

          <h2>7. Amendments To Terms</h2>
          <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>

          <h2>8. Contact Us</h2>
          <p>Please send your feedback, comments, requests for technical support by email: [Your Support Email] or via our contact page.</p>

          <div className="text-center mt-12">
            <button
              onClick={() => navigateTo('home')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
