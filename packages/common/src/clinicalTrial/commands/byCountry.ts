import ClinicalTrialStructure from "../models/clinicalTrial";

export const byCountry = (clinicalTrials: Array<ClinicalTrialStructure>, countryCode: string) =>  clinicalTrials.filter((clinicalTrial: ClinicalTrialStructure)=>{
    return clinicalTrial.country.toLowerCase() === countryCode.toLowerCase()
})