import { endDateInTheFuture } from "../../../../../packages/common/src/clinicalTrial/commands/endDateInTheFuture";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing endDateInTheFuture file', () => {
  
    test('a clinical trial with end_date in the future should be returned', () => {

      const tomorrowsDate =  new Date();
      tomorrowsDate.setDate(tomorrowsDate.getDate() + 1 );
      
      const clinicalTrial = createMockClinicalTrial({end_date: tomorrowsDate});

      expect(endDateInTheFuture([clinicalTrial])).toContain(clinicalTrial);
    });

    test('a clinical trial with end_date not in the future should be filtered out', () => {
      const clinicalTrial = createMockClinicalTrial({end_date: new Date()});

      expect(endDateInTheFuture([clinicalTrial]).length).toBe(0);
    });
});