import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Thanks to Dahej.Com, I discovered my true market value of ₹25 lakh! Got married within 3 months of registration.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Mumbai',
    rating: 4,
    text: 'The calculator was spot on! As a government employee, my value was correctly assessed at ₹15 lakh. Found a perfect match!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    location: 'Bangalore',
    rating: 5,
    text: 'Being an IIT graduate with an MNC job boosted my value to ₹30 lakh. My in-laws were very impressed with my profile!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
          Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                      size={16}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700">"{testimonial.text}"</p>
                
                <div className="mt-4 flex justify-end">
                  <span className="text-sm font-medium text-red-600">Verified Match</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            View More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;