import { byCountry } from "../../../../../packages/common/src/clinicalTrial/commands/byCountry";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing byCountry file', () => {
  
    test('a clinical trial with matching country should be returned', () => {
      const clinicalTrial = createMockClinicalTrial({country: "FR"});

      expect(byCountry([clinicalTrial], "fr")).toContain(clinicalTrial);
    });

    test('a clinical trial without matching country should be filtered out', () => {
      const clinicalTrial = createMockClinicalTrial({country: "ES"});

      expect(byCountry([clinicalTrial], "fr").length).toBe(0);
    });
});