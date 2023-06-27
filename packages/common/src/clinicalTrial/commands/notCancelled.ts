import ClinicalTrialStructure from "../models/clinicalTrial";

export const notCancelled = 
(clinicalTrials: Array<ClinicalTrialStructure>) =>
clinicalTrials.filter((clinicalTrial: ClinicalTrialStructure)=>{
     return !clinicalTrial.canceled
 })