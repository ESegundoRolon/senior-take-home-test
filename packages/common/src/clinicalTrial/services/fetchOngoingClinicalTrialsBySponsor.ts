
import { ongoing } from "../commands/ongoing";
import { bySponsor } from "../commands/bySponsor";
import ClinicalTrialStructure from "../models/clinicalTrial";

export const fetchOngoingClinicalTrialsBySponsor = (clinicalTrials: Array<ClinicalTrialStructure>, name: string) => {
    const trialsBySponsor = bySponsor(clinicalTrials, name);
    return ongoing(trialsBySponsor)
}