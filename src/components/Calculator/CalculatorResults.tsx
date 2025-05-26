import React from 'react';
import { CalculationResults } from '../../types/calculator';
import { Check, AlertCircle } from 'lucide-react';

interface CalculatorResultsProps {
  results: CalculationResults;
}

const CalculatorResults: React.FC<CalculatorResultsProps> = ({ results }) => {
  const {
    educationAmount,
    jobAmount,
    casteAmount,
    assetsAmount,
    looksAmount,
    familyDemandsAmount,
    totalAmount
  } = results;
  
  const formatAmount = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    } else if (amount > 0) {
      return `₹${amount.toLocaleString()}`;
    } else {
      return '₹0';
    }
  };
  
  const getMarketRating = (total: number) => {
    if (total >= 2500000) return { label: 'Premium', color: 'text-green-600', icon: <Check className="text-green-600" /> };
    if (total >= 1000000) return { label: 'Above Average', color: 'text-blue-600', icon: <Check className="text-blue-600" /> };
    if (total >= 500000) return { label: 'Average', color: 'text-yellow-600', icon: <Check className="text-yellow-600" /> };
    return { label: 'Below Average', color: 'text-red-600', icon: <AlertCircle className="text-red-600" /> };
  };
  
  const marketRating = getMarketRating(totalAmount);
  
  return (
    <div className="py-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-red-800 mb-2">Your Dahej Value</h3>
        <div className="text-4xl font-bold text-red-700 mb-2">
          {formatAmount(totalAmount)}
        </div>
        <div className={`inline-flex items-center px-3 py-1 rounded-full ${marketRating.color.replace('text-', 'bg-').replace('600', '100')} gap-1`}>
          {marketRating.icon}
          <span className={`font-medium ${marketRating.color}`}>{marketRating.label} Market Value</span>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Breakdown</h4>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Education</span>
            <span className="font-medium">{formatAmount(educationAmount)}</span>
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-red-600 h-2 rounded-full" 
              style={{ width: `${(educationAmount / totalAmount) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Job & Salary</span>
            <span className="font-medium">{formatAmount(jobAmount)}</span>
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${(jobAmount / totalAmount) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Caste/Community</span>
            <span className="font-medium">{formatAmount(casteAmount)}</span>
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-yellow-600 h-2 rounded-full" 
              style={{ width: `${(casteAmount / totalAmount) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Assets</span>
            <span className="font-medium">{formatAmount(assetsAmount)}</span>
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-green-600 h-2 rounded-full" 
              style={{ width: `${(assetsAmount / totalAmount) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Looks</span>
            <span className="font-medium">{formatAmount(looksAmount)}</span>
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-purple-600 h-2 rounded-full" 
              style={{ width: `${(looksAmount / totalAmount) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Family Demands</span>
            <span className="font-medium">{formatAmount(familyDemandsAmount)}</span>
          </div>
          
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-orange-600 h-2 rounded-full" 
              style={{ width: `${(familyDemandsAmount / totalAmount) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-red-800 mb-2">What Next?</h4>
        <p className="text-gray-700 mb-4">
          Now that you know your market value, you can use this information to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Share your value with potential matches</li>
          <li>Negotiate better marriage proposals</li>
          <li>Compare your value with friends and family</li>
          <li>Work on improving areas with low scores</li>
        </ul>
        <button className="mt-6 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
          Find Matches Based On Your Value
        </button>
      </div>
    </div>
  );
};

export default CalculatorResults;