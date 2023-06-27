import { ongoing } from "../../../../../packages/common/src/clinicalTrial/commands/ongoing";
import { createMockClinicalTrial } from "../../../../factories/clinicalTrial/createMockClinicalTrial";

describe('testing ongoing file', () => {
    const yesterdaysDate =  new Date();
    yesterdaysDate.setDate(yesterdaysDate.getDate() - 1 );
    const tomorrowsDate =  new Date();
    tomorrowsDate.setDate(tomorrowsDate.getDate() + 1 );

    const ongoingClinicalTrial = createMockClinicalTrial({start_date: yesterdaysDate, end_date: tomorrowsDate, canceled: false});
    const canceledClinicalTrial = createMockClinicalTrial({canceled: true});
    const clinicalTrialStartDateToday = createMockClinicalTrial({start_date: new Date()});
    const clinicalTrialEndDateInThePast = createMockClinicalTrial({end_date: yesterdaysDate});

    const clinicalTrials = [ongoingClinicalTrial, canceledClinicalTrial, clinicalTrialStartDateToday, clinicalTrialEndDateInThePast];
  
    test('an ongoing clinical trial should be returned', () => {;
      const expected = [ongoingClinicalTrial];
      
      expect(ongoing(clinicalTrials)).toStrictEqual(expected);
    });
});