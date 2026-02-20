import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const KeyFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Affordable Prices",
      description: "We offer competitive pricing on all our digital products, ensuring you get the best value."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Fast Delivery",
      description: "Get instant access to your digital purchases as soon as your order is confirmed."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Trusted Service",
      description: "Our platform is secure and reliable, backed by excellent customer support."
    }
  ];

  return (
    <section className="bg-gray-800 py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-cyan-400 mb-12">
          Why Choose DigiKENZ?
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-stretch gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
