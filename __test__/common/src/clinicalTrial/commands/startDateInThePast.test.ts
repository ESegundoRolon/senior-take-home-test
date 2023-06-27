import { startDateInThePast } from "../../../../../packages/common/src/clinicalTrial/commands/startDateInThePast";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing startDateInThePast file', () => {
  
    test('a clinical trial with start_date in the past should be returned', () => {

      const yesterdaysDate =  new Date();
      yesterdaysDate.setDate(yesterdaysDate.getDate() - 1 );
      
      const clinicalTrial = createMockClinicalTrial({start_date: yesterdaysDate});

      expect(startDateInThePast([clinicalTrial])).toContain(clinicalTrial);
    });

    test('a clinical trial with start_date not in the past should be filtered out', () => {
      const clinicalTrial = createMockClinicalTrial({end_date: new Date()});

      expect(startDateInThePast([clinicalTrial]).length).toBe(0);
    });
});