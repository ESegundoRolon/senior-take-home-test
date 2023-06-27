import ClinicalTrialStructure from "../models/clinicalTrial";

export const endDateInTheFuture = (clinicalTrials: Array<ClinicalTrialStructure>) =>
    clinicalTrials.filter((clinicalTrial: ClinicalTrialStructure)=>{
        return new Date(clinicalTrial.end_date) > new Date()
 })