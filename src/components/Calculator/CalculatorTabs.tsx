import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import EducationTab from './EducationTab';
import JobTab from './JobTab';
import CasteTab from './CasteTab';
import AssetsTab from './AssetsTab';
import LooksTab from './LooksTab';
import FamilyDemandsTab from './FamilyDemandsTab';
import CalculatorResults from './CalculatorResults';
import { CalculationResults } from '../../types/calculator';
import { 
  educationOptions, 
  jobOptions, 
  casteOptions, 
  assetOptions, 
  lookOptions, 
  familyDemandOptions 
} from '../../data/calculatorData';

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'job', label: 'Job & Salary' },
  { id: 'caste', label: 'Caste' },
  { id: 'assets', label: 'Assets' },
  { id: 'looks', label: 'Looks' },
  { id: 'family-demands', label: 'Family Demands' },
  { id: 'results', label: 'Results' }
];

const CalculatorTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [selectedEducation, setSelectedEducation] = useState('no-degree');
  const [selectedJob, setSelectedJob] = useState('unemployed');
  const [selectedCaste, setSelectedCaste] = useState('general');
  const [selectedAsset, setSelectedAsset] = useState('none');
  const [selectedLook, setSelectedLook] = useState('average');
  const [selectedDemands, setSelectedDemands] = useState<string[]>([]);
  
  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);
  
  const goToNextTab = () => {
    if (activeTabIndex < tabs.length - 1) {
      setActiveTab(tabs[activeTabIndex + 1].id);
    }
  };
  
  const goToPrevTab = () => {
    if (activeTabIndex > 0) {
      setActiveTab(tabs[activeTabIndex - 1].id);
    }
  };
  
  const onToggleDemand = (id: string) => {
    if (selectedDemands.includes(id)) {
      setSelectedDemands(selectedDemands.filter(demandId => demandId !== id));
    } else {
      setSelectedDemands([...selectedDemands, id]);
    }
  };
  
  const calculateResults = (): CalculationResults => {
    const educationAmount = educationOptions.find(option => option.id === selectedEducation)?.value || 0;
    const jobAmount = jobOptions.find(option => option.id === selectedJob)?.value || 0;
    const casteAmount = casteOptions.find(option => option.id === selectedCaste)?.value || 0;
    const assetsAmount = assetOptions.find(option => option.id === selectedAsset)?.value || 0;
    const looksAmount = lookOptions.find(option => option.id === selectedLook)?.value || 0;
    
    const familyDemandsAmount = selectedDemands.reduce((total, demandId) => {
      const demand = familyDemandOptions.find(option => option.id === demandId);
      return total + (demand?.value || 0);
    }, 0);
    
    const totalAmount = educationAmount + jobAmount + casteAmount + assetsAmount + looksAmount + familyDemandsAmount;
    
    return {
      educationAmount,
      jobAmount,
      casteAmount,
      assetsAmount,
      looksAmount,
      familyDemandsAmount,
      totalAmount
    };
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return <EducationTab selectedEducation={selectedEducation} onSelect={setSelectedEducation} />;
      case 'job':
        return <JobTab selectedJob={selectedJob} onSelect={setSelectedJob} />;
      case 'caste':
        return <CasteTab selectedCaste={selectedCaste} onSelect={setSelectedCaste} />;
      case 'assets':
        return <AssetsTab selectedAsset={selectedAsset} onSelect={setSelectedAsset} />;
      case 'looks':
        return <LooksTab selectedLook={selectedLook} onSelect={setSelectedLook} />;
      case 'family-demands':
        return <FamilyDemandsTab selectedDemands={selectedDemands} onToggleDemand={onToggleDemand} />;
      case 'results':
        return <CalculatorResults results={calculateResults()} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`py-3 px-4 md:px-6 font-medium text-sm md:text-base transition-colors rounded-t-lg mr-1 ${
              activeTab === tab.id
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="hidden md:inline">{tab.label}</span>
            <span className="md:hidden">{index + 1}</span>
          </button>
        ))}
      </div>
      
      {renderTabContent()}
      
      <div className="flex justify-between mt-8">
        <button
          onClick={goToPrevTab}
          disabled={activeTabIndex === 0}
          className={`flex items-center py-2 px-4 rounded-lg ${
            activeTabIndex === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-red-100 text-red-700 hover:bg-red-200'
          }`}
        >
          <ArrowLeft size={16} className="mr-1" />
          Previous
        </button>
        
        {activeTabIndex < tabs.length - 1 ? (
          <button
            onClick={goToNextTab}
            className="flex items-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Next
            <ArrowRight size={16} className="ml-1" />
          </button>
        ) : (
          <button
            onClick={() => window.location.href = "#"}
            className="flex items-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Find Matches
          </button>
        )}
      </div>
    </div>
  );
};

export default CalculatorTabs;