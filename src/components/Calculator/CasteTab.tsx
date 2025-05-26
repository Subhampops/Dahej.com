import React from 'react';
import { casteOptions } from '../../data/calculatorData';
import OptionCard from './OptionCard';

interface CasteTabProps {
  selectedCaste: string;
  onSelect: (id: string) => void;
}

const CasteTab: React.FC<CasteTabProps> = ({ selectedCaste, onSelect }) => {
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Select Your Caste/Community</h3>
      <p className="text-gray-600 mb-6">Social status can impact marriage market value</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {casteOptions.map(option => (
          <OptionCard
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={selectedCaste === option.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Social Reality</h4>
        <p className="text-gray-700">
          While caste should not matter in a modern society, many traditional families still consider 
          it an important factor when arranging marriages.
        </p>
      </div>
    </div>
  );
};

export default CasteTab;