import { pipe } from "../../functional/pipe";
import ClinicalTrialStructure from "../models/clinicalTrial";
import { endDateInTheFuture } from "./endDateInTheFuture";
import { notCancelled } from "./notCancelled";
import { startDateInThePast } from "./startDateInThePast";

export const ongoing = (data: Array<ClinicalTrialStructure>) => pipe(
    startDateInThePast,
    endDateInTheFuture,
    notCancelled
    )(data)