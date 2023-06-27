import ClinicalTrialStructure from "../models/clinicalTrial";

export const startDateInThePast = 
(clinicalTrials: Array<ClinicalTrialStructure>) =>
clinicalTrials.filter((clinicalTrial: ClinicalTrialStructure)=>{
     return new Date(clinicalTrial.start_date).toLocaleDateString() < new Date().toLocaleDateString() 
 })