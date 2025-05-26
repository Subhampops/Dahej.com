import { 
  EducationOption, 
  JobOption, 
  CasteOption, 
  AssetOption, 
  LookOption, 
  FamilyDemandOption 
} from '../types/calculator';

export const educationOptions: EducationOption[] = [
  {
    id: 'no-degree',
    label: 'No degree',
    value: 0,
    description: 'Basic education only'
  },
  {
    id: 'graduate',
    label: 'Graduate',
    value: 200000,
    description: 'Bachelor\'s degree from any college'
  },
  {
    id: 'postgraduate',
    label: 'Postgraduate',
    value: 500000,
    description: 'Master\'s degree or equivalent'
  },
  {
    id: 'phd-iit-iim',
    label: 'PhD/IIT/IIM',
    value: 1000000,
    description: 'Doctorate or premier institute graduate'
  }
];

export const jobOptions: JobOption[] = [
  {
    id: 'unemployed',
    label: 'Unemployed',
    value: 0,
    description: 'Currently not working'
  },
  {
    id: 'private-low',
    label: 'Private job (< ₹30k/month)',
    value: 100000,
    description: 'Working in private sector with salary less than ₹30,000 per month'
  },
  {
    id: 'government',
    label: 'Government job',
    value: 1000000,
    description: 'Any government position with job security'
  },
  {
    id: 'mnc-high',
    label: 'MNC / High-salary (> ₹1 lakh/month)',
    value: 1500000,
    description: 'Working in multinational company or earning more than ₹1 lakh per month'
  }
];

export const casteOptions: CasteOption[] = [
  {
    id: 'general',
    label: 'General',
    value: 0,
    description: 'General category'
  },
  {
    id: 'sc-st-obc',
    label: 'SC/ST/OBC',
    value: 0,
    description: 'Scheduled Caste/Scheduled Tribe/Other Backward Class'
  },
  {
    id: 'premium',
    label: 'Premium caste',
    value: 200000,
    description: 'As per social bias'
  }
];

export const assetOptions: AssetOption[] = [
  {
    id: 'none',
    label: 'None',
    value: 0,
    description: 'No significant assets'
  },
  {
    id: 'car',
    label: 'Own car',
    value: 200000,
    description: 'Owns a personal vehicle'
  },
  {
    id: 'house',
    label: 'Own house',
    value: 500000,
    description: 'Owns residential property'
  },
  {
    id: 'both',
    label: 'Both car and house',
    value: 1000000,
    description: 'Owns both car and house'
  }
];

export const lookOptions: LookOption[] = [
  {
    id: 'average',
    label: 'Average',
    value: 0,
    description: 'Average appearance'
  },
  {
    id: 'fair-tall',
    label: 'Fair & Tall',
    value: 100000,
    description: 'Fair complexion and above average height'
  },
  {
    id: 'bollywood',
    label: 'Bollywood-level',
    value: 200000,
    description: 'Exceptionally good looking'
  }
];

export const familyDemandOptions: FamilyDemandOption[] = [
  {
    id: 'gold',
    label: 'Gold',
    value: 200000,
    description: 'Jewelry and ornaments'
  },
  {
    id: 'car',
    label: 'Car',
    value: 500000,
    description: 'Four-wheeler vehicle'
  },
  {
    id: 'furniture',
    label: 'Furniture & Appliances',
    value: 100000,
    description: 'Household items and electronics'
  }
];