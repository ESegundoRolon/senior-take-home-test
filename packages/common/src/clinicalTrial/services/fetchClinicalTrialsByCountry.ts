import { fetchAll } from "../commands/fetchAll";
import { byCountry } from "../commands/byCountry";

export const fetchClinicalTrialsByCountry = (countryCode: string) => {
    const clinicalTrials = fetchAll
    return byCountry(clinicalTrials, countryCode)
  }