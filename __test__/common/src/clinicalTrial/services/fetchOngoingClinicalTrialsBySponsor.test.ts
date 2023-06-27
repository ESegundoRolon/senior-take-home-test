import { fetchOngoingClinicalTrialsBySponsor } from "../../../../../packages/common/src/clinicalTrial/services/fetchOngoingClinicalTrialsBySponsor";

describe('testing fetchClinicalTrialsByCountry file', () => {
      test('clinical triasl with exact matching sponsor should be returned', () => {
        const result = fetchOngoingClinicalTrialsBySponsor("Sanofi");

        expect(result.length).toBe(2);
      });
  
      test('clinical trias without exact matching sponsor should be filtered out', () => {
        const result = fetchOngoingClinicalTrialsBySponsor("sanofi");

        expect(result.length).toBe(0);
      });

      test('a clinical trial without matching sponsor should return empty results', () => {
        const result = fetchOngoingClinicalTrialsBySponsor("I do not exists");

        expect(result.length).toBe(0);
      });
});