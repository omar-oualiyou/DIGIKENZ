import React from 'react';

const PrivacyPage = ({ navigateTo }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-3xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">Privacy Policy</h1>
        </header>
        <section className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>Welcome to DigiKENZ ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Support Email].</p>
          <p>This privacy notice describes how we might use your information if you:
            <ul>
              <li>Visit our website at [Your Website URL]</li>
              <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
            </ul>
          In this privacy notice, if we refer to:
            <ul>
              <li>"Website", we are referring to any website of ours that references or links to this policy</li>
              <li>"Services", we are referring to our Website, and other related services, including any sales, marketing, or events</li>
            </ul>
          The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>

          <h2>2. What Information Do We Collect?</h2>
          <p><strong>Personal information you disclose to us:</strong> We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.</p>
          <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: Name and Contact Data (email address, phone number), Payment Information (processed by third-party payment gateways like Stripe, PayPal), and Account Login Data.</p>
          <p><strong>Information automatically collected:</strong> We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.</p>

          <h2>3. How Do We Use Your Information?</h2>
          <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
          <p>We use the information we collect or receive:
            <ul>
              <li>To facilitate account creation and logon process.</li>
              <li>To post testimonials (with your consent).</li>
              <li>Request feedback.</li>
              <li>To enable user-to-user communications (with consent).</li>
              <li>To manage user accounts.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our Services.</li>
              <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
              <li>To respond to legal requests and prevent harm.</li>
              <li>Fulfill and manage your orders.</li>
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support to users.</li>
              <li>To send you marketing and promotional communications (if you opt-in).</li>
            </ul>
          </p>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations.</p>
          <p>More specifically, we may need to process your data or share your personal information in the following situations: Business Transfers, Payment Processors (e.g., Stripe, PayPal), Service Providers.</p>

          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>

          <h2>6. How Do We Keep Your Information Safe?</h2>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.</p>

          <h2>7. What Are Your Privacy Rights?</h2>
          <p>In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below.</p>
          <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.</p>

          <h2>8. Updates To This Notice</h2>
          <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

          <h2>9. How Can You Contact Us About This Notice?</h2>
          <p>If you have questions or comments about this notice, you may email us at [Your Support Email] or by post to: [Your Company Address, if applicable].</p>

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

export default PrivacyPage;
