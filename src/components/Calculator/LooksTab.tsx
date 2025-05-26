import React from 'react';
import { lookOptions } from '../../data/calculatorData';
import OptionCard from './OptionCard';

interface LooksTabProps {
  selectedLook: string;
  onSelect: (id: string) => void;
}

const LooksTab: React.FC<LooksTabProps> = ({ selectedLook, onSelect }) => {
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Rate Your Appearance</h3>
      <p className="text-gray-600 mb-6">Fair skin and height are still valued in the marriage market</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lookOptions.map(option => (
          <OptionCard
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={selectedLook === option.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Beauty Premium</h4>
        <p className="text-gray-700">
          Matrimonial ads often explicitly mention "fair and tall" as desirable qualities, 
          leading to a premium in the marriage market.
        </p>
      </div>
    </div>
  );
};

export default LooksTab;