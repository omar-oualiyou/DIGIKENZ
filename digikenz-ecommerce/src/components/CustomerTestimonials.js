import React from 'react';
import TestimonialCard from './TestimonialCard';

const sampleTestimonials = [
  {
    id: 1,
    name: 'Alice Wonderland',
    role: 'Graphic Designer',
    testimonial: "DigiKENZ has revolutionized how I source digital assets. The quality is top-notch and the prices are unbeatable. My projects have never looked better!",
    avatar: 'https://via.placeholder.com/100?text=AW',
    rating: 5,
  },
  {
    id: 2,
    name: 'Bob The Builder',
    role: 'Web Developer',
    testimonial: "I found the perfect code snippets and templates here. Saved me hours of development time. Highly recommend for any dev looking for quick solutions.",
    avatar: 'https://via.placeholder.com/100?text=BB',
    rating: 5,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'Student',
    testimonial: "As a student on a budget, DigiKENZ is a lifesaver. I get access to premium resources without breaking the bank. The variety is amazing!",
    avatar: 'https://via.placeholder.com/100?text=CB',
    rating: 4,
  },
  {
    id: 4,
    name: 'Diana Prince',
    role: 'Entrepreneur',
    testimonial: "My go-to place for marketing materials and business tools. The platform is easy to use and the customer service is excellent. A real asset for my startup.",
    avatar: 'https://via.placeholder.com/100?text=DP',
    rating: 5,
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-700">
          {sampleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
