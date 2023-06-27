
import { ongoing } from "../commands/ongoing";
import { bySponsor } from "../commands/bySponsor";
import { fetchAll } from "../commands/fetchAll";

export const fetchOngoingClinicalTrialsBySponsor = (name: string) => {
    const clinicalTrials = fetchAll
    const trialsBySponsor = bySponsor(clinicalTrials, name);
    return ongoing(trialsBySponsor)
}