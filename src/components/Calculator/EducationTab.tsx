import React from 'react';
import { educationOptions } from '../../data/calculatorData';
import OptionCard from './OptionCard';

interface EducationTabProps {
  selectedEducation: string;
  onSelect: (id: string) => void;
}

const EducationTab: React.FC<EducationTabProps> = ({ selectedEducation, onSelect }) => {
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Select Your Education Level</h3>
      <p className="text-gray-600 mb-6">Higher education significantly increases your market value!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {educationOptions.map(option => (
          <OptionCard
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={selectedEducation === option.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Did you know?</h4>
        <p className="text-gray-700">
          A study shows that grooms with higher education degrees can command up to 5 times more dowry than those with basic education.
        </p>
      </div>
    </div>
  );
};

export default EducationTab;