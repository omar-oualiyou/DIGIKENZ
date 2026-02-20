import React from 'react';

const StepCard = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="absolute -top-8 -left-8 bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
          {stepNumber}
        </div>
        <div className="bg-gray-700 p-4 rounded-full inline-block shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorksPage = ({ navigateTo }) => {
  const steps = [
    {
      stepNumber: 1,
      icon: <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>,
      title: "Choose Your Product",
      description: "Browse our diverse catalog of digital goods. Use filters and search to find exactly what you need, from software keys to online courses."
    },
    {
      stepNumber: 2,
      icon: <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>,
      title: "Pay Securely",
      description: "Select your preferred payment method. We offer secure checkout options including PayPal, Stripe, and direct WhatsApp payments for your convenience."
    },
    {
      stepNumber: 3,
      icon: <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M12 12l6.75 4.5M12 12l-6.75 4.5"></path></svg>,
      title: "Receive Instantly",
      description: "Your digital products are delivered immediately after payment confirmation, typically via email and accessible in your DigiKENZ dashboard."
    },
    {
      stepNumber: 4,
      icon: <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A4.996 4.996 0 0112 9.5c-2.21 0-4-1.79-4-4 0-.347.042-.686.121-1.007M14.828 11.172a4.996 4.996 0 015.657 0A4.996 4.996 0 0112 21.5c-2.21 0-4-1.79-4-4 0-.347.042-.686.121-1.007M9.172 14.828a4.996 4.996 0 010-5.657M6.343 17.657l3.536-3.536"></path><path d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path></svg>,
      title: "Get Support",
      description: "Our dedicated support team is available 24/7 via WhatsApp and email to assist you with any questions or issues you might encounter."
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-cyan-400 animate-fadeIn">
          How DigiKENZ Works
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 animate-fadeInUp">
          Getting your desired digital products from DigiKENZ is simple, secure, and super fast! Follow these easy steps to unlock a world of digital possibilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className={`animate-slideIn delay-${index * 150}`}> {/* Staggered animation */}
              <StepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={step.stepNumber}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeIn">
          <button
            onClick={() => navigateTo('shop')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-lg transition-colors duration-300 text-xl shadow-lg hover:shadow-green-500/40 transform hover:scale-105"
          >
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
