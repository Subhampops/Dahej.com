import React from 'react';
import { familyDemandOptions } from '../../data/calculatorData';

interface FamilyDemandsTabProps {
  selectedDemands: string[];
  onToggleDemand: (id: string) => void;
}

const FamilyDemandsTab: React.FC<FamilyDemandsTabProps> = ({ 
  selectedDemands, 
  onToggleDemand 
}) => {
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Select Family Demands</h3>
      <p className="text-gray-600 mb-6">What are your family's specific requirements? (Select all that apply)</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {familyDemandOptions.map(option => (
          <div 
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedDemands.includes(option.id) 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
            }`}
            onClick={() => onToggleDemand(option.id)}
          >
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                checked={selectedDemands.includes(option.id)}
                onChange={() => onToggleDemand(option.id)}
                id={`demand-${option.id}`}
              />
              <label 
                htmlFor={`demand-${option.id}`}
                className="ml-2 text-lg font-medium text-gray-800"
              >
                {option.label}
              </label>
            </div>
            
            <p className="text-gray-600 ml-7">{option.description}</p>
            <p className="text-red-700 font-semibold mt-2 ml-7">
              Value: ₹{(option.value / 100000).toFixed(1)} Lakh
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Common Demands</h4>
        <p className="text-gray-700">
          Gold jewelry, cars, and household items remain the most common dowry demands, 
          despite anti-dowry laws. These are often disguised as "gifts" to the couple.
        </p>
      </div>
    </div>
  );
};

export default FamilyDemandsTab;