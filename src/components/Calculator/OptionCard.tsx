import React from 'react';

interface OptionCardProps {
  id: string;
  label: string;
  value: number;
  description: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  id,
  label,
  value,
  description,
  isSelected,
  onSelect
}) => {
  return (
    <div 
      className={`p-4 border rounded-lg cursor-pointer transition-all transform hover:scale-105 ${
        isSelected 
          ? 'border-red-500 bg-red-50 shadow-md' 
          : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
      }`}
      onClick={() => onSelect(id)}
    >
      <h4 className="font-medium text-lg text-gray-800 mb-1">{label}</h4>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-red-700 font-semibold">
        {value === 0 
          ? 'Value: ₹0' 
          : `Value: ₹${(value / 100000).toFixed(1)} Lakh`
        }
      </p>
      
      {isSelected && (
        <div className="mt-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full inline-block">
          Selected
        </div>
      )}
    </div>
  );
};

export default OptionCard;