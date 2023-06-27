import { extendType, objectType, stringArg, nonNull } from "nexus";
import { fetchOngoingClinicalTrialsBySponsor } from "../../../common/src/clinicalTrial/services/index";
 
export const ClinicalTrial = objectType({
  name: "ClinicalTrial",
  definition(t) {
    t.string("name");
    t.date("start_date");
    t.date("end_date");
    t.string("sponsor");
  },
});

// let's add some new behaviour
export const ClinicalTrialQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("clinicalTrials", {
      type: "ClinicalTrial",
      args: {
        name: nonNull(stringArg()),
      },
      resolve(_, { name }) {
          return fetchOngoingClinicalTrialsBySponsor(name!)
      }
    })
  },
});