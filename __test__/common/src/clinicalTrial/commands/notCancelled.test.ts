import { notCancelled } from "../../../../../packages/common/src/clinicalTrial/commands/notCancelled";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing notCancelled file', () => {
  
    test('a not cancelled clinical trial should be returned', () => {
      const clinicalTrial = createMockClinicalTrial({canceled: false});

      expect(notCancelled([clinicalTrial])).toContain(clinicalTrial);
    });

    test('a cancelled clinical trial should be filtered out', () => {
      const clinicalTrial = createMockClinicalTrial({canceled: true});

      expect(notCancelled([clinicalTrial]).length).toBe(0);
    });
});