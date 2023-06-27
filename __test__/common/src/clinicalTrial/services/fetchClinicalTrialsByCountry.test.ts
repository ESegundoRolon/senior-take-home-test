import { fetchClinicalTrialsByCountry } from "../../../../../packages/common/src/clinicalTrial/services/fetchClinicalTrialsByCountry";

describe('testing fetchClinicalTrialsByCountry file', () => {
      test('clinical trials with upper case matching country should be returned', () => {
        const result = fetchClinicalTrialsByCountry("fr");

        expect(result.length).toBe(2);
      });
  
      test('clinical trials with lower case matching country should be returned', () => {
        const result = fetchClinicalTrialsByCountry("FR");

        expect(result.length).toBe(2);
      });

      test('clinical trials without matching country should return empty results', () => {
        const result = fetchClinicalTrialsByCountry("XX");

        expect(result.length).toBe(0);
      });
});