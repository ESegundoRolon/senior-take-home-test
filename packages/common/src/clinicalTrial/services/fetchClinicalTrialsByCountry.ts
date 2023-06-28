import { fetchAll } from "../commands/fetchAll";
import { byCountry } from "../commands/byCountry";
import ClinicalTrialStructure from "../models/clinicalTrial";

export const fetchClinicalTrialsByCountry = (clinicalTrials: Array<ClinicalTrialStructure>, countryCode: string) => {
    return byCountry(clinicalTrials, countryCode)
  }