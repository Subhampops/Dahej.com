export interface EducationOption {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface JobOption {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface CasteOption {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface AssetOption {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface LookOption {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface FamilyDemandOption {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface CalculationResults {
  educationAmount: number;
  jobAmount: number;
  casteAmount: number;
  assetsAmount: number;
  looksAmount: number;
  familyDemandsAmount: number;
  totalAmount: number;
}