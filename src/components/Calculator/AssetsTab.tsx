import React from 'react';
import { assetOptions } from '../../data/calculatorData';
import OptionCard from './OptionCard';

interface AssetsTabProps {
  selectedAsset: string;
  onSelect: (id: string) => void;
}

const AssetsTab: React.FC<AssetsTabProps> = ({ selectedAsset, onSelect }) => {
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Select Your Assets</h3>
      <p className="text-gray-600 mb-6">Property and vehicles significantly boost your market value!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {assetOptions.map(option => (
          <OptionCard
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={selectedAsset === option.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Asset Value</h4>
        <p className="text-gray-700">
          Owning both a house and car puts you in the premium category of marriage prospects, 
          often leading to significantly higher dowry expectations.
        </p>
      </div>
    </div>
  );
};

export default AssetsTab;