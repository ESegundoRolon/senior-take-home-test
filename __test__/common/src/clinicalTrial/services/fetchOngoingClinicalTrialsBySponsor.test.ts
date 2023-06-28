import { fetchOngoingClinicalTrialsBySponsor } from "../../../../../packages/common/src/clinicalTrial/services/fetchOngoingClinicalTrialsBySponsor";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing fetchClinicalTrialsByCountry file', () => {
      const yesterdaysDate =  new Date();
      yesterdaysDate.setDate(yesterdaysDate.getDate() - 1 );
      const tomorrowsDate =  new Date();
      tomorrowsDate.setDate(tomorrowsDate.getDate() + 1 );

      const clinicalOngoingTrial = createMockClinicalTrial({sponsor: "Sanofi", start_date: yesterdaysDate, end_date: tomorrowsDate, canceled: false});


      test('clinical trials with exact matching sponsor should be returned', () => {
        const result = fetchOngoingClinicalTrialsBySponsor([clinicalOngoingTrial], "Sanofi");

        expect(result.length).toBe(1);
      });
  
      test('clinical trials without exact matching sponsor should be filtered out', () => {
        const result = fetchOngoingClinicalTrialsBySponsor([clinicalOngoingTrial], "sanofi");

        expect(result.length).toBe(0);
      });

      test('a clinical trial without matching sponsor should return empty results', () => {
        const result = fetchOngoingClinicalTrialsBySponsor([clinicalOngoingTrial], "I do not exists");


        expect(result.length).toBe(0);
      });
});