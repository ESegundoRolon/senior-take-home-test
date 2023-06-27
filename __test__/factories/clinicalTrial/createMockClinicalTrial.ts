import ClinicalTrialStructure from "../../../packages/common/src/clinicalTrial/models/clinicalTrial";

const defaultClinicalTrial: ClinicalTrialStructure = {
    name: "Olaparib + Sapacitabine in BRCA Mutant Breast Cancer",
    country: "FR",
    start_date: new Date(),
    end_date: new Date(),
    sponsor: "Sanofi",
    canceled: false,
    study_type: "interventional",
    primary_purpose: "treatment",
  }
  
  export const createMockClinicalTrial = (overwrites: Partial<ClinicalTrialStructure> = {}) => ({
    ...defaultClinicalTrial,
    ...overwrites
  });
