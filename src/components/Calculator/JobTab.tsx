import React from 'react';
import { jobOptions } from '../../data/calculatorData';
import OptionCard from './OptionCard';

interface JobTabProps {
  selectedJob: string;
  onSelect: (id: string) => void;
}

const JobTab: React.FC<JobTabProps> = ({ selectedJob, onSelect }) => {
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Select Your Job Type & Salary</h3>
      <p className="text-gray-600 mb-6">Government jobs are gold in the marriage market!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobOptions.map(option => (
          <OptionCard
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={selectedJob === option.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Market Insight</h4>
        <p className="text-gray-700">
          Government job holders are in highest demand due to job security and pension benefits. 
          They often receive premium marriage proposals regardless of other factors!
        </p>
      </div>
    </div>
  );
};

export default JobTab;