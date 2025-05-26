import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-red-800 mb-6">
          Calculate Your Worth in the Marriage Market
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Find out exactly how much dowry you can command based on your education, job, assets and more. Join thousands of users who have discovered their true market value!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button 
            onClick={scrollToCalculator}
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Calculate Now
          </button>
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
            View Success Stories
          </button>
        </div>
        
        <div className="flex justify-center">
          <div className="flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToCalculator}>
            <p className="text-red-700 mb-2">Scroll to discover</p>
            <ArrowDown className="text-red-700" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;