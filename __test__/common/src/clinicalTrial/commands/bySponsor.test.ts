import { bySponsor } from "../../../../../packages/common/src/clinicalTrial/commands/bySponsor";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing bySponsor file', () => {
    
    const clinicalTrial = createMockClinicalTrial({sponsor: "Test"});

    test('a clinical trial with exact matching sponsor should be returned', () => {
      expect(bySponsor([clinicalTrial], "Test")).toContain(clinicalTrial);
    });

    test('a clinical trial without exact matching sponsor should be filtered out', () => {
      expect(bySponsor([clinicalTrial], "test").length).toBe(0);
    });
});