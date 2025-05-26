import React from 'react';
import CalculatorTabs from './CalculatorTabs';

const Calculator: React.FC = () => {
  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            Calculate Your Dahej Value
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Answer a few questions about yourself to determine your exact market value in the marriage market. 
            Our proprietary algorithm calculates the most accurate dowry estimation!
          </p>
        </div>
        
        <CalculatorTabs />
      </div>
    </section>
  );
};

export default Calculator;