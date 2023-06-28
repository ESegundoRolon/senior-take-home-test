import { fetchClinicalTrialsByCountry } from "../../../../../packages/common/src/clinicalTrial/services/fetchClinicalTrialsByCountry";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing fetchClinicalTrialsByCountry file', () => {
      const clinicalTrial = createMockClinicalTrial({country: "FR"});

      test('clinical trials with upper case matching country should be returned', () => {

        const result = fetchClinicalTrialsByCountry([clinicalTrial], "FR");

        expect(result.length).toBe(1);
      });
  
      test('clinical trials with lower case matching country should be returned', () => {

        const result = fetchClinicalTrialsByCountry([clinicalTrial], "fr");

        expect(result.length).toBe(1);
      });

      test('clinical trials without matching country should return empty results', () => {
        const result = fetchClinicalTrialsByCountry([clinicalTrial], "xx");

        expect(result.length).toBe(0);
      });
});