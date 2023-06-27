import ClinicalTrialStructure from "../models/clinicalTrial";

export const bySponsor = (clinicalTrials: Array<ClinicalTrialStructure>, name: string) => clinicalTrials.filter((clinicalTrial: ClinicalTrialStructure)=>{
    return clinicalTrial.sponsor === name
})